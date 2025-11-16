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

    </div>
  )
}
