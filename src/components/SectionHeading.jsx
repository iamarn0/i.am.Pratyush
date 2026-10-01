import { cx } from "../lib/cx"

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  level = "h2",
  className = "",
}) {
  const Title = level
  return (
    <div className={cx("max-w-3xl", className)}>
      {eyebrow ? <p className="eyebrow text-muted">{eyebrow}</p> : null}
      <Title id={id} className={cx("heading-display text-balance", eyebrow && "mt-4")}>
        {title}
      </Title>
      {description ? (
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{description}</p>
      ) : null}
    </div>
  )
}
