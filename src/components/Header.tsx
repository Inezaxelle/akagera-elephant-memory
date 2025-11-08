"use client"

import Image from "next/image"
import { Linkedin, Instagram, Phone, X } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-[#132115] text-white border-b border-white/20 px-6 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/images/logo1.png" alt="Akagera Logo" width={80} height={80} />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/stories">Stories</a>
        <a href="/impact">Impact</a>
        <a href="/gallery">Gallery</a>
      </nav>

      {/* Icons + Button */}
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin size={18} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <X size={18} />
        </a>
        <a href="https://wa.me" target="_blank" rel="noreferrer">
          <Phone size={18} />
        </a>

        <a
          href="/contact"
          className="ml-4 mr-4 border border-white px-3 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
        >
          Contact Us ↗
        </a>
      </div>
    </header>
  )
}
