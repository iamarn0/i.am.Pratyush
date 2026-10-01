import { cx } from "../lib/cx"

const tones = {
  light: "border-line bg-surface",
  heritage: "border-[#d9cbbd] bg-[#f7f1ea]",
  ledger: "border-[#e2e0ea] bg-white",
  spatial: "border-[#d5dbe3] bg-white",
  logistics: "border-[#d5dbd8] bg-white",
  analytical: "border-[#d5deea] bg-white",
  vision: "border-[#2a2d2b] bg-[#111311]",
}

const captions = {
  light: "text-muted",
  heritage: "text-[#6d5c50]",
  ledger: "text-[#5c6178]",
  spatial: "text-muted",
  logistics: "text-muted",
  analytical: "text-[#3d5270]",
  vision: "text-muted",
}

export default function PhoneMockup({ children, label, tone = "light", className = "" }) {
  return (
    <figure className={cx("group w-[min(64vw,210px)] shrink-0 snap-start", className)}>
      <div className={cx("overflow-hidden rounded-[1.35rem] border-[3px]", tones[tone] || tones.light)}>
        <div className="relative aspect-[9/16] overflow-hidden">{children}</div>
      </div>
      {label ? <figcaption className={cx("mt-3 text-sm", captions[tone] || captions.light)}>{label}</figcaption> : null}
    </figure>
  )
}
