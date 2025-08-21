import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Modern Minimalist Theme | Liba Natur Brilian",
  description: "Explore the Modern Minimalist design theme - clean, elegant, and focused on essential elements.",
}

export default function ModernMinimalistTheme() {
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
              <Badge variant="secondary">Design Theme</Badge>
              <Badge variant="outline">Minimalist</Badge>
              <Badge variant="outline">Clean</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Modern Minimalist</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A design philosophy that embraces simplicity, clean lines, and purposeful use of white space. This theme
              focuses on essential elements while maintaining visual impact through thoughtful typography and subtle
              details.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
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
                src="/minimalist-showcase.png"
                alt="Modern Minimalist Design Showcase"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Introduction */}
            <h2>The Philosophy of Less is More</h2>
            <p>
              Modern minimalism in design is not about removing everything until nothing is left. It's about removing
              everything until only the essential remains. This approach creates designs that are not only visually
              appealing but also highly functional and user-friendly.
            </p>

            {/* Key Principles */}
            <h2>Key Principles</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">White Space</h3>
                  <p className="text-muted-foreground">
                    Strategic use of negative space to create breathing room and focus attention on key elements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Typography</h3>
                  <p className="text-muted-foreground">
                    Clean, readable fonts that enhance the message without overwhelming the design.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Color Palette</h3>
                  <p className="text-muted-foreground">
                    Limited color schemes that create harmony and maintain visual consistency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Functionality</h3>
                  <p className="text-muted-foreground">
                    Every element serves a purpose, contributing to the overall user experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Design Examples</h2>
            <p>Here are some examples of how the modern minimalist theme can be applied across different mediums:</p>

            {/* Examples Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="space-y-4">
                <img
                  src="/minimalist-logo.png"
                  alt="Minimalist Logo Design"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold">Logo Design</h4>
                <p className="text-sm text-muted-foreground">Clean, memorable logos that work across all mediums.</p>
              </div>

              <div className="space-y-4">
                <img
                  src="/minimalist-web-interface.png"
                  alt="Web Interface Design"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold">Web Interfaces</h4>
                <p className="text-sm text-muted-foreground">User-friendly interfaces with intuitive navigation.</p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder-l29si.png"
                  alt="Print Design"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold">Print Materials</h4>
                <p className="text-sm text-muted-foreground">Elegant brochures and business cards with impact.</p>
              </div>
            </div>

            <h2>Implementation Tips</h2>
            <ul>
              <li>
                <strong>Start with content:</strong> Understand what needs to be communicated before designing.
              </li>
              <li>
                <strong>Embrace constraints:</strong> Limitations often lead to more creative solutions.
              </li>
              <li>
                <strong>Test usability:</strong> Ensure that simplicity doesn't compromise functionality.
              </li>
              <li>
                <strong>Iterate and refine:</strong> Minimalism is achieved through careful editing and refinement.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              The modern minimalist approach to design creates timeless, elegant solutions that stand the test of time.
              By focusing on essential elements and purposeful design decisions, we can create work that not only looks
              beautiful but also serves its intended purpose effectively.
            </p>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-muted/50 rounded-lg not-prose">
              <h3 className="text-2xl font-semibold mb-4">Ready to embrace minimalism?</h3>
              <p className="text-muted-foreground mb-6">
                Let's work together to create clean, impactful designs that communicate your message effectively.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/showcase/brand-identity">View Examples</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
