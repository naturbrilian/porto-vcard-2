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
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Header with actions - hidden in print */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Print className="mr-2 h-4 w-4" />
              Print CV
            </Button>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* CV Content */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header Section */}
          <div className="bg-primary text-primary-foreground p-8 print:bg-gray-800 print:text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Profile"
                  alt="Liba Natur Brilian"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Liba Natur Brilian</h1>
                <p className="text-xl mb-4 opacity-90">Graphics Designer, Video Editor & Translator</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    liba.natur.brilian@gmail.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +6289686865736
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experienced Graphics Designer and Video Editor with over 7 years in the creative industry. Specialized
                in multimedia design, video production, and English-Indonesian translation services. Proven track record
                of delivering high-quality visual content for television, digital platforms, and corporate clients.
                Strong expertise in Adobe Creative Suite and translation workflows.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary/30 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">Graphics Design & Translator Checker</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      July 2021 - Present
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-2">Yuramedia Link • East Java</p>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Lead graphics designer for JP-ID translation unit group</li>
                    <li>Quality assurance and checking for translation projects</li>
                    <li>Created visual assets for multimedia translation projects</li>
                    <li>Collaborated with international teams on localization projects</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">Video Editor</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      July 2017 - Present
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-2">Kediri Televisi • Kediri, East Java</p>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
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
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">Education</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="font-bold">Broadcasting Diploma</h3>
                      <span className="text-sm text-muted-foreground">2017 - 2018</span>
                    </div>
                    <p className="text-primary font-medium">CBM Academy</p>
                    <p className="text-muted-foreground text-sm">
                      Specialized in broadcasting techniques, video production, and media content creation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="font-bold">Multimedia</h3>
                      <span className="text-sm text-muted-foreground">2014 - 2017</span>
                    </div>
                    <p className="text-primary font-medium">SMKTI PELITA NUSANTARA</p>
                    <p className="text-muted-foreground text-sm">
                      Studied multimedia design and production, focusing on graphic design, video editing, and digital
                      media creation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Design & Video</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Adobe Photoshop</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Adobe Premiere Pro</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Adobe After Effects</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 3 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Adobe Illustrator</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Languages & Other</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Indonesian (Native)</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-3 h-3 rounded-full bg-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>English</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 3 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Japanese (Basic)</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 2 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Microsoft Office</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < 4 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
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
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">Key Projects</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-bold">Corporate Training Video Series</h3>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Yuramedia Link</p>
                    <p className="text-sm">
                      12-part training series with motion graphics and interactive elements for employee onboarding.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-bold">Social Media Video Campaign</h3>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Kediri Televisi</p>
                    <p className="text-sm">
                      30-day social media video campaign with daily content creation and community management.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-bold">Software Localization Project</h3>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Tech Startup</p>
                    <p className="text-sm">
                      Complete UI/UX translation and localization of mobile application from English to Indonesian.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Certifications & Awards */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">
                Certifications & Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Adobe Certified Expert</p>
                    <p className="text-sm text-muted-foreground">Photoshop & Premiere Pro</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Broadcasting Certificate</p>
                    <p className="text-sm text-muted-foreground">CBM Academy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Translation Quality Assurance</p>
                    <p className="text-sm text-muted-foreground">Yuramedia Link</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Social Media Management</p>
                    <p className="text-sm text-muted-foreground">Digital Marketing</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer - hidden in print */}
        <div className="text-center mt-8 text-sm text-muted-foreground print:hidden">
          <p>
            This CV was generated on {new Date().toLocaleDateString()}. For the most up-to-date version, visit my
            portfolio website.
          </p>
        </div>
      </div>
    </main>
  )
}
