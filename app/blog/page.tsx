import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Art of Video Editing: Professional Tips and Tricks",
      excerpt:
        "Learn the essential techniques that can elevate your video editing skills to the next level. From organization strategies to advanced cutting techniques.",
      image: "/placeholder.svg?height=400&width=600&text=Video+Editing+Tips",
      date: "May 1, 2025",
      readTime: "8 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/video-editing-tips",
      category: "Tutorial",
      tags: ["Video Editing", "Premiere Pro", "Workflow"],
    },
    {
      title: "Graphic Design Trends That Will Dominate 2025",
      excerpt:
        "Explore the latest trends in graphic design that are shaping the visual landscape this year, from AI-generated art to sustainable design practices.",
      image: "/placeholder.svg?height=400&width=600&text=Design+Trends+2025",
      date: "April 15, 2025",
      readTime: "6 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/design-trends-2025",
      category: "Design",
      tags: ["Graphic Design", "Trends", "2025"],
    },
    {
      title: "The Challenges and Rewards of Software Translation",
      excerpt:
        "Insights into the complex process of translating software interfaces and documentation, including cultural considerations and technical challenges.",
      image: "/placeholder.svg?height=400&width=600&text=Software+Translation",
      date: "March 28, 2025",
      readTime: "7 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/software-translation",
      category: "Translation",
      tags: ["Translation", "Localization", "Software"],
    },
    {
      title: "Building an Efficient Creative Workflow",
      excerpt:
        "How to streamline your creative process for maximum productivity without sacrificing quality. Tips from 7 years in the industry.",
      image: "/placeholder.svg?height=400&width=600&text=Creative+Workflow",
      date: "March 10, 2025",
      readTime: "5 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/creative-workflow",
      category: "Productivity",
      tags: ["Workflow", "Productivity", "Creative Process"],
    },
    {
      title: "Color Theory in Video Production",
      excerpt:
        "Understanding how color affects emotion and storytelling in video content. A comprehensive guide to color grading and correction.",
      image: "/placeholder.svg?height=400&width=600&text=Color+Theory+Video",
      date: "February 22, 2025",
      readTime: "9 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/color-theory-video",
      category: "Tutorial",
      tags: ["Color Grading", "Video Production", "Theory"],
    },
    {
      title: "The Future of Translation Technology",
      excerpt:
        "How AI and machine learning are changing the translation industry, and what it means for professional translators.",
      image: "/placeholder.svg?height=400&width=600&text=Translation+Technology",
      date: "February 8, 2025",
      readTime: "6 min read",
      author: "Liba Natur Brilian",
      slug: "/blog/translation-technology",
      category: "Technology",
      tags: ["AI", "Translation", "Technology"],
    },
  ]

  const categories = ["All", "Tutorial", "Design", "Translation", "Technology", "Productivity"]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Thoughts, insights, and tutorials from my journey as a creative professional
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{blogPosts[0].category}</Badge>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link href={blogPosts[0].slug}>Read Article</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
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
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={post.slug}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </main>
  )
}
