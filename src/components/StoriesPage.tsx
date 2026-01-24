'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown, Menu } from 'lucide-react'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
            <span className="block md:inline font-serif">MEET THE</span>
            <br className="hidden md:block" />
            <span className="block md:inline md:ml-4 font-serif">ELEPHANTS</span>
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 mt-24 font-jost">
            In 2018, Dr. Tammie Matson returned to Akagera National Park for her second visit, arriving two days before her tour group. This time, she and I spent those days on a focused research drive dedicated entirely to studying Akagera's elephants.<br className="hidden md:block" />
            <span className="md:inline"> </span>— Through careful observation, we discovered that the population was organised into two main matriarchal groups, which we named Clan A and Clan B. We began identifying unique individuals within each clan and gave them names based on their physical features, behaviours, and personalities.
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
              <h2 className="text-[#132115] font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest font-serif">FAMILIES</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 ">
            {/* Card 1 - MURINZI */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.32.jpeg" 
                  alt="Murinzi Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">MURINZI | Bodyguard</div>
                  <div className="text-[#c0cdc2] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-jost">For months, we were convinced that a highly aggressive elephant we encountered was a bull. On one occasion, she charged and nearly hit our vehicle. It took eight months of observation to realise that she was not a male at all, but a female acting out of fierce protection. She was guarding her fully grown calf, who was clearly unwell—constantly limping, very thin, missing the tip of its trunk, and struggling to keep up with the herd. We named the mother Murinzi, meaning "bodyguard," and her calf Survivor. Witnessing her determination, strength, and devotion shifted my understanding of elephant behaviour forever.</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base" asChild>
                    <Link href="/gallery">
                      View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2 - MUKECURU */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.36.jpeg" 
                  alt="Mukecuru Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132115]/90 via-[#132115]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2 md:mb-3">CLAN A | Matriarchal Group</div>
                  <p className="text-[#c0cdc2] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-jost">
                    Clan A consisted of just over 50 elephants. Through careful observation, we began identifying unique individuals within this clan and gave them names based on their physical features, behaviours, and personalities. By the end of the research period, we had identified six distinct individuals in Clan A, each with their own stories that transformed the way I guide, teach, and share information about Akagera's elephants.
                  </p>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base" asChild>
                    <Link href="/gallery">
                      View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 3 - MASHAMI */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.42.jpeg" 
                  alt="Mashami Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">CLAN B | Matriarchal Group</div>
                  <div className="text-[#ffffff] text-lg md:text-xl font-semibold mb-1 md:mb-2 font-jost">Clan B was larger, with about 70 individuals.</div>
                  <div className="text-[#c0cdc2] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-jost">We identified four distinct individuals in Clan B, each with their own stories. These experiences transformed the way I guide, teach, and share information about Akagera's elephants. They taught me to look beyond surface behaviour and to tell stories that reflect the intelligence, emotion, and complexity of these animals.</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base" asChild>
                    <Link href="/gallery">
                      View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 4 - SURVIVOR */}
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.54.jpeg" 
                  alt="Survivor Family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="text-[#ffffff] text-xs md:text-sm tracking-widest mb-2">SURVIVOR | The Resilient Calf</div>
                  <div className="text-[#c0cdc2] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-jost">Survivor was the fully grown calf of Murinzi, constantly limping, very thin, missing the tip of its trunk, and struggling to keep up with the herd. Despite these challenges, Survivor's story represents resilience and the powerful maternal protection that elephants demonstrate. This personal journey is at the heart of the Akagera Elephants Memories initiative and continues to shape everything the program stands for today.</div>
                  <Button variant="outline" className="text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff] hover:text-[#132115] text-sm md:text-base" asChild>
                    <Link href="/gallery">
                      View in Gallery <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
