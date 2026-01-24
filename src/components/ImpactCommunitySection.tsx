"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowUpRight, Play } from "lucide-react"

export default function ImpactCommunitySection() {
  const [counts, setCounts] = useState({
    elephants: 0,
    bulls: 0,
    tuskless: 0,
    growth: 0
  })

  const targetCounts = {
    elephants: 150,
    bulls: 29,
    tuskless: 5,
    growth: 600
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const timers = Object.keys(targetCounts).map((key) => {
      const target = targetCounts[key as keyof typeof targetCounts]
      let current = 0
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, interval)

      return timer
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [])

  return (
    <section className="relative bg-[#fbf9f9] py-16 md:py-24 overflow-hidden">
      {/* Central vertical dotted line */}
      <div className="absolute right-[25%] top-0 bottom-0 w-px border-l-2 border-dashed border-[#355e3b]/30 z-0 hidden lg:block" />

      {/* Section header with dotted lines */}
      <div className="relative w-full mb-12 flex items-center justify-center">
        <div className="w-16 md:w-32 h-px border-t-2 border-dashed border-[#355e3b]/50" />
        <span className="px-4 text-xs tracking-[0.2em] text-[#355e3b] uppercase whitespace-nowrap bg-[#fbf9f9]">
          IMPACT & COMMUNITY
        </span>
        <div className="w-16 md:w-32 h-px border-t-2 border-dashed border-[#355e3b]/50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A3320]">The Numbers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Statistics Grid with corner decorations */}
          <div className="relative">
            {/* Corner decorations - top left */}
            <div className="absolute -top-2 -left-2 w-12 h-px border-t-2 border-dashed border-[#355e3b]/60" />
            <div className="absolute -top-2 -left-2 h-12 w-px border-l-2 border-dashed border-[#355e3b]/60" />
            
            {/* Corner decorations - top right */}
            <div className="absolute -top-2 -right-2 w-12 h-px border-t-2 border-dashed border-[#355e3b]/60" />
            <div className="absolute -top-2 -right-2 h-12 w-px border-r-2 border-dashed border-[#355e3b]/60" />
            
            {/* Corner decorations - bottom left */}
            <div className="absolute -bottom-2 -left-2 w-12 h-px border-b-2 border-dashed border-[#355e3b]/60" />
            <div className="absolute -bottom-2 -left-2 h-12 w-px border-l-2 border-dashed border-[#355e3b]/60" />
            
            {/* Corner decorations - bottom right */}
            <div className="absolute -bottom-2 -right-2 w-12 h-px border-b-2 border-dashed border-[#355e3b]/60" />
            <div className="absolute -bottom-2 -right-2 h-12 w-px border-r-2 border-dashed border-[#355e3b]/60" />

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2">
                {/* Top Left - 83 Total Elephants */}
                <div className="text-center py-8 pr-8 border-r border-b border-[#d4d4d4]">
                  <div className="text-5xl md:text-6xl font-serif text-[#355e3b] mb-2">
                    {counts.elephants}
                  </div>
                  <div className="text-sm text-[#606873] font-jost">Total Elephants (2024 Census)</div>
                </div>
                
                {/* Top Right - 29 Identified Bulls */}
                <div className="text-center py-8 pl-8 border-b border-[#d4d4d4]">
                  <div className="text-5xl md:text-6xl font-serif text-[#355e3b] mb-2">
                    {counts.bulls}
                  </div>
                  <div className="text-sm text-[#606873] font-jost">Identified Bulls</div>
                </div>
                
                {/* Bottom Left - 5 Tuskless Elephants */}
                <div className="text-center py-8 pr-8 border-r border-[#d4d4d4]">
                  <div className="text-5xl md:text-6xl font-serif text-[#355e3b] mb-2">
                    {counts.tuskless}
                  </div>
                  <div className="text-sm text-[#606873] font-jost">Tuskless Elephants</div>
                </div>
                
                {/* Bottom Right - 600 Families Supported */}
                <div className="text-center py-8 pl-8">
                  <div className="text-5xl md:text-6xl font-serif text-[#355e3b] mb-2">
                    {counts.growth}+
                  </div>
                  <div className="text-sm text-[#606873] font-jost">Families Supported (COVID-19)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Elephant Image with Buttons */}
          <div className="relative h-[350px] md:h-[420px] rounded-tl-[60px] overflow-hidden">
            <Image
              src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.36.jpeg"
              alt="Elephant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Overlay Buttons */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#3d4f3f]/80 backdrop-blur-sm text-white text-sm hover:bg-[#3d4f3f] transition-all border border-white/20">
                <span>Play Video</span>
                <Play size={14} className="fill-white" />
              </button>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 text-white text-sm hover:underline transition-all"
              >
                <span>Visit our YT channel</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Learn More Button centered */}
        <div className="flex justify-center mt-16">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4f3f] border border-[#272727] text-[#272727] text-sm hover:bg-[#272727] hover:text-white transition-colors"
          >
            Learn More
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
