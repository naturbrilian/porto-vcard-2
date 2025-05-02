"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Graphics Design & Translator Checker",
      company: "Yuramedia Link",
      period: "July 2021 - Present",
      location: "East Java",
      description: "Graphics Designer for unit group translation JP-ID Yuramedia, also as translator checker.",
    },
    {
      title: "Video Editor",
      company: "Kediri Televisi",
      period: "July 2017 - Present",
      location: "Kediri, East Java",
      description: "As a video editor for YouTube content, and also as a social media admin.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and career highlights</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-12 md:pr-0" : "md:mr-auto md:pr-12 md:pl-0"
              } md:w-1/2 w-full px-4`}
            >
              <div className="hidden md:block absolute top-6 -left-3 w-6 h-6 rounded-full bg-primary z-10">
                {index % 2 === 0 ? (
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-12 h-1 bg-primary"></div>
                ) : (
                  <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-12 h-1 bg-primary"></div>
                )}
              </div>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-primary mb-3">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
