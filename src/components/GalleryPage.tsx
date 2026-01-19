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
                  src="/images/elephant1.jpg" 
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
                  src="/images/elephant1.jpg" 
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
                  src="/images/elephant1.jpg" 
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
                  src="/images/elephant1.jpg" 
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
          <h1 className="text-[#ffffff] font-bold mb-6 md:mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight" style={{letterSpacing: '0.2em', lineHeight: '1.2'}}>
            GALLERY
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Launch stunning, responsive sites without hiring designers or developers<br className="hidden md:block" />
            <span className="md:inline"> </span>— perfect for early-stage startups and growing SaaS companies.
          </p>
        </div>


      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#fbf9f9]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="relative mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
              <h2 className="text-[#132115] font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest">TAKE A LOOK</h2>
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
          

            {/* Masonry Gallery */}
            <div className="flex-1">
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 auto-rows-[300px] ">
                {/* Tall image 1 */}
                <div className="row-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0871.jpg"
                    alt="Elephant under shelter"
                    width={150}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Wide image 1 */}
                <div className="col-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0874.jpg"
                    alt="Elephants in sanctuary"
                    width={300}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Square images */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0877.jpg"
                    alt="Young elephant walking"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/elephant1.jpg"
                    alt="Elephants near fence"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0910.jpg"
                    alt="Elephant portrait"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0967.jpg"
                    alt="Elephant walking"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Tall image 2 */}
                <div className="row-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A0970.jpg"
                    alt="Two elephants together"
                    width={150}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Wide image 2 */}
                <div className="col-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A1986.jpg"
                    alt="Elephant in grassland"
                    width={300}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Additional images */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A2262.jpg"
                    alt="Elephant bathing"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A2267.jpg"
                    alt="Elephant herd"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A2282.jpg"
                    alt="Elephant grazing"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* More images - second row */}
                <div className="col-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A2285.jpg"
                    alt="Elephants walking"
                    width={300}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>


                {/* <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/elephant.png"
                    alt="Elephant"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div> */}

                <div className="row-span-2 overflow-hidden rounded-lg">
                  <Image
                    src="/images/9T6A2535.jpg"
                    alt="Elephant portrait"
                    width={150}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
