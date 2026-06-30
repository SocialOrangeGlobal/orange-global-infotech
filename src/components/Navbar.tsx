'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 ${scrolled ? 'px-6 py-4' : 'px-0 py-6'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <motion.nav
          className={`flex items-center justify-between w-full transition-all duration-300 ${scrolled
            ? 'max-w-7xl bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
            : 'max-w-7xl bg-transparent px-4 sm:px-6 lg:px-8 border-transparent shadow-none'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Orange Global Infotech"
              width={240}
              height={66}
              className="h-14 md:h-16 w-auto object-contain scale-[1.15] md:scale-[1.2] origin-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors duration-200 flex items-center gap-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#111111] text-white text-[15px] font-medium rounded-xl hover:bg-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] active:scale-95"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-2 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-2 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center py-3 text-[17px] font-medium text-[#111111] hover:text-gray-600 transition-colors border-b border-[#111111]/[0.05]"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full max-w-xs text-center px-6 py-3.5 bg-[#111111] text-white font-medium rounded-xl hover:bg-black transition-colors"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
