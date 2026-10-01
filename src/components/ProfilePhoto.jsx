import { profileSrc } from "../generated/assets"
import { cx } from "../lib/cx"

export default function ProfilePhoto({ className = "", variant = "portrait", priority = false }) {
  const aspect = variant === "about" ? "aspect-[5/4]" : "aspect-[5/4] lg:aspect-[4/5]"

  if (!profileSrc) {
    return (
      <div
        role="img"
        aria-label="Portrait placeholder for Pratyush Mondal. Add public/images/profile.jpg"
        className={cx("flex items-end border border-line bg-[#e6e3de] p-4", aspect, className)}
      >
        <p className="label-meta text-[#6b6862]">Photograph</p>
      </div>
    )
  }

  return (
    <div className={cx("overflow-hidden border border-line bg-[#e6e3de]", aspect, className)}>
      <img
        src={profileSrc}
        alt="Pratyush Mondal"
        width={800}
        height={variant === "about" ? 640 : 1000}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
