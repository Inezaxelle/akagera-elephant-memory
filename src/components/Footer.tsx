"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-secondary)] pt-12 pb-6">
      <svg
        className="absolute -top-12 left-0 right-0 w-full h-24 text-[var(--color-secondary)]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 40 Q 120 10, 240 40 T 480 40 T 720 20 T 960 40 T 1200 30 T 1440 40 L 1440 120 L 0 120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main content - logo and menu close together */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24">
              <Image
                src="/images/logo1.png"
                alt="Akagera Memory Initiative Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Quick Links - close to logo */}
            <nav className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium uppercase tracking-wide">
              <Link href="/" className="text-white/80 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="/stories" className="text-white/80 hover:text-white transition-colors duration-300">
                Stories
              </Link>
              <Link href="/impact" className="text-white/80 hover:text-white transition-colors duration-300">
                Impact
              </Link>
              <Link href="/gallery" className="text-white/80 hover:text-white transition-colors duration-300">
                Gallery
              </Link>
            </nav>
          </div>

          {/* Social & Connect Section - right side */}
          <div className="flex flex-col gap-4 ml-auto">
            <h3 className="text-xs font-semibold tracking-wider text-white/90 uppercase">Connect With Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50">© 2025 Akagera Elephants Memory Initiative. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
