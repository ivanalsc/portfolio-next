import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Project, projects } from "@/data/projects";
import Image from "next/image";

function CaseHead({ number, title }: { number: string; title: string }) {
  return <header className="songod-section-head"><span className="mono">{number} /</span><h2>{title}</h2></header>;
}

export function SongodCaseStudy({ project }: { project: Project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className="songod-case"><Header active="lab" />
    <article>
      <header className="songod-hero wrap">
        <div className="detail-kicker mono"><Link href="/lab">← Back to lab</Link><span>04 / 2025—26</span></div>
        <div className="songod-title-row"><div><p className="mono">Artist portfolio · Live</p><h1>Songod</h1></div><a className="songod-live mono" href="https://songod.ar/" target="_blank" rel="noreferrer">Visit live site <span>↗</span></a></div>
        <p className="songod-intro">An artist portfolio designed as a living digital archive.</p>
        <dl className="detail-meta mono"><div><dt>Role</dt><dd>Web Design · Creative Development</dd></div><div><dt>Stack</dt><dd>Next.js · TypeScript · Tailwind CSS · Framer Motion · Notion</dd></div><div><dt>Status</dt><dd>Live · Evolving archive</dd></div></dl>
        <figure className="songod-shot">
          <Image src="/projects/songod/songod.jpg" alt="Songod homepage showing the artist’s illustrated figures and minimal navigation" width={1452} height={842} sizes="(max-width: 800px) 100vw, 1200px" unoptimized />
        </figure>
        <p className="songod-caption mono">01 / Homepage — Identity, artist statement and artwork archive.</p>
      </header>

      <section className="songod-section wrap"><CaseHead number="01" title="The challenge" /><div className="songod-reading"><p>Songod is the art practice of Sergio Páez: a body of work spanning drawing, painting, collage, sculpture and recycled materials.</p><p>The portfolio needed to feel visually specific without becoming difficult to update. The main challenge was balancing a strong artist identity with a clear, maintainable archive of work.</p></div><blockquote>Distinct enough to feel like Songod. Simple enough to keep alive.</blockquote></section>

      <section className="songod-section wrap"><CaseHead number="02" title="The approach" /><div className="songod-approach"><div><span className="mono">Identity</span><p>A restrained interface gives the logo, typography and artwork room to establish the visual voice.</p></div><div><span className="mono">Archive</span><p>Works remain the main browsing unit, with titles, materials, series and years kept close to each piece.</p></div><div><span className="mono">Maintenance</span><p>Notion acts as a lightweight CMS so the artist can add and update work without changing code.</p></div></div></section>

      <section className="songod-section wrap"><CaseHead number="03" title="The experience" /><div className="songod-experience"><figure className="songod-shot"><Image src="/projects/songod/songod-obras.jpg" alt="Songod artwork archive showing two paintings and a sculpture with titles and metadata" width={1398} height={763} sizes="(max-width: 800px) 100vw, 900px" unoptimized /><figcaption className="mono">02 / Obras — Artwork, material, series and year remain visible together.</figcaption></figure><div className="songod-reading"><p>The homepage introduces the practice before opening into a chronological collection of works. Individual artwork pages preserve context through materials, dimensions, series and year.</p><p>The visual system stays direct: monochrome foundations, compact navigation and minimal interface decoration. Motion supports transitions without competing with the artwork.</p></div></div></section>

      <section className="songod-section songod-result wrap"><CaseHead number="04" title="Current result" /><div><p>The site now works as both an introduction to Songod and an evolving public record of the artist’s work.</p><a href="https://songod.ar/" target="_blank" rel="noreferrer">Explore songod.ar <span>↗</span></a></div></section>

      <nav className="next-project wrap" aria-label="Next project"><span className="mono">Continue exploring</span><Link href={`/lab/${next.slug}`}>{next.title} →</Link></nav>
    </article><Footer />
  </main>;
}
