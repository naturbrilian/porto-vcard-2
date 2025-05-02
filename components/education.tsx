"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, Award } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educations = [
    {
      institution: "SMKTI PELITA NUSANTARA",
      degree: "Multimedia",
      period: "2014 - 2017",
      description:
        "Studied multimedia design and production, focusing on graphic design, video editing, and digital media creation.",
      type: "Student",
    },
    {
      institution: "CBM Academy",
      degree: "Broadcasting",
      period: "2017 - 2018",
      description: "Specialized in broadcasting techniques, video production, and media content creation.",
      type: "Diploma",
    },
  ]

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-lg font-medium text-primary">{edu.degree}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="inline-flex items-center bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      <Award className="h-3 w-3 mr-1" />
                      {edu.type}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
