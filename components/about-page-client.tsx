"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Heart,
  Coffee,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  Palette,
  Video,
  Languages,
  Users,
  Target,
  Lightbulb,
} from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPageClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { t } = useLanguage()

  const personalInterests = [
    {
      icon: <Camera className="h-5 w-5" />,
      name: t.aboutPage.interests.photography,
      description: t.aboutPage.interests.photographyDesc,
    },
    {
      icon: <Music className="h-5 w-5" />,
      name: t.aboutPage.interests.music,
      description: t.aboutPage.interests.musicDesc,
    },
    {
      icon: <Gamepad2 className="h-5 w-5" />,
      name: t.aboutPage.interests.gaming,
      description: t.aboutPage.interests.gamingDesc,
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      name: t.aboutPage.interests.reading,
      description: t.aboutPage.interests.readingDesc,
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      name: t.aboutPage.interests.coffee,
      description: t.aboutPage.interests.coffeeDesc,
    },
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: t.aboutPage.values.qualityTitle,
      description: t.aboutPage.values.qualityDesc,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t.aboutPage.values.collaborationTitle,
      description: t.aboutPage.values.collaborationDesc,
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t.aboutPage.values.learningTitle,
      description: t.aboutPage.values.learningDesc,
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t.aboutPage.values.passionTitle,
      description: t.aboutPage.values.passionDesc,
    },
  ]

  const timeline = [
    {
      year: t.aboutPage.timeline.year2014,
      title: t.aboutPage.timeline.title2014,
      description: t.aboutPage.timeline.desc2014,
    },
    {
      year: t.aboutPage.timeline.year2017,
      title: t.aboutPage.timeline.title2017,
      description: t.aboutPage.timeline.desc2017,
    },
    {
      year: t.aboutPage.timeline.year2018,
      title: t.aboutPage.timeline.title2018,
      description: t.aboutPage.timeline.desc2018,
    },
    {
      year: t.aboutPage.timeline.year2021,
      title: t.aboutPage.timeline.title2021,
      description: t.aboutPage.timeline.desc2021,
    },
    {
      year: t.aboutPage.timeline.year2024,
      title: t.aboutPage.timeline.title2024,
      description: t.aboutPage.timeline.desc2024,
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.aboutPage.backToHome}
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.aboutPage.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.aboutPage.subtitle}</p>
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="mb-16" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Professional+Portrait"
                  alt="Liba Natur Brilian - Professional Portrait"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{t.aboutPage.yearsExperience}</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background border-2 border-primary/20 px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">{t.aboutPage.basedIn}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.aboutPage.helloTitle}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">{t.aboutPage.introduction1}</p>
                <p className="text-muted-foreground leading-relaxed">{t.aboutPage.introduction2}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Palette className="h-3 w-3" />
                  {t.skills.graphicDesign}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Video className="h-3 w-3" />
                  {t.projects.videoEditing}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Languages className="h-3 w-3" />
                  {t.skills.translation}
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">{t.aboutPage.letsWorkTogether}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/cv">{t.aboutPage.viewMyCV}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* My Story */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.aboutPage.myJourney}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.aboutPage.journeySubtitle}</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:ml-auto md:pl-12 md:pr-0" : "md:mr-auto md:pr-12 md:pl-0"
                } md:w-1/2 w-full px-4`}
              >
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10 md:block hidden">
                  {index % 2 === 0 ? (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-12 h-1 bg-primary"></div>
                  ) : (
                    <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-12 h-1 bg-primary"></div>
                  )}
                </div>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values & Philosophy */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.aboutPage.valuesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.aboutPage.valuesSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{value.icon}</div>
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.aboutPage.beyondWork}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.aboutPage.beyondWorkSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {personalInterests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="text-primary mb-2 group-hover:scale-110 transition-transform">{interest.icon}</div>
                    <h3 className="font-medium mb-1">{interest.name}</h3>
                    <p className="text-xs text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.aboutPage.whatIBring}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.aboutPage.whatIBringSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.aboutPage.skillsOverview.creativeDesign}</h3>
                <p className="text-muted-foreground mb-4">{t.aboutPage.skillsOverview.creativeDesignDesc}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="outline" className="text-xs">
                    Photoshop
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Illustrator
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    InDesign
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.aboutPage.skillsOverview.videoProduction}</h3>
                <p className="text-muted-foreground mb-4">{t.aboutPage.skillsOverview.videoProductionDesc}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="outline" className="text-xs">
                    Premiere Pro
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    After Effects
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    DaVinci
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.aboutPage.skillsOverview.translationLoc}</h3>
                <p className="text-muted-foreground mb-4">{t.aboutPage.skillsOverview.translationLocDesc}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="outline" className="text-xs">
                    EN → ID
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JP → ID
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Localization
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">{t.aboutPage.readyToWork}</h2>
                <p className="mb-6 opacity-90">{t.aboutPage.readyToWorkDescription}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">{t.aboutPage.startProject}</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="/projects">{t.aboutPage.viewMyWork}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
