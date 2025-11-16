'use client';

import { ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      title: 'KNOWLEDGE PRESERVATION',
      highlighted: false,
    },
    {
      title: 'CONSERVATION AWARENESS',
      highlighted: true,
    },
    {
      title: 'EDUCATION',
      highlighted: false,
    },
    {
      title: 'STORYTELLING',
      highlighted: false,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] text-[#1A3320] overflow-hidden">
      {/* Decorative elements (turn blacks → deep greens) */}
      <div className="absolute top-8 left-20 w-24 h-24 rounded-full bg-[#1A3320] opacity-30" />
      <div className="absolute top-12 right-32 w-32 h-8 bg-[#1A3320] opacity-30 rounded" />
      <div className="absolute top-20 left-1/3 w-28 h-28 rounded-full bg-[#1A3320] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-px bg-[#4C8C4A]" />
            <span className="text-sm tracking-widest text-[#1A3320] uppercase">
              About us
            </span>
            <div className="w-12 h-px bg-[#4C8C4A]" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight text-[#1A3320]">
              Goals And Objectives
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#355E3B] mb-8">
              "Elephants are more than just animals; they are individuals with unique stories,
              behaviors, and roles in the ecosystem. My journey with Akageera elephants began in
              2018, when I participated in a groundbreaking research assessment. For the first
              time, I was able to identify individual elephants and understand their behaviors and
              personalities. This experience changed my life profoundly and inspired me to create
              Akageera Elephants Memories. Today, I want to share this knowledge with others – to
              help young guides, tourists, and local communities see elephants the way I do: as
              individuals worth protecting and celebrating."
            </p>

            <div className="text-sm text-[#4C8C4A] mt-6">
              – Godfreud NYAMURANGWA, Founder
            </div>
{/* 
            <button className="mt-12 px-6 py-3 border border-[#4C8C4A] text-[#355E3B] hover:bg-[#CFE8D4] transition-colors font-medium tracking-wide text-sm">
              Learn More →
            </button> */}
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight text-[#1A3320]">
              Why This Project Matters
            </h2>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 ${
                    item.highlighted
                      ? 'bg-[#1A3320] text-white px-6 py-4 rounded'
                      : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <ArrowUpRight
                      className={`w-5 h-5 ${
                        item.highlighted
                          ? 'text-white'
                          : 'text-[#355E3B]'
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium tracking-wider text-sm ${
                      item.highlighted
                        ? 'text-white'
                        : 'text-[#355E3B]'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Decorations */}
        <div className="absolute bottom-20 right-10 w-32 h-8 bg-[#1A3320] opacity-30 rounded" />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-[#1A3320] opacity-30" />
      </div>
    </section>
  );
}
