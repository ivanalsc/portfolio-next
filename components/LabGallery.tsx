"use client";

import { useState } from "react";
import { filters, projects } from "@/data/projects";
import { ProjectLink } from "./ProjectLink";

export function LabGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(active.toLowerCase())));
  return <>
    <div className="filters mono" aria-label="Filter projects">
      {filters.map(filter => <button key={filter} className={active === filter ? "active" : ""} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
    </div>
    <div className="lab-gallery" aria-live="polite">
      {visible.length ? visible.map(project => <ProjectLink key={project.id} project={project} mode="lab" />) : <p className="empty-state">Nothing filed here yet. That space is intentional.</p>}
    </div>
  </>;
}
