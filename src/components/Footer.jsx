import { site } from "../data/site"
import Container from "./Container"

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-14 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-medium tracking-tight">Pratyush Mondal</p>
            <p className="mt-3 text-muted">Full-Stack Developer</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              Production systems, products, and the next kinds of software I am learning to build.
            </p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href={`mailto:${site.email}`} aria-label="Email Pratyush Mondal">
              Email
            </a>
            <a href={site.github} target="_blank" rel="noreferrer noopener" aria-label="Pratyush Mondal on GitHub">
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <p className="mt-12 text-sm text-muted">© 2026 Pratyush Mondal</p>
      </Container>
    </footer>
  )
}
