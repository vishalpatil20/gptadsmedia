'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Ad Library', href: '#tool' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-base">
          <span className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white text-sm">G</span>
          GPT Ads Media
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-lg hover:bg-stone-800 transition-colors"
        >
          Get Started
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-stone-900 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-stone-900 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-stone-900 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 py-6 px-[5%]">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base text-stone-600 hover:text-stone-900"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
