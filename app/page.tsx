import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Gallery from "@/components/gallery"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Gallery />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  )
}
