import ContactSection from "../components/ContactSection"
import Seo from "../components/Seo"

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Pratyush Mondal, a full-stack developer in India, about a project."
      />
      <div className="pt-12 lg:pt-16">
        <ContactSection level="h1" />
      </div>
    </>
  )
}
