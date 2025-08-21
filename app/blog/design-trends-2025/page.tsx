import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, Heart } from "lucide-react"

export default function DesignTrendsPost() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Graphic Design</Badge>
                <Badge variant="secondary">Trends</Badge>
                <Badge variant="secondary">2025</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Graphic Design Trends That Will Dominate 2025
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Liba Natur Brilian
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  April 15, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />6 min read
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Design+Trends+2025"
                alt="Graphic Design Trends 2025"
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                As we move through 2025, the graphic design landscape continues to evolve at an unprecedented pace. From
                AI-generated art to sustainable design practices, this year brings exciting new trends that are
                reshaping how we approach visual communication.
              </p>

              <h2>1. AI-Assisted Design Tools</h2>
              <p>
                Artificial intelligence is no longer just a buzzword in design—it's becoming an integral part of the
                creative process. Tools like Adobe's AI features and standalone platforms are helping designers work
                more efficiently while maintaining creative control.
              </p>

              <h2>2. Sustainable Design Practices</h2>
              <p>
                Environmental consciousness is driving design decisions. From choosing eco-friendly printing methods to
                creating digital-first designs that reduce paper waste, sustainability is becoming a core consideration
                in every project.
              </p>

              <h2>3. Bold Typography Experiments</h2>
              <p>
                Typography is taking center stage with experimental fonts, variable typefaces, and creative text layouts
                that push the boundaries of traditional design rules.
              </p>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Liba Natur Brilian</h4>
                      <p className="text-sm text-muted-foreground">Graphic Designer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional graphic designer with expertise in branding and visual communication.
                  </p>
                  <Button size="sm" className="w-full">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
