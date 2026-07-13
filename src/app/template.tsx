'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Keep it short to minimize performance impact while still showing the animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[9999] bg-[#f7f7f5] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Logo */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 animate-pulse drop-shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Orange Global Infotech Logo"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Loading with moving dots */}
              <div className="flex items-center gap-1 text-[#FF6B00] font-heading font-bold text-[22px] tracking-[0.15em] uppercase">
                <span>Loading</span>
                <span className="flex gap-1 ml-1 w-8">
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children simultaneously so Lighthouse/SEO bots can read the DOM instantly */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.6, delay: 0.2 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  )
}
