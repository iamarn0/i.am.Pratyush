import { Link } from "react-router-dom"

export default function ProjectTimeline({ stages }) {
  return (
    <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
      {stages.map((stage, index) => (
        <li key={stage.title} className="flex min-h-full flex-col bg-bg p-5 sm:p-6">
          <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-5 text-xl font-medium tracking-tight">{stage.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{stage.text}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {stage.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {link.label}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ol>
  )
}
