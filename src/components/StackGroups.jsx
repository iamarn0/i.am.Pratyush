export default function StackGroups({ groups = [], accent = "accent" }) {
  if (!groups.length) return null

  const labelClass = accent === "signal" ? "label-meta text-signal" : "label-meta text-accent"

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <li key={group.title}>
          <p className={labelClass}>{group.title}</p>
          <p className="mt-2 text-sm leading-relaxed tracking-tight">{group.items.join(" / ")}</p>
        </li>
      ))}
    </ul>
  )
}
