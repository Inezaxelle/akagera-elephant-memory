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

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] bg-[#132115] text-white overflow-hidden px-6 lg:px-16 py-16 lg:py-24 flex items-center">
        <div className="absolute top-20 left-10 lg:left-20">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/20">
            <Image src="/images/elephant1.jpg" alt="Elephant" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-1/2 w-px h-32 border-l-2 border-dotted border-white/30" />
        </div>

        <div className="absolute top-32 right-10 lg:right-32">
          <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20">
            <Image src="/images/elephant1.jpg" alt="Elephant" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-1/2 w-px h-40 border-l-2 border-dotted border-white/30" />
        </div>

        <div className="absolute top-1/2 left-8 lg:left-16">
          <div className="w-48 h-24 lg:w-56 lg:h-28 rounded-full overflow-hidden border-4 border-white/20">
            <Image src="/images/elephant1.jpg" alt="Elephant" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-1/2 w-px h-32 border-l-2 border-dotted border-white/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#132115] rounded-t-full flex items-start justify-center pt-6 border-t-4 border-white/20">
            <div className="text-center">
              <p className="text-xs tracking-widest mb-2">SCROLL DOWN</p>
              <ChevronDown size={20} className="mx-auto" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-wider mb-6">
            ABOUT US
          </h1>
          <p className="text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Launch stunning, responsive sites without hiring designers or developers
            — perfect for early-stage startups and growing SaaS companies.
          </p>
        </div>
      </section>

      {/* BACKGROUND SECTION */}
      <section className="relative w-full py-20 px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-2">
            <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#272727]">
              BACKGROUND
            </h2>
            <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/vehicle_background.png"
              alt="Safari vehicle interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            
            <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-lg bg-[#c0cdc2]/95 backdrop-blur-sm p-8 lg:p-10 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-light text-[#132115] mb-1">
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
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#132115]">
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
                  ? "bg-[#132115] text-white"
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
                  ? "bg-[#132115] text-white"
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
                  ? "bg-[#132115] text-white"
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
                  ? "bg-[#132115] text-white"
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
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#272727]">
                LONG-TERM MISSION
              </h2>
              <div className="w-24 h-px border-t-2 border-dotted border-slate-300" />
            </div>
            <p className="text-base text-[#272727] max-w-3xl mx-auto mt-6 leading-relaxed" style={{ color: '#272727' }}>
              The Akagera Elephant Memories project is not just a short term initiative; it is the foundation of a long-term vision to ensure the survival and thriving of Akagera's elephants while empowering local communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-0 border-t border-slate-200">
            {/* 01 - Sustainable Conservation */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => toggleMission(0)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-light text-[#272727]">01</span>
                  <h3 className="text-lg font-normal text-[#272727]" style={{ color: '#272727' }}>
                    Sustainable Conservation
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#272727] transition-transform duration-300 ${
                    expandedMission === 0 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMission === 0 ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4 pl-20">
                  <p className="text-base text-[#272727] leading-relaxed mb-3" style={{ color: '#272727' }}>
                    Establish a permanent monitoring system for Akagera's elephants to track their population, movements, and Health over time.
                  </p>
                  <p className="text-base text-[#272727] leading-relaxed" style={{ color: '#272727' }}>
                    Collaborate with conservation organization and researchers to contribute to global elephant conservation efforts.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 - Community Empowerment */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => toggleMission(1)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-light text-[#272727]">02</span>
                  <h3 className="text-lg font-normal text-[#272727]" style={{ color: '#272727' }}>
                    Community Empowerment
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#272727] transition-transform duration-300 ${
                    expandedMission === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMission === 1 ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4 pl-20">
                  <p className="text-base text-[#272727] leading-relaxed" style={{ color: '#272727' }}>
                    Empower local communities through education and economic opportunities tied to wildlife conservation.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 - Education and Awareness */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => toggleMission(2)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-light text-[#272727]">03</span>
                  <h3 className="text-lg font-normal text-[#272727]" style={{ color: '#272727' }}>
                    Education and Awareness
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#272727] transition-transform duration-300 ${
                    expandedMission === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMission === 2 ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4 pl-20">
                  <p className="text-base text-[#272727] leading-relaxed" style={{ color: '#272727' }}>
                    Develop comprehensive educational programs about elephant behavior, ecology, and conservation.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 - Eco-tourism development */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => toggleMission(3)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-light text-[#272727]">04</span>
                  <h3 className="text-lg font-normal text-[#272727]" style={{ color: '#272727' }}>
                    Eco-tourism development
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#272727] transition-transform duration-300 ${
                    expandedMission === 3 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMission === 3 ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4 pl-20">
                  <p className="text-base text-[#272727] leading-relaxed" style={{ color: '#272727' }}>
                    Build responsible ecotourism experiences that generate revenue for conservation.
                  </p>
                </div>
              </div>
            </div>

            {/* 05 - Global Collaboration */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => toggleMission(4)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-light text-[#272727]">05</span>
                  <h3 className="text-lg font-normal text-[#272727]" style={{ color: '#272727' }}>
                    Global Collaboration
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#272727] transition-transform duration-300 ${
                    expandedMission === 4 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMission === 4 ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4 pl-20">
                  <p className="text-base text-[#272727] leading-relaxed" style={{ color: '#272727' }}>
                    Partner with international conservation organizations to share knowledge globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
