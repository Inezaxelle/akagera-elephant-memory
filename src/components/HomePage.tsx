"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { AboutSection } from "./about-us-section"
import ImpactCommunitySection from "./ImpactCommunitySection"
import GalleryPreviewSection from "./GalleryPreviewSection"
import TestimonialsSection from "./TestimonialsSection"
import DonateSection from "./DonateSection"
import PartnersSection from "./PartnersSection"

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-secondary)] text-white px-6 lg:px-16 py-20 lg:py-32 overflow-hidden min-h-screen">
        <div className="md:absolute inset-0 md:flex items-center justify-center pointer-events-none hidden">
          <div className="relative w-full max-w-[1400px] h-[1400px] opacity-80 ">
            <Image
              src="/images/Shape.svg"
              alt="Elephant in Akagera"
              fill
              className="object-contain pr-10 pb-7"
              priority
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto md:relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:min-h-[70vh]">
            {/* Left side - Title */}
            <div className="lg:w-[45%] md:pb-120">
              <h1 className="text-5xl lg:text-5xl font-serif leading-tight">
                <span className="text-white">"A TALE OF EVERY</span>
                <br />
                <span className="text-white">ELEPHANT IN</span>
                <br />
                <span className="text-[var(--color-primary)]">AKAGERA"</span>
              </h1>
            </div>

            {/* Right side - Description */}
            <div className="lg:w-[45%] space-y-8 md:pt-120 md:pl-20">
              <p className="text-lg leading-relaxed text-white font-jost">
                Elephants carry stories in their footsteps — tales of memory, family, and survival. Each one holds a
                world of wisdom worth listening to. They're not just giants of the wild;
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/stories"
                  className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#0b041c] transition-colors"
                >
                  Explore Stories
                </Link>
                <div className="w-40 h-px border-t border-dotted border-white/60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator with Dotted Lines */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative h-32">
            {/* Left curved shape */}
            <div className="absolute left-0 bottom-0 w-48 h-32 bg-[#fbf9f9] rounded-t-full" />
            
            {/* Right curved shape */}
            <div className="absolute right-0 bottom-0 w-48 h-32 bg-[#fbf9f9] rounded-t-full" />
            
            {/* Center scroll button */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10">
              <button className="bg-[#132115] rounded-full w-24 h-24 flex flex-col items-center justify-center text-white border-2 border-[#fbf9f9] hover:bg-[#355e3b] transition-colors">
                <span className="text-xs uppercase tracking-wider mb-1">Scroll Down</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div> */}

            {/* Dotted lines */}
            <div className="absolute left-24 top-0 bottom-0 w-px border-l-2 border-dotted border-[#c0cdc2]" />
            <div className="absolute right-24 top-0 bottom-0 w-px border-l-2 border-dotted border-[#c0cdc2]" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Impact & Community Section */}
      <ImpactCommunitySection />

      {/* Gallery Preview Section */}
      <GalleryPreviewSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Donate Section */}
      <DonateSection />

      {/* Partners Section */}
      <PartnersSection />

    </div>
  )
}
