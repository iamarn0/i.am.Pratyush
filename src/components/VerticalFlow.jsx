import { ArrowDown } from "lucide-react"

export default function VerticalFlow({ steps = [], label = "", note = "" }) {
  if (!steps.length) return null

  return (
    <div>
      {label ? <p className="text-sm font-medium">{label}</p> : null}
      <ol className={label ? "mt-5" : undefined}>
        {steps.map((step, index) => {
          const last = index === steps.length - 1
          return (
            <li key={step}>
              <div className="border border-[#d5deea] bg-white px-4 py-3 text-sm font-medium">{step}</div>
              {last ? null : (
                <div className="flex justify-center py-1.5 text-signal" aria-hidden="true">
                  <ArrowDown size={14} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
      {note ? <p className="mt-4 text-sm leading-relaxed text-muted">{note}</p> : null}
    </div>
  )
}
