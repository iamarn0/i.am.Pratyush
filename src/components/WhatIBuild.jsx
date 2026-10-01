import { Link } from "react-router-dom"
import { builds } from "../data/content"
import { cx } from "../lib/cx"
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
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
            {builds.map((item) => (
              <li key={item.title} className={cx("bg-bg p-6 sm:p-7", item.wide ? "lg:col-span-3" : "lg:col-span-2")}>
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.text}</p>
                <Link to={item.to} className="mt-6 inline-flex text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
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
