import { useParams } from "react-router-dom"
import CaseStudy from "../components/CaseStudy"
import Seo from "../components/Seo"
import { getNextProject, getProject } from "../data/projects"
import NotFound from "./NotFound"

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  return (
    <>
      <Seo title={project.title} description={project.description} path={`/work/${project.slug}`} />
      <CaseStudy project={project} next={getNextProject(project.slug)} />
    </>
  )
}
