"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, PrinterIcon as Print, Mail, Phone, MapPin, Calendar, Award } from "lucide-react"

export default function CVClient() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // This would typically generate a PDF version
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with actions - hidden in print */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Button variant="ghost" asChild className="text-lg">
            <Link href="/" className="flex items-center hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2 bg-transparent">
              <Print className="h-4 w-4" />
              Print CV
            </Button>
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* CV Content */}
        <div className="bg-card shadow-xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none border border-border/50">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 print:bg-gray-800 print:text-white">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=160&width=160&text=Profile"
                  alt="Liba Natur Brilian"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-3">Liba Natur Brilian</h1>
                <p className="text-xl lg:text-2xl mb-6 opacity-90 font-medium">
                  Graphics Designer, Video Editor & Translator
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-base">
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <Mail className="h-5 w-5 mr-3" />
                    liba.natur.brilian@gmail.com
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <Phone className="h-5 w-5 mr-3" />
                    +6289686865736
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <MapPin className="h-5 w-5 mr-3" />
                    Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 space-y-12">
            {/* Professional Summary */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-3">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experienced Graphics Designer and Video Editor with over 7 years in the creative industry. Specialized
                in multimedia design, video production, and English-Indonesian translation services. Proven track record
                of delivering high-quality visual content for television, digital platforms, and corporate clients.
                Strong expertise in Adobe Creative Suite and translation workflows.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-3">
                Work Experience
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary/30 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-2xl font-bold">Graphics Design & Translator Checker</h3>
                    <div className="flex items-center text-base text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      July 2021 - Present
                    </div>
                  </div>
                  <p className="text-primary font-semibold mb-4 text-lg">Yuramedia Link • East Java</p>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside text-base">
                    <li>Lead graphics designer for JP-ID translation unit group</li>
                    <li>Quality assurance and checking for translation projects</li>
                    <li>Created visual assets for multimedia translation projects</li>
                    <li>Collaborated with international teams on localization projects</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary/30 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-2xl font-bold">Video Editor</h3>
                    <div className="flex items-center text-base text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      July 2017 - Present
                    </div>
                  </div>
                  <p className="text-primary font-semibold mb-4 text-lg">Kediri Televisi • Kediri, East Java</p>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside text-base">
                    <li>Video editing for YouTube content and television broadcasts</li>
                    <li>Social media content creation and management</li>
                    <li>Post-production workflow optimization</li>
                    <li>Live streaming technical support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-3">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-bold">Broadcasting Diploma</h3>
                      <span className="text-base text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        2017 - 2018
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-lg mb-2">CBM Academy</p>
                    <p className="text-muted-foreground">
                      Specialized in broadcasting techniques, video production, and media content creation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-bold">Multimedia</h3>
                      <span className="text-base text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        2014 - 2017
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-lg mb-2">SMKTI PELITA NUSANTARA</p>
                    <p className="text-muted-foreground">
                      Studied multimedia design and production, focusing on graphic design, video editing, and digital
                      media creation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-3">
                Technical Skills
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 text-primary">Design & Video</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Adobe Photoshop</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Adobe Premiere Pro</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Adobe After Effects</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 3 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Adobe Illustrator</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 text-primary">Languages & Other</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Indonesian (Native)</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">English</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 3 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Japanese (Basic)</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 2 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Microsoft Office</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-3">Key Projects</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-xl font-bold">Corporate Training Video Series</h3>
                      <Badge variant="secondary" className="w-fit">
                        2024
                      </Badge>
                    </div>
                    <p className="text-base text-muted-foreground mb-3 font-medium">Yuramedia Link</p>
                    <p className="text-base">
                      12-part training series with motion graphics and interactive elements for employee onboarding.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-xl font-bold">Social Media Video Campaign</h3>
                      <Badge variant="secondary" className="w-fit">
                        2024
                      </Badge>
                    </div>
                    <p className="text-base text-muted-foreground mb-3 font-medium">Kediri Televisi</p>
                    <p className="text-base">
                      30-day social media video campaign with daily content creation and community management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-xl font-bold">Software Localization Project</h3>
                      <Badge variant="secondary" className="w-fit">
                        2024
                      </Badge>
                    </div>
                    <p className="text-base text-muted-foreground mb-3 font-medium">Tech Startup</p>
                    <p className="text-base">
                      Complete UI/UX translation and localization of mobile application from English to Indonesian.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Certifications & Awards */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-3">
                Certifications & Achievements
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Adobe Certified Expert</p>
                    <p className="text-base text-muted-foreground">Photoshop & Premiere Pro</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Broadcasting Certificate</p>
                    <p className="text-base text-muted-foreground">CBM Academy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Translation Quality Assurance</p>
                    <p className="text-base text-muted-foreground">Yuramedia Link</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Social Media Management</p>
                    <p className="text-base text-muted-foreground">Digital Marketing</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer - hidden in print */}
        <div className="text-center mt-12 text-base text-muted-foreground print:hidden">
          <p>
            This CV was generated on {new Date().toLocaleDateString()}. For the most up-to-date version, visit my
            portfolio website.
          </p>
        </div>
      </div>
    </div>
  )
}
