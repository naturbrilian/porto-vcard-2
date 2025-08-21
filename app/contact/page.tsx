import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ContactClient from "@/components/contact-client"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#contact" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-muted-foreground max-w-2xl">
            Ready to start your next project? Let's discuss how I can help bring your creative vision to life.
          </p>
        </div>

        {/* Contact Client Component */}
        <ContactClient />
      </div>
    </main>
  )
}
