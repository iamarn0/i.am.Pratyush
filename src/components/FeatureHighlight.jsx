export default function FeatureHighlight({ index, title, text }) {
  return (
    <article className="border-t border-line py-5">
      <h3 className="text-lg font-medium tracking-tight">
        <span className="mr-3 text-sm font-normal text-muted">{index}</span>
        {title}
      </h3>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">{text}</p>
    </article>
  )
}
