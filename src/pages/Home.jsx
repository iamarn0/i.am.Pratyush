import AboutSection from "../components/AboutSection"
import BeyondSection from "../components/BeyondSection"
import ContactSection from "../components/ContactSection"
import EvolutionSection from "../components/EvolutionSection"
import Hero from "../components/Hero"
import ProcessSection from "../components/ProcessSection"
import SelectedWork from "../components/SelectedWork"
import Seo from "../components/Seo"
import SupportingWork from "../components/SupportingWork"
import WhatIBuild from "../components/WhatIBuild"

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <SelectedWork />
      <EvolutionSection />
      <SupportingWork />
      <WhatIBuild />
      <BeyondSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
