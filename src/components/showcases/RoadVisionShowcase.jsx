import { heroShot, shotById } from "../../data/projects"
import ArchitectureDiagram from "../ArchitectureDiagram"
import Container from "../Container"
import ProjectActions from "../ProjectActions"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"

export default function RoadVisionShowcase({ project, index = 2 }) {
  const hero = heroShot(project)
  const detection = shotById(project, "detection")

  return (
    <section id="roadvision" className="scroll-mt-24 bg-[#f6f6f4]" aria-labelledby="roadvision-title">
      <Container className="py-16 lg:py-28">
        <Reveal>
          <p className="inline-flex border border-accent px-2.5 py-1 text-sm font-medium text-accent">
            <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            {project.statusLabel}
          </p>
          <h3
            id="roadvision-title"
            className="mt-4 max-w-full text-[clamp(2.15rem,5vw,4.25rem)] leading-[0.95] font-medium tracking-[-0.04em]"
          >
            {project.title}
          </h3>
          <p className="mt-4 text-xl tracking-tight">Number-plate capture</p>
        </Reveal>
        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted">{project.description}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              The public site is live. Accuracy and deployment scale are not claimed here.
            </p>
            <div className="mt-8">
              <ProjectActions project={project} includeCase notes={false} />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ScreenshotFrame image={hero} tone="vision" url={project.liveUrl} priority />
          </div>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium">Current direction</p>
            <div className="mt-5">
              <ArchitectureDiagram steps={project.system} />
            </div>
            <p className="mt-6 text-sm text-muted">{project.bridge}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ScreenshotFrame image={detection} tone="vision" />
          </div>
        </div>
      </Container>
    </section>
  )
}
