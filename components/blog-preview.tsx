"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

export default function BlogPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      title: "The Art of Video Editing: Tips and Tricks",
      excerpt: "Learn the essential techniques that can elevate your video editing skills to the next level.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 1, 2025",
      readTime: "5 min read",
      author: "Liba Natur Brilian",
      slug: "blog/video-editing-tips",
    },
    {
      title: "Graphic Design Trends in 2025",
      excerpt: "Explore the latest trends in graphic design that are shaping the visual landscape this year.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 15, 2025",
      readTime: "4 min read",
      author: "Liba Natur Brilian",
      slug: "blog/design-trends",
    },
    {
      title: "The Challenges of Software Translation",
      excerpt: "Insights into the complex process of translating software interfaces and documentation.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 28, 2025",
      readTime: "6 min read",
      author: "Liba Natur Brilian",
      slug: "blog/software-translation",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and updates from my professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={post.slug}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg">
            <Link href="./blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
