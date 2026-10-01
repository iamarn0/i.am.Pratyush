import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0
    let stopped = false
    const started = performance.now()

    const tick = () => {
      if (stopped) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })
        return
      }
      if (performance.now() - started > 2000) return
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => {
      stopped = true
      cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}
