import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LabGallery } from "@/components/LabGallery";

export default function LabPage() {
  return <main><Header active="lab" />
    <section className="lab-hero wrap"><h1>Lab <i>✳</i></h1><p>Products, experiments and ideas built to learn, explore or solve something interesting.</p></section>
    <section className="wrap lab-work" aria-labelledby="lab-work-title"><h2 className="sr-only" id="lab-work-title">Projects</h2><LabGallery /></section>
    <section className="lab-note wrap"><span className="mono">A note on unfinished things</span><p>The Lab is allowed to be in progress. Some ideas become products. Others become a visual, a prototype, or simply a better question.</p></section>
    <Footer />
  </main>;
}
