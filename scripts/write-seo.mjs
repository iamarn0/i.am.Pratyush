import fs from "node:fs"
import path from "node:path"

const routes = [
  "/",
  "/work",
  "/work/rocketrybox",
  "/work/predix-route",
  "/work/roadvision",
  "/work/neare",
  "/work/lekha",
  "/work/riwayat",
  "/about",
  "/contact",
]

function readEnvFile() {
  const file = path.resolve(".env")
  if (!fs.existsSync(file)) return {}
  const values = {}
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const index = trimmed.indexOf("=")
    if (index === -1) continue
    const key = trimmed.slice(0, index).trim()
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "")
    values[key] = value
  }
  return values
}

function origin() {
  const raw = (process.env.VITE_SITE_URL || readEnvFile().VITE_SITE_URL || "").trim().replace(/\/$/, "")
  if (!raw) return ""
  try {
    const url = new URL(raw)
    if (url.protocol !== "http:" && url.protocol !== "https:") return ""
    return url.origin
  } catch {
    console.warn("VITE_SITE_URL is not a valid absolute URL. Sitemap locations were left empty.")
    return ""
  }
}

const site = origin()
const today = new Date().toISOString().slice(0, 10)
const publicDir = path.resolve("public")
fs.mkdirSync(publicDir, { recursive: true })

const robots = site
  ? `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`
  : `User-agent: *\nAllow: /\n`

const urlEntries = site
  ? routes
      .map(
        (route) =>
          `  <url>\n    <loc>${site}${route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
      )
      .join("\n")
  : ""

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

fs.writeFileSync(path.join(publicDir, "robots.txt"), robots)
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap)

if (!site) {
  console.warn("Set VITE_SITE_URL before deploying so canonical URLs and sitemap.xml use your domain.")
}
