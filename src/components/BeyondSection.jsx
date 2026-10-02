import { clusters } from "../data/content"
import Container from "./Container"

export default function BeyondSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="beyond-title">
      <Container>
        <h2 id="beyond-title" className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-medium tracking-tight text-balance">
          Beyond the interface
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          The screen is the part people see. The product also lives in the systems underneath it.
        </p>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-5">
          {clusters.map((cluster) => (
            <li key={cluster.title}>
              <h3 className="label-meta text-accent">{cluster.title}</h3>
              <p className="mt-3 text-sm leading-relaxed tracking-tight">{cluster.items.join(" · ")}</p>
              {cluster.note ? <p className="mt-3 text-xs leading-relaxed text-muted">{cluster.note}</p> : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
