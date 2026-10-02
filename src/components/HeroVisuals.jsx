import { Link } from "react-router-dom"
import { getProject, heroShot, shotById } from "../data/projects"
import { cx } from "../lib/cx"
import ProjectImage from "./ProjectImage"

function WindowChrome({ title, subtitle }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-[#f3f2ed] px-3 py-2">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-[#d5d3cb]" />
        <span className="size-1.5 rounded-full bg-[#d5d3cb]" />
        <span className="size-1.5 rounded-full bg-[#d5d3cb]" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium tracking-tight">{title}</p>
        {subtitle ? <p className="truncate text-[10px] text-muted">{subtitle}</p> : null}
      </div>
    </div>
  )
}

function ProjectWindow({ title, subtitle, image, href, tone = "logistics", className = "", priority = false, compact = false }) {
  return (
    <Link
      to={href}
      aria-label={`${title} project`}
      className={cx(
        "block overflow-hidden border border-line bg-surface shadow-[0_12px_40px_-24px_rgba(23,23,23,0.35)] transition-shadow hover:shadow-[0_18px_48px_-28px_rgba(23,23,23,0.45)] focus-visible:outline-offset-4",
        className,
      )}
    >
      <WindowChrome title={title} subtitle={subtitle} />
      <div className={cx("relative overflow-hidden bg-[#eceae6]", compact ? "aspect-[16/7]" : "aspect-[16/10]")}>
        <ProjectImage image={image} tone={tone} priority={priority} fit="cover" />
      </div>
    </Link>
  )
}

export default function HeroVisuals() {
  const rocketry = getProject("rocketrybox")
  const predix = getProject("predix-route")
  const rocketryHero = heroShot(rocketry)
  const rocketrySeller = shotById(rocketry, "seller")
  const predixHero = heroShot(predix)

  return (
    <>
      <div className="mt-10 lg:hidden">
        <ProjectWindow
          title="RocketryBox"
          subtitle="Production logistics"
          image={rocketryHero}
          href="/work/rocketrybox"
          tone="logistics"
          priority
          compact
        />
      </div>

      <div className="relative hidden min-h-[420px] lg:block xl:min-h-[480px]">
        <ProjectWindow
          title="RocketryBox"
          subtitle="Production logistics"
          image={rocketryHero}
          href="/work/rocketrybox"
          tone="logistics"
          priority
          className="absolute top-0 right-0 z-10 w-[86%] rotate-[1.1deg]"
        />
        <ProjectWindow
          title="PredixRoute"
          subtitle="Logistics intelligence"
          image={predixHero}
          href="/work/predix-route"
          tone="analytical"
          className="absolute bottom-0 left-0 z-20 w-[70%] -rotate-[1.8deg]"
        />
        {rocketrySeller?.src ? (
          <ProjectWindow
            title="RocketryBox"
            subtitle="Seller operations"
            image={rocketrySeller}
            href="/work/rocketrybox"
            tone="logistics"
            className="absolute top-[46%] right-[4%] z-30 w-[46%] rotate-[0.4deg]"
          />
        ) : null}
      </div>
    </>
  )
}
