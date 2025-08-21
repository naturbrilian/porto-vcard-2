import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProjectsClient from "@/components/projects-client"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore my complete portfolio of creative projects, from video editing and graphic design to translation and
            localization work.
          </p>
        </div>

        {/* Projects Client Component */}
        <ProjectsClient />
      </div>
    </main>
  )
}
