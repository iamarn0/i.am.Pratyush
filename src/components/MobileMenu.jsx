import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { mobileNav, site } from "../data/site"
import { cvUrl } from "../generated/assets"
import GithubIcon from "./GithubIcon"

export default function MobileMenu({ onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const nodes = [...panel.querySelectorAll("a, button")]
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose])

  const linkClass = ({ isActive }) =>
    `block py-2 text-4xl font-semibold tracking-[-0.04em] ${isActive ? "text-ink" : "text-ink/80"}`

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      id="mobile-menu"
      className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-16 items-center justify-between px-5">
        <p className="text-sm font-medium">Pratyush Mondal</p>
        <button
          ref={closeRef}
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center"
          aria-label="Close menu"
          onClick={onClose}
        >
          <X size={22} aria-hidden />
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile">
        {mobileNav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={linkClass} onClick={onClose}>
            {item.label}
          </NavLink>
        ))}
        {cvUrl ? (
          <a href={cvUrl} className="mt-6 text-lg font-medium" onClick={onClose}>
            CV
          </a>
        ) : null}
      </nav>
      <div className="flex items-center gap-6 border-t border-line px-6 py-6 text-sm">
        <a href={`mailto:${site.email}`} className="font-medium">
          Email
        </a>
        <a
          href={site.github}
          className="inline-flex items-center gap-2 font-medium"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon size={16} />
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </motion.div>
  )
}
