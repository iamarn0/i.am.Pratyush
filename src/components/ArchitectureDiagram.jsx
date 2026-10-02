import { ArrowDown, ArrowRight } from "lucide-react"
import { cx } from "../lib/cx"

export default function ArchitectureDiagram({ steps = [], label = "", orientation = "auto" }) {
  if (!steps.length) return null

  const vertical = orientation === "vertical"
  const horizontal = orientation === "horizontal"

  return (
    <div>
      {label ? <p className="max-w-2xl text-sm leading-relaxed text-muted">{label}</p> : null}
      <ol
        className={cx(
          label ? "mt-6" : "",
          vertical
            ? "flex flex-col gap-3"
            : horizontal
              ? "flex flex-row flex-wrap items-center gap-3"
              : "flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center",
        )}
      >
        {steps.map((step, index) => {
          const last = index === steps.length - 1
          return (
            <li
              key={step}
              className={cx(
                "flex items-start gap-3",
                vertical ? "flex-col" : horizontal ? "flex-row items-center" : "flex-col md:flex-row md:items-center",
              )}
            >
              <span className="border border-line bg-surface px-4 py-3 text-sm font-medium">{step}</span>
              {last ? null : (
                <>
                  <ArrowDown
                    size={14}
                    aria-hidden
                    className={cx("opacity-40", horizontal ? "hidden" : vertical ? "block" : "md:hidden")}
                  />
                  <ArrowRight
                    size={14}
                    aria-hidden
                    className={cx("opacity-40", vertical ? "hidden" : horizontal ? "block" : "hidden md:block")}
                  />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
