import Link from "next/link";
import { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectLink({ project, mode = "home" }: { project: Project; mode?: "home" | "lab" }) {
  const href = project.slug === "story-studio" ? "/work/story-studio" : `/lab/${project.slug}`;
  return <article className={`project project-${project.size} project-${mode}`}>
    <Link href={href} aria-label={`View ${project.title}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <span className="mono project-number">{project.id}</span>
        <div><h3>{project.title} <span>↗</span></h3><p>{project.question}</p></div>
        <div className="project-tags mono"><span>{project.year}</span><span>{project.tags.join(" · ")}</span></div>
      </div>
    </Link>
  </article>;
}
