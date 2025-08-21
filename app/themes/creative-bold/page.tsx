import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Palette, Zap, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Creative Bold Theme | Liba Natur Brilian",
  description: "Explore the Creative Bold design theme - vibrant, expressive, and designed to make a statement.",
}

export default function CreativeBoldTheme() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10">
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
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-700 dark:text-orange-300">
                Design Theme
              </Badge>
              <Badge variant="outline" className="border-pink-500/50 text-pink-700 dark:text-pink-300">
                Bold
              </Badge>
              <Badge variant="outline" className="border-purple-500/50 text-purple-700 dark:text-purple-300">
                Creative
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Creative Bold
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A design approach that breaks boundaries and challenges conventions. This theme embraces vibrant colors,
              dynamic compositions, and experimental typography to create memorable visual experiences that demand
              attention.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published Dec 18, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Liba Natur Brilian</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Hero Image */}
            <div className="mb-12">
              <img
                src="/vibrant-abstract.png"
                alt="Creative Bold Design Showcase"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Introduction */}
            <h2>Breaking the Rules</h2>
            <p>
              Creative bold design is about pushing boundaries and creating visual experiences that stop people in their
              tracks. It's the antithesis of playing it safe – instead, it embraces risk, experimentation, and the power
              of visual impact to communicate messages that resonate on an emotional level.
            </p>

            {/* Core Elements */}
            <h2>Core Elements</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                <CardContent className="p-6">
                  <Palette className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Vibrant Colors</h3>
                  <p className="text-muted-foreground">
                    Bold, saturated color palettes that create emotional connections and memorable impressions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-pink-500/10">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Dynamic Layout</h3>
                  <p className="text-muted-foreground">
                    Asymmetrical compositions and unexpected arrangements that guide the eye and create movement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                <CardContent className="p-6">
                  <Eye className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Visual Impact</h3>
                  <p className="text-muted-foreground">
                    Strong visual hierarchy and contrast that ensures key messages are impossible to ignore.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>When to Use Bold Design</h2>
            <p>Creative bold design works best when you need to:</p>
            <ul>
              <li>Stand out in a crowded marketplace</li>
              <li>Appeal to younger, trend-conscious audiences</li>
              <li>Launch new products or services</li>
              <li>Create buzz and social media engagement</li>
              <li>Express brand personality and values</li>
            </ul>

            {/* Examples Showcase */}
            <h2>Bold in Action</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="space-y-4">
                <img
                  src="/vibrant-poster.png"
                  alt="Bold Poster Design"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Event Posters</h4>
                <p className="text-muted-foreground">
                  Eye-catching designs that communicate energy and excitement, perfect for concerts, festivals, and
                  cultural events.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/bold-brand-identity.png"
                  alt="Bold Brand Identity"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Brand Identity</h4>
                <p className="text-muted-foreground">
                  Distinctive brand systems that help companies stand out and connect with their target audience
                  authentically.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/vibrant-social-media.png"
                  alt="Social Media Graphics"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Social Media</h4>
                <p className="text-muted-foreground">
                  Scroll-stopping graphics that increase engagement and help brands build strong social media presence.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder-v9fo1.png"
                  alt="Bold Packaging"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Packaging Design</h4>
                <p className="text-muted-foreground">
                  Product packaging that demands attention on shelves and creates unboxing experiences customers
                  remember.
                </p>
              </div>
            </div>

            <h2>Design Process</h2>
            <p>Creating effective bold designs requires a structured approach:</p>

            <div className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 p-6 rounded-lg my-8 not-prose">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Research & Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand the audience, competition, and brand goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Concept Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Brainstorm bold ideas that align with strategic objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Visual Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Create designs that balance boldness with functionality.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Test & Refine</h4>
                    <p className="text-sm text-muted-foreground">
                      Validate designs with target audience and iterate based on feedback.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <h2>Balancing Bold with Purpose</h2>
            <p>
              While creative bold design is about making a statement, it's crucial to ensure that the boldness serves a
              purpose. The most successful bold designs are those that not only catch attention but also effectively
              communicate the intended message and drive desired actions.
            </p>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-lg not-prose">
              <h3 className="text-2xl font-semibold mb-4">Ready to make a bold statement?</h3>
              <p className="text-muted-foreground mb-6">
                Let's create designs that don't just get noticed – they get remembered and drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  <Link href="/contact">Start Bold Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/showcase/brand-identity">See Bold Examples</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
