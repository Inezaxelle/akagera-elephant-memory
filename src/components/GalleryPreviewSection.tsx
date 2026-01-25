"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"

const galleryImages = [
  "/images/sneak_pics/9T6A0877.jpg",
  "/images/sneak_pics/9T6A0967.jpg",
  "/images/sneak_pics/9T6A2267.jpg",
  "/images/sneak_pics/9T6A2285.jpg",
  "/images/sneak_pics/9T6A0877.jpg",
  "/images/sneak_pics/9T6A0967.jpg",
]

export default function GalleryPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("gallery-preview")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section 
      id="gallery-preview"
      className="relative overflow-hidden h-[80vh] min-h-[600px]"
    >
      {/* Background Image - Elephant with green overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.32.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Green overlay for tint effect */}
        <div className="absolute inset-0 bg-[#355e3b]/50" />
      </div>

      {/* Dotted Line Separator at top */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 border-l-2 border-dotted border-white/50 z-10" />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 flex items-center gap-2 z-10">
        <div className="w-12 h-px border-t-2 border-dotted border-white/50" />
        <span className="text-sm tracking-widest text-white uppercase">
          GALLERY
        </span>
        <div className="w-12 h-px border-t-2 border-dotted border-white/50" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-between z-10 px-6 pt-32 pb-16">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white text-center">A Sneak Peak</h2>

        {/* Photo Collage - Overlapping, scattered across the section */}
        <div className="relative w-full max-w-6xl mx-auto flex-1 my-8">
          {galleryImages.map((src, index) => {
            // Spread images across the full width with good spacing
            const positions = [
              { left: "5%", top: "15%", rotate: -8, z: 30 },
              { left: "28%", top: "5%", rotate: 4, z: 20 },
              { left: "48%", top: "12%", rotate: -3, z: 40 },
              { left: "72%", top: "8%", rotate: 6, z: 10 },
              { left: "18%", top: "55%", rotate: 5, z: 25 },
              { left: "78%", top: "50%", rotate: -4, z: 35 },
            ]
            const pos = positions[index] || { left: "50%", top: "50%", rotate: 0, z: 10 }

            return (
              <div
                key={index}
                className={`absolute w-36 h-48 md:w-44 md:h-56 lg:w-52 lg:h-64 bg-white p-2 shadow-2xl transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: `rotate(${pos.rotate}deg)`,
                  zIndex: pos.z,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* View Gallery Button */}
        <div className="relative flex flex-col items-center gap-4 mt-12 md:mt-72">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2  border-white px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-[#0b041c] hover:text-[#355e3b] transition-colors bg-transparent "
          >
            View Gallery
            <ArrowUpRight size={16} />
          </Link>
          {/* Dotted Line Connector at bottom */}
          <div className="w-px h-16 border-l-2 border-dotted border-white/50" />
        </div>
      </div>
    </section>
  )
}
