import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/data/projects";
import { RandomCaseStudy } from "@/components/RandomCaseStudy";
import { SongodCaseStudy } from "@/components/SongodCaseStudy";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug === "random") return {
    title: "Random — Product Design & Design Engineering Case Study",
    description: "Designing and building a personal media log for books, films, series and albums."
  };
  if (params.slug === "songod") return {
    title: "Songod — Artist Portfolio Case Study",
    description: "Designing and building a living digital archive for artist Sergio Páez."
  };
  const project = projects.find(item => item.slug === params.slug);
  return project ? { title: `${project.title} — Ivana Sosa Cordero`, description: project.description } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (params.slug === "story-studio") redirect("/work/story-studio");
  const project = projects.find(item => item.slug === params.slug);
  if (!project) notFound();
  if (project.slug === "random") return <RandomCaseStudy project={project} />;
  if (project.slug === "songod") return <SongodCaseStudy project={project} />;
  return <main><Header active="lab" />
    <article className="project-detail wrap">
      <div className="detail-kicker mono"><Link href="/lab">← Back to lab</Link><span>{project.id} / {project.year}</span></div>
      <h1>{project.title} <i>↗</i></h1><p className="detail-question">{project.question}</p>
      <dl className="detail-meta mono"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Tools</dt><dd>{project.tools}</dd></div><div><dt>Type</dt><dd>{project.tags.join(" · ")}</dd></div></dl>
      <ProjectVisual project={project} />
      <div className="detail-sections">{project.sections.map((section, index) => <section key={section.title}><span className="mono">0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
      <nav className="next-project" aria-label="Next project"><span className="mono">Continue exploring</span><Link href={`/lab/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}>{projects[(projects.indexOf(project) + 1) % projects.length].title} →</Link></nav>
    </article><Footer />
  </main>;
}
