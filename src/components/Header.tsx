"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Phone, X } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-secondary)] mt-3 text-white border-white/20 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center ml-30 gap-8 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo1.png" alt="Akagera Logo" width={80} height={80} />
        </Link>

        {/* Navigation - now positioned close to logo */}
        <nav className="hidden md:flex gap-8 text-sm font-medium  tracking-wide">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/stories" className="hover:opacity-80 transition-opacity">
            Stories
          </Link>
          <Link href="/impact" className="hover:opacity-80 transition-opacity">
            Impact
          </Link>
          <Link href="/gallery" className="hover:opacity-80 transition-opacity">
            Gallery
          </Link>
        </nav>
      </div>

      {/* Icons + Button */}
      <div className="flex items-center gap-4">
       
        <Link
          href="/contact"
          className="ml-4 mr-30 border border-white px-3 py-2 text-sm hover:bg-white hover:text-[var(--color-secondary)] transition"
        >
          Contact Us ↗
        </Link>
      </div>
    </header>
  )
}
