import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"

export default function BlogPost() {
  return (
    <main className="min-h-screen pt-20">
      <article className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">The Art of Video Editing: Tips and Tricks</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              May 1, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />5 min read
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Liba Natur Brilian
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Video Editing Workspace"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Video editing is both an art and a science. It requires technical knowledge, creative vision, and a good
            understanding of storytelling. In this post, I'll share some essential tips and tricks that have helped me
            elevate my video editing skills over the years.
          </p>

          <h2>1. Start with a Clear Vision</h2>
          <p>
            Before you even open your editing software, have a clear idea of what you want to achieve. What's the story
            you're telling? What emotions do you want to evoke? What's the main message? Having a clear vision will
            guide all your editing decisions and make the process more efficient.
          </p>

          <h2>2. Organize Your Footage</h2>
          <p>
            One of the most time-consuming aspects of video editing is searching for specific clips. Create a logical
            folder structure and use descriptive file names. In Adobe Premiere Pro, use bins to categorize your footage
            by scene, location, or content type. This organization will save you countless hours in the long run.
          </p>

          <h2>3. Master Keyboard Shortcuts</h2>
          <p>
            Professional editors rarely use the mouse for common tasks. Learning keyboard shortcuts dramatically
            increases your editing speed. Here are some essential shortcuts for Adobe Premiere Pro:
          </p>
          <ul>
            <li>
              <strong>J, K, L</strong>: Playback controls (reverse, pause, forward)
            </li>
            <li>
              <strong>I, O</strong>: Set in and out points
            </li>
            <li>
              <strong>C</strong>: Razor tool for cutting clips
            </li>
            <li>
              <strong>V</strong>: Selection tool
            </li>
            <li>
              <strong>Ctrl+K (Cmd+K on Mac)</strong>: Add edit at playhead
            </li>
          </ul>

          <h2>4. The Rule of Cuts</h2>
          <p>
            Good editing should be invisible. Viewers should be so engaged with the content that they don't notice the
            cuts. Here are some principles to follow:
          </p>
          <ul>
            <li>Cut on action to make transitions smoother</li>
            <li>Avoid jump cuts unless they serve a stylistic purpose</li>
            <li>Use J-cuts and L-cuts to create natural transitions between scenes</li>
            <li>Match the pace of your cuts to the mood of the scene</li>
          </ul>

          <h2>5. Color Grading for Mood</h2>
          <p>
            Color grading is more than making your footage look good—it's about creating a mood and atmosphere that
            supports your story. Learn to use the basic color correction tools in your editing software:
          </p>
          <ul>
            <li>White balance to ensure consistent color temperature</li>
            <li>Exposure adjustments to fix under or overexposed footage</li>
            <li>Contrast to add depth to your images</li>
            <li>Saturation to control the intensity of colors</li>
          </ul>

          <h2>6. Sound Design Matters</h2>
          <p>Audio is 50% of the video experience, yet it's often neglected. Pay attention to:</p>
          <ul>
            <li>Clean dialogue with minimal background noise</li>
            <li>Consistent audio levels throughout your project</li>
            <li>Background music that enhances rather than distracts</li>
            <li>Sound effects to add depth and realism</li>
          </ul>

          <h2>7. Take Breaks</h2>
          <p>
            Video editing requires intense focus and can be mentally exhausting. Take regular breaks to rest your eyes
            and clear your mind. When you return, you'll often notice issues that you missed before.
          </p>

          <h2>Conclusion</h2>
          <p>
            Video editing is a skill that improves with practice and experimentation. Don't be afraid to try new
            techniques and develop your own style. Remember that the best editing serves the story and creates an
            emotional connection with the viewer.
          </p>
          <p>What are your favorite video editing tips? Share them in the comments below!</p>
        </div>
      </article>
    </main>
  )
}
