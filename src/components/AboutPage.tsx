"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  const [expandedGoal, setExpandedGoal] = useState<string>("conservation");
  const [expandedMission, setExpandedMission] = useState<number | null>(0);

  const toggleGoal = (id: string) => {
    setExpandedGoal(expandedGoal === id ? "" : id);
  };

  const toggleMission = (index: number) => {
    setExpandedMission(expandedMission === index ? null : index);
  };

  const scrollToContent = () => {
    document.getElementById('background-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
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
            <span className="block md:inline">ABOUT</span>
            <br className="hidden md:block" />
            <span className="block md:inline md:ml-4">US</span>
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 mt-24">
          Launch stunning, responsive sites without hiring designers or developers — perfect for early-stage startups and growing SaaS companies.<br className="hidden md:block" />
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

      {/* BACKGROUND SECTION */}
      <section id="background-section" className="relative w-full py-20 px-6 lg:px-16 bg-[#fbf9f9]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-2">
            <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
            <h2 className="text-3xl lg:text-4xl font-serif font-light tracking-wide text-[#272727]">
              BACKGROUND
            </h2>
            <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/Godfrey.jpg"
              alt="Safari vehicle interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            
            <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-lg bg-[#c0cdc2]/95 opacity-80 backdrop-blur-sm p-8 lg:p-10 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-[#132115] mb-1">
                Godefroid NYAMURANGWA
              </h3>
              <p className="text-xs tracking-widest text-[#355e3b] uppercase mb-6 font-medium">
                FOUNDER
              </p>
              <p className="text-sm lg:text-base text-[#132115] leading-relaxed mb-4">
                In 2018, I joined a research project on Akagera's elephants with Dr. Tammie Nelson, an experience that transformed how I saw these animals. I learned to identify them by tusks, ears, and scars, observed their behaviors, and discovered their unique personalities. This opened my eyes to their complexity and the vital role they play in shaping ecosystems, from opening up landscapes for other species to influencing vegetation patterns. Inspired, I founded Akagera Elephant Memories to share this knowledge with guides and tourists, creating meaningful experiences while helping ensure these elephants are protected and celebrated for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS & OBJECTIVES SECTION */}
      <section className="w-full bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-2">
              <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
              <h2 className="text-3xl lg:text-4xl font-serif font-light tracking-wide text-[#132115]">
                GOALS & OBJECTIVES
              </h2>
              <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Conservation Awareness - Expanded by default, spans 2 columns on desktop */}
            <div
              className={`lg:col-span-2 p-8 rounded-sm cursor-pointer transition-all duration-300 ${
                expandedGoal === "conservation"
                  ? "bg-[#2D3E2F] text-white"
                  : "bg-[#ebefeb] text-[#132115] hover:bg-[#c0cdc2]"
              }`}
              onClick={() => toggleGoal("conservation")}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  CONSERVATION AWARENESS
                </h3>
                <ArrowUpRight size={20} className="flex-shrink-0" />
              </div>
              {expandedGoal === "conservation" && (
                <p className="text-base leading-relaxed opacity-90">
                  Promote the protection of elephants through community outreach and educational campaigns.
                </p>
              )}
            </div>

            {/* Education */}
            <div
              className={`p-8 rounded-sm cursor-pointer transition-all duration-300 ${
                expandedGoal === "education"
                  ? "bg-[#2D3E2F] text-white"
                  : "bg-[#ebefeb] text-[#132115] hover:bg-[#c0cdc2]"
              }`}
              onClick={() => toggleGoal("education")}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  EDUCATION
                </h3>
                <ArrowUpRight size={20} className="flex-shrink-0" />
              </div>
              {expandedGoal === "education" && (
                <p className="text-base leading-relaxed opacity-90 mt-4">
                  Develop educational programs and workshops for local communities about elephant conservation.
                </p>
              )}
            </div>

            {/* Knowledge Preservation */}
            <div
              className={`p-8 rounded-sm cursor-pointer transition-all duration-300 ${
                expandedGoal === "knowledge"
                  ? "bg-[#2D3E2F] text-white"
                  : "bg-[#ebefeb] text-[#132115] hover:bg-[#c0cdc2]"
              }`}
              onClick={() => toggleGoal("knowledge")}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  KNOWLEDGE PRESERVATION
                </h3>
                <ArrowUpRight size={20} className="flex-shrink-0" />
              </div>
              {expandedGoal === "knowledge" && (
                <p className="text-base leading-relaxed opacity-90 mt-4">
                  Document and preserve traditional knowledge about elephants for future generations.
                </p>
              )}
            </div>

            {/* Storytelling */}
            <div
              className={`p-8 rounded-sm cursor-pointer transition-all duration-300 ${
                expandedGoal === "storytelling"
                  ? "bg-[#2D3E2F] text-white"
                  : "bg-[#ebefeb] text-[#132115] hover:bg-[#c0cdc2]"
              }`}
              onClick={() => toggleGoal("storytelling")}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm tracking-widest uppercase font-medium">
                  STORYTELLING
                </h3>
                <ArrowUpRight size={20} className="flex-shrink-0" />
              </div>
              {expandedGoal === "storytelling" && (
                <p className="text-base leading-relaxed opacity-90 mt-4">
                  Share compelling stories of individual elephants to inspire conservation action.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LONG-TERM MISSION SECTION */}
      <section className="w-full bg-[#fbf9f9] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-2">
              <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
              <h2 className="text-3xl lg:text-4xl font-serif font-light tracking-wide text-[#272727]">
                LONG-TERM MISSION
              </h2>
              <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
            </div>
            <p className="text-base text-[#606873] max-w-3xl mx-auto mt-6 leading-relaxed">
              The Akagera Elephant Memories project is not just a short term initiative; it is the foundation of a long-term vision to ensure the survival and thriving of Akagera's elephants while empowering local communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-0 border-t border-slate-200">
            {/* Mission items */}
            {[
              { num: "01", title: "Sustainable Conservation", content: "Establish a permanent monitoring system for Akagera's elephants to track their population, movements, and Health over time. Collaborate with conservation organization and researchers to contribute to global elephant conservation efforts." },
              { num: "02", title: "Community Empowerment", content: "Empower local communities through education and economic opportunities tied to wildlife conservation." },
              { num: "03", title: "Education and Awareness", content: "Develop comprehensive educational programs about elephant behavior, ecology, and conservation." },
              { num: "04", title: "Eco-tourism development", content: "Build responsible ecotourism experiences that generate revenue for conservation." },
              { num: "05", title: "Global Collaboration", content: "Partner with international conservation organizations to share knowledge globally." },
            ].map((item, index) => (
              <div key={item.num} className="border-b border-slate-200">
                <button
                  onClick={() => toggleMission(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-serif font-light text-[#272727]">{item.num}</span>
                    <h3 className="text-lg font-normal text-[#272727]">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#272727] transition-transform duration-300 ${
                      expandedMission === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedMission === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pl-20">
                    <p className="text-base text-[#606873] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
