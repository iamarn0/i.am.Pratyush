import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { cx } from "../lib/cx"

const variants = {
  primary: "bg-transparent px-0 py-0.5 text-ink underline decoration-ink/35 underline-offset-4 hover:decoration-ink",
  secondary: "bg-transparent px-0 py-0.5 text-muted underline decoration-line underline-offset-4 hover:text-ink",
  inverse: "bg-transparent px-0 py-0.5 text-ink underline decoration-ink/35 underline-offset-4 hover:decoration-ink",
  inverseGhost: "bg-transparent px-0 py-0.5 text-muted underline decoration-line underline-offset-4 hover:text-ink",
}

export default function Button({
  to,
  href,
  type = "button",
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
  cursor,
  disabled = false,
}) {
  const classes = cx(
    "inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium transition-colors",
    variants[variant],
    disabled ? "pointer-events-none opacity-50" : "",
    className,
  )
  const cursorProps = cursor ? { "data-cursor": cursor } : {}

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...cursorProps}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...cursorProps}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
        {external ? (
          <>
            <ArrowUpRight size={16} aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </>
        ) : null}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
