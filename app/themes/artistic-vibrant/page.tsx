import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Sparkles, Heart, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Artistic Vibrant Theme | Liba Natur Brilian",
  description: "Explore the Artistic Vibrant design theme - expressive, colorful, and emotionally engaging.",
}

export default function ArtisticVibrantTheme() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-rose-50 via-violet-50 to-cyan-50 dark:from-rose-950/20 dark:via-violet-950/20 dark:to-cyan-950/20">
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
              <Badge variant="secondary" className="bg-rose-500/20 text-rose-700 dark:text-rose-300">
                Design Theme
              </Badge>
              <Badge variant="outline" className="border-violet-500/50 text-violet-700 dark:text-violet-300">
                Artistic
              </Badge>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-700 dark:text-cyan-300">
                Vibrant
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Artistic Vibrant
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A design approach that celebrates creativity, emotion, and self-expression. This theme embraces bold
              colors, organic shapes, and artistic elements to create visually stunning experiences that connect on an
              emotional level.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published Dec 22, 2024</span>
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
                src="/placeholder.svg?height=400&width=800"
                alt="Artistic Vibrant Design Showcase"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Introduction */}
            <h2>Art Meets Design</h2>
            <p>
              Artistic vibrant design breaks free from conventional constraints to create experiences that are as much
              about feeling as they are about function. This approach draws inspiration from fine art, street art, and
              cultural movements to create designs that are emotionally engaging and visually memorable.
            </p>

            {/* Core Elements */}
            <h2>Creative Elements</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <Card className="border-rose-500/20 bg-gradient-to-br from-rose-500/5 to-rose-500/10">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-rose-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Creative Expression</h3>
                  <p className="text-muted-foreground">
                    Unleashing creativity through unconventional layouts, hand-drawn elements, and artistic flourishes
                    that tell unique stories.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-violet-500/10">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 text-violet-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Emotional Connection</h3>
                  <p className="text-muted-foreground">
                    Designs that evoke feelings and create personal connections through color psychology and visual
                    storytelling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-cyan-500/10">
                <CardContent className="p-6">
                  <Brush className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Artistic Techniques</h3>
                  <p className="text-muted-foreground">
                    Incorporating traditional art techniques like watercolor, collage, and mixed media into digital
                    designs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Color as Communication</h2>
            <p>
              In artistic vibrant design, color is not just decorative – it's a primary means of communication. Bold,
              saturated colors are used to convey energy, passion, and creativity, while color combinations create mood
              and atmosphere that supports the overall message.
            </p>

            {/* Color Psychology Section */}
            <div className="bg-gradient-to-r from-rose-500/10 via-violet-500/10 to-cyan-500/10 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Color Psychology in Action</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <span>
                      <strong>Red:</strong> Energy, passion, urgency
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    <span>
                      <strong>Orange:</strong> Creativity, enthusiasm, warmth
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    <span>
                      <strong>Yellow:</strong> Joy, optimism, attention
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <span>
                      <strong>Green:</strong> Growth, harmony, nature
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span>
                      <strong>Blue:</strong> Trust, calm, professionalism
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <span>
                      <strong>Purple:</strong> Luxury, creativity, mystery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                    <span>
                      <strong>Pink:</strong> Playfulness, romance, femininity
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                    <span>
                      <strong>Teal:</strong> Balance, sophistication, clarity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Applications & Industries</h2>
            <p>
              Artistic vibrant design works particularly well for brands and organizations that want to stand out and
              connect emotionally with their audience:
            </p>

            {/* Applications Grid */}
            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Music & Entertainment"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Music & Entertainment</h4>
                <p className="text-muted-foreground">
                  Concert posters, album covers, and festival branding that capture the energy and emotion of live
                  music.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Fashion & Lifestyle"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Fashion & Lifestyle</h4>
                <p className="text-muted-foreground">
                  Brand identities and campaigns that express individuality, creativity, and personal style.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Arts & Culture"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Arts & Culture</h4>
                <p className="text-muted-foreground">
                  Gallery exhibitions, cultural events, and artistic organizations that celebrate creativity and
                  expression.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Food & Beverage"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Food & Beverage</h4>
                <p className="text-muted-foreground">
                  Restaurant branding, product packaging, and culinary experiences that emphasize flavor and enjoyment.
                </p>
              </div>
            </div>

            <h2>Design Techniques</h2>
            <p>Creating effective artistic vibrant designs requires mastering various techniques and approaches:</p>

            <ul>
              <li>
                <strong>Layering:</strong> Building depth through overlapping elements, textures, and transparency
                effects
              </li>
              <li>
                <strong>Mixed Media:</strong> Combining digital and traditional art techniques for unique textures
              </li>
              <li>
                <strong>Custom Illustration:</strong> Hand-drawn elements that add personality and authenticity
              </li>
              <li>
                <strong>Typography as Art:</strong> Using type as a visual element, not just for readability
              </li>
              <li>
                <strong>Organic Shapes:</strong> Flowing, natural forms that contrast with rigid geometric structures
              </li>
            </ul>

            <h2>Balancing Art and Function</h2>
            <p>
              While artistic vibrant design celebrates creativity, it's important to maintain functionality and
              usability. The most successful designs find the sweet spot between artistic expression and practical
              communication, ensuring that the message remains clear even within bold, creative presentations.
            </p>

            <div className="bg-gradient-to-r from-rose-500/10 via-violet-500/10 to-cyan-500/10 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Key Considerations</h3>
              <ul className="space-y-2">
                <li>• Ensure text remains readable against colorful backgrounds</li>
                <li>• Maintain brand consistency while allowing creative freedom</li>
                <li>• Consider accessibility for users with visual impairments</li>
                <li>• Test designs across different devices and contexts</li>
                <li>• Balance artistic elements with clear information hierarchy</li>
              </ul>
            </div>

            <h2>Cultural Sensitivity</h2>
            <p>
              When working with vibrant, artistic designs, it's important to be mindful of cultural contexts and
              meanings. Colors, symbols, and artistic styles can have different interpretations across cultures, so
              research and sensitivity are crucial when designing for diverse audiences.
            </p>

            <h2>Future of Artistic Design</h2>
            <p>
              As digital tools become more sophisticated and accessible, the possibilities for artistic vibrant design
              continue to expand. Emerging technologies like AI-assisted design, augmented reality, and interactive
              media are opening new frontiers for creative expression while maintaining the core principles of emotional
              connection and visual impact.
            </p>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-rose-500/10 via-violet-500/10 to-cyan-500/10 rounded-lg not-prose">
              <h3 className="text-2xl font-semibold mb-4">Ready to create something extraordinary?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your vision to life with designs that inspire, engage, and make a lasting
                impression.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-rose-500 to-violet-500 hover:from-rose-600 hover:to-violet-600">
                  <Link href="/contact">Start Creative Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/showcase/brand-identity">View Artistic Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
