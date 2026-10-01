import { evolution } from "../data/content"
import Container from "./Container"
import ProjectTimeline from "./ProjectTimeline"
import Reveal from "./Reveal"

export default function EvolutionSection() {
  return (
    <section className="py-20 lg:py-32" aria-labelledby="evolution-title">
      <Container>
        <Reveal>
          <h2 id="evolution-title" className="max-w-[16ch] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-medium tracking-tight text-balance">
            How the work evolved
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            A conceptual progression, from products to intelligent systems. It is not a dated timeline.
          </p>
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <ProjectTimeline stages={evolution} />
        </div>
      </Container>
    </section>
  )
}
