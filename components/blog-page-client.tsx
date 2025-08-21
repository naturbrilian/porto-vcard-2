"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getBlogPosts } from "@/lib/blog-content"

export default function BlogPageClient() {
  const { language, t } = useLanguage()
  const blogPosts = getBlogPosts()

  const categories = [
    { id: "all", name: t.blog.title },
    { id: "tutorial", name: t.blog.title },
    { id: "design", name: "Design" },
    { id: "translation", name: "Translation" },
    { id: "technology", name: "Technology" },
    { id: "productivity", name: "Productivity" },
  ]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.blog.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{t.blog.subtitle}</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={t.blog.searchArticles} className="pl-10" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === "all" ? "default" : "outline"}
              size="sm"
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t.blog.featuredArticle}</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title[language]}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{blogPosts[0].category[language]}</Badge>
                  <span className="text-sm text-muted-foreground">{t.blog.featuredArticle}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title[language]}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt[language]}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime} {t.blog.minRead}
                  </div>
                </div>
                <Button asChild>
                  <Link href={blogPosts[0].slug}>{t.blog.readArticle}</Link>
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
                  alt={post.title[language]}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category[language]}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime} {t.blog.minRead}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title[language]}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt[language]}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags[language].slice(0, 2).map((tag, tagIndex) => (
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
                  <Link href={post.slug}>{t.blog.readMore}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t.blog.loadMoreArticles}
          </Button>
        </div>
      </div>
    </main>
  )
}
