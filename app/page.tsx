import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectLink } from "@/components/ProjectLink";
import { projects } from "@/data/projects";
import Image from "next/image";

const interests = ["Product design", "Creative AI", "Editorial interfaces", "Storytelling", "Design systems", "Accessibility"];

export default function Home() {
  return <main>
    <Header />
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-title" id="hero-title"><span>Curiosity</span><span>Driven</span><span><em>Developer</em> <i>✳</i></span></div>
      <div className="hero-aside">
        <div className="portrait"><Image src="/images/ivana-sosa-cordero.jpeg" alt="Ivana Sosa Cordero" width={3023} height={3986} sizes="108px" priority /></div>
        <p>Frontend developer exploring the intersection of design, technology and ideas.</p>
        <div className="socials mono"><a href="https://github.com/" target="_blank" rel="noreferrer">↗ Github</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">↗ LinkedIn</a><a href="mailto:hello@ivanasosa.dev">↗ Email</a></div>
        <Link className="text-link mono" href="/lab">Explore my lab <span>→</span></Link>
      </div>
    </section>

    <section className="section wrap" aria-labelledby="selected-title">
      <div className="section-heading mono"><span>01 /</span><h2 id="selected-title">Selected experiments <i>✳</i></h2><span>2025—26</span></div>
      <div className="selected-grid">{projects.map(project => <ProjectLink key={project.id} project={project} />)}</div>
    </section>

    <section className="section lab-preview wrap" aria-labelledby="lab-preview-title">
      <div className="section-heading mono"><span>02 /</span><h2 id="lab-preview-title">In the lab <i>✳</i></h2><span>Ongoing</span></div>
      <div className="lab-index">
        {projects.map(project => <Link href={project.slug === "story-studio" ? "/work/story-studio" : `/lab/${project.slug}`} key={project.id}><span className="mono">{project.id}</span><p>{project.title}</p><span>↗</span></Link>)}
      </div>
      <Link className="text-link mono" href="/lab">See everything in the lab <span>→</span></Link>
    </section>

    <section className="about wrap" id="about" aria-labelledby="about-title">
      <div className="section-heading mono"><span>03 /</span><h2 id="about-title">About</h2><span>Buenos Aires</span></div>
      <p className="about-lead">I’m interested in the space between <em>design</em>, technology and <em>ideas.</em></p>
      <div className="about-grid"><p>I’m a frontend developer with five years of experience. Increasingly, my work moves across product thinking, visual systems and experimentation. I follow a question until it becomes something I can see, test and build.</p><div><span className="mono">Currently curious about</span><ul>{interests.map(item => <li key={item}>{item}<span>✳</span></li>)}</ul></div></div>
    </section>

    <section className="currently wrap" aria-labelledby="currently-title">
      <h2 className="mono" id="currently-title">Currently ✳</h2>
      <dl>{[["Exploring", "Product design + AI"], ["Building", "Small experiments"], ["Learning", "Creative technology"], ["Playing", "Bass / music"]].map(([term, detail]) => <div key={term}><dt className="mono">{term}</dt><dd>{detail}</dd></div>)}</dl>
    </section>
    <Footer />
  </main>;
}
