"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'

export default function ImpactPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Community members and fellow guides from the Akagera Community Freelance Guides Cooperative have expressed deep gratitude for the project. Many have said that without the Akagera Elephants Memories program, they would have suffered greatly during the COVID-19 period in 2019–2020. The support received during that difficult time remains a memorable and deeply touching experience.",
      author: "Community Members",
      role: "Akagera Community Guides"
    },
    {
      text: "Participants often describe feeling deeply moved and personally connected. Visitors say the experience stays with them long after they leave Akagera, not only because of seeing elephants, but because of understanding their stories, behaviours, and relationship with the surrounding communities. Many feel a sense of responsibility and pride in being part of something meaningful.",
      author: "Program Participants",
      role: "Visitors & Community Members"
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
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10">
              <button 
                onClick={() => {
                  document.getElementById('what-is-in-place')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#132115] rounded-full w-24 h-24 flex flex-col items-center justify-center text-white border-2 border-[#fbf9f9] hover:bg-[#355e3b] transition-colors cursor-pointer"
              >
                <span className="text-xs uppercase tracking-wider mb-1 font-jost">Scroll Down</span>
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
      <section id="what-is-in-place" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -left-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9] " />
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#170f49] font-serif">What Is In Place</h2>
            <div className="absolute -right-32 top-1/2 w-24 border-t-2 border-dotted border-[#d9d9d9]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Elephant Images */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Three overlapping rounded images */}
              <div className="absolute top-0 left-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-30 border-2 border-[#355e3b]/20">
                <Image
                  src="/images/9T6A0871.jpg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-20 border-2 border-[#355e3b]/20">
                <Image
                  src="/images/9T6A0877.jpg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-24 right-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-10 border-2 border-[#355e3b]/20">
                <Image
                  src="/images/9T6A0967.jpg"
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
            <p className="text-[#272727] leading-relaxed font-jost">
              The project directly involves communities living around Akagera National Park, particularly local community guides and families whose daily lives are closely connected to the park. One of our core objectives is to develop and strengthen local knowledge about Akagera's elephants, ensuring that this knowledge remains within the community and is passed on to future generations. By equipping local community guides with accurate information, traditional stories, and field-based understanding of elephant behaviour, the program enables them to offer richer, more meaningful experiences to visitors.
            </p>
          </div>
        </div>

        {/* The Story In Numbers Section */}
        <div className="mt-20 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-[#272727] font-serif">THE STORY IN NUMBERS</h3>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="border-2 border-dotted border-[#d9d9d9] p-6 md:p-8 text-center bg-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#355e3b] mb-2 font-serif">150</div>
              <div className="text-xs md:text-sm text-[#272727] font-jost">Total Elephants (2024)</div>
            </div>
            <div className="border-2 border-dotted border-[#d9d9d9] p-6 md:p-8 text-center bg-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#355e3b] mb-2 font-serif">$26,500</div>
              <div className="text-xs md:text-sm text-[#272727] font-jost">Community Tourism Income</div>
            </div>
            <div className="border-2 border-dotted border-[#d9d9d9] p-6 md:p-8 text-center bg-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#355e3b] mb-2 font-serif">600+</div>
              <div className="text-xs md:text-sm text-[#272727] font-jost">Families Supported</div>
            </div>
            <div className="border-2 border-dotted border-[#d9d9d9] p-6 md:p-8 text-center bg-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#355e3b] mb-2 font-serif">$20,000</div>
              <div className="text-xs md:text-sm text-[#272727] font-jost">COVID-19 Relief Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities In Action */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-[#170f49]">Communities In Action</h3>
            <p className="text-[#272727] leading-relaxed mb-6 font-jost">
              From 2018 to 2023, the Akagera Elephants Memories program welcomed five different groups of tourists who participated specifically in elephant-focused experiences linked to the project. During this period, these visitors spent more than USD 26,500 on community-based cultural activities. These activities included local banana beer making, guided community walks, handicraft experiences, blacksmith demonstrations, and other everyday cultural practices. The income generated from these experiences went directly to local community members, supporting households with daily needs and strengthening community livelihoods.
            </p>
            <div className="bg-[#ebefeb] p-6 rounded-lg border-l-4 border-[#355e3b]">
              <h4 className="text-xl font-semibold text-[#170f49] mb-3">COVID-19 Solidarity Story</h4>
              <p className="text-[#272727] leading-relaxed text-sm font-jost">
                In 2020, when the world came to a standstill due to COVID-19, tourism activities stopped completely. Visitors who had previously participated in the Akagera Elephants Memories program chose to stand with us, even though they were no longer travelling. Their support continued throughout the COVID-19 lockdown period and made it possible to provide food supplies to over 600 families who were in critical need. The total value of this support exceeded USD 20,000.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-80">
            <div className="relative w-full max-w-md">
              {/* Three overlapping rounded images */}
              <div className="absolute top-0 left-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-30 border-2 border-[#355e3b]/20 shadow-lg">
                <Image
                  src="/images/9T6A0970.jpg"
                  alt="Community members"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-20 border-2 border-[#355e3b]/20 shadow-lg">
                <Image
                  src="/images/9T6A2262.jpg"
                  alt="Elephant close-up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-24 right-0 w-32 h-48 md:w-40 md:h-56 rounded-full overflow-hidden z-10 border-2 border-[#355e3b]/20 shadow-lg">
                <Image
                  src="/images/9T6A2267.jpg"
                  alt="Community group"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Spacer to maintain height */}
              <div className="h-72 md:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-[#132115] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase mb-4 font-jost">Donate Today</h2>
              <p className="text-xl md:text-2xl font-light font-jost">Help elephants be seen and protected</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#132115] transition-colors font-jost">
                Learn More
              </button>
              <button className="px-8 py-3 bg-[#355e3b] text-white hover:bg-[#2a4a2e] transition-colors flex items-center gap-2 font-jost">
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
                <p className="text-[#272727] leading-relaxed mb-6 font-jost">{testimonial.text}</p>
                <div className="border-t border-[#d9d9d9] pt-4">
                  <p className="font-medium text-[#272727] font-jost">{testimonial.author}</p>
                  <p className="text-sm text-[#606873] font-jost">{testimonial.role}</p>
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
            <p className="text-[#272727] leading-relaxed font-jost">
              Akagera Elephant Memory welcomes volunteers and partners in many practical and meaningful ways. Opportunities include supporting elephant research tours, contributing to documentation and storytelling, assisting with guide training programs, and participating in community-based conservation activities around the park. Whether short-term or long-term, all partnerships are built around shared values of conservation, respect, and community empowerment.
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
