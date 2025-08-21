"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, Eye, Clock, Users, Grid3X3, List } from "lucide-react"

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    {
      id: 1,
      title: "Corporate Training Video Series",
      category: "video",
      image: "/placeholder.svg?height=400&width=600&text=Corporate+Training+Videos",
      description: "12-part training series for employee onboarding with motion graphics and interactive elements.",
      longDescription:
        "A comprehensive video editing project for Yuramedia Link, featuring a 12-part training series that combines engaging visuals, clear narration, and interactive elements to enhance employee learning.",
      link: "/projects/video-editing-showcase",
      external: false,
      tags: ["Video Editing", "Motion Graphics", "Corporate"],
      duration: "3 months",
      client: "Yuramedia Link",
      year: "2024",
      status: "Completed",
      teamSize: "5 people",
      role: "Lead Video Editor",
    },
    {
      id: 2,
      title: "Brand Identity Design Package",
      category: "design",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity+Design",
      description: "Complete brand identity including logo, color palette, typography, and brand guidelines.",
      longDescription:
        "Comprehensive brand identity development for a growing tech startup, including logo design, color system, typography selection, and detailed brand guidelines for consistent application across all touchpoints.",
      link: "/projects/brand-identity-design",
      external: false,
      tags: ["Branding", "Logo Design", "Print Design"],
      duration: "6 weeks",
      client: "TechStart Inc.",
      year: "2024",
      status: "Completed",
      teamSize: "2 people",
      role: "Lead Designer",
    },
    {
      id: 3,
      title: "Software Localization Project",
      category: "translation",
      image: "/placeholder.svg?height=400&width=600&text=Software+Translation",
      description: "Complete UI/UX translation and localization of mobile application from English to Indonesian.",
      longDescription:
        "End-to-end localization of a fintech mobile application, including UI translation, cultural adaptation, and user experience optimization for the Indonesian market.",
      link: "/projects/software-localization",
      external: false,
      tags: ["Translation", "Localization", "Mobile App"],
      duration: "4 weeks",
      client: "FinTech Startup",
      year: "2024",
      status: "Completed",
      teamSize: "3 people",
      role: "Lead Translator",
    },
    {
      id: 4,
      title: "Social Media Video Campaign",
      category: "video",
      image: "/placeholder.svg?height=400&width=600&text=Social+Media+Campaign",
      description: "30-day social media video campaign with daily content creation and community management.",
      longDescription:
        "Comprehensive social media strategy and execution for Kediri Televisi, including daily video content creation, editing, and community engagement across multiple platforms.",
      link: "https://www.foriio.com/naturbrilian/categories/Video",
      external: true,
      tags: ["Social Media", "Content Creation", "Video Editing"],
      duration: "1 month",
      client: "Kediri Televisi",
      year: "2024",
      status: "Completed",
      teamSize: "4 people",
      role: "Content Creator & Editor",
    },
    {
      id: 5,
      title: "Documentary Post-Production",
      category: "video",
      image: "/placeholder.svg?height=400&width=600&text=Documentary+Editing",
      description:
        "Complete post-production workflow for 45-minute documentary including color grading and sound design.",
      longDescription:
        "Full post-production services for an independent documentary film, including editing, color correction, sound design, and final delivery in multiple formats for festival submission.",
      link: "https://www.foriio.com/naturbrilian/categories/Video",
      external: true,
      tags: ["Documentary", "Color Grading", "Sound Design"],
      duration: "8 weeks",
      client: "Independent Filmmaker",
      year: "2023",
      status: "Completed",
      teamSize: "2 people",
      role: "Post-Production Supervisor",
    },
    {
      id: 6,
      title: "E-learning Platform Translation",
      category: "translation",
      image: "/placeholder.svg?height=400&width=600&text=E-learning+Translation",
      description: "Comprehensive translation of educational platform content and user interface elements.",
      longDescription:
        "Large-scale translation project for an online education platform, including course content, user interface, help documentation, and marketing materials from English to Indonesian.",
      link: "/projects/elearning-translation",
      external: false,
      tags: ["E-learning", "Educational Content", "UI Translation"],
      duration: "10 weeks",
      client: "EduTech Company",
      year: "2023",
      status: "Completed",
      teamSize: "6 people",
      role: "Translation Team Lead",
    },
    {
      id: 7,
      title: "Restaurant Branding & Menu Design",
      category: "design",
      image: "/placeholder.svg?height=400&width=600&text=Restaurant+Branding",
      description: "Complete visual identity for local restaurant including logo, menu design, and signage.",
      longDescription:
        "Full branding package for a new Indonesian restaurant, including logo design, menu layouts, signage, packaging design, and social media templates.",
      link: "/projects/restaurant-branding",
      external: false,
      tags: ["Restaurant", "Menu Design", "Signage"],
      duration: "5 weeks",
      client: "Warung Nusantara",
      year: "2023",
      status: "Completed",
      teamSize: "1 person",
      role: "Brand Designer",
    },
    {
      id: 8,
      title: "Gaming App Localization",
      category: "translation",
      image: "/placeholder.svg?height=400&width=600&text=Gaming+App+Translation",
      description: "Localization of mobile gaming application with cultural adaptation for Indonesian market.",
      longDescription:
        "Complete localization of a popular mobile game, including in-game text, character dialogue, marketing materials, and cultural adaptation of game mechanics for Indonesian players.",
      link: "/projects/gaming-localization",
      external: false,
      tags: ["Gaming", "Mobile App", "Cultural Adaptation"],
      duration: "6 weeks",
      client: "Game Studio",
      year: "2023",
      status: "Completed",
      teamSize: "4 people",
      role: "Localization Specialist",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "video", name: "Video Production", count: projects.filter((p) => p.category === "video").length },
    { id: "design", name: "Graphic Design", count: projects.filter((p) => p.category === "design").length },
    { id: "translation", name: "Translation", count: projects.filter((p) => p.category === "translation").length },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="mb-2"
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </div>

      {/* Projects Grid */}
      {viewMode === "grid" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden h-full group">
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
                    target={project.external ? "_blank" : "_self"}
                    rel={project.external ? "noopener noreferrer" : ""}
                    className="bg-primary text-primary-foreground p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.client}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {project.teamSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target={project.external ? "_blank" : "_self"}
                  rel={project.external ? "noopener noreferrer" : ""}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  {project.external ? "View External" : "View Details"}
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Projects List */}
      {viewMode === "list" && (
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.longDescription}</p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium">Client:</span>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Team:</span>
                      <p className="text-muted-foreground">{project.teamSize}</p>
                    </div>
                    <div>
                      <span className="font-medium">Role:</span>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target={project.external ? "_blank" : "_self"}
                    rel={project.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {project.external ? "View External Project" : "View Project Details"}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No projects found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </>
  )
}
