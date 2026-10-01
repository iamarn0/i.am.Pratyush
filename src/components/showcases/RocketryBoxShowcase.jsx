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
    <section id="rocketrybox" className="scroll-mt-24 bg-white" aria-labelledby="rocketrybox-title">
      <Container className="py-16 lg:py-28">
        <Reveal>
          <p className="text-sm font-medium text-accent">
            <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-muted">/</span>
            {project.statusLabel}
          </p>
          <h3
            id="rocketrybox-title"
            className="mt-4 max-w-full text-[clamp(2.35rem,8.6vw,7.5rem)] leading-[0.84] font-medium tracking-[-0.05em] break-words"
          >
            {project.title}
          </h3>
          <p className="mt-4 text-xl tracking-tight sm:text-2xl">{project.category}</p>
        </Reveal>
        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted">{project.description}</p>
            <div className="mt-8">
              <ProjectActions project={project} includeCase notes={false} />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ScreenshotFrame image={hero} tone="logistics" url={project.liveUrl} priority />
          </div>
        </div>

        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {project.capabilities.slice(0, 6).map((item) => (
            <li key={item.title} className="bg-white px-5 py-5">
              <p className="text-base font-medium tracking-tight">{item.title}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 lg:mt-10">
          <ProjectGallery images={rest} tone="logistics" />
        </div>
        <p className="mt-8 text-sm text-muted">{project.bridge}</p>
      </Container>
    </section>
  )
}
