"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[var(--color-secondary)] mt-3 text-white border-white/20 px-6 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo1.png" alt="Akagera Logo" width={80} height={80} />
          </Link>

          {/* Navigation - desktop only */}
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
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

        {/* Right side - Contact button and mobile menu toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block border border-white px-3 py-2 text-sm hover:bg-white hover:text-[var(--color-secondary)] transition"
          >
            Contact Us ↗
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-sm font-medium border-t border-white/20 pt-4">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/stories"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Stories
          </Link>
          <Link
            href="/impact"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Impact
          </Link>
          <Link
            href="/gallery"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="border border-white px-3 py-2 text-center hover:bg-white hover:text-[var(--color-secondary)] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us ↗
          </Link>
        </nav>
      )}
    </header>
  )
}
