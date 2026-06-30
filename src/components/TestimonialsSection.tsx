'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            What our users say
          </h2>
        </motion.div>

        {/* Client logos tabs */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {testimonials.map((client, i) => (
            <button
              key={client.clientName}
              onClick={() => {
                setActive(i)
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 10000) // pause for 10s after manual click
              }}
              className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center ${active === i
                ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                : 'hover:bg-white/50 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
                }`}
            >
              <Image
                src={client.logo}
                alt={client.clientName}
                width={120}
                height={40}
                className={`h-7 w-auto object-contain ${client.clientName === 'Microsoft' ? 'scale-[1.6]' : ''}`}
              />
            </button>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center relative px-6 md:px-12"
            >
              {/* Quote text with large orange quotes */}
              <div className="relative inline-block mb-12">
                <span className="absolute -top-8 -left-8 text-6xl text-[#FF6B00] font-serif leading-none select-none">
                  &ldquo;
                </span>

                <blockquote className="text-2xl md:text-3xl text-[#111111] leading-relaxed font-serif text-pretty">
                  {t.quote}
                </blockquote>

                <span className="absolute -bottom-10 -right-8 text-6xl text-[#FF6B00] font-serif leading-none select-none">
                  &rdquo;
                </span>
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border-2 border-white shadow-sm">
                  {/* Fallback avatar if no image */}
                  <span className="text-gray-500 font-semibold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#111111] text-sm font-medium">
                    {t.author} <span className="text-gray-400 font-normal ml-1">{t.title}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
