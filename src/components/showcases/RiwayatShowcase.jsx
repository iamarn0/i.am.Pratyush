import { heroShot, shotById } from "../../data/projects"
import Container from "../Container"
import ProjectActions from "../ProjectActions"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"

export default function RiwayatShowcase({ project }) {
  const hero = heroShot(project)
  const menu = shotById(project, "menu")
  const mobile = shotById(project, "menu-mobile")

  return (
    <section id="riwayat" className="scroll-mt-24 bg-[#f3ece4] text-[#241c17]" aria-labelledby="riwayat-title">
      <Container className="py-14 lg:py-20">
        <Reveal>
          <p className="text-sm text-[#6d5c50]">{project.category}</p>
          <h3
            id="riwayat-title"
            className="mt-3 font-serif text-[clamp(2.8rem,6.5vw,4.75rem)] leading-[0.88] tracking-[-0.03em]"
          >
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#3d322b]">{project.description}</p>
        </Reveal>

        <div className="mt-8 grid items-end gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScreenshotFrame image={hero} tone="heritage" url={project.liveUrl} />
          </div>
          <div className="flex items-end gap-4 overflow-x-auto pb-1 lg:col-span-4">
            <ScreenshotFrame image={mobile} tone="heritage" />
            <div className="w-[min(70vw,280px)] shrink-0">
              <ScreenshotFrame image={menu} tone="heritage" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-[#6d5c50]">{project.demonstrates}</p>
          <ProjectActions project={project} includeCase notes={false} />
        </div>
      </Container>
    </section>
  )
}
