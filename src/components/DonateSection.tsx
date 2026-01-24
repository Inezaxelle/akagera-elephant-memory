"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function DonateSection() {
  return (
    <section className="relative bg-[#132115] py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase mb-4 font-jost">
              DONATE TODAY
            </h2>
            <p className="text-xl md:text-2xl font-light font-jost">
              Help elephants be seen and protected
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col gap-4">
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#132115] transition-colors font-jost">
              Learn More
            </button>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#355e3b] text-white hover:bg-[#2a4a2e] transition-colors font-jost"
            >
              Donate Now
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
