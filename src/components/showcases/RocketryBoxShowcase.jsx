import { heroShot, galleryShots } from "../../data/projects"
import Container from "../Container"
import ProjectActions from "../ProjectActions"
import ProjectGallery from "../ProjectGallery"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"

export default function RocketryBoxShowcase({ project, index = 0 }) {
  const hero = heroShot(project)
  const rest = galleryShots(project).slice(0, 3)

  return (
    <section id="rocketrybox" className="scroll-mt-24 border-y border-line bg-surface" aria-labelledby="rocketrybox-title">
      <Container className="py-16 lg:py-28">
        <Reveal>
          <p className="text-sm font-medium text-accent">
            <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-muted">/</span>
            {project.statusLabel}
          </p>
          <h3
            id="rocketrybox-title"
            className="mt-4 max-w-full text-[clamp(2.15rem,5vw,4.25rem)] leading-[0.95] font-medium tracking-[-0.04em]"
          >
            {project.title}
          </h3>
          <p className="mt-4 text-xl tracking-tight sm:text-2xl">{project.category}</p>
        </Reveal>

        <div className="mt-8 lg:mt-10">
          <ScreenshotFrame image={hero} tone="logistics" url={project.liveUrl} priority />
        </div>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted lg:text-lg">{project.description}</p>
            <div className="mt-8">
              <ProjectActions project={project} includeCase notes={false} />
            </div>
            <p className="mt-8 text-sm text-muted">{project.bridge}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label-meta text-muted">Product surfaces</p>
            <ul className="mt-5 space-y-3">
              {project.capabilities.slice(0, 6).map((item) => (
                <li key={item.title} className="border-b border-line pb-3 text-base font-medium tracking-tight">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <ProjectGallery images={rest} tone="logistics" />
        </div>
      </Container>
    </section>
  )
}
