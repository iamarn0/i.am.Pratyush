import { useState } from "react"
import { cx } from "../lib/cx"

export default function TechnicalCards({ items }) {
  const [active, setActive] = useState(0)
  const card = items[active]

  function onKeyDown(event) {
    const last = items.length - 1
    let next = null
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = active === last ? 0 : active + 1
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = active === 0 ? last : active - 1
    if (event.key === "Home") next = 0
    if (event.key === "End") next = last
    if (next === null) return
    event.preventDefault()
    setActive(next)
    document.getElementById(`neare-tab-${next}`)?.focus()
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div role="tablist" aria-orientation="vertical" aria-label="Engineering notes" className="lg:col-span-5" onKeyDown={onKeyDown}>
        {items.map((item, index) => (
          <button
            key={item.title}
            id={`neare-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls="neare-panel"
            tabIndex={index === active ? 0 : -1}
            className={cx(
              "flex w-full cursor-pointer items-baseline gap-4 border-t border-line py-3 text-left",
              index === active ? "text-ink" : "text-muted",
            )}
            onClick={() => setActive(index)}
          >
            <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold">{item.title}</span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="neare-panel"
        aria-labelledby={`neare-tab-${active}`}
        className="border border-line bg-surface p-6 sm:p-8 lg:col-span-7"
      >
        <h3 className="text-2xl font-medium tracking-tight">{card.title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{card.text}</p>
      </div>
    </div>
  )
}
