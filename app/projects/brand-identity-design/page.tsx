import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, Award, ExternalLink } from "lucide-react"

export default function BrandIdentityProjectPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="default">Graphic Design</Badge>
            <Badge variant="secondary">Branding</Badge>
            <Badge variant="secondary">2024</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Brand Identity Design Package</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Complete brand identity development for a growing tech startup, including logo design, color system,
            typography selection, and detailed brand guidelines for consistent application across all touchpoints.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Duration</p>
                <p className="text-sm text-muted-foreground">6 weeks</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Deliverables</p>
                <p className="text-sm text-muted-foreground">15+ assets</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Team Size</p>
                <p className="text-sm text-muted-foreground">2 people</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Status</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="https://www.foriio.com/naturbrilian" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#case-study">View Case Study</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/placeholder.svg?height=720&width=1280&text=Brand+Identity+Design"
            alt="Brand Identity Design Showcase"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  This comprehensive brand identity project involved creating a complete visual identity system for
                  TechStart Inc., a growing technology startup in the fintech space. The challenge was to create a
                  modern, trustworthy brand that would appeal to both tech-savvy millennials and traditional business
                  professionals.
                </p>
                <p>
                  Working closely with the founding team, I developed a brand strategy that balanced innovation with
                  reliability, resulting in a cohesive visual system that effectively communicates the company's values
                  and mission across all touchpoints.
                </p>
              </div>
            </section>

            {/* Design Process */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Design Process</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Research & Discovery</h3>
                    <p className="text-muted-foreground">
                      Conducted market research, competitor analysis, and stakeholder interviews to understand the brand
                      positioning and target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Concept Development</h3>
                    <p className="text-muted-foreground">
                      Created multiple logo concepts and visual directions, exploring different approaches to represent
                      the brand's core values.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Refinement & Testing</h3>
                    <p className="text-muted-foreground">
                      Refined the chosen concept through multiple iterations, testing scalability and application across
                      various media.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Brand Guidelines</h3>
                    <p className="text-muted-foreground">
                      Developed comprehensive brand guidelines documenting logo usage, color palette, typography, and
                      application examples.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">150%</div>
                    <p className="text-sm text-muted-foreground">Increase in brand recognition</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <p className="text-sm text-muted-foreground">Brand assets delivered</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Client satisfaction</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                The new brand identity successfully positioned TechStart Inc. as a modern, trustworthy fintech company.
                The cohesive visual system improved brand recognition and helped the company secure additional funding
                in their Series A round.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Project Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Client:</span>
                      <p className="text-muted-foreground">TechStart Inc.</p>
                    </div>
                    <div>
                      <span className="font-medium">Role:</span>
                      <p className="text-muted-foreground">Lead Brand Designer</p>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <p className="text-muted-foreground">March 2024 - April 2024</p>
                    </div>
                    <div>
                      <span className="font-medium">Tools Used:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Adobe Illustrator
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Photoshop
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          InDesign
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Need Brand Design?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'd love to help create a strong brand identity for your business.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
