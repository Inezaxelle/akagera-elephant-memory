"use client"

import Image from "next/image"

// Partner logos - using SVG files from the partners folder
const partners = [
  { name: "Akagera National Park", logo: "/images/partners/akagera.svg" },
  { name: "RDB Rwanda", logo: "/images/partners/rdb.svg" },
  { name: "Partner 2", logo: "/images/partners/partner_2.svg" },
  { name: "Akagera National Park", logo: "/images/partners/akagera.svg" },
  { name: "RDB Rwanda", logo: "/images/partners/rdb.svg" },
  { name: "Partner 2", logo: "/images/partners/partner_2.svg" },
  { name: "Akagera National Park", logo: "/images/partners/akagera.svg" },
  { name: "RDB Rwanda", logo: "/images/partners/rdb.svg" },
]

export default function PartnersSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg text-[#272727]">
            In collaboration with over 8+ partners
          </p>
        </div>

        {/* Rotating Partners */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll-partners">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 relative opacity-80 hover:opacity-100 transition-opacity"
                >
                  {/* Using img tag for SVGs for better compatibility */}
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-duplicate-${index}`}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 relative opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
