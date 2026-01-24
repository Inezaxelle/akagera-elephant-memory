"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Community members and fellow guides from the Akagera Community Freelance Guides Cooperative have expressed deep gratitude for the project. Many have said that without the Akagera Elephants Memories program, they would have suffered greatly during the COVID-19 period in 2019–2020. The support received during that difficult time remains a memorable and deeply touching experience, especially because guests transformed into donors when the community needed help the most.",
    author: "Community Members",
    role: "Akagera Community Guides"
  },
  {
    text: "Participants often describe feeling deeply moved and personally connected. Visitors say the experience stays with them long after they leave Akagera, not only because of seeing elephants, but because of understanding their stories, behaviours, and relationship with the surrounding communities. Many feel a sense of responsibility and pride in being part of something meaningful.",
    author: "Program Participants",
    role: "Visitors & Community Members"
  },
  {
    text: "For community members and guides, the project brings dignity, hope, and confidence. Being able to share their knowledge and stories makes them feel valued and respected. The emotional connection created through the program turns a simple visit into a lasting memory for everyone involved.",
    author: "Local Guides",
    role: "Community Partners"
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
              <p className="text-[#4a4a4a] leading-relaxed mb-8 text-base font-jost">
                {firstTestimonial.text}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a] text-lg font-jost">{firstTestimonial.author}</p>
                <p className="text-sm text-[#7a7a7a] font-jost">{firstTestimonial.role}</p>
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
              <p className="text-[#4a4a4a] leading-relaxed mb-8 text-base font-jost">
                {secondTestimonial.text}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a] text-lg font-jost">{secondTestimonial.author}</p>
                <p className="text-sm text-[#7a7a7a] font-jost">{secondTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
