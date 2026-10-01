import { ArrowDown, ArrowRight } from "lucide-react"

export default function ArchitectureDiagram({ steps = [], label = "" }) {
  if (!steps.length) return null

  return (
    <div>
      {label ? <p className="max-w-2xl text-sm leading-relaxed text-muted">{label}</p> : null}
      <ol className={label ? "mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center" : "flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center"}>
        {steps.map((step, index) => {
          const last = index === steps.length - 1
          return (
            <li key={step} className="flex flex-col items-start gap-3 md:flex-row md:items-center">
              <span className="border border-line bg-surface px-4 py-3 text-sm font-medium">{step}</span>
              {last ? null : (
                <>
                  <ArrowDown size={14} aria-hidden className="opacity-40 md:hidden" />
                  <ArrowRight size={14} aria-hidden className="hidden opacity-40 md:block" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
