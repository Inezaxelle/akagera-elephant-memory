'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowDown, Menu } from 'lucide-react'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-[#132115] flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
        {/* Elephant Images with dotted lines */}
        <div className="absolute inset-0">
          {/* Top left elephant */}
          <div className="absolute top-16 left-4 md:top-24 md:left-24">
            <div className="relative">
              <div className="w-24 h-24 md:w-40 lg:w-48 md:h-40 lg:h-48 rounded-full overflow-hidden border-2 md:border-4 border-[#355e3b]">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg" 
                  alt="Elephant"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-full left-1/2 h-32 md:h-64 border-l-2 border-dotted border-[#355e3b]/60" style={{transform: 'translateX(-50%)'}} />
            </div>
          </div>

          {/* Left middle elephant */}
          <div className="absolute top-1/2 left-2 md:left-16" style={{transform: 'translateY(-50%)'}}>
            <div className="relative">
              <div className="w-32 h-20 md:w-56 lg:w-64 md:h-32 lg:h-40 rounded-full overflow-hidden border-2 md:border-4 border-[#355e3b]">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.43.jpeg" 
                  alt="Elephant"
                  width={256}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-full left-1/2 h-24 md:h-48 border-l-2 border-dotted border-[#355e3b]/60" style={{transform: 'translateX(-50%)'}} />
            </div>
          </div>

          {/* Center elephant */}
          <div className="absolute top-24 md:top-32 left-1/2" style={{transform: 'translateX(-50%)'}}>
            <div className="relative">
              <div className="w-20 h-40 md:w-28 lg:w-32 md:h-64 lg:h-80 rounded-full overflow-hidden border-2 md:border-4 border-[#355e3b]">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg" 
                  alt="Elephant"
                  width={128}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-full left-1/2 h-16 md:h-32 border-l-2 border-dotted border-[#355e3b]/60" style={{transform: 'translateX(-50%)'}} />
            </div>
          </div>

          {/* Top right elephant */}
          <div className="absolute top-32 right-4 md:top-48 md:right-32">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 lg:w-56 md:h-48 lg:h-56 rounded-full overflow-hidden border-2 md:border-4 border-[#355e3b]">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg" 
                  alt="Elephant"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-full left-1/2 h-32 md:h-72 border-l-2 border-dotted border-[#355e3b]/60" style={{transform: 'translateX(-50%)'}} />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto">
          <h1 className="text-[#ffffff] font-bold mb-6 md:mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-serif" style={{letterSpacing: '0.2em', lineHeight: '1.2'}}>
            GALLERY
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 font-jost">
            Explore the visual stories of Akagera's elephants—from individual portraits to family groups, from research moments to community interactions.<br className="hidden md:block" />
            <span className="md:inline"> </span>— Each image tells a story of resilience, memory, and the deep connections between elephants, people, and the land they share.
          </p>
        </div>


      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#fbf9f9]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Section Header */}
          <div className="relative mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
              <h2 className="text-[#132115] font-bold font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest">TAKE A LOOK</h2>
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
            </div>
          </div>

          {/* Enhanced Masonry Gallery */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {/* Image 1 - Tall */}
              <div className="row-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.32.jpeg"
                    alt="Elephant portrait"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 2 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.33.jpeg"
                    alt="Elephant in nature"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 3 - Wide */}
              <div className="col-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.34.jpeg"
                    alt="Elephant herd"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 4 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg"
                    alt="Elephant close-up"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 5 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.37.jpeg"
                    alt="Elephant walking"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 6 - Tall */}
              <div className="row-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.40.jpeg"
                    alt="Elephant family"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 7 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.42.jpeg"
                    alt="Elephant portrait"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 8 - Wide */}
              <div className="col-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.43.jpeg"
                    alt="Elephants in landscape"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 9 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.45.jpeg"
                    alt="Elephant detail"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 10 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.46.jpeg"
                    alt="Elephant in field"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 11 - Tall */}
              <div className="row-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.48.jpeg"
                    alt="Elephant majestic"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 12 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.54.jpeg"
                    alt="Elephant profile"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 13 - Wide */}
              <div className="col-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.58.jpeg"
                    alt="Elephant herd view"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 14 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg"
                    alt="Elephant close-up"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 15 - Square */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.12.jpeg"
                    alt="Elephant in nature"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 16 - Wide (from original gallery) */}
              <div className="col-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/images/9T6A2285.jpg"
                    alt="Elephants walking"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 17 - Tall (from original gallery) */}
              <div className="row-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/9T6A2535.jpg"
                    alt="Elephant portrait"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 18 - Square (9T6 series) */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/9T6A0871.jpg"
                    alt="Elephant under shelter"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 19 - Wide (9T6 series) */}
              <div className="col-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/images/9T6A0874.jpg"
                    alt="Elephants in sanctuary"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 20 - Square (9T6 series) */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/9T6A0877.jpg"
                    alt="Young elephant walking"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 21 - Square (9T6 series) */}
              <div className="overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/9T6A0910.jpg"
                    alt="Elephant portrait"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Image 22 - Tall (9T6 series) */}
              <div className="row-span-2 overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/9T6A0967.jpg"
                    alt="Elephant walking"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
