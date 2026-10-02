import { Link } from "react-router-dom"
import { ArrowDown } from "lucide-react"

export default function ProjectTimeline({ stages }) {
  return (
    <ol className="relative">
      {stages.map((stage, index) => {
        const last = index === stages.length - 1
        return (
          <li key={stage.title} className="relative grid gap-4 border-t border-line py-8 sm:grid-cols-12 sm:gap-8 lg:py-10">
            <div className="sm:col-span-3">
              <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight lg:text-2xl">{stage.title}</h3>
            </div>
            <div className="sm:col-span-6">
              <p className="max-w-md text-base leading-relaxed text-muted">{stage.text}</p>
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <p className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                {stage.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </p>
            </div>
            {last ? null : (
              <span className="absolute -bottom-2 left-0 text-muted opacity-40 sm:hidden" aria-hidden>
                <ArrowDown size={14} />
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
