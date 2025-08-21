import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import GalleryClient from "@/components/gallery-client"

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/#gallery" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h1>
            <p className="text-muted-foreground">
              A comprehensive showcase of my creative work across different mediums
            </p>
          </div>
        </div>

        {/* Gallery Client Component */}
        <GalleryClient />
      </div>
    </main>
  )
}
