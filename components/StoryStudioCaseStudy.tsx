import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";
import { Footer } from "./Footer";

const tools = ["Writing", "Scene planning", "Visual prompts", "Image generation", "Voice generation", "Asset organization"];
const components = ["SceneListItem", "PromptField", "VoiceSelector", "GenerationButton", "MediaPreview", "VersionHistory", "StatusIndicator"];

function SectionHead({ number, title }: { number: string; title: string }) {
  return <header className="story-section-head"><span className="mono">{number} /</span><h2>{title}</h2></header>;
}

function EditorComposition() {
  return <div className="story-composition" role="img" aria-label="Story Studio editor composition showing scenes, a visual preview and contextual generation controls">
    <div className="composition-top mono"><b>Story Studio</b><span>The Last Broadcast</span><span>Preview&nbsp;&nbsp; Export</span></div>
    <div className="composition-scenes mono">{["Last Show","An Unexpected Call","A Familiar Voice","Dead Air","One More Song"].map((scene,index)=><span className={index===2?"active":""} key={scene}>0{index+1}<b>{scene}</b><small>{index<3?"Ready":"Draft"}</small></span>)}</div>
    <div className="composition-main"><div><span className="mono">Scene 03 / Visual</span><Image src="/story-studio/scene-original.svg" alt="A late-night radio host listening through headphones" width={1200} height={720} /></div><aside><span className="mono">Visual prompt</span><p>Radio host listening closely through headphones during a late-night call…</p><button type="button">Generate image</button><span className="mono">Version 01 · Current</span></aside></div>
  </div>;
}

export function StoryStudioCaseStudy() {
  return <main className="story-case"><Header active="lab" />
    <article>
      <header className="story-hero wrap"><div className="detail-kicker mono"><Link href="/lab">← Back to lab</Link><span>Interactive concept · 2026</span></div><p className="story-eyebrow mono">Design Engineering · Product Design · Frontend</p><h1>Story<br /><em>Studio</em><i>✳</i></h1><div className="story-hero-copy"><p>A focused workspace for creating stories with AI.</p><Link href="/work/story-studio/demo">Launch interactive prototype <span>→</span></Link></div><dl className="detail-meta mono"><div><dt>Role</dt><dd>Design Engineering · Product Design · Frontend</dd></div><div><dt>Year</dt><dd>2026</dd></div><div><dt>Status</dt><dd>Interactive prototype · Local simulation</dd></div></dl><EditorComposition /></header>

      <section className="story-section wrap"><SectionHead number="01" title="Context" /><p className="story-reading">While experimenting with AI-assisted storytelling, I noticed that creating one story often meant constantly moving between different tools for writing, prompting, visuals and voice. The creative process existed across tools instead of around the story itself.</p></section>

      <section className="story-section wrap"><SectionHead number="02" title="The problem" /><div className="fragmented-flow mono">{tools.map((tool,index)=><div key={tool}><span>0{index+1}</span><b>{tool}</b>{index<tools.length-1&&<i>↓</i>}</div>)}</div><blockquote>The tools were organized around generation. The creator was thinking in scenes.</blockquote></section>

      <section className="story-section wrap"><SectionHead number="03" title="Product idea" /><p className="story-question">What if the story itself became the workspace?</p><div className="story-model mono">{["Idea","Story","Scene","Generate","Iterate"].map((item,index)=><span key={item}>{item}{index<4&&<b>→</b>}</span>)}</div><p className="story-reading offset-story">Story Studio organizes generation around scenes rather than models or output types. Each scene keeps its narration, visual direction, image, voice and versions together.</p></section>

      <section className="story-section wrap"><SectionHead number="04" title="The editor" /><EditorComposition /><div className="editor-decisions">{[["Scene-based navigation","Each scene is a self-contained creative unit: narration, direction, generated visual, voice, duration and state."],["Context instead of chat","Actions live next to the content they affect. The interface avoids turning every creative decision into a conversation."],["Iteration without losing work","Generation creates versions. A previous result stays available instead of disappearing beneath the latest output."]].map(([title,text],index)=><div key={title}><span className="mono">0{index+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="story-section story-demo-callout wrap"><SectionHead number="05" title="Interactive prototype" /><div><p><strong>Try the core workflow.</strong> Edit prompts, switch scenes, generate local mock visuals and experiment with voice states.</p><Link href="/work/story-studio/demo">Launch Story Studio <span>→</span></Link></div></section>

      <section className="story-section wrap"><SectionHead number="06" title="Design engineering" /><div className="component-strip mono">{components.map((item,index)=><span key={item}>0{index+1} / {item}</span>)}</div><div className="state-row mono"><span>Default</span><span>Hover</span><span>Focus</span><span>Loading…</span><span aria-disabled="true">Disabled</span><span>Success ✓</span><span>Error !</span></div><p className="story-reading offset-story">The prototype uses semantic controls, visible focus, keyboard-operable scene navigation, clear loading feedback and reduced-motion support. Components share the same state language instead of inventing one-off behavior.</p></section>

      <section className="story-section story-reflection wrap"><SectionHead number="07" title="Reflection" /><div className="story-reading"><p>The prototype intentionally focuses on one strong creative workflow rather than pretending to be a complete AI platform.</p><p>Real multimodal generation, persistent projects, collaboration, reusable characters, consistency tools and export workflows remain possible future directions—not implemented features.</p></div><blockquote>Product thinking became clearer when the interface was organized around the creator’s object—the scene—not the underlying technology.</blockquote></section>
    </article><Footer />
  </main>;
}
