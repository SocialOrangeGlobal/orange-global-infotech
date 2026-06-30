'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader on initial render and route transitions
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAFA]"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center z-10 px-6"
            >
              {/* Logo */}
              <img src="/logo.png" alt="Orange Global Infotech" className="w-40 sm:w-48 md:w-56 mb-6 sm:mb-8" />
              
              {/* Animated Dots (Pulze style) */}
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="flex gap-2 sm:gap-2.5">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1 sm:mt-2">Loading...</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 15 : 0 }}
        transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.6, delay: isLoading ? 0 : 0.2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
