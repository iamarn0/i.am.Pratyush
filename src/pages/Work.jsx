import { Link } from "react-router-dom"
import Container from "../components/Container"
import ScreenshotFrame from "../components/ScreenshotFrame"
import Seo from "../components/Seo"
import { heroShot, projectsByTier } from "../data/projects"

export default function Work() {
  const main = projectsByTier("main")
  const supporting = projectsByTier("supporting")

  return (
    <>
      <Seo
        title="Work"
        path="/work"
        description="Selected work by Pratyush Mondal. Rocketry Box, Predix Route, and RoadVision lead. NEARE, LEKHA, and RIWAYAT are supporting products."
      />
      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <Container>
          <h1 className="max-w-[14ch] text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.98] font-medium tracking-tight text-balance">
            Work
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Main projects first. They show how the engineering has moved from products into production systems, machine learning, and computer vision.
          </p>

          <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
            {main.map((project, index) => (
              <WorkFeature key={project.slug} project={project} scale="large" priority={index === 0} />
            ))}
          </div>

          <h2 className="mt-24 text-[clamp(1.85rem,3vw,2.6rem)] leading-tight font-medium tracking-tight lg:mt-32">
            Supporting Projects
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Products that strengthened my full-stack and product engineering foundation.
          </p>
          <div className="mt-10 space-y-12">
            {supporting.map((project) => (
              <WorkFeature key={project.slug} project={project} scale="medium" />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

function WorkFeature({ project, scale, priority = false }) {
  const hero = heroShot(project)
  const large = scale === "large"

  return (
    <article className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
      <div className={large ? "lg:col-span-5" : "lg:col-span-4"}>
        <p className="text-sm font-medium text-accent">{project.statusLabel}</p>
        <h2 className={large ? "mt-3 text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.95] font-medium tracking-tight" : "mt-3 text-3xl font-medium tracking-tight"}>
          <Link to={`/work/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm text-muted">{project.category}</p>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{project.description}</p>
        <Link
          to={`/work/${project.slug}`}
          className="mt-5 inline-flex text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
        >
          Read the case study
        </Link>
      </div>
      <div className={large ? "lg:col-span-7" : "lg:col-span-8"}>
        <Link to={`/work/${project.slug}`} className="block" aria-label={`${project.title} case study`}>
          {project.theme === "vision" ? (
            <ScreenshotFrame image={hero} tone="vision" priority={priority} />
          ) : (
            <ScreenshotFrame image={hero} tone={project.theme} url={project.liveUrl} priority={priority} />
          )}
        </Link>
      </div>
    </article>
  )
}
