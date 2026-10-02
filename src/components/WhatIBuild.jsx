import { Link } from "react-router-dom"
import { builds } from "../data/content"
import Container from "./Container"
import Reveal from "./Reveal"

export default function WhatIBuild() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="build-title">
      <Container>
        <Reveal>
          <h2 id="build-title" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-tight">
            What I build
          </h2>
          <ul className="mt-10 max-w-2xl divide-y divide-line border-y border-line lg:mt-14">
            {builds.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-lg font-medium tracking-tight sm:text-xl">{item.title}</h3>
                <Link
                  to={item.to}
                  className="text-sm font-medium text-muted underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-accent"
                >
                  {item.project}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
