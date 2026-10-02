import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { site } from "../data/site"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import Container from "./Container"
import HeroVisuals from "./HeroVisuals"

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
    <section className="pt-24 pb-14 lg:pt-28 lg:pb-20">
      <Container>
        <div className="grid items-center gap-4 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.p {...reveal(0)} className="text-sm font-medium text-muted">
              {site.name}
              <span className="mx-2 text-muted">/</span>
              {site.title}
              <span className="mx-2 text-muted">/</span>
              {site.location}
            </motion.p>
            <motion.h1
              {...reveal(0.08)}
              className="mt-5 max-w-[14em] text-[clamp(2.625rem,7.2vw,3.55rem)] leading-[1.02] font-medium tracking-[-0.035em] lg:text-[clamp(2.75rem,3.6vw,3.55rem)] lg:leading-[1.05]"
            >
              {site.headline}
            </motion.h1>
            <motion.p
              {...reveal(0.18)}
              className="mt-5 max-w-[36ch] text-[1.125rem] leading-relaxed text-muted sm:max-w-md sm:text-[1.2rem]"
            >
              {site.support}
            </motion.p>
            <motion.div {...reveal(0.28)} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <a href="#work" className="underline decoration-ink/30 underline-offset-4 hover:decoration-accent">
                View my work
              </a>
              <Link to="/contact" className="underline decoration-ink/30 underline-offset-4 hover:decoration-accent">
                Let&apos;s talk
              </Link>
            </motion.div>
          </div>

          <motion.div {...reveal(0.22, 20)} className="lg:col-span-6 xl:col-span-7">
            <HeroVisuals />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
