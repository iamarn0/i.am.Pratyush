import { Link } from "react-router-dom"
import AboutSection from "../components/AboutSection"
import Container from "../components/Container"
import ProcessSection from "../components/ProcessSection"
import Seo from "../components/Seo"
import SkillsSection from "../components/SkillsSection"

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Pratyush Mondal is a full-stack developer in India, building production applications, logistics systems, SaaS products, and work in applied machine learning and computer vision."
      />
      <div className="pt-12 lg:pt-16">
        <AboutSection level="h1" />
        <ProcessSection />
        <SkillsSection level="h2" />
        <Container className="pb-20">
          <Link to="/contact" className="text-sm font-semibold underline underline-offset-4">
            Have a project? Let&apos;s talk
          </Link>
        </Container>
      </div>
    </>
  )
}
