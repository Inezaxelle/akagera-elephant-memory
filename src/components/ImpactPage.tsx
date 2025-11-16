"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'

export default function ImpactPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.",
      author: "Matt Cannon",
      role: "Team Member"
    },
    {
      text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.",
      author: "Sophie Moore",
      role: "Community Member"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-[#fbf9f9]">
      {/* Scroll Down Indicator */}
      <div className="relative bg-[#132115] pt-20 pb-32">
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative h-32">
            {/* Left curved shape */}
            <div className="absolute left-0 bottom-0 w-48 h-32 bg-[#fbf9f9] rounded-t-full" />
            
            {/* Right curved shape */}
            <div className="absolute right-0 bottom-0 w-48 h-32 bg-[#fbf9f9] rounded-t-full" />
            
            {/* Center scroll button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
              <button className="bg-[#132115] rounded-full w-24 h-24 flex flex-col items-center justify-center text-white border-2 border-[#fbf9f9]">
                <span className="text-xs uppercase tracking-wider mb-1">Scroll Down</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Dotted lines */}
            <div className="absolute left-24 top-0 bottom-0 w-px border-l-2 border-dotted border-[#c0cdc2]" />
            <div className="absolute right-24 top-0 bottom-0 w-px border-l-2 border-dotted border-[#c0cdc2]" />
          </div>
        </div>
      </div>

      {/* What Is In Place Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -left-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9] " />
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#170f49]">What Is In Place</h2>
            <div className="absolute -right-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Elephant Images */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Three overlapping rounded images */}
              <div className="absolute top-0 left-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-30">
                <Image
                  src="/images/elephant1.jpg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-20">
                <Image
                  src="/images/elephant1.jpg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-24 right-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-10">
                <Image
                  src="/images/elephant1.jpg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Spacer to maintain height */}
              <div className="h-72 md:h-80" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-[#170f49]">Elephants, People, Impact</h3>
            <p className="text-[#272727] leading-relaxed">
              By working with local guides, tourists, and communities, we protect elephants while empowering people to celebrate and care for them. Every story shared and every interaction helps build a lasting connection between wildlife and the people who live alongside it. Together, we create positive social and environmental change that honors both elephants and communities.
            </p>
          </div>
        </div>

        {/* Dotted line with border */}
        <div className="relative mt-16 flex justify-center">
          <div className="absolute left-0 top-1/2 w-full border-t-2 border-dotted border-[#d9d9d9]" />
          <div className="relative bg-[#fbf9f9] px-8">
            <h4 className="text-sm uppercase tracking-[0.2em] text-[#272727]">The Story In Numbers</h4>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="border-2 border-dotted border-[#d9d9d9] p-8 text-center">
            <div className="text-5xl md:text-6xl font-light text-[#355e3b] mb-2">83</div>
            <div className="text-sm text-[#272727]">Total Elephants</div>
          </div>
          <div className="border-2 border-dotted border-[#d9d9d9] p-8 text-center">
            <div className="text-5xl md:text-6xl font-light text-[#355e3b] mb-2">29</div>
            <div className="text-sm text-[#272727]">Identified Bulls</div>
          </div>
          <div className="border-2 border-dotted border-[#d9d9d9] p-8 text-center">
            <div className="text-5xl md:text-6xl font-light text-[#355e3b] mb-2">5</div>
            <div className="text-sm text-[#272727]">Tuskless Elephants</div>
          </div>
          <div className="border-2 border-dotted border-[#d9d9d9] p-8 text-center">
            <div className="text-5xl md:text-6xl font-light text-[#355e3b] mb-2">240</div>
            <div className="text-sm text-[#272727]">Community growth</div>
          </div>
        </div>
      </section>

      {/* Communities In Action */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-[#170f49]">Communities In Action</h3>
            <p className="text-[#272727] leading-relaxed">
              Our initiative works hand in hand with local guides, residents, and tourism partners to protect elephants while strengthening communities. By creating opportunities for education, sustainable livelihoods, and wildlife stewardship, we foster both social and environmental impact. Together, we celebrate elephants as individuals and empower people to care for the natural world around them.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/community.png"
              alt="Community members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-[#132115] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase mb-4">Donate Today</h2>
              <p className="text-xl md:text-2xl font-light">Help elephants be seen and protected</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#132115] transition-colors">
                Learn More
              </button>
              <button className="px-8 py-3 bg-[#355e3b] text-white hover:bg-[#2a4a2e] transition-colors flex items-center gap-2">
                Donate Now
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#272727] mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#170f49]">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Navigation Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#ebefeb] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`border border-[#d9d9d9] rounded-lg p-8 transition-opacity ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#c0cdc2]" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>
                <p className="text-[#272727] leading-relaxed mb-6">{testimonial.text}</p>
                <div className="border-t border-[#d9d9d9] pt-4">
                  <p className="font-medium text-[#272727]">{testimonial.author}</p>
                  <p className="text-sm text-[#606873]">{testimonial.role}</p>
                </div>
              </div>
            ))}

            {/* Right Navigation Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#ebefeb] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dotted indicator lines */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentTestimonial ? 'bg-[#355e3b]' : 'bg-[#d9d9d9]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Herd Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -left-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9]" />
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#170f49]">Join the Herd</h2>
            <div className="absolute -right-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#170f49]">Be Their Voice</h3>
            <p className="text-[#272727] leading-relaxed">
              Volunteer with us to protect elephants and support the communities that care for them.
            </p>
          </div>

  <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border-b-2 border-[#d9d9d9] bg-transparent focus:border-[#355e3b] outline-none transition-colors text-black placeholder:text-[#606873]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border-b-2 border-[#d9d9d9] bg-transparent focus:border-[#355e3b] outline-none transition-colors text-black placeholder:text-[#606873]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-b-2 border-[#d9d9d9] bg-transparent focus:border-[#355e3b] outline-none transition-colors text-black placeholder:text-[#606873]"
              />
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-[#355e3b] text-white hover:bg-[#2a4a2e] transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
