import Link from "next/link";

export function Header({ active = "index" }: { active?: "index" | "lab" | "about" }) {
  return <header className="site-header">
    <Link className="brand" href="/">Ivana Sosa Cordero <span>✳</span></Link>
    <nav aria-label="Primary navigation">
      <Link className={active === "index" ? "active" : ""} href="/">Index</Link>
      <Link className={active === "lab" ? "active" : ""} href="/lab">Lab</Link>
      <Link className={active === "about" ? "active" : ""} href="/#about">About</Link>
    </nav>
  </header>;
}
