import { useState } from "react"
import { cx } from "../lib/cx"

const plates = {
  light: "bg-[#eceae6] text-[#3c3c3c]",
  heritage: "bg-[#e7d9cc] text-[#3d322b]",
  ledger: "bg-[#e7e9f2] text-[#2c3358]",
  spatial: "bg-[#e3e8ee] text-[#243041]",
  logistics: "bg-[#e4e8e6] text-[#1c2830]",
  analytical: "bg-[#e4eaf3] text-[#1e3a5f]",
  vision: "bg-[#171a19] text-[#f3f3f1]",
}

export default function ProjectImage({ image, priority = false, tone = "light", fit = "cover", className = "" }) {
  const [failed, setFailed] = useState(false)
  const ready = Boolean(image?.src) && !failed

  if (ready) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        width={image.width || 1440}
        height={image.height || 900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={() => setFailed(true)}
        className={cx(
          "absolute inset-0 h-full w-full",
          fit === "contain" ? "object-contain object-center" : "object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]",
          className,
        )}
      />
    )
  }

  const file = image?.file ? `public/images/projects/${image.file}.webp` : ""

  return (
    <div
      role="img"
      aria-label={`${image?.label || "Project screenshot"}${image?.slot ? `: ${image.slot}` : ""}${file ? `. Add ${file}` : ""}`}
      className={cx("absolute inset-0 flex flex-col justify-between p-5 sm:p-7", plates[tone] || plates.light, className)}
    >
      <p className="label-meta opacity-60">Screenshot</p>
      <div>
        <p className="max-w-[18rem] font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[0.95]">{image?.slot || "Project screen"}</p>
        {file ? <p className="mt-4 max-w-[28ch] text-xs leading-relaxed opacity-60">{file}</p> : null}
      </div>
    </div>
  )
}
