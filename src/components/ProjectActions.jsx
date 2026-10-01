import Button from "./Button"

export default function ProjectActions({ project, includeCase = false, notes = true }) {
  const liveLabel = project.liveLabel || "View live site"

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {includeCase ? (
          <Button to={`/work/${project.slug}`} variant={project.liveUrl ? "secondary" : "primary"}>
            Read the case study
          </Button>
        ) : null}
        {project.liveUrl ? (
          <Button href={project.liveUrl} external variant="primary">
            {liveLabel}
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button href={project.githubUrl} external variant="secondary">
            View source
          </Button>
        ) : null}
      </div>
      {notes && project.pendingLive && !project.liveUrl ? (
        <p className="text-sm text-muted">The live site will be linked here.</p>
      ) : null}
      {notes && project.pendingSource && !project.githubUrl ? (
        <p className="text-sm text-muted">The source will be linked here when the repository is public.</p>
      ) : null}
    </div>
  )
}
