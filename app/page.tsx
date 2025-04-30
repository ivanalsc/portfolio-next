import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#1a1a1a] flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-[#e0ddd5]">
        <div>
          <h2 className="text-sm font-normal">Frontend Developer</h2>
          <h1 className="text-sm font-normal">Ivana Sosa Cordero</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="#playground" className="text-sm hover:underline">
            Playground
          </Link>
          <Link href="#about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="#contact" className="text-sm hover:underline">
            Get in touch
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-normal leading-tight">
                My name is Ivana
                <br />
                Frontend Developer
                <br />based in Argentina
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-1 text-right">
                <p className="text-sm">Frontend Development</p>
                <p className="text-sm">Interactive Experiences</p>
              </div>
            </div>
          </div>
        </section>

        <section id="playground" className="container mx-auto px-4 py-12 border-t border-[#e0ddd5]">
          <h2 className="text-sm mb-2">Playground</h2>
          <p className="mb-2 text-xs">A selection of recent personal projects where I explore ideas, try new tools, and have fun building.</p>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f0efe9] rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/ecommerce-components.png"
                  alt="Ecommerce components preview"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex space-x-2 text-xs mb-4">
                    <span>Frontend Development</span>
                  </div>
                  <h3 className="text-2xl font-normal mb-4">Ecommerce components — Small UI Library</h3>
                  <p className="text-sm text-gray-600 mb-6">
                  Reusable, accessible, and production-ready UI components for modern e-commerce apps — built with Next.js, shadcn/ui, Zustand, and Tailwind CSS.
                  </p>
                </div>
                <Link
                  href="https://ecommerce-components-ten.vercel.app/?path=/story/components-productgrid--default"
                  className="inline-flex items-center text-sm border border-[#1a1a1a] rounded-full px-6 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors w-fit"
                >
                  View live project
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f0efe9] rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/rndm.png"
                  alt="Rndm project preview"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex space-x-2 text-xs mb-4">
                    <span>Frontend Development</span>
                    <span>Interactive Design</span>
                  </div>
                  <h3 className="text-2xl font-normal mb-4">RNDM — Web for tracking series, movies, books and music</h3>
                  <p className="text-sm text-gray-600 mb-6">
                  Web app for tracking watched series and movies, read books, and listened to music.
                  It can be used as a private log or as a public social feed, where users can share and discover cultural content through recommendations.
                  </p>
                </div>
                <Link
                  href="https://github.com/ivanalsc/RNDM"
                  className="inline-flex items-center text-sm border border-[#1a1a1a] rounded-full px-6 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors w-fit"
                >
                  View repo (Work in progress)
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-24 border-t border-[#e0ddd5]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm mb-8">About</h2>
              <p className="text-lg mb-6">
              Frontend Developer with 4+ years of experience building scalable, accessible user interfaces for e-commerce platforms.
              </p>
              <p className="text-lg mb-6">
              Driven by curiosity and a constant search for new challenges, I’m currently learning and evolving toward a Design Engineer role — focusing on building design systems, improving accessibility, and enhancing the developer experience. I enjoy crafting reusable components with React, TypeScript, and Tailwind CSS, and I thrive in collaborative teams. 
              </p>
              
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm mb-4">Tech Stack</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>HTML/CSS/Tailwind</li>

                  <li>JavaScript/TypeScript</li>
                  <li>React/Next.js</li>
                  <li>Accessibility</li>
                  <li>Shadcn/UI</li>
                  <li>Framer Motion</li>
                  <li>Storybook</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm mb-4">Experience</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium"> Frontend Developer</p>
                    <p>Innew — 2020-Present</p>
                  </div>
                
              
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-24 border-t border-[#e0ddd5]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm mb-8"><Link href="mailto:ivanasosacordero@gmail.com" className="text-lg underline hover:no-underline flex items-center gap-1">Get in touch <Mail size={20} strokeWidth={2} /></Link></h2>
             
            </div>
       
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-[#e0ddd5] text-sm">
        <div className="flex justify-between items-center">
          <p>© 2025 All rights reserved.</p>
          <div className="flex space-x-4">
           
            <Link href="https://github.com/ivanalsc" className="hover:underline">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/ivana-sosa-cordero/" className="hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
