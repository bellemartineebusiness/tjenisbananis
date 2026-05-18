"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Meny", href: "#menu" },
  { label: "Om oss", href: "#about" },
  { label: "Galleri", href: "#gallery" },
  { label: "Hitta oss", href: "#visit" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const overlay = open ? (
    <div className="fixed inset-0 z-9999 flex flex-col bg-dark/97 backdrop-blur-md">
      {/* Topprad */}
      <div className="flex items-center justify-between px-6 py-5">
        <img
          src="/Arowwai new york estd 1999 (2).png"
          alt="Arowwai"
          className="h-14 w-auto"
        />
        <button
          onClick={() => setOpen(false)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
          aria-label="Stäng meny"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Länkar */}
      <nav className="flex flex-col items-start justify-center flex-1 px-8 gap-1 pb-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-serif text-5xl text-white/75 hover:text-gold transition-colors duration-200 py-3"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Nedre info */}
      <div className="px-8 pb-10 border-t border-white/8 pt-6">
        <p className="text-cream/30 text-xs font-light tracking-widest uppercase">
          Arowwai Coffee · New York · Est. 1999
        </p>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Öppna meny"
      >
        <Menu className="w-4 h-4" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  )
}
