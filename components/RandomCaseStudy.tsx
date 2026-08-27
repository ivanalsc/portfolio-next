import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Project, projects } from "@/data/projects";
import Image from "next/image";

const imageAssets = {
  hero: "hero.jpg", log: "log.jpg", add: "add-entry.jpg", feed: "feed.jpg",
  profile: "profile.jpg", share: "share-modal.jpg", mediaShare: "share-media-first.jpg",
  noteShare: "share-note-first.jpg", early: "visual-early.jpg", archive: "archive-early.png"
} as const;

const imageDimensions: Record<string, [number, number]> = {
  "hero.jpg": [1611, 849], "log.jpg": [1611, 849], "add-entry.jpg": [780, 757],
  "feed.jpg": [1573, 854], "profile.jpg": [1581, 666], "share-modal.jpg": [1048, 669],
  "share-media-first.jpg": [289, 512], "share-note-first.jpg": [285, 501],
  "visual-early.jpg": [931, 495], "archive-early.png": [1536, 1024]
};

function Shot({ asset, caption, ratio = "landscape" }: { asset: string; caption: string; ratio?: "landscape" | "portrait" | "square" }) {
  const [width, height] = imageDimensions[asset] ?? [1200, 675];
  return <figure className={`random-shot shot-${ratio}`} style={{ maxWidth: `${Math.min(width, 1200)}px` }}>
    <Image src={`/projects/random/${asset}`} alt={`Random interface: ${caption}`} width={width} height={height} sizes={ratio === "portrait" ? "(max-width: 420px) 72vw, 290px" : `(max-width: 800px) 100vw, ${Math.min(width, 1200)}px`} unoptimized />
    <figcaption className="mono">{caption}</figcaption>
  </figure>;
}

function SectionHead({ number, title }: { number: string; title: string }) {
  return <header className="random-section-head"><span className="mono">{number} /</span><h2>{title}</h2></header>;
}

function PullQuote({ children }: { children: React.ReactNode }) { return <blockquote className="random-pull">{children}</blockquote>; }

const monthEntries = [
  { day: "03", count: 1 }, { day: "07", count: 2 }, { day: "12", count: 3 },
  { day: "18", count: 4 }, { day: "21", count: 1 }, { day: "26", count: 5 }
];

function MonthCalendar() {
  return <div className="month-demo" aria-label="Conceptual August calendar showing media artwork compositions on populated days">
    <header><div><span className="mono">Personal history / Month</span><h3>August 2026</h3></div><div className="month-totals mono"><span>7 Entries</span><span>2 Books · 2 Films · 1 Series · 2 Albums</span></div></header>
    <div className="month-weekdays mono">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day=><span key={day}>{day}</span>)}</div>
    <div className="month-grid">{Array.from({length:35},(_,index)=>{const entry=monthEntries.find(item=>Number(item.day)===index+1);return <div className={entry?"populated":""} key={index}><span className="mono">{String(index+1).padStart(2,"0")}</span>{entry&&<div className={`art-stack art-count-${Math.min(entry.count,4)}`}>{Array.from({length:Math.min(entry.count,4)},(_,art)=><i key={art}/>) }{entry.count>4&&<b className="mono">+{entry.count-4}</b>}</div>}<small className="mono">{entry?`${entry.count} ${entry.count===1?"entry":"entries"}`:""}</small></div>})}</div>
  </div>;
}

function MonthlyRecap() {
  return <div className="recap-concept"><header className="mono"><b>Random</b><span>August 2026</span></header><div className="recap-art">{Array.from({length:7},(_,index)=><i key={index}/>)}</div><div className="recap-meta mono"><strong>7 Entries</strong><span>2 Books · 2 Films<br />1 Series · 2 Albums</span></div><footer className="mono">A month on Random</footer></div>;
}

