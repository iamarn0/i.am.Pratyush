import { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import { cx } from "../lib/cx"

export default function StateMachine({ flows }) {
  const reduced = usePrefersReducedMotion()
  const [mode, setMode] = useState("delivery")
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(!reduced)
  const steps = flows[mode]

  useEffect(() => {
    if (!playing || reduced) return undefined
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length)
    }, 1400)
    return () => window.clearInterval(timer)
  }, [playing, reduced, steps.length, mode])

  function chooseMode(next) {
    setMode(next)
    setActive(0)
  }

  return (
    <div className="border border-line bg-surface p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Fulfillment type" className="flex gap-2">
          {[
            ["delivery", "Delivery"],
            ["pickup", "Pickup"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={mode === value}
              className={cx(
                "cursor-pointer px-4 py-2 text-sm font-semibold",
                mode === value ? "border-b border-ink text-ink" : "text-muted",
              )}
              onClick={() => chooseMode(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="cursor-pointer text-sm font-semibold underline decoration-1 underline-offset-4"
          aria-pressed={playing}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        Delivery and pickup share the early states, then diverge. Pickup ends when the order is picked up.
      </p>

      <ol className="mt-8 grid gap-3" aria-label={`${mode} order states`}>
        {steps.map((step, index) => {
          const current = index === active
          const last = index === steps.length - 1
          return (
            <li key={step.code}>
              <button
                type="button"
                className={cx(
                  "flex w-full cursor-pointer items-center justify-between gap-4 border-b px-1 py-3 text-left",
                  current ? "border-ink text-ink" : "border-line text-muted",
                )}
                aria-current={current ? "step" : undefined}
                onClick={() => {
                  setActive(index)
                  setPlaying(false)
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{step.label}</span>
                </span>
                <span className="flex items-center gap-2">
                  {last ? <span className="h-2 w-2 bg-success" aria-hidden="true" /> : null}
                  <span className="font-mono text-[11px] text-muted">
                    {step.code}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
