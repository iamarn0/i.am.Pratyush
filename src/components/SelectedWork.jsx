import { projectsByTier } from "../data/projects"
import Container from "./Container"
import PredixRouteShowcase from "./showcases/PredixRouteShowcase"
import RoadVisionShowcase from "./showcases/RoadVisionShowcase"
import RocketryBoxShowcase from "./showcases/RocketryBoxShowcase"

const showcases = {
  rocketrybox: RocketryBoxShowcase,
  "predix-route": PredixRouteShowcase,
  roadvision: RoadVisionShowcase,
}

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-title">
      <Container className="pt-8 pb-6 lg:pt-16 lg:pb-8">
        <h2 id="work-title" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-tight">
          Main Projects
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Systems that represent the direction I&apos;m building toward.
        </p>
      </Container>
      {projectsByTier("main").map((project, index) => {
        const Showcase = showcases[project.slug]
        return <Showcase key={project.slug} project={project} index={index} />
      })}
    </section>
  )
}