export function RandomCaseStudy({ project }: { project: Project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className="random-case"><Header active="lab" />
    <article>
      <header className="random-hero wrap">
        <div className="detail-kicker mono"><Link href="/lab">← Back to lab</Link><span>Personal project · V1</span></div>
        <p className="random-eyebrow mono">Product Design · Design Engineering · Frontend Development</p>
        <div className="random-title-row"><h1>Random</h1><a className="random-live mono" href="https://random-nu-livid.vercel.app/" target="_blank" rel="noreferrer">Visit live site <span>↗</span></a></div>
        <div className="random-hero-copy"><h2>A personal log for what you read, watch and listen to.</h2><p>Random is a personal media log for books, films, series and albums. It lets people keep a private record of what they read, watch and listen to, add their own notes and ratings, and optionally share Entries publicly or as visual artifacts.</p></div>
        <dl className="random-meta mono"><div><dt>Role</dt><dd>Product Design<br />Design Engineering<br />Frontend Development</dd></div><div><dt>Stack</dt><dd>Next.js · TypeScript · Supabase<br />TMDB · Open Library<br />iTunes Search API</dd></div><div><dt>Status</dt><dd>Personal project · V1<br />Evolving</dd></div></dl>
        <Shot asset={imageAssets.hero} caption="00 / LOG — Desktop overview with contextual Entry detail." />
      </header>

      <section className="random-section wrap"><SectionHead number="01" title="The idea" /><div className="reading-grid"><div><p>I wanted a single place to remember the things I read, watch and listen to.</p><p>Most tools I encountered were organized around a specific medium or made discovery, ratings and social engagement a central part of the experience.</p><p>I was interested in something quieter: a personal record first, with sharing as an optional layer.</p></div><div className="media-types mono"><span>Book</span><span>Film</span><span>Series</span><span>Album</span></div></div><PullQuote>A personal record first, with sharing as an optional layer.</PullQuote></section>

      <section className="random-section wrap"><SectionHead number="02" title="Defining the product" /><div className="split"><div className="flow flow-horizontal mono">{["Find","Add","Log","Remember","Optionally share"].map((item,i)=><span key={item}>{item}{i<4 && <b>↓</b>}</span>)}</div><div className="reading"><p>Every Entry belongs to one of four media types and may contain a date, rating, note and visibility setting.</p><p>Public Entries can appear in a lightweight Feed and Public Profile, but the personal Log remains the core experience.</p></div></div></section>

      <section className="random-section wrap"><SectionHead number="03" title="Simplifying the idea" /><div className="reading narrow"><p>One of the first versions of Random had three primary sections: Log, Archive and Feed.</p><p>Log represented individual experiences chronologically, while Archive grouped those experiences by unique media. The distinction made sense structurally, so I implemented both.</p><p>Once I started using the product, Archive felt redundant. The same information could already be revisited through the Log, and grouping Entries introduced another mental model without adding enough value.</p><p>I removed it.</p></div><div className="before-after mono"><div><small>Before</small><p><span>Log</span><span>Archive</span><span>Feed</span></p></div><b>↓</b><div><small>After</small><p><span>Log</span><span>Feed</span></p></div></div><div className="single-shot"><Shot asset={imageAssets.archive} caption="01 / ARCHIVE — Early product structure before simplifying the information architecture." /></div><PullQuote>Not every useful way of organizing data needs to become a feature.</PullQuote></section>

      <section className="random-section wrap"><SectionHead number="04" title="Searching across different media" /><div className="split"><p className="section-intro">A unified media product introduced a practical constraint: there is no single source for books, films, series and albums.</p><dl className="provider-list mono"><div><dt>Books</dt><dd>Open Library</dd></div><div><dt>Films</dt><dd>TMDB</dd></div><div><dt>Series</dt><dd>TMDB</dd></div><div><dt>Albums</dt><dd>iTunes Search API</dd></div></dl></div><div className="architecture mono" aria-label="Media provider architecture"><span>Select type</span><b>↓</b><div><span>Open Library</span><span>TMDB</span><span>iTunes</span></div><b>↓</b><span>Normalization</span><b>↓</b><span>Media</span><b>↓</b><span>Entry</span></div>
        <div className="subsection split"><div><h3>Search iteration</h3><p>Search initially tried to abstract too much away from the user. In practice, each provider behaves differently and relevance improved when the media type was selected first.</p><p className="mono note">Results are normalized, ranked and conservatively deduplicated.</p></div><Shot asset={imageAssets.add} caption="03 / ADD ENTRY — Type first, then search." /></div>
        <div className="engineering-callout"><span className="mono">Engineering callout</span><div><p>Albums initially used MusicBrainz. During implementation, TLS and reliability issues made the provider unnecessarily fragile.</p><p>Because provider-specific logic was isolated behind the normalization layer, I replaced it without changing the Entry model or interface.</p></div><div className="swap mono"><span>MusicBrainz</span><b>↓</b><span>iTunes</span><small>UI → unchanged<br />Entry model → unchanged</small></div></div>
      </section>

      <section className="random-section wrap"><SectionHead number="05" title="Finding the visual language" /><div className="split"><div className="reading"><p>Early explorations leaned toward an editorial aesthetic.</p><p>Serif typography and large headings looked polished, but also made Random feel too closely associated with books. The product needed to feel equally natural around films, series and albums.</p></div><Shot asset={imageAssets.early} caption="04 / EARLY DIRECTION — An editorial starting point." /></div><p className="section-intro offset">I moved toward the visual language of old web utilities, database interfaces and classic desktop software—not to reproduce them literally, but to borrow their structure and directness.</p><div className="principles mono"><span>IBM Plex Sans</span><span>IBM Plex Mono</span><span>Thin rules</span><span>Square controls</span><span>Compact metadata</span><span>Limited color</span><span>Structured grids</span><span>[Log] [Feed]</span></div></section>

      <section className="random-section wrap"><SectionHead number="06" title="Keeping context" /><div className="split"><div className="reading"><p>Entry Detail originally behaved like a traditional page transition.</p><p>That worked on mobile, but on desktop it interrupted the main activity: browsing the Log.</p><p>I changed the desktop experience to a master/detail pattern, keeping the Log visible while the selected Entry opens in a contextual panel.</p></div><div className="viewport-diagram mono"><div><small>Desktop</small><p><span>Filters</span><span>Log</span><span>Entry detail</span></p></div><div><small>Mobile</small><p><span>Log</span><b>↓</b><span>Entry detail</span></p></div></div></div><Shot asset={imageAssets.log} caption="06 / MASTER + DETAIL — Context stays visible on desktop." /><PullQuote>The interaction changes by viewport, but the Entry itself remains the same product object.</PullQuote></section>

      <section className="random-section wrap"><SectionHead number="07" title="Sharing without making social the core" /><div className="split"><p className="section-intro">Instead of starting with likes, comments or engagement mechanics, Random lets users take an Entry outside the product as a visual artifact.</p><div className="share-formats mono"><div><span>Story</span><b>1080 × 1920</b></div><div><span>Square</span><b>1080 × 1080</b></div></div></div><Shot asset={imageAssets.share} caption="07 / SHARE — Formats and live preview." />
        <div className="subsection"><h3>From media-first to note-first</h3><p className="section-intro">The first Story design prioritized the media itself. It worked, but the most personal part of an Entry—the user’s Note—was secondary. I inverted the hierarchy.</p><div className="shot-pair portrait-pair"><Shot asset={imageAssets.mediaShare} caption="08 / MEDIA-FIRST" ratio="portrait" /><Shot asset={imageAssets.noteShare} caption="09 / NOTE-FIRST" ratio="portrait" /></div><PullQuote>The shared artifact should communicate what the person thought first, and what they watched, read or listened to second.</PullQuote></div>
        <div className="subsection split"><div><h3>Share interaction</h3><p>Share initially opened as a dedicated page. Once the desktop master/detail flow existed, that navigation felt unnecessarily disruptive.</p><p>Share became a modal with an immediate client-side preview. The high-resolution PNG is generated only when Download Image is requested.</p></div><div className="flow mono">{["Entry","Share modal","Preview","Download","PNG"].map((item,i)=><span key={item}>{item}{i<4&&<b>↓</b>}</span>)}</div></div>
      </section>

      <section className="random-section wrap"><SectionHead number="08" title="Social, but secondary" /><p className="section-intro offset">Public Entries can appear in a global Feed and on a Public Profile. I intentionally kept the social layer small.</p><div className="shot-pair"><Shot asset={imageAssets.feed} caption="10 / FEED — A lightweight public stream." /><Shot asset={imageAssets.profile} caption="11 / PUBLIC PROFILE — Only chosen public Entries." /></div><p className="social-limits mono">No likes · No comments · No followers · No engagement counts</p><PullQuote>Personal first, social second.</PullQuote></section>

      <section className="random-section wrap"><SectionHead number="09" title="Building the system" /><div className="decision-grid">{[
        ["Normalized providers","External APIs are normalized server-side so the UI never depends directly on provider-specific response structures."],
        ["Database-level privacy","Public and private access is enforced with Supabase Row Level Security, not only hidden in the interface."],
        ["Server-first","Read-heavy surfaces use Server Components while client JavaScript is reserved for interactive behavior."],
        ["URL-based state","Search, filters and desktop Entry selection use URL state where useful instead of unnecessary global state."]
      ].map(([title,text],i)=><div key={title}><span className="mono">0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="random-section showcase wrap"><SectionHead number="10" title="The current experience" /><div className="shot-pair"><Shot asset={imageAssets.add} caption="01 / ADD ENTRY — Select type, search, then add details." /><Shot asset={imageAssets.feed} caption="02 / FEED — A lightweight public stream of Entries." /></div><div className="shot-pair"><Shot asset={imageAssets.profile} caption="03 / PUBLIC PROFILE — Only Entries chosen for sharing." /><Shot asset={imageAssets.share} caption="04 / SHARE — Story and Square artifacts." /></div></section>

      <section className="random-section month-case wrap"><SectionHead number="11" title="Exploring the log through time" /><div className="split"><div className="reading"><p>After completing the core experience, I wanted to explore another way of revisiting Entries.</p><p>The Log works well for individual records, but it doesn’t immediately show how books, films, series and albums were distributed over time.</p></div><p className="section-intro">Month is a calendar-based view built from the same Entries and their actual read, watched or listened date—not a separate analytics layer.</p></div><MonthCalendar />
        <div className="month-principle"><span className="mono">Design principle</span><p>Remember, don’t measure.</p><div><p>The first version included simple totals by media type. They remain secondary context—not the focus.</p><p className="mono">No streaks · No goals · No comparisons · No performance metrics</p></div></div>
        <PullQuote>What was part of my month?</PullQuote>
        <div className="subsection"><h3>Letting the media create the visual identity</h3><div className="split"><p className="section-intro">The first iteration limited the covers visible on busy days. Although technically accurate, it made the month feel incomplete. Populated days became small artwork compositions instead.</p><div className="artwork-rules mono">{[["01","Single artwork"],["02","Two-image composition"],["03","Balanced composition"],["04","2 × 2 collage"],["05+","Artwork + overflow"]].map(([count,label])=><div key={count}><span>{count}</span><p>{label}</p></div>)}</div></div><blockquote className="random-pull compact-pull">The artwork is the accent color.</blockquote><p className="reading narrow">The interface stays deliberately neutral. Covers, posters and album artwork provide the changing color and personality, so each person’s history naturally makes Random visually unique.</p></div>
        <div className="subsection"><h3>Responsive by intent, not by scaling</h3><div className="responsive-month"><div><span className="mono">Desktop / Artwork collage</span><div className="desktop-day"><span className="mono">18</span><div className="art-stack art-count-4"><i/><i/><i/><i/></div></div></div><div><span className="mono">Mobile / Activity indicator</span><div className="mobile-day"><b>18</b><span><i/><i/><i/><i/></span><small className="mono">4 entries</small></div></div></div><p className="reading narrow">On larger screens, populated days use artwork collages. On mobile, they become compact activity indicators and counts while the selected day’s Entries appear below. The interfaces don’t look identical; they solve the same task appropriately for the available space.</p></div>
        <div className="month-detail-grid"><div><span className="mono">Active ≠ Focus</span><h3>Separating interface states</h3><p>Testing Month on mobile exposed an unintended highlight around the active navigation item. Active now communicates the current location through Random’s monochrome structure; focus-visible remains a distinct keyboard indicator.</p></div><div><span className="mono">A direction, not a shipped feature</span><h3>Monthly Recap</h3><p>The next exploration turns a month into an artwork-first artifact. Statistics remain supporting metadata; the media remains the protagonist.</p></div><MonthlyRecap /></div><PullQuote>Not “How much did I consume?” but “What was part of my month?”</PullQuote>
      </section>

      <section className="random-section wrap"><SectionHead number="12" title="Iteration" /><div className="iteration-grid mono">{[["Unified search","Explicit media type"],["MusicBrainz","iTunes"],["Log + Archive","Log"],["Entry page","Desktop master / detail"],["Media-first share","Note-first share"],["Limited covers","Artwork compositions"],["Scaled calendar","Responsive representation"]].map(([before,after],i)=><div key={before}><span>0{i+1}</span><p>{before}<b>↓</b>{after}</p></div>)}</div><p className="section-intro offset">Build → use → notice a problem → reconsider the representation → establish a design principle → extend that principle into the next feature.</p></section>

      <section className="random-section wrap"><SectionHead number="13" title="What’s next" /><p className="section-intro offset">Random is an evolving personal project. The current V1 establishes the core logging, privacy, social, sharing and Month experience.</p><div className="status-columns mono"><div><h3>Current</h3>{["Personal Log","Month view","Public / Private Entries","Feed","Public Profiles","Story / Square sharing"].map(x=><p key={x}>✓ {x}</p>)}</div><div><h3>Exploring</h3>{["Artwork-first Monthly Recap","Weekly / monthly history","More ways to revisit Entries"].map(x=><p key={x}>○ {x}</p>)}</div></div></section>

      <section className="random-section reflection wrap"><SectionHead number="14" title="Reflection" /><div className="reading narrow"><p>Random started as a relatively straightforward media tracker, but building it changed the product several times.</p><p>I removed an Archive after realizing that a structurally valid feature wasn’t necessarily a useful one. I changed API providers without changing the product model. Entry Detail changed after seeing how navigation affected browsing, Share moved from media-first to note-first, and Month evolved from a scaled calendar into a representation shaped by reflection and artwork.</p><p>Those iterations gradually clarified what Random should be: a quiet personal record of the things you read, watch and listen to—and what you thought about them.</p></div><PullQuote>Building design and implementation together made it easier to remove, reshape and simplify features once they existed as real interactions.</PullQuote></section>
      <nav className="next-project wrap" aria-label="Next project"><span className="mono">Continue exploring</span><Link href={`/lab/${next.slug}`}>{next.title} →</Link></nav>
    </article><Footer />
  </main>;
}
