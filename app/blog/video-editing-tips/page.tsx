import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, Heart } from "lucide-react"

export default function BlogPost() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Video Editing</Badge>
                <Badge variant="secondary">Tutorial</Badge>
                <Badge variant="secondary">Tips</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Art of Video Editing: Professional Tips and Tricks
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Liba Natur Brilian
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  May 1, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />8 min read
                </div>
              </div>

              {/* Action Buttons */}
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

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Video+Editing+Workspace"
                alt="Professional video editing workspace with multiple monitors"
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-muted/50 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="text-lg font-medium mb-2">Quick Summary</p>
                <p className="text-muted-foreground">
                  Learn professional video editing techniques that will transform your content creation process. From
                  organization strategies to advanced cutting techniques, this comprehensive guide covers everything you
                  need to know to edit like a pro.
                </p>
              </div>

              <p className="text-xl leading-relaxed mb-8">
                Video editing is both an art and a science. It requires technical knowledge, creative vision, and a deep
                understanding of storytelling. After years of editing content for television and digital platforms, I've
                compiled the most essential tips that have transformed my workflow and elevated the quality of my work.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Start with a Crystal Clear Vision
              </h2>

              <p className="mb-6">
                Before you even import your first clip, spend time developing a clear vision for your project. This
                isn't just about knowing what you want to create—it's about understanding the emotional journey you want
                to take your audience on.
              </p>

              <Card className="my-8">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3 text-primary">Pro Tip: The Vision Board Technique</h4>
                  <p className="text-muted-foreground">
                    Create a simple document with three sections: <strong>Story Goal</strong> (what happens),
                    <strong>Emotional Goal</strong> (how viewers should feel), and <strong>Visual Style</strong>
                    (the look and pace). Reference this throughout your edit to stay focused.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Master the Art of Organization
              </h2>

              <p className="mb-6">
                Professional editors spend up to 30% of their time organizing footage. This isn't wasted time—it's an
                investment that pays dividends throughout the entire editing process.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-4">My Folder Structure Template:</h4>
                <div className="font-mono text-sm space-y-1 text-muted-foreground">
                  <div>📁 Project_Name_YYYY-MM-DD</div>
                  <div className="ml-4">📁 01_RAW_FOOTAGE</div>
                  <div className="ml-8">📁 A_ROLL (main content)</div>
                  <div className="ml-8">📁 B_ROLL (supplementary shots)</div>
                  <div className="ml-8">📁 INTERVIEWS</div>
                  <div className="ml-4">📁 02_AUDIO</div>
                  <div className="ml-8">📁 MUSIC</div>
                  <div className="ml-8">📁 SFX</div>
                  <div className="ml-8">📁 VOICEOVER</div>
                  <div className="ml-4">📁 03_GRAPHICS</div>
                  <div className="ml-4">📁 04_EXPORTS</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Essential Keyboard Shortcuts
              </h2>

              <p className="mb-6">
                Speed is crucial in professional editing. These shortcuts will dramatically improve your efficiency:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-3">Adobe Premiere Pro</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Play/Pause</span>
                        <Badge variant="outline">Space</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Playback Controls</span>
                        <Badge variant="outline">J K L</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Mark In/Out</span>
                        <Badge variant="outline">I O</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Razor Tool</span>
                        <Badge variant="outline">C</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-3">Universal Shortcuts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Undo</span>
                        <Badge variant="outline">Ctrl+Z</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Save</span>
                        <Badge variant="outline">Ctrl+S</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Export</span>
                        <Badge variant="outline">Ctrl+M</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Full Screen</span>
                        <Badge variant="outline">~</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                The Psychology of Cuts
              </h2>

              <p className="mb-6">
                Every cut you make affects how your audience perceives and feels about your content. Understanding the
                psychology behind different types of cuts is what separates good editors from great ones.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold mb-2">Action Cuts</h4>
                  <p className="text-muted-foreground">
                    Cut during movement to create seamless transitions that feel natural to the viewer.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold mb-2">Emotional Cuts</h4>
                  <p className="text-muted-foreground">
                    Time your cuts to match the emotional beats of your story, not just the visual action.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold mb-2">Rhythm Cuts</h4>
                  <p className="text-muted-foreground">
                    Vary your cut timing to create rhythm—fast cuts for energy, slow cuts for contemplation.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Color Grading for Storytelling
              </h2>

              <p className="mb-6">
                Color grading isn't just about making footage look good—it's about supporting your story's emotional
                arc. Different color palettes evoke different emotions and can guide your audience's subconscious
                response to your content.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-3"></div>
                    <h4 className="font-bold">Cool Tones</h4>
                    <p className="text-sm text-muted-foreground">Sadness, isolation, technology</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded mb-3"></div>
                    <h4 className="font-bold">Warm Tones</h4>
                    <p className="text-sm text-muted-foreground">Happiness, comfort, energy</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-full h-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded mb-3"></div>
                    <h4 className="font-bold">Desaturated</h4>
                    <p className="text-sm text-muted-foreground">Drama, realism, tension</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Audio: The Invisible Half of Your Video
              </h2>

              <p className="mb-6">
                Great audio can save mediocre video, but great video cannot save terrible audio. Here's my audio
                workflow that ensures professional-quality sound in every project:
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">The 3-Layer Audio Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium">Dialogue/Narration</h5>
                        <p className="text-sm text-muted-foreground">Clean, consistent levels at -12dB to -6dB</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium">Music</h5>
                        <p className="text-sm text-muted-foreground">
                          Background music at -20dB to -18dB, ducked under dialogue
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium">Sound Effects</h5>
                        <p className="text-sm text-muted-foreground">Ambient and spot effects at -24dB to -18dB</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mt-12 mb-6">Final Thoughts</h2>

              <p className="mb-6">
                Video editing is a craft that improves with every project. Don't be afraid to experiment with new
                techniques, but always remember that the best editing serves the story first. Technical perfection means
                nothing if it doesn't connect with your audience emotionally.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-3">Your Next Steps</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Practice one new keyboard shortcut each day</li>
                  <li>• Analyze your favorite videos and identify the editing techniques used</li>
                  <li>• Create a personal style guide for your color grading</li>
                  <li>• Build a library of royalty-free music and sound effects</li>
                </ul>
              </div>

              <p className="text-lg">
                What editing techniques have transformed your workflow? I'd love to hear about your experiences in the
                comments below!
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="font-bold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">video editing</Badge>
                <Badge variant="secondary">premiere pro</Badge>
                <Badge variant="secondary">color grading</Badge>
                <Badge variant="secondary">audio editing</Badge>
                <Badge variant="secondary">workflow</Badge>
                <Badge variant="secondary">tutorial</Badge>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Liba Natur Brilian</h4>
                      <p className="text-sm text-muted-foreground">Video Editor & Designer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional video editor with 7+ years of experience in television and digital content creation.
                  </p>
                  <Button size="sm" className="w-full">
                    Follow
                  </Button>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Table of Contents</h4>
                  <nav className="space-y-2 text-sm">
                    <a href="#vision" className="block text-muted-foreground hover:text-primary transition-colors">
                      1. Start with a Clear Vision
                    </a>
                    <a
                      href="#organization"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      2. Master Organization
                    </a>
                    <a href="#shortcuts" className="block text-muted-foreground hover:text-primary transition-colors">
                      3. Essential Shortcuts
                    </a>
                    <a href="#cuts" className="block text-muted-foreground hover:text-primary transition-colors">
                      4. Psychology of Cuts
                    </a>
                    <a href="#color" className="block text-muted-foreground hover:text-primary transition-colors">
                      5. Color Grading
                    </a>
                    <a href="#audio" className="block text-muted-foreground hover:text-primary transition-colors">
                      6. Audio Excellence
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Related Posts</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Graphic Design Trends 2025</h5>
                      <p className="text-xs text-muted-foreground">4 min read</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Software Translation Challenges</h5>
                      <p className="text-xs text-muted-foreground">6 min read</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
