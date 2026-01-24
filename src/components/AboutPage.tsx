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
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.34.jpeg" 
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
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.43.jpeg" 
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
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.33.09.jpeg" 
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
                  src="/images/new_elphant_gallery/WhatsApp Image 2026-01-23 at 13.32.58.jpeg" 
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
            <span className="block md:inline font-serif">ABOUT</span>
            <br className="hidden md:block" />
            <span className="block md:inline font-serif">US</span>
          </h1>
          <p className="text-[#c0cdc2] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 mt-24 font-jost">
          Growing up in the Akagera National Park neighbourhood, I heard many stories about wildlife, especially elephants. Those stories stayed with me and eventually led me to work as a guide through the Akagera Community Freelance Guides Cooperative in 2014.<br className="hidden md:block" />
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
              <p className="text-sm lg:text-base text-[#132115] leading-relaxed mb-4 font-jost">
                Over time, I became deeply inspired by the Akagera elephant story of resilience—their incredible journey from near extinction to a thriving population of about 150 elephants, according to the 2024 census. I was particularly drawn to the story of Mutware, one of the original translocated elephants. He was bottle-fed and became habituated to people, later growing into a famous bull known both for crop-raiding incidents and as a major tourism attraction. Mutware died of natural causes in 2018, but his story left a lasting impact on me. As a guide, I wanted to preserve and share these stories in a meaningful way, especially with visitors and local communities. This inspired me to write a children's storybook in Kinyarwanda for local kids, titled Inzovu Mutware, published through Éditions Bakame. The program grew from this desire to keep Akagera's elephant memories alive for future generations.
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
                <p className="text-base leading-relaxed opacity-90 font-jost">
                  My mission is to use the Akagera Elephants Memories Program to build a healthier relationship between wildlife and the surrounding communities, so that people and elephants can live side by side with less conflict and more understanding. Akagera National Park itself is a powerful story of resurrection—moving from a period of serious challenges to becoming one of Africa's strongest conservation success stories.
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
                <p className="text-base leading-relaxed opacity-90 mt-4 font-jost">
                  We teach both visitors and local communities about elephant behaviour, intelligence, family structure, and migration patterns—so elephants are seen not only as "problem animals" but as living beings with complex lives and an important ecological role. By sharing stories in local language and through local voices—like my book Inzovu Mutware—we make conservation relatable, especially for children and youth, who are the future decision-makers.
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
                <p className="text-base leading-relaxed opacity-90 mt-4 font-jost">
                  My experience working with Dr. Tammi Matson in 2018 showed me how powerful it is to combine academic research with traditional field knowledge. The program helps young guides grow their skills with solid information and real-life experience, making them better storytellers, educators, and conservation partners. We preserve traditional knowledge by capturing local stories, observations, and historical memory about elephants so they are not lost.
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
                <p className="text-base leading-relaxed opacity-90 mt-4 font-jost">
                  By naming elephants, documenting their behaviours, and sharing individual stories like Mutware or Murinzi, elephants are no longer seen only as wild animals, but as known characters with histories and meaning. This approach fits naturally within local culture, where storytelling has always been a way to teach values, responsibility, and respect.
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
            <p className="text-base text-[#606873] max-w-3xl mx-auto mt-6 leading-relaxed font-jost">
              My long-term vision is to establish a dedicated Education and Research Centre focused on elephants and community-based conservation around Akagera National Park. The centre would become a place where traditional knowledge and modern research are brought together, documented, and passed on to the next generation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-0 border-t border-slate-200">
            {/* Mission items */}
            {[
              { num: "01", title: "Training Young Guides", content: "Building a structured learning space where young guides can develop deep knowledge—behaviour, tracking, conservation ethics, interpretation, and community engagement—using both traditional experience and research-based information." },
              { num: "02", title: "Preserving Traditional Knowledge", content: "Capturing local stories, observations, and historical memory about elephants (like the story of Mutware) so they are not lost, and so communities feel ownership of the conservation narrative." },
              { num: "03", title: "Elephant Research Experiences", content: "Creating a unique, responsible tourism and learning experience connected to elephant monitoring and research—where visitors can learn, contribute, and leave with genuine understanding, not just photos." },
              { num: "04", title: "Stronger Coexistence Outcomes", content: "Using the centre and the program to reduce conflict by improving awareness, encouraging prevention methods, and helping communities see conservation as something that can benefit them directly." },
              { num: "05", title: "Sustainable Impact", content: "Ensuring that conservation, memory, education, and livelihoods continue to reinforce each other, creating lasting positive change for both elephants and communities around Akagera National Park." },
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
                    <p className="text-base text-[#606873] leading-relaxed font-jost">
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
