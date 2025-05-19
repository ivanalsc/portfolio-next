import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import MusicAlbumShowcase from "@/components/music/music-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#1a1a1a] flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-[#e0ddd5]">
        <div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
        
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
                My name is Ivana.
                <br />
                Frontend Developer
                <br />based in Argentina
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-1 text-right">
                <p className="text-sm">{"</>"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="playground" className="container mx-auto px-4 py-12 border-t border-[#e0ddd5]">
          <h2 className="text-sm mb-8">Playground</h2>
          <p className="mb-8 text-s">A selection of recent personal projects where I explore ideas, try new tools, and have fun building.</p>

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
                  <div className="flex space-x-2 text-s mb-4 flex-wrap justify-start">
                  <span>Next</span>
                    <span>Tailwind CSS</span>
                    <span>Shadcn/ui</span>
                    <span>Zustand</span>
                    <span>Storybook</span>
                  </div>
                  <h3 className="text-2xl font-normal mb-4">E-commerce UI Components – Lightweight Library</h3>
                  <p className="text-sm text-gray-600 mb-6">
                  Reusable, accessible, and production-ready components for modern e-commerce apps.
Built with Next.js, Shadcn/ui, Zustand, and Tailwind CSS.<br />
Fully documented in Storybook.
                  </p>
                </div>
                <Link
                  href="https://ecommerce-components-ten.vercel.app/?path=/story/components-productgrid--default"
                  target="_blank"
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
                  src="/screenshots/art-gallery.png"
                  alt="Art Gallery project preview"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex space-x-2 text-s mb-4 flex-wrap justify-start">
                    <span>Vite</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                    <span>Tanstack Query</span>
                    <span>Framer Motion</span>

                  </div>
                  <h3 className="text-2xl font-normal mb-4">Art Gallery – A Virtual Collection from the Art Institute of Chicago</h3>
                  <p className="text-sm text-gray-600 mb-6">
                  Explore artworks and discover artists through a curated web experience powered by the Art Institute of Chicago API.
                  Built with React and enhanced with smooth animations using Framer Motion.
                                    </p>
                </div>
                <Link
                  href="https://art-gallery-tawny.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center text-sm border border-[#1a1a1a] rounded-full px-6 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors w-fit"
                >
                  View live project
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
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
                  <div className="flex space-x-2 text-s mb-4 flex-wrap justify-start">
                  <span>Next</span>
                    <span>Tailwind CSS</span>
                    <span>Shadcn/ui</span>
                    <span>Supabase</span>
                    <span>V0</span>
                  </div>
                  <h3 className="text-2xl font-normal mb-4">RNDM – Track What You Watch, Read, and Listen To</h3>
                  <p className="text-sm text-gray-600 mb-6">
                  A web app for logging your favorite series, movies, books, and music.
                  Use it as a personal journal or share your taste through a public social feed, where users can explore and recommend cultural content.
                  </p>
                </div>
                <Link
                  href="https://github.com/ivanalsc/RNDM"
                  target="_blank"
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
             Since I was a kid, I’ve been fascinated by how technology evolves and transforms our daily lives. I’ve always been curious about how it works, how it improves over time, and how it can make things easier for us.




              </p>
               <p className="text-lg mb-6">
After finishing high school, I decided to study Educational Psychology because I’m passionate about learning processes and the opportunity to help others improve their educational experiences. I worked for three years in inclusive education and during that time, I felt the need to create an app to support my work. That was my first encounter with development — and from that moment on, I couldn't stop learning and wanting to build more. I discovered that my ideas could come to life through code.

               </p>
              <p className="text-lg mb-6">
Since 2020 I’ve been working as a web developer, building interfaces for e-commerce websites. At the same time, I’m always working on side projects that allow me to keep exploring, learning, and challenging myself. I’m especially interested in staying up to date with tech advancements and AI, and I try to stay curious and in constant motion.
             
              </p>
              
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm mb-4">Tech Stack | Skills</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>HTML/CSS/Tailwind</li>

                  <li>JavaScript/TypeScript</li>
                  <li>React/Next.js</li>
                  <li>Shadcn/UI</li>
                  <li>Framer Motion</li>
                  <li>Accessibility</li>
                  <li>Storybook</li>
                  <li>Web performance optimization</li>
                  <li></li>
                  <li>Languages: Spanish (native), English, Portuguese</li>


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
        
        <section id="contact" className="container mx-auto px-4 py-24 border-t border-[#e0ddd5]">
          <MusicAlbumShowcase />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-[#e0ddd5] text-sm">
        <div className="flex justify-between items-center">
          <p>© 2025</p>
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
