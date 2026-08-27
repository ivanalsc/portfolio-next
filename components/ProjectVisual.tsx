import { Project } from "@/data/projects";

export function ProjectVisual({ project, label = true }: { project: Project; label?: boolean }) {
  return <div className={`project-visual visual-${project.visual}`} role="img" aria-label={`Graphic placeholder for ${project.title}`}>
    {project.visual === "story" && <><span className="story-orbit" /><b>Once<br />upon<br />an idea</b><i>✳</i></>}
    {project.visual === "rndm" && <><span>R</span><span>N</span><span>D</span><span>M</span></>}
    {/* Carpicuentos visual is intentionally hidden until the project is ready. */}
    {project.visual === "songod" && <><b>SON<br />GOD</b><span>listen / look / enter</span></>}
    {label && <small className="placeholder-label mono">Visual placeholder</small>}
  </div>;
}
