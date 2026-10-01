import { useEffect } from "react"
import { pageTitle, site } from "../data/site"

function upsertMeta(key, value, attribute = "name") {
  if (!value) {
    document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove()
    return
  }
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute("content", value)
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!href) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement("link")
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

export default function Seo({ title, description, path = "/", noIndex = false }) {
  useEffect(() => {
    const fullTitle = pageTitle(title)
    const summary = description || site.description
    document.title = fullTitle
    upsertMeta("description", summary)
    upsertMeta("robots", noIndex ? "noindex, follow" : "index, follow")
    upsertMeta("og:title", fullTitle, "property")
    upsertMeta("og:description", summary, "property")
    upsertMeta("og:type", "website", "property")
    upsertMeta("og:locale", "en_IN", "property")
    upsertMeta("twitter:card", "summary")
    upsertMeta("twitter:title", fullTitle)
    upsertMeta("twitter:description", summary)

    const canonical = site.url ? `${site.url}${path === "/" ? "/" : path}` : ""
    upsertLink("canonical", canonical)
    upsertMeta("og:url", canonical, "property")

    if (site.url && site.ogImage) {
      const image = site.ogImage.startsWith("http") ? site.ogImage : `${site.url}${site.ogImage}`
      upsertMeta("og:image", image, "property")
      upsertMeta("twitter:image", image)
    } else {
      upsertMeta("og:image", "", "property")
      upsertMeta("twitter:image", "")
    }

    if (site.url) {
      const script = document.getElementById("ld-json")
      if (script) {
        const data = JSON.parse(script.textContent)
        for (const node of data["@graph"]) {
          if (node["@type"] === "WebSite" || node["@type"] === "Person") node.url = site.url
        }
        script.textContent = JSON.stringify(data)
      }
    }
  }, [title, description, path, noIndex])

  return null
}
