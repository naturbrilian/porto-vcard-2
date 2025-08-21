"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: "About", href: "/about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.blog, href: "/blog" },
    { name: "CV", href: "/cv" },
    { name: t.nav.contact, href: "/contact" },
  ]

  const themeItems = [
    { name: "Modern Minimalist", href: "/themes/modern-minimalist" },
    { name: "Creative Bold", href: "/themes/creative-bold" },
    { name: "Professional Corporate", href: "/themes/professional-corporate" },
    { name: "Artistic Vibrant", href: "/themes/artistic-vibrant" },
  ]

  const desktopScreenshots = [
    { name: "Brand Identity", href: "/showcase/brand-identity" },
    { name: "Video Productions", href: "/showcase/video-productions" },
    { name: "Translation Projects", href: "/showcase/translation-projects" },
    { name: "UI/UX Designs", href: "/showcase/ui-ux-designs" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
            Liba<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Stuff Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                  Stuff <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                {themeItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Desktop Screenshot</DropdownMenuLabel>
                {desktopScreenshots.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="ml-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Stuff Section */}
              <div className="pt-2 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground mb-2">STUFF</p>

                {/* Theme Subsection */}
                <p className="text-xs font-medium text-muted-foreground/80 mb-1 pl-2">Theme</p>
                {themeItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium hover:text-primary transition-colors py-1 pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Desktop Screenshot Subsection */}
                <p className="text-xs font-medium text-muted-foreground/80 mb-1 pl-2 mt-3">Desktop Screenshot</p>
                {desktopScreenshots.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium hover:text-primary transition-colors py-1 pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
