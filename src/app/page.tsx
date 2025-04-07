import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import TechStack from "@/components/sections/tech-stack"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Projects from "@/components/sections/projects"
import Blog from "@/components/sections/blog"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}

