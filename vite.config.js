import fs from "node:fs"
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const cvFile = path.resolve("public/cv.pdf")
const shotsRoot = path.resolve("public/images/projects")
const assetsModule = path.resolve("src/generated/assets.js")
const shotRank = { avif: 0, webp: 1, png: 2, jpg: 3, jpeg: 3 }

function collectShots() {
  const found = {}
  if (!fs.existsSync(shotsRoot)) return found
  for (const folder of fs.readdirSync(shotsRoot)) {
    const dir = path.join(shotsRoot, folder)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const file of fs.readdirSync(dir)) {
      const match = file.match(/\.(avif|webp|png|jpe?g)$/i)
      if (!match) continue
      const ext = match[1].toLowerCase()
      const base = file.slice(0, -match[0].length)
      const key = `${folder}/${base}`
      const current = found[key]
      const currentExt = current ? current.split(".").pop().toLowerCase() : ""
      if (!current || shotRank[ext] < shotRank[currentExt]) {
        found[key] = `/images/projects/${folder}/${file}`
      }
    }
  }
  return found
}

function syncPublicAssets() {
  const shots = collectShots()
  const contents = `// Rewritten by the Vite config when public assets are added or removed.
export const cvUrl = ${fs.existsSync(cvFile) ? '"/cv.pdf"' : "null"}
export const projectShots = ${JSON.stringify(shots, null, 2)}
`
  fs.mkdirSync(path.dirname(assetsModule), { recursive: true })
  const current = fs.existsSync(assetsModule) ? fs.readFileSync(assetsModule, "utf8") : ""
  if (current !== contents) fs.writeFileSync(assetsModule, contents)
}

function publicAssetsPlugin() {
  return {
    name: "public-assets",
    config() {
      syncPublicAssets()
    },
    configureServer(server) {
      fs.mkdirSync(path.resolve("public/images"), { recursive: true })
      const watch = (file) => {
        const resolved = path.resolve(file)
        if (resolved === cvFile || resolved.startsWith(shotsRoot)) {
          syncPublicAssets()
        }
      }
      server.watcher.add(path.resolve("public"))
      server.watcher.on("add", watch)
      server.watcher.on("unlink", watch)
    },
  }
}

function spaFallbackPlugin() {
  return {
    name: "spa-fallback",
    apply: "build",
    closeBundle() {
      const index = path.resolve("dist/index.html")
      if (fs.existsSync(index)) fs.copyFileSync(index, path.resolve("dist/404.html"))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), publicAssetsPlugin(), spaFallbackPlugin()],
  server: {
    watch: {
      ignored: ["**/.tmp-chrome/**", "**/.tmp-shots/**"],
    },
  },
})
