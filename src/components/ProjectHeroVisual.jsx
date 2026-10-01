import ScreenshotFrame from "./ScreenshotFrame"

export default function ProjectHeroVisual({ project, image, priority = false }) {
  if (!image) return null

  return <ScreenshotFrame image={image} tone={project.theme} url={project.liveUrl} priority={priority} />
}
