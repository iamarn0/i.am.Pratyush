import BrowserMockup from "./BrowserMockup"
import ImageGallery from "./ImageGallery"
import PhoneMockup from "./PhoneMockup"
import ProjectImage from "./ProjectImage"

export default function ProjectShowcase({ project, part = "all", tone = "light" }) {
  const ready = project.screenshots.filter((item) => item.src)
  const hero = ready.find((item) => item.kind === "hero")
  const gallery = ready.filter((item) => item.kind === "gallery")
  const phones = ready.filter((item) => item.kind === "mobile")
  const showHero = part === "all" || part === "hero"
  const showGallery = part === "all" || part === "gallery"
  const showPhones = part === "all" || part === "mobile"

  if (!(showHero && hero) && !(showGallery && gallery.length) && !(showPhones && phones.length)) return null

  return (
    <div className="mt-10 grid gap-10">
      {showHero && hero ? (
        <BrowserMockup url={project.liveUrl} label={hero.slot} tone={tone}>
          <ProjectImage image={hero} priority tone={tone} />
        </BrowserMockup>
      ) : null}
      {showGallery && gallery.length ? <ImageGallery images={gallery} tone={tone} /> : null}
      {showPhones && phones.length ? (
        <div className="flex flex-wrap gap-8">
          {phones.map((image) => (
            <PhoneMockup key={image.id} label={image.slot} tone={tone}>
              <ProjectImage image={image} tone={tone} />
            </PhoneMockup>
          ))}
        </div>
      ) : null}
    </div>
  )
}
