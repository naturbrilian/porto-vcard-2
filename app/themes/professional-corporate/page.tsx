import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Shield, Award, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Professional Corporate Theme | Liba Natur Brilian",
  description: "Explore the Professional Corporate design theme - trustworthy, sophisticated, and business-focused.",
}

export default function ProfessionalCorporateTheme() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
              <Badge variant="outline">Professional</Badge>
              <Badge variant="outline">Corporate</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Corporate</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A design approach that embodies trust, reliability, and professionalism. This theme focuses on creating
              sophisticated visual communications that establish credibility and convey expertise in business
              environments.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published Dec 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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
                alt="Professional Corporate Design Showcase"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Introduction */}
            <h2>Building Trust Through Design</h2>
            <p>
              Professional corporate design is about more than just looking polished – it's about building trust,
              establishing credibility, and communicating competence. In the business world, first impressions matter,
              and professional design ensures that your brand is perceived as reliable, established, and trustworthy.
            </p>

            {/* Key Principles */}
            <h2>Core Principles</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-slate-600 dark:text-slate-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Trust & Credibility</h3>
                  <p className="text-muted-foreground">
                    Design elements that establish confidence and communicate reliability to stakeholders and clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-slate-600 dark:text-slate-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality & Excellence</h3>
                  <p className="text-muted-foreground">
                    High-quality execution and attention to detail that reflects the organization's commitment to
                    excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-slate-600 dark:text-slate-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Stability & Growth</h3>
                  <p className="text-muted-foreground">
                    Visual communication that conveys organizational stability and forward-thinking leadership.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Design Elements</h2>
            <p>
              Professional corporate design relies on specific visual elements that work together to create a cohesive,
              trustworthy brand experience:
            </p>

            {/* Design Elements Grid */}
            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Professional Typography"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Typography</h4>
                <p className="text-muted-foreground">
                  Clean, readable fonts that convey professionalism. Sans-serif typefaces are often preferred for their
                  modern, approachable feel, while serif fonts can add traditional authority.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Corporate Color Palette"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Color Palette</h4>
                <p className="text-muted-foreground">
                  Conservative color schemes featuring blues, grays, and neutral tones that convey stability and trust.
                  Accent colors are used sparingly for emphasis and brand differentiation.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Professional Layout"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Layout & Structure</h4>
                <p className="text-muted-foreground">
                  Organized, grid-based layouts that prioritize clarity and ease of navigation. Information hierarchy is
                  clearly established to guide readers through content logically.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Professional Imagery"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg">Imagery Style</h4>
                <p className="text-muted-foreground">
                  High-quality, professional photography that reflects the organization's values. Images often feature
                  real people, modern workspaces, and authentic business scenarios.
                </p>
              </div>
            </div>

            <h2>Applications</h2>
            <p>Professional corporate design is essential across various business communications and materials:</p>

            <ul>
              <li>
                <strong>Annual Reports:</strong> Comprehensive documents that communicate financial performance and
                strategic vision
              </li>
              <li>
                <strong>Presentations:</strong> Executive presentations that need to convey authority and expertise
              </li>
              <li>
                <strong>Marketing Materials:</strong> Brochures, case studies, and sales materials that build
                credibility
              </li>
              <li>
                <strong>Digital Presence:</strong> Websites and digital platforms that establish online authority
              </li>
              <li>
                <strong>Corporate Identity:</strong> Logos, business cards, and stationery that represent the
                organization
              </li>
            </ul>

            <h2>Industry Considerations</h2>
            <p>Different industries may require variations of the professional corporate approach:</p>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg my-8 not-prose">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Financial Services</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Emphasis on security, stability, and regulatory compliance. Conservative color palettes and
                    traditional layouts.
                  </p>

                  <h4 className="font-semibold mb-2">Technology</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Balance between innovation and reliability. Modern typography with clean, forward-thinking design
                    elements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Healthcare</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Focus on trust, care, and expertise. Calming colors with emphasis on accessibility and clarity.
                  </p>

                  <h4 className="font-semibold mb-2">Legal</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Traditional, authoritative design that conveys expertise and trustworthiness. Classic typography and
                    formal layouts.
                  </p>
                </div>
              </div>
            </div>

            <h2>Best Practices</h2>
            <p>To create effective professional corporate designs:</p>

            <ol>
              <li>
                <strong>Understand the audience:</strong> Know who you're communicating with and what they value
              </li>
              <li>
                <strong>Maintain consistency:</strong> Use consistent visual elements across all materials
              </li>
              <li>
                <strong>Prioritize readability:</strong> Ensure all text is easy to read and understand
              </li>
              <li>
                <strong>Use quality imagery:</strong> Invest in professional photography and graphics
              </li>
              <li>
                <strong>Keep it timeless:</strong> Avoid trendy elements that may quickly become outdated
              </li>
            </ol>

            <h2>Measuring Success</h2>
            <p>
              The effectiveness of professional corporate design can be measured through various metrics including brand
              perception studies, client feedback, and business development outcomes. The goal is to create designs that
              not only look professional but also contribute to business success and stakeholder confidence.
            </p>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-lg not-prose">
              <h3 className="text-2xl font-semibold mb-4">Elevate your professional presence</h3>
              <p className="text-muted-foreground mb-6">
                Let's create professional designs that build trust, establish credibility, and drive business success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/showcase/brand-identity">View Corporate Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
