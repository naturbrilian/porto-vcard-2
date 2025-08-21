"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background dark:from-primary/10 dark:to-background z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-2">{t.hero.greeting}</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">{t.hero.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">{t.hero.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Button asChild size="lg">
              <Link href="#contact">{t.hero.getInTouch}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">{t.hero.viewWork}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <Link
              href="https://linkedin.com/in/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/naturbrilian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
