import { process } from "../data/content"
import Container from "./Container"

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="process-title">
      <Container>
        <h2 id="process-title" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-tight">
          How I work
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-6">
          {process.map((step, index) => (
            <li key={step.title}>
              <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
