import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { site } from "../data/site"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import Container from "./Container"
import ProfilePhoto from "./ProfilePhoto"

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduced = usePrefersReducedMotion()

  const reveal = (delay, y = 16) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section className="pt-24 pb-12 lg:pt-28 lg:pb-20">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <motion.p {...reveal(0)} className="text-sm font-medium text-muted">
              {site.name}
              <span className="mx-2 text-muted">/</span>
              {site.title}
            </motion.p>
            <motion.h1
              {...reveal(0.08)}
              className="mt-5 max-w-[10.5em] text-[clamp(1.85rem,6.8vw,3.55rem)] leading-[1.05] font-medium tracking-[-0.035em]"
            >
              {site.headline}
            </motion.h1>
            <motion.p {...reveal(0.18)} className="mt-6 max-w-[36ch] text-base leading-relaxed text-muted sm:max-w-xl sm:text-lg">
              {site.support}
            </motion.p>
            <motion.div {...reveal(0.28)} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <a href="#work" className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                View my work
              </a>
              <Link to="/contact" className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                Let&apos;s talk
              </Link>
            </motion.div>
          </div>

          <motion.div {...reveal(0.12, 20)} className="min-w-0 lg:col-span-4 lg:col-start-9">
            <div className="mb-3 flex items-end justify-between gap-4">
              <p className="text-sm text-muted">{site.title}</p>
              <p className="text-sm text-muted">{site.location}</p>
            </div>
            <ProfilePhoto priority className="w-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
