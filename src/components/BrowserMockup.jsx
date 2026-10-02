import { cx } from "../lib/cx"

const tones = {
  light: {
    frame: "border-line bg-surface",
    bar: "border-line bg-[#f3f2ed]",
    dot: "bg-[#d5d3cb]",
    caption: "text-muted",
  },
  heritage: {
    frame: "border-[#d9cbbd] bg-[#f7f1ea]",
    bar: "border-[#d9cbbd] bg-[#efe4d8]",
    dot: "bg-[#c4a48e]",
    caption: "text-[#6d5c50]",
  },
  ledger: {
    frame: "border-[#e2e0ea] bg-white",
    bar: "border-[#e2e0ea] bg-[#f6f6f8]",
    dot: "bg-[#c5c8dc]",
    caption: "text-[#5c6178]",
  },
  spatial: {
    frame: "border-[#d5dbe3] bg-white",
    bar: "border-[#d5dbe3] bg-[#f4f6f8]",
    dot: "bg-[#b7c3d1]",
    caption: "text-muted",
  },
  logistics: {
    frame: "border-[#d5dbd8] bg-white",
    bar: "border-[#d5dbd8] bg-[#f3f5f4]",
    dot: "bg-[#b7c2bc]",
    caption: "text-muted",
  },
  analytical: {
    frame: "border-[#d5deea] bg-white",
    bar: "border-[#d5deea] bg-[#f4f6fb]",
    dot: "bg-[#b9c6da]",
    caption: "text-[#3d5270]",
  },
  vision: {
    frame: "border-[#2a2d2b] bg-[#111311]",
    bar: "border-[#2a2d2b] bg-[#1a1d1c]",
    dot: "bg-[#3d433f]",
    caption: "text-muted",
  },
}

export default function BrowserMockup({ children, label, url, tone = "light", className = "" }) {
  const chrome = tones[tone] || tones.light

  return (
    <figure className={cx("group min-w-0", className)}>
      <div className={cx("overflow-hidden border", chrome.frame)}>
        <div className={cx("flex items-center gap-3 border-b px-3 py-2.5", chrome.bar)}>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className={cx("size-2 rounded-full", chrome.dot)} />
            <span className={cx("size-2 rounded-full", chrome.dot)} />
            <span className={cx("size-2 rounded-full", chrome.dot)} />
          </span>
          {url ? (
            <span className="truncate font-mono text-[11px] tracking-wide opacity-70">{url.replace(/^https?:\/\//, "")}</span>
          ) : (
            <span className="font-mono text-[11px] tracking-wide opacity-50">Screenshot</span>
          )}
        </div>
        <div className={cx("relative aspect-[16/10] overflow-hidden", tone === "vision" ? "bg-[#111311]" : "bg-[#f4f7f6]")}>{children}</div>
      </div>
      {label ? <figcaption className={cx("mt-3 text-sm", chrome.caption)}>{label}</figcaption> : null}
    </figure>
  )
}
