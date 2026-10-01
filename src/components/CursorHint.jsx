import { useEffect, useRef } from "react"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

export default function CursorHint() {
  const reduced = usePrefersReducedMotion()
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)")
  const ref = useRef(null)

  useEffect(() => {
    if (!fine || reduced) return undefined
    const node = ref.current
    if (!node) return undefined
    const label = node.querySelector("[data-label]")
    let current = null

    const onMove = (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-cursor]") : null
      node.style.transform = `translate3d(${event.clientX + 16}px, ${event.clientY + 16}px, 0)`
      if (target === current) return
      current = target
      node.dataset.active = target ? "true" : "false"
      if (label) label.textContent = target?.getAttribute("data-cursor") || ""
    }

    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [fine, reduced])

  if (!fine || reduced) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-active="false"
      className="pointer-events-none fixed top-0 left-0 z-[60] opacity-0 data-[active=true]:opacity-100"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-[10px] font-semibold tracking-[0.14em] text-bg uppercase">
        <span data-label />
      </div>
    </div>
  )
}
