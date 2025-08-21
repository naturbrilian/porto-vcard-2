import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Play, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Video Productions Showcase | Liba Natur Brilian",
  description:
    "Explore a collection of video production projects including commercials, documentaries, and creative content.",
}

export default function VideoProductionsShowcase() {
  const videos = [
    {
      id: 1,
      title: "EcoTech Product Launch",
      category: "Commercial",
      duration: "2:30",
      year: "2024",
      description:
        "Dynamic product launch video showcasing sustainable technology solutions with motion graphics and testimonials.",
      tags: ["Motion Graphics", "Product Demo", "Corporate"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "EcoTech Solutions",
    },
    {
      id: 2,
      title: "Artisan Coffee Story",
      category: "Brand Documentary",
      duration: "5:45",
      year: "2024",
      description:
        "Cinematic brand story following the journey from bean to cup, highlighting craftsmanship and ethical sourcing.",
      tags: ["Documentary", "Brand Story", "Cinematography"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "Artisan Coffee Co.",
    },
    {
      id: 3,
      title: "Digital Marketing Explainer",
      category: "Explainer",
      duration: "3:15",
      year: "2024",
      description:
        "Animated explainer video breaking down complex digital marketing concepts with engaging visuals and clear narration.",
      tags: ["Animation", "Explainer", "Educational"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "Nexus Digital Agency",
    },
    {
      id: 4,
      title: "Wellness Center Testimonials",
      category: "Testimonial",
      duration: "4:20",
      year: "2023",
      description:
        "Heartfelt client testimonials showcasing transformation stories and the impact of holistic wellness practices.",
      tags: ["Testimonials", "Wellness", "Interviews"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "Wellness Studio",
    },
    {
      id: 5,
      title: "Architecture Showcase Reel",
      category: "Portfolio",
      duration: "3:45",
      year: "2023",
      description: "Stunning architectural showcase featuring drone footage and time-lapse construction sequences.",
      tags: ["Drone Footage", "Time-lapse", "Architecture"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "Urban Architecture",
    },
    {
      id: 6,
      title: "Creative Kids Academy Promo",
      category: "Promotional",
      duration: "1:50",
      year: "2022",
      description: "Energetic promotional video capturing the joy and creativity of children's art education programs.",
      tags: ["Promotional", "Education", "Children"],
      thumbnail: "/placeholder.svg?height=300&width=500",
      client: "Creative Kids Academy",
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
              <Badge variant="outline">Video Production</Badge>
              <Badge variant="outline">Motion Graphics</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Productions Showcase</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A collection of video production projects spanning commercials, documentaries, explainer videos, and
              creative content that tells compelling stories and engages audiences across various platforms.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{videos.length} Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2022 - 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Total: 21 minutes</span>
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
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="documentary">Documentary</TabsTrigger>
              <TabsTrigger value="explainer">Explainer</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
              <TabsTrigger value="promotional">Promotional</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos
                  .filter((v) => v.category === "Commercial")
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="documentary" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos
                  .filter((v) => v.category === "Brand Documentary")
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="explainer" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos
                  .filter((v) => v.category === "Explainer")
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonial" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos
                  .filter((v) => v.category === "Testimonial")
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="promotional" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos
                  .filter((v) => v.category === "Promotional")
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Services Section */}
          <div className="mt-20 pt-12 border-t border-border">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Video Production Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From concept to final delivery, I provide comprehensive video production services that bring your
                stories to life and engage your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Concept Development</h3>
                <p className="text-muted-foreground">
                  Creative ideation and storyboarding to develop compelling video concepts that align with your goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Production</h3>
                <p className="text-muted-foreground">
                  Professional filming with high-quality equipment, lighting, and audio to capture your vision
                  perfectly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Post-Production</h3>
                <p className="text-muted-foreground">
                  Expert editing, color grading, motion graphics, and sound design to create polished final products.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Delivery & Distribution</h3>
                <p className="text-muted-foreground">
                  Optimized delivery in multiple formats for various platforms and distribution channels.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to tell your story?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create compelling video content that engages your audience and achieves your business objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Video Project</Link>
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

function VideoCard({ video }: { video: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg relative">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="lg" className="rounded-full">
            <Play className="mr-2 h-5 w-5" />
            Play Video
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {video.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{video.year}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{video.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {video.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Client: {video.client}</span>
          <Button variant="ghost" size="sm" className="group-hover:text-primary">
            Watch Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
