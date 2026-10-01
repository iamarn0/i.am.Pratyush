export default function TechStack({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
