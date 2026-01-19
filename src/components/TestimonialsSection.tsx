"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.",
    author: "Matt Cannon",
    role: "Visitor"
  },
  {
    text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.",
    author: "Sophie Moore",
    role: "Community Member"
  },
  {
    text: "This initiative has truly transformed our understanding of elephant conservation. The work being done here is remarkable and inspiring.",
    author: "John Smith",
    role: "Researcher"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const firstTestimonial = testimonials[currentIndex % testimonials.length]
  const secondTestimonial = testimonials[(currentIndex + 1) % testimonials.length]

  return (
    <section className="relative bg-[#fbf9f9] py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#355e3b] mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrow - Left */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#355e3b] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Navigation Arrow - Right */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#355e3b] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Vertical Dotted Divider */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px border-l-2 border-dotted border-[#c5c5c5] -translate-x-1/2" />

            {/* First Testimonial */}
            <div className="text-center px-4 md:px-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#e8ebe8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6b7c6b]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#4a4a4a] leading-relaxed mb-8 text-base">
                {firstTestimonial.text}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a] text-lg">{firstTestimonial.author}</p>
                <p className="text-sm text-[#7a7a7a]">{firstTestimonial.role}</p>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="text-center px-4 md:px-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#e8ebe8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6b7c6b]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#4a4a4a] leading-relaxed mb-8 text-base">
                {secondTestimonial.text}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a] text-lg">{secondTestimonial.author}</p>
                <p className="text-sm text-[#7a7a7a]">{secondTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
