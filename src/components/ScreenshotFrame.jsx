import BrowserMockup from "./BrowserMockup"
import PhoneMockup from "./PhoneMockup"
import ProjectImage from "./ProjectImage"

export default function ScreenshotFrame({ image, tone = "light", url = "", priority = false, className = "" }) {
  if (!image) return null

  if (image.kind === "mobile") {
    return (
      <PhoneMockup label={image.slot} tone={tone} className={className}>
        <ProjectImage image={image} tone={tone} priority={priority} fit="contain" />
      </PhoneMockup>
    )
  }

  return (
    <BrowserMockup url={url} label={image.slot} tone={tone} className={className}>
      <ProjectImage image={image} tone={tone} priority={priority} fit="contain" />
    </BrowserMockup>
  )
}
