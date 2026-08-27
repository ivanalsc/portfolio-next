import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivana Sosa Cordero — Curiosity Driven Developer",
  description: "Frontend developer exploring the intersection of design, technology and ideas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
