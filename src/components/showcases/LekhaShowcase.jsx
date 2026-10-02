import { heroShot, shotById } from "../../data/projects"
import Container from "../Container"
import ProjectActions from "../ProjectActions"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"

export default function LekhaShowcase({ project }) {
  const home = heroShot(project)
  const overview = shotById(project, "dashboard")
  const invoice = shotById(project, "detail")

  return (
    <section id="lekha" className="scroll-mt-24 bg-surface" aria-labelledby="lekha-title">
      <Container className="py-14 lg:py-20">
        <Reveal>
          <p className="text-sm font-medium text-[#5c6178]">{project.category}</p>
          <h3 id="lekha-title" className="mt-3 text-[clamp(2.6rem,6vw,4.25rem)] leading-[0.9] font-medium tracking-[-0.04em]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-lg text-xl leading-snug tracking-tight">{project.tagline}</p>
        </Reveal>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScreenshotFrame image={home} url={project.liveUrl} tone="ledger" />
          </div>
          <div className="grid gap-4 lg:col-span-5">
            <ScreenshotFrame image={overview} tone="ledger" />
            <ScreenshotFrame image={invoice} tone="ledger" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[#4c5166]">{project.demonstrates}</p>
          <ProjectActions project={project} includeCase />
        </div>
      </Container>
    </section>
  )
}
