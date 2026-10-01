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
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {clusters.map((cluster) => (
            <li key={cluster.title} className="bg-surface p-5">
              <h3 className="text-sm font-medium">{cluster.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {cluster.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
              {cluster.note ? <p className="mt-4 text-xs leading-relaxed text-muted">{cluster.note}</p> : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
