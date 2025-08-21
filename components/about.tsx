"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get to know more about me and my background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Liba Natur Brilian"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>

            {/* Location Badge - Positioned at bottom center of image frame */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Graphics Designer, Video Editor & Translator</h3>
            <p className="text-muted-foreground mb-6">
              Hello! I'm Liba Natur Brilian, a passionate graphics designer and video editor with experience in
              translation services. I specialize in creating visually appealing designs and engaging video content,
              while also providing EN/ID translation services for software and applications.
            </p>
            <p className="text-muted-foreground mb-6">
              With years of experience in the creative industry, I've developed a keen eye for detail and a strong
              understanding of visual communication. I'm dedicated to delivering high-quality work that meets client
              expectations and communicates their message effectively.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+6289686865736</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground break-all">liba.natur.brilian@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Languages</p>
                  <p className="text-muted-foreground">Indonesian (Fluent), English (Intermediate)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">Available for freelance</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
