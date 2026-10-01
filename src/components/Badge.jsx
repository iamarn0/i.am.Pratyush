import { cx } from "../lib/cx"

const tones = {
  default: "border-line text-muted",
  ink: "border-ink/15 text-ink",
  inverse: "border-white/20 text-heritage-muted",
  signal: "border-signal/30 text-signal",
}

export default function Badge({ children, tone = "default", className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
