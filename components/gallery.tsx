"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Graphic Design Work 1",
      category: "Graphic Design",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Video Editing Project 1",
      category: "Video Editing",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Translation Project 1",
      category: "Translation",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Graphic Design Work 2",
      category: "Graphic Design",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Video Editing Project 2",
      category: "Video Editing",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Translation Project 2",
      category: "Translation",
    },
  ]

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
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedImage(newIndex)
    }
  }

  return (
    <section id="gallery" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">A visual showcase of my creative work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <p className="font-medium text-lg">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative max-w-5xl w-full">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={900}
                className="object-contain max-h-[80vh] w-auto mx-auto"
              />

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="font-medium text-lg">{galleryImages[selectedImage].alt}</p>
                <p className="text-sm opacity-80">{galleryImages[selectedImage].category}</p>
              </div>

              <button
                onClick={() => navigateImage(-1)}
                disabled={selectedImage === 0}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full ${
                  selectedImage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
                } transition-colors`}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                onClick={() => navigateImage(1)}
                disabled={selectedImage === galleryImages.length - 1}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full ${
                  selectedImage === galleryImages.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
                } transition-colors`}
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
