"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-secondary)] text-white px-6 lg:px-16 py-20 lg:py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-[1400px] h-[1400px] opacity-80">
            <Image
              src="/images/elephant.png"
              alt="Elephant in Akagera"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">
            {/* Left side - Title */}
            <div className="lg:w-[45%] pb-120">
              <h1 className="text-5xl lg:text-5xl font-serif leading-tight">
                <span className="text-white">"A TALE OF EVERY</span>
                <br />
                <span className="text-white">ELEPHANT IN</span>
                <br />
                <span className="text-[var(--color-primary)]">AKAGERA"</span>
              </h1>
            </div>

            {/* Right side - Description */}
            <div className="lg:w-[45%] space-y-8 pt-120 pl-20">
              <p className="text-lg leading-relaxed text-white">
                Elephants carry stories in their footsteps — tales of memory, family, and survival. Each one holds a
                world of wisdom worth listening to. They're not just giants of the wild;
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/stories"
                  className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-[var(--color-secondary)] transition-colors"
                >
                  Explore Stories
                </Link>
                <div className="w-40 h-px border-t border-dotted border-white/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-white">
        {/* Wave shape at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-32 lg:h-40"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C200,80 400,20 720,60 C1040,100 1240,20 1440,60 L1440,0 L0,0 Z"
              fill="var(--color-secondary)"
            />
          </svg>
        </div>

        {/* Scroll Down indicator with dotted lines */}
        <div className="relative pt-48 pb-32 flex flex-col items-center">
          {/* Vertical dotted line from top */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-20 border-l border-dotted border-[var(--color-secondary)]/40"></div>

          <div className="flex flex-col items-center gap-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[var(--color-secondary)]/80 font-medium">
              Scroll Down
            </span>
            <div className="w-12 h-12 border-2 border-dashed border-[var(--color-secondary)]/60 flex items-center justify-center">
              <ChevronDown className="w-6 h-6 text-[var(--color-secondary)]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Horizontal dotted line */}
          <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
            <div className="flex items-center gap-0">
              <div className="w-[200px] lg:w-[400px] h-px border-t border-dotted border-[var(--color-secondary)]/40"></div>
              <span className="text-xl lg:text-2xl font-serif text-[var(--color-secondary)] uppercase tracking-wider px-8">
                About Us
              </span>
              <div className="w-[200px] lg:w-[400px] h-px border-t border-dotted border-[var(--color-secondary)]/40"></div>
            </div>
          </div>

          {/* Vertical dotted lines on sides */}
          <div className="absolute bottom-0 left-[15%] w-px h-12 border-l border-dotted border-[var(--color-secondary)]/40"></div>
          <div className="absolute bottom-0 right-[15%] w-px h-12 border-l border-dotted border-[var(--color-secondary)]/40"></div>
        </div>

        {/* Wave shape at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-32 lg:h-40 rotate-180"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C200,80 400,20 720,60 C1040,100 1240,20 1440,60 L1440,0 L0,0 Z"
              fill="var(--color-secondary)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
