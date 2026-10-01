export default function ProjectMeta({ items }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-sm text-muted">{item.label}</dt>
          <dd className="mt-1 text-sm leading-snug">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
