import { projectsByTier } from "../data/projects"
import Container from "./Container"
import LekhaShowcase from "./showcases/LekhaShowcase"
import NeareShowcase from "./showcases/NeareShowcase"
import RiwayatShowcase from "./showcases/RiwayatShowcase"

const showcases = {
  neare: NeareShowcase,
  lekha: LekhaShowcase,
  riwayat: RiwayatShowcase,
}

export default function SupportingWork() {
  return (
    <section id="supporting" className="scroll-mt-24 pt-16 lg:pt-24" aria-labelledby="supporting-title">
      <Container className="pb-6 lg:pb-8">
        <h2 id="supporting-title" className="text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.08] font-medium tracking-tight">
          Supporting Projects
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Projects that strengthened my product and full-stack engineering foundation.
        </p>
      </Container>
      {projectsByTier("supporting").map((project) => {
        const Showcase = showcases[project.slug]
        return <Showcase key={project.slug} project={project} />
      })}
    </section>
  )
}
