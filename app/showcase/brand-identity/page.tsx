import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Brand Identity Showcase | Liba Natur Brilian",
  description:
    "Explore a curated collection of brand identity projects showcasing logo design, visual systems, and brand guidelines.",
}

export default function BrandIdentityShowcase() {
  const projects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      category: "Technology",
      year: "2024",
      description: "Sustainable technology company focused on renewable energy solutions.",
      tags: ["Logo Design", "Brand Guidelines", "Stationery"],
      image: "/placeholder-1ga91.png",
      colors: ["#2D5A27", "#4A9B3E", "#7BC142", "#A8D982"],
    },
    {
      id: 2,
      title: "Artisan Coffee Co.",
      category: "Food & Beverage",
      year: "2024",
      description: "Premium coffee roastery with focus on ethical sourcing and craftsmanship.",
      tags: ["Logo Design", "Packaging", "Brand Identity"],
      image: "/placeholder-0fl3p.png",
      colors: ["#8B4513", "#D2691E", "#F4A460", "#FFF8DC"],
    },
    {
      id: 3,
      title: "Nexus Digital Agency",
      category: "Digital Marketing",
      year: "2023",
      description: "Full-service digital marketing agency specializing in social media and content creation.",
      tags: ["Logo Design", "Web Design", "Social Media"],
      image: "/placeholder-038fz.png",
      colors: ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B"],
    },
    {
      id: 4,
      title: "Wellness Studio",
      category: "Health & Wellness",
      year: "2023",
      description: "Holistic wellness center offering yoga, meditation, and therapeutic services.",
      tags: ["Logo Design", "Brand Guidelines", "Signage"],
      image: "/wellness-studio-logo.png",
      colors: ["#059669", "#10B981", "#6EE7B7", "#ECFDF5"],
    },
    {
      id: 5,
      title: "Urban Architecture",
      category: "Architecture",
      year: "2023",
      description: "Contemporary architecture firm specializing in sustainable urban development.",
      tags: ["Logo Design", "Portfolio Design", "Business Cards"],
      image: "/placeholder-bb2xh.png",
      colors: ["#1F2937", "#374151", "#6B7280", "#D1D5DB"],
    },
    {
      id: 6,
      title: "Creative Kids Academy",
      category: "Education",
      year: "2022",
      description: "Art and creativity-focused educational program for children aged 5-12.",
      tags: ["Logo Design", "Educational Materials", "Merchandise"],
      image: "/playful-kids-education-logo.png",
      colors: ["#F59E0B", "#EF4444", "#8B5CF6", "#10B981"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">Showcase</Badge>
              <Badge variant="outline">Brand Identity</Badge>
              <Badge variant="outline">Logo Design</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Brand Identity Showcase</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A curated collection of brand identity projects that showcase the power of strategic design in building
              memorable and effective brand experiences across various industries.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{projects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2022 - 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-7">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="food">Food & Beverage</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Technology")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="food" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Food & Beverage")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Digital Marketing")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="wellness" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Health & Wellness")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Architecture")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === "Education")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Process Section */}
          <div className="mt-20 pt-12 border-t border-border">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Brand Identity Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every successful brand identity follows a strategic process that ensures the final design effectively
                communicates the brand's values and resonates with its target audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  Understanding the brand, audience, and competitive landscape through research and strategy sessions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Concept</h3>
                <p className="text-muted-foreground">
                  Developing creative concepts and visual directions that align with the brand strategy and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Creating the visual identity system including logo, colors, typography, and brand guidelines.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground">
                  Applying the brand identity across all touchpoints and providing guidelines for consistent usage.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to build your brand?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's work together to create a brand identity that tells your story and connects with your audience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn About My Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {project.colors.map((color: string, index: number) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <Button variant="ghost" size="sm" className="group-hover:text-primary">
            View Project <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
