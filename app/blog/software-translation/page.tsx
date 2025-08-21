import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, Heart } from "lucide-react"

export default function SoftwareTranslationPost() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Translation</Badge>
                <Badge variant="secondary">Localization</Badge>
                <Badge variant="secondary">Software</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Challenges and Rewards of Software Translation
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Liba Natur Brilian
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  March 28, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />7 min read
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Software+Translation"
                alt="Software Translation Process"
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                Software translation goes far beyond converting text from one language to another. It's about creating a
                seamless user experience that feels native to each target culture while maintaining the software's
                functionality and user interface integrity.
              </p>

              <h2>Understanding the Complexity</h2>
              <p>
                When I first started translating software interfaces, I quickly learned that technical accuracy is just
                the beginning. Cultural context, user expectations, and technical constraints all play crucial roles in
                creating successful localized software.
              </p>

              <h2>Key Challenges in Software Translation</h2>
              <p>
                From character limits in UI elements to cultural differences in user behavior, software translation
                presents unique challenges that require both linguistic expertise and technical understanding.
              </p>

              <h2>Best Practices I've Learned</h2>
              <p>
                Through years of working on various software projects, I've developed a systematic approach that ensures
                quality while meeting tight deadlines and technical requirements.
              </p>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Liba Natur Brilian</h4>
                      <p className="text-sm text-muted-foreground">Translator & Localizer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experienced EN/ID translator specializing in software and application localization.
                  </p>
                  <Button size="sm" className="w-full">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
