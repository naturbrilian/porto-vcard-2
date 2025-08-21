"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Grid3X3, Grid2X2, List, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const galleryItems = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800&text=Corporate+Branding+Design",
      alt: "Corporate Branding Design",
      category: "design",
      title: "Corporate Brand Identity",
      description: "Complete brand identity package for a tech startup",
      client: "TechCorp Inc.",
      year: "2024",
      tags: ["Branding", "Logo Design", "Corporate"],
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800&text=Video+Production+Behind+Scenes",
      alt: "Video Production Behind the Scenes",
      category: "video",
      title: "Documentary Production",
      description: "Behind the scenes of documentary filming and editing",
      client: "Independent Film",
      year: "2024",
      tags: ["Documentary", "Production", "Behind the Scenes"],
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800&text=Translation+Interface+Design",
      alt: "Translation Interface Design",
      category: "translation",
      title: "App Localization Project",
      description: "UI translation and cultural adaptation for mobile app",
      client: "Mobile App Startup",
      year: "2024",
      tags: ["Localization", "UI Translation", "Mobile"],
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800&text=Motion+Graphics+Animation",
      alt: "Motion Graphics Animation",
      category: "video",
      title: "Animated Explainer Video",
      description: "Motion graphics for corporate training video",
      client: "Yuramedia Link",
      year: "2024",
      tags: ["Motion Graphics", "Animation", "Training"],
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800&text=Print+Design+Portfolio",
      alt: "Print Design Portfolio",
      category: "design",
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional materials",
      client: "Local Business",
      year: "2023",
      tags: ["Print Design", "Marketing", "Brochures"],
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800&text=Website+Translation+Project",
      alt: "Website Translation Project",
      category: "translation",
      title: "E-commerce Localization",
      description: "Complete website translation and cultural adaptation",
      client: "E-commerce Platform",
      year: "2023",
      tags: ["Website", "E-commerce", "Localization"],
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800&text=Social+Media+Graphics",
      alt: "Social Media Graphics",
      category: "design",
      title: "Social Media Campaign",
      description: "Visual content for social media marketing campaign",
      client: "Kediri Televisi",
      year: "2024",
      tags: ["Social Media", "Digital Marketing", "Graphics"],
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800&text=Video+Editing+Timeline",
      alt: "Video Editing Timeline",
      category: "video",
      title: "TV Commercial Edit",
      description: "Professional video editing for television commercial",
      client: "Advertising Agency",
      year: "2023",
      tags: ["Commercial", "TV", "Advertising"],
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800&text=Software+Documentation+Translation",
      alt: "Software Documentation Translation",
      category: "translation",
      title: "Technical Documentation",
      description: "Translation of software manuals and help documentation",
      client: "Software Company",
      year: "2023",
      tags: ["Technical Writing", "Documentation", "Software"],
    },
  ]

  const categories = [
    { id: "all", name: "All Work", count: galleryItems.length },
    { id: "design", name: "Graphic Design", count: galleryItems.filter((item) => item.category === "design").length },
    { id: "video", name: "Video Production", count: galleryItems.filter((item) => item.category === "video").length },
    {
      id: "translation",
      name: "Translation",
      count: galleryItems.filter((item) => item.category === "translation").length,
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const openLightbox = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction) => {
    if (selectedImage === null) return
    const newIndex = selectedImage + direction
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setSelectedImage(newIndex)
    }
  }

  return (
    <>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search gallery..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "masonry" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("masonry")}
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="mb-2"
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredItems.length} of {galleryItems.length} items
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </div>

      {/* Gallery Grid */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-center mb-2">{item.description}</p>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Masonry Layout */}
      {viewMode === "masonry" && (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="break-inside-avoid mb-6 overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Client: {item.client}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No items found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-5xl w-full">
            <Image
              src={filteredItems[selectedImage].src || "/placeholder.svg"}
              alt={filteredItems[selectedImage].alt}
              width={1200}
              height={900}
              className="object-contain max-h-[80vh] w-auto mx-auto"
            />

            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 backdrop-blur-sm p-4 rounded-lg mx-4">
              <h3 className="font-bold text-lg mb-1">{filteredItems[selectedImage].title}</h3>
              <p className="text-sm opacity-80 mb-2">{filteredItems[selectedImage].description}</p>
              <div className="flex justify-center gap-2">
                {filteredItems[selectedImage].tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage(-1)}
              disabled={selectedImage === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full ${
                selectedImage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
              } transition-colors`}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={() => navigateImage(1)}
              disabled={selectedImage === filteredItems.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full ${
                selectedImage === filteredItems.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
              } transition-colors`}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
