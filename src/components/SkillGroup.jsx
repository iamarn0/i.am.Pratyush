export default function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="label-meta text-muted">{title}</h3>
      <ul className="mt-4 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-[1.05rem] leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
