"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Video Editing Project",
      category: "video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional video editing for a corporate client.",
      link: "https://www.foriio.com/naturbrilian/categories/Video",
    },
    {
      title: "Graphic Design Portfolio",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      description: "Collection of branding and marketing materials.",
      link: "https://www.foriio.com/naturbrilian/categories/Video",
    },
    {
      title: "Translation Project",
      category: "translation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Software localization from English to Indonesian.",
      link: "#",
    },
    {
      title: "Social Media Campaign",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      description: "Visual content creation for social media platforms.",
      link: "#",
    },
    {
      title: "Documentary Editing",
      category: "video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Editing and post-production for a short documentary.",
      link: "https://www.foriio.com/naturbrilian/categories/Video",
    },
    {
      title: "App Translation",
      category: "translation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete UI translation for a mobile application.",
      link: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore my recent work and creative projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-2 mb-10"
        >
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} className="mb-2">
            All Projects
          </Button>
          <Button
            variant={filter === "design" ? "default" : "outline"}
            onClick={() => setFilter("design")}
            className="mb-2"
          >
            Graphic Design
          </Button>
          <Button
            variant={filter === "video" ? "default" : "outline"}
            onClick={() => setFilter("video")}
            className="mb-2"
          >
            Video Editing
          </Button>
          <Button
            variant={filter === "translation" ? "default" : "outline"}
            onClick={() => setFilter("translation")}
            className="mb-2"
          >
            Translation
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      aria-label={`View ${project.title}`}
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
