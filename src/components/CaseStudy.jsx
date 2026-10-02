import { Link } from "react-router-dom"
import { galleryShots, heroShot } from "../data/projects"
import ArchitectureDiagram from "./ArchitectureDiagram"
import VerticalFlow from "./VerticalFlow"
import Container from "./Container"
import PredixDecision from "./PredixDecision"
import ProjectActions from "./ProjectActions"
import ProjectGallery from "./ProjectGallery"
import ProjectHeroVisual from "./ProjectHeroVisual"
import ScreenshotFrame from "./ScreenshotFrame"
import StateMachine from "./StateMachine"
import StackGroups from "./StackGroups"
import TechnicalCards from "./TechnicalCards"

export default function CaseStudy({ project, next }) {
  const hero = heroShot(project)
  const gallery = galleryShots(project)
  const heritage = project.theme === "heritage"
  const nextLabel = next && project.tier === "main" && next.tier === "supporting" ? "Supporting work" : "Next"

  return (
    <article>
      <header className="pt-28 pb-8 lg:pt-36 lg:pb-12">
        <Container>
          <Link to="/work" className="text-sm text-muted underline decoration-transparent underline-offset-4 hover:decoration-muted">
            Work
          </Link>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-accent">{project.statusLabel}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{project.category}</p>
              <h1
                className={
                  heritage
                    ? "mt-3 max-w-full font-serif text-[clamp(2.5rem,8.6vw,6.5rem)] leading-[0.9] tracking-[-0.03em]"
                    : "mt-3 max-w-full text-[clamp(2.35rem,8.2vw,6.5rem)] leading-[0.9] font-medium tracking-[-0.045em]"
                }
              >
                {project.title}
              </h1>
              {project.tagline ? <p className="mt-5 max-w-xl text-xl leading-snug">{project.tagline}</p> : null}
              {project.visualFirst ? null : <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>}
              <div className="mt-8">
                <ProjectActions project={project} notes={false} />
              </div>
            </div>
            {project.role ? (
              <p className="text-sm leading-relaxed text-muted lg:col-span-3 lg:col-start-10">
                <span className="block text-ink">{project.role}</span>
                Case study
              </p>
            ) : (
              <p className="text-sm leading-relaxed text-muted lg:col-span-3 lg:col-start-10">
                {project.tier === "main" ? "Main project" : "Supporting work"}
              </p>
            )}
          </div>
        </Container>
      </header>

      {hero ? (
        <Container className="pb-4">
          <ProjectHeroVisual project={project} image={hero} priority />
        </Container>
      ) : null}

      <Container className="pb-8">
        {(project.study || []).map((block) => (
          <StudyBlock key={block.id} block={block} project={project} gallery={gallery} />
        ))}

        <section className="py-12 lg:py-16" aria-labelledby="see-title">
          <h2 id="see-title" className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-medium tracking-tight">
            Where to see it
          </h2>
          <div className="mt-6">
            <ProjectActions project={project} />
          </div>
        </section>

        {next ? (
          <Link to={`/work/${next.slug}`} className="group flex flex-col gap-3 py-12 lg:py-16">
            <span className="text-sm text-muted">{nextLabel}</span>
            <span className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-medium tracking-tight group-hover:text-accent">
              {next.title}
            </span>
            <span className="max-w-md text-sm text-muted">{next.category}</span>
          </Link>
        ) : null}
      </Container>
    </article>
  )
}

function StudyBlock({ block, project, gallery }) {
  if (block.kind === "gallery" && !gallery.length) return null
  if (block.kind === "system" && !project.system?.length) return null
  if (block.kind === "flow" && !project.signalFlow?.length) return null
  if (block.kind === "feature" && !gallery.length) return null
  if (block.kind === "decision" && project.slug !== "predix-route") return null
  if (block.kind === "architecture" && !project.architecture?.length) return null
  if (block.kind === "capabilities" && !project.capabilities?.length) return null
  if (block.kind === "stack" && !project.stackGroups?.length) return null
  if (block.kind === "machine" && !project.flows) return null
  if (block.kind === "technical" && !project.technicalCards?.length) return null
  if (block.kind === "security" && !project.security?.length) return null
  if (block.kind === "roles" && !project.roles?.length) return null

  return (
    <section id={block.id} aria-labelledby={`${block.id}-title`} className="scroll-mt-28 py-12 lg:py-16">
      <h2 id={`${block.id}-title`} className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-medium tracking-tight">
        {block.title}
      </h2>
      <div className="mt-6 lg:mt-8">
        <BlockBody block={block} project={project} gallery={gallery} />
      </div>
    </section>
  )
}

function BlockBody({ block, project, gallery }) {
  if (block.kind === "prose") {
    return (
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    )
  }

  if (block.kind === "capabilities") {
    return (
      <div>
        {block.intro ? <p className="max-w-2xl leading-relaxed text-muted">{block.intro}</p> : null}
        <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2">
          {project.capabilities.map((item) => (
            <li key={item.title} className="bg-bg p-5 sm:p-6">
              <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (block.kind === "gallery") {
    return (
      <div>
        {project.screensIntro ? <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{project.screensIntro}</p> : null}
        <ProjectGallery images={gallery} tone={project.theme} url={project.liveUrl} />
      </div>
    )
  }

  if (block.kind === "system") {
    return <ArchitectureDiagram steps={project.system} label={block.note || project.systemNote} />
  }

  if (block.kind === "flow") {
    return (
      <div className="max-w-md">
        <VerticalFlow steps={project.signalFlow} note={project.signalNote} />
      </div>
    )
  }

  if (block.kind === "feature") {
    const [primary, ...rest] = gallery
    return (
      <div>
        {project.screensIntro ? <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{project.screensIntro}</p> : null}
        <div className="grid items-start gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScreenshotFrame image={primary} tone={project.theme} priority />
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {rest.slice(0, 2).map((image) => (
              <ScreenshotFrame key={image.id} image={image} tone={project.theme} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (block.kind === "decision") {
    return <PredixDecision />
  }

  if (block.kind === "architecture") {
    return (
      <div className="max-w-md">
        <VerticalFlow steps={project.architecture} note={project.architectureNote} />
      </div>
    )
  }

  if (block.kind === "notes") {
    return (
      <ul className="grid gap-10 md:grid-cols-3">
        {block.items.map((item) => (
          <li key={item.title}>
            <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    )
  }

  if (block.kind === "roles") {
    return (
      <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {project.roles.map((role) => (
          <li key={role} className="bg-surface px-5 py-6 text-lg font-medium">
            {role}
          </li>
        ))}
      </ul>
    )
  }

  if (block.kind === "machine") return <StateMachine flows={project.flows} />
  if (block.kind === "technical") return <TechnicalCards items={project.technicalCards} />

  if (block.kind === "security") {
    return (
      <ul className="grid gap-8 sm:grid-cols-2">
        {project.security.map(([title, text]) => (
          <li key={title}>
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ul>
    )
  }

  if (block.kind === "stack") {
    return <StackGroups groups={project.stackGroups} />
  }

  return null
}
