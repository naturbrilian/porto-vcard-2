import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, Award, Play } from "lucide-react"

export default function ProjectPage() {
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
            <Badge variant="default">Video Editing</Badge>
            <Badge variant="secondary">Corporate</Badge>
            <Badge variant="secondary">2024</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Corporate Training Video Series</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            A comprehensive video editing project for Yuramedia Link, featuring a 12-part training series that combines
            engaging visuals, clear narration, and interactive elements to enhance employee learning.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Duration</p>
                <p className="text-sm text-muted-foreground">3 months</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Total Runtime</p>
                <p className="text-sm text-muted-foreground">4.5 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Team Size</p>
                <p className="text-sm text-muted-foreground">5 people</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-bold">Completion</p>
                <p className="text-sm text-muted-foreground">On time</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="https://www.foriio.com/naturbrilian/categories/Video" target="_blank">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#case-study">View Case Study</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image/Video */}
        <div className="rounded-xl overflow-hidden mb-12 shadow-2xl">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Video+Editing+Showcase"
              alt="Corporate Training Video Preview"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Play className="mr-2 h-6 w-6" />
                Play Preview
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  This project involved creating a comprehensive training video series for Yuramedia Link's new employee
                  onboarding program. The challenge was to transform dense training materials into engaging, digestible
                  video content that would improve knowledge retention and employee engagement.
                </p>
                <p>
                  Working closely with the HR team and subject matter experts, I developed a visual storytelling
                  approach that combined live-action footage, motion graphics, and interactive elements to create an
                  immersive learning experience.
                </p>
              </div>
            </section>

            {/* Challenge & Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Challenge & Solution</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-red-600 dark:text-red-400 mb-4">The Challenge</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 200+ pages of training material to condense</li>
                      <li>• Multiple languages (Japanese to Indonesian)</li>
                      <li>• Tight 3-month deadline</li>
                      <li>• Limited budget for production</li>
                      <li>• Need for consistent branding across all videos</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-green-600 dark:text-green-400 mb-4">The Solution</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Created modular template system</li>
                      <li>• Developed efficient translation workflow</li>
                      <li>• Used motion graphics to simplify complex concepts</li>
                      <li>• Implemented consistent visual style guide</li>
                      <li>• Built reusable animation presets</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold mb-6">My Process</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Research & Planning</h3>
                    <p className="text-muted-foreground">
                      Analyzed existing training materials, conducted stakeholder interviews, and created detailed
                      project timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Script Development</h3>
                    <p className="text-muted-foreground">
                      Collaborated with subject matter experts to create engaging scripts that simplified complex
                      topics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Visual Design</h3>
                    <p className="text-muted-foreground">
                      Developed consistent visual style, created motion graphics templates, and designed interactive
                      elements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Production & Editing</h3>
                    <p className="text-muted-foreground">
                      Edited all 12 videos using Adobe Premiere Pro, ensuring consistent pacing and professional
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Review & Refinement</h3>
                    <p className="text-muted-foreground">
                      Conducted multiple review cycles with stakeholders and implemented feedback for final delivery.
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
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Employee completion rate</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <p className="text-sm text-muted-foreground">Reduction in training time</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                    <p className="text-sm text-muted-foreground">Average user rating</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                The training video series exceeded all expectations, with employees reporting higher engagement and
                better retention of training material. The modular approach allowed for easy updates and localization
                for different departments.
              </p>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Behind+the+Scenes"
                    alt="Behind the scenes"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Motion+Graphics"
                    alt="Motion graphics example"
                    width={600}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Storyboard"
                    alt="Storyboard example"
                    width={600}
                    height={300}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Final+Output"
                    alt="Final video output"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
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
                      <p className="text-muted-foreground">Yuramedia Link</p>
                    </div>
                    <div>
                      <span className="font-medium">Role:</span>
                      <p className="text-muted-foreground">Lead Video Editor & Motion Graphics Designer</p>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <p className="text-muted-foreground">July 2024 - October 2024</p>
                    </div>
                    <div>
                      <span className="font-medium">Tools Used:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Adobe Premiere Pro
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          After Effects
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Photoshop
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Demonstrated */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Skills Demonstrated</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Video Editing
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Motion Graphics
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Color Grading
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Audio Mixing
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Project Management
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Translation
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Interested in Similar Work?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'd love to help bring your video project to life. Let's discuss your needs.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Projects */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Documentary Editing</h4>
                      <p className="text-xs text-muted-foreground">Short documentary post-production</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Social Media Campaign</h4>
                      <p className="text-xs text-muted-foreground">Video content for social platforms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
