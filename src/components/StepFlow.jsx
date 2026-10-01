import { ArrowDown, ArrowRight } from "lucide-react"
import { cx } from "../lib/cx"

export default function StepFlow({ steps, direction = "horizontal", size = "sm", className = "" }) {
  const vertical = direction === "vertical"
  const label = size === "lg" ? "text-lg font-medium tracking-[0.14em] uppercase sm:text-xl" : "text-sm font-medium"

  return (
    <ol className={cx(vertical ? "flex flex-col" : "flex flex-col md:flex-row md:flex-wrap md:items-center", className)}>
      {steps.map((step, index) => {
        const last = index === steps.length - 1
        return (
          <li key={step} className={cx("flex", vertical ? "flex-col items-start" : "items-center gap-3 py-2 md:py-0 md:pr-1")}>
            <span className={label}>{step}</span>
            {last ? null : vertical ? (
              <ArrowDown size={14} aria-hidden className="my-3 opacity-40" />
            ) : (
              <ArrowRight size={14} aria-hidden className="opacity-40" />
            )}
          </li>
        )
      })}
    </ol>
  )
}
