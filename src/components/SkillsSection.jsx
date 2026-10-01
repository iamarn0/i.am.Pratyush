import { skillGroups } from "../data/skills"
import Container from "./Container"
import SkillGroup from "./SkillGroup"

export default function SkillsSection({ level = "h2" }) {
  const Title = level
  return (
    <section className="py-20 lg:py-28" aria-labelledby="skills-title">
      <Container>
        <Title id="skills-title" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-tight">
          Skills
        </Title>
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </Container>
    </section>
  )
}
