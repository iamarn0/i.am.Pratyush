import { galleryShots, heroShot } from "../../data/projects"
import ArchitectureDiagram from "../ArchitectureDiagram"
import Container from "../Container"
import PredixDecision from "../PredixDecision"
import ProjectActions from "../ProjectActions"
import ProjectGallery from "../ProjectGallery"
import Reveal from "../Reveal"
import ScreenshotFrame from "../ScreenshotFrame"
import StackGroups from "../StackGroups"

export default function PredixRouteShowcase({ project, index = 1 }) {
  const hero = heroShot(project)
  const gallery = galleryShots(project)

  return (
    <section id="predix-route" className="scroll-mt-24 bg-[#eef1f7]" aria-labelledby="predix-title">
      <Container className="py-16 lg:py-28">
        <Reveal>
          <p className="text-sm font-medium text-signal">
            <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-[#9aabc4]">/</span>
            {project.statusLabel}
          </p>
          <h3
            id="predix-title"
            className="mt-4 max-w-full text-[clamp(2.15rem,5vw,4.25rem)] leading-[0.95] font-medium tracking-[-0.04em]"
          >
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-xl tracking-tight sm:text-2xl">{project.tagline}</p>
        </Reveal>

        <div className="mt-10 lg:mt-12">
          <ScreenshotFrame image={hero} tone="analytical" priority />
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1e3a5f]">
          PredixRoute turns shipment, address, pincode and courier signals into actionable logistics intelligence.
          Core capability: RTO prediction.
        </p>

        {gallery.length ? (
          <div className="mt-10 lg:mt-12">
            <ProjectGallery images={gallery} tone="analytical" />
          </div>
        ) : null}

        <div className="mt-12 border-t border-[#d5deea] pt-10 lg:mt-16">
          <p className="label-meta text-signal">Product intelligence</p>
          <div className="mt-6">
            <PredixDecision />
          </div>
        </div>

        <div className="mt-12 border-t border-[#d5deea] pt-10 lg:mt-16">
          <p className="label-meta text-signal">Architecture</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#3d5270]">{project.architectureNote}</p>
          <div className="mt-6">
            <ArchitectureDiagram steps={project.architecture} orientation="vertical" />
          </div>
          <div className="mt-10">
            <StackGroups groups={project.stackGroups} accent="signal" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-[#3d5270]">{project.bridge}</p>
          <ProjectActions project={project} includeCase notes={false} />
        </div>
      </Container>
    </section>
  )
}
