import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold tracking-tight">
              Liba<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">Graphics Designer & Video Editor | Translator EN/ID</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/in/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:liba.natur.brilian@gmail.com"
              className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Liba Natur Brilian. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
