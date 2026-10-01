import { useState } from "react"
import { createPortal } from "react-dom"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { nav, site } from "../data/site"
import { cvUrl } from "../generated/assets"
import { useScrolled } from "../hooks/useScrolled"
import { cx } from "../lib/cx"
import Container from "./Container"
import GithubIcon from "./GithubIcon"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const itemClass = ({ isActive }) =>
    cx(
      "text-sm font-medium transition-colors",
      isActive ? "text-ink" : "text-muted hover:text-ink",
    )

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="text-sm font-medium" aria-label="Pratyush Mondal, home">
          Pratyush Mondal
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={itemClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {cvUrl ? (
            <a href={cvUrl} className="hidden px-3 text-sm font-medium lg:inline-flex">
              CV
            </a>
          ) : null}
          <a
            href={site.github}
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label="GitHub, opens in a new tab"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} aria-hidden />
          </button>
        </div>
      </Container>
      {createPortal(
        <AnimatePresence>
          {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  )
}
