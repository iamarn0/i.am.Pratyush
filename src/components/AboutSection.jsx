import { cvUrl } from "../generated/assets"
import Container from "./Container"

export default function AboutSection({ level = "h2" }) {
  const Title = level

  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-32" aria-labelledby="about-title">
      <Container>
        <div className="max-w-2xl">
          <p className="label-meta text-muted">India · Freelance</p>
          <Title
            id="about-title"
            className="mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-medium tracking-tight text-balance"
          >
            A developer who likes building the whole thing.
          </Title>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            <p>I&apos;m Pratyush, a freelance full-stack developer based in India.</p>
            <p>
              I build web products and the systems behind them: production applications, logistics platforms,
              marketplaces, and SaaS products. The same curiosity has been carrying the work into applied machine
              learning and computer vision, through projects rather than job titles.
            </p>
            <p>
              I care about the workflow as much as the interface. What the system is for, how the data moves, and
              whether a person can actually operate it.
            </p>
          </div>
          {cvUrl ? (
            <a href={cvUrl} className="mt-8 inline-flex text-sm font-medium underline underline-offset-4">
              Download CV
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
