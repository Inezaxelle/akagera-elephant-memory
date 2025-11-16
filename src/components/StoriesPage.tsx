'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown, Menu } from 'lucide-react'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#132115] flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
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
              {/* Dotted line down */}
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
              {/* Dotted line down */}
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
              {/* Dotted line down */}
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
              {/* Dotted line down */}
              <div className="absolute top-full left-1/2 h-32 md:h-72 border-l-2 border-dotted border-[#355e3b]/60" style={{transform: 'translateX(-50%)'}} />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto">
          <h1 className="text-[#ffffff] font-bold mb-6 md:mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight" style={{letterSpacing: '0.2em', lineHeight: '1.2'}}>
            <span className="block md:inline">MEET THE</span>
            <br className="hidden md:block" />
            <span className="block md:inline md:ml-4">ELEPHANTS</span>
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 mt-24">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita in vitae quia magni id, repellendus ad suscipit, ati veniam.<br className="hidden md:block" />
            <span className="md:inline"> </span>— Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum omnis optio veritatis perspiciatis quia sint, temporibus sapiente porro natus
          </p>
        </div>

        {/* Scroll Down Button */}
        {/* <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
          <button className="bg-[#132115] border-2 border-[#355e3b] rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center hover:bg-[#355e3b]/20 transition-colors group ">
            <span className="text-[#ffffff] text-[10px] md:text-xs tracking-wider mb-1 md:mb-2">SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 md:w-5 md:h-16 text-[#ffffff] group-hover:translate-y-1 transition-transform" />
          </button>
        </div> */}
      </section>

      {/* Families Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#fbf9f9]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="relative mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
              <h2 className="text-[#132115] font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest">FAMILIES</h2>
              <div className="flex-1 h-px border-t-2 border-dotted border-[#c0cdc2]" />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3 mb-6 md:mb-8">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#c0cdc2] flex items-center justify-center hover:bg-[#ebefeb] transition-colors">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#132115]" />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#355e3b] flex items-center justify-center hover:bg-[#355e3b]/80 transition-colors">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#ffffff]" />
            </button>
          </div>

          {/* Family Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 - MURINZI */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/elephant1.jpg" 
                  alt="Murinzi Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">MURINZI | 29</div>
                  <div className="text-[#ffffff] text-lg md:text-xl font-semibold mb-4 md:mb-6">Family Description</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base">
                    View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2 - MUKECURU */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/elephant1.jpg" 
                  alt="Mukecuru Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132115]/90 via-[#132115]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2 md:mb-3">MUKECURU | 29</div>
                  <p className="text-[#c0cdc2] text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                    Family A is led by the elder female Mukecuru, whose both ears flop forward permanently. The old female "Murinzi" and young female "Survivor", always within a short distance of each other, often trail Clan A (Family A) and are loosely associated with them, but do not appear to be able to always keep up due to Survivor's disabilities.
                  </p>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base">
                    View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 3 - MASHAMI */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/elephant1.jpg" 
                  alt="Mashami Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">MASHAMI | 29</div>
                  <div className="text-[#ffffff] text-lg md:text-xl font-semibold mb-1 md:mb-2">Family Description,</div>
                  <div className="text-[#c0cdc2] text-base md:text-lg mb-4 md:mb-6">members number</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base">
                    View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 4 - SURVIVOR */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/elephant1.jpg" 
                  alt="Survivor Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">SURVIVOR | 29</div>
                  <div className="text-[#ffffff] text-lg md:text-xl font-semibold mb-4 md:mb-6">Family Description</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#ffffff] text-sm md:text-base">
                    View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
