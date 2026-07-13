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
            className="fixed inset-0 z-[9999] bg-[#FAFAFA] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Logo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-pulse">
                <Image
                  src="https://orange-global-infotech-admin.vercel.app/images/Orange-Global-Logo.png"
                  alt="Orange Global Infotech Logo"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Loading with moving dots */}
              <div className="flex items-center gap-1 text-[#FF6B00] font-semibold text-xl tracking-widest uppercase">
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
