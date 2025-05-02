"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ImageIcon, Video, Languages, Layers } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      name: "Microsoft Word",
      icon: <FileText className="h-10 w-10 text-primary" />,
      description: "Document creation and editing",
      level: 90,
    },
    {
      name: "Adobe Photoshop",
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      description: "Photo editing and graphic design",
      level: 85,
    },
    {
      name: "Adobe Premiere",
      icon: <Video className="h-10 w-10 text-primary" />,
      description: "Video editing and production",
      level: 80,
    },
    {
      name: "Translation",
      icon: <Languages className="h-10 w-10 text-primary" />,
      description: "English to Indonesian translation",
      level: 75,
    },
    {
      name: "Graphic Design",
      icon: <Layers className="h-10 w-10 text-primary" />,
      description: "Visual communication and branding",
      level: 85,
    },
  ]

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Here are the tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
