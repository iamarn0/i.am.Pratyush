import { heroShot, shotById } from "../../data/projects"
import Container from "../Container"
import ProjectActions from "../ProjectActions"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"

export default function NeareShowcase({ project }) {
  const home = heroShot(project)
  const mobile = shotById(project, "customer-mobile")
  const customer = shotById(project, "order")

  return (
    <section id="neare" className="scroll-mt-24 bg-[#f4f6f8]" aria-labelledby="neare-title">
      <Container className="py-14 lg:py-20">
        <Reveal>
          <p className="text-sm font-medium text-signal">{project.category}</p>
          <div className="mt-3 grid items-end gap-6 lg:grid-cols-12">
            <h3 id="neare-title" className="text-[clamp(2.6rem,6vw,4.25rem)] leading-[0.9] font-medium tracking-[-0.04em] lg:col-span-7">
              {project.title}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-muted lg:col-span-5">{project.description}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-end gap-4 lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-span-8">
            <ScreenshotFrame image={home} tone="spatial" url={project.liveUrl} />
          </div>
          <div className="flex items-end gap-4 overflow-x-auto pb-1 lg:col-span-4">
            <ScreenshotFrame image={mobile} tone="spatial" />
            <div className="w-[min(78vw,320px)] shrink-0">
              <ScreenshotFrame image={customer} tone="spatial" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-muted">{project.demonstrates}</p>
          <ProjectActions project={project} includeCase notes={false} />
        </div>
      </Container>
    </section>
  )
}
