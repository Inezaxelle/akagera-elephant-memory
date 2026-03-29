'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

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
    <section className="relative bg-[#fbf9f9] text-[#1A3320] overflow-hidden pt-20 pb-32">
      {/* Central dotted line from hero */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#355e3b]/30 -translate-x-1/2 z-0" />

      {/* Dotted Line Separator at top with ABOUT US label */}
      <div className="relative w-full flex items-center justify-center mb-20">
        <div className="flex-1 border-t-2 border-dashed border-[#355e3b]/40 ml-8" />
        <div className="flex items-center gap-2 px-4 bg-[#fbf9f9]">
          <span className="w-1.5 h-1.5 bg-[#355e3b] rounded-full" />
          <span className="text-xs tracking-[0.2em] text-[#355e3b] uppercase font-serif font-medium">
            ABOUT US
          </span>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#355e3b]/40 mr-8" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-8 leading-tight text-[#1A3320]">
              Goals And Objectives
            </h2>

            <p className="text-sm leading-relaxed text-[#272727] mb-8 font-jost">
              "Elephants are among the most intelligent animals in the wild, with complex social structures and strong family bonds. After only four years of working experience as a guide, I was privileged to become the guide for Dr. Tammie Matson in 2018. She came to Rwanda at the invitation of Akagera management to conduct research on Akagera's elephants. That experience changed my life and completely transformed the way I look at the elephants of Akagera National Park. Through this collaboration, we gathered extensive information and many fascinating facts to share with others. It was a strong combination of academic research and traditional, field-based knowledge."
            </p>

            <div className="text-sm text-[#355e3b] italic font-jost">
              ~ Godefroid NYAMURANGWA, Founder
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-8 leading-tight text-[#1A3320]">
              What Makes Elephants Powerful Symbols
            </h2>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-4 px-6 rounded-full transition-colors cursor-pointer ${
                    item.highlighted
                      ? 'bg-[#2D3E2F] text-white'
                      : 'bg-[#e8e8e8]/60 text-[#272727] hover:bg-[#e8e8e8]'
                  }`}
                >
                  <span
                    className={`font-medium tracking-wider text-xs uppercase ${
                      item.highlighted
                        ? 'text-white'
                        : 'text-[#272727]'
                    }`}
                  >
                    {item.title}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${
                      item.highlighted
                        ? 'text-white'
                        : 'text-[#272727]'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learn More Button centered with dotted line */}
        <div className="flex items-center justify-center mt-16 gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#272727] text-[#272727] text-sm hover:bg-[#0b041c] hover:text-white transition-colors font-jost"
          >
            Learn More
            <ArrowUpRight size={14} />
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#355e3b]/50 rounded-full" />
            <div className="w-64 border-t-2 border-dashed border-[#355e3b]/40" />
            <span className="w-1.5 h-1.5 bg-[#355e3b]/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
