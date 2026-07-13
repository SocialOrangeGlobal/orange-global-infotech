'use client'
import type { TestimonialItem } from '@/lib/types'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection({
  title = 'What our users say',
  testimonials = []
}: {
  title?: string;
  testimonials?: TestimonialItem[]
}) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPaused && testimonials.length > 0) {
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isPaused, testimonials])

  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[active] ?? testimonials[0];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Author tabs -> Company Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {testimonials.map((client, i) => (
            <button
              key={client.clientName + i}
              onClick={() => {
                setActive(i)
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 10000)
              }}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center ${active === i
                ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-105'
                : 'hover:scale-105 opacity-40 hover:opacity-70 grayscale'
                }`}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.clientName}
                  width={140}
                  height={40}
                  className={`h-6 md:h-7 w-auto object-contain ${client.clientName === 'Microsoft' ? 'scale-[1.35] md:scale-[1.6]' : ''}`}
                />
              ) : (
                <span className="font-semibold text-gray-600">{client.clientName}</span>
              )}
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
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center relative px-6 md:px-12"
            >
              {/* Quote */}
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

              {/* Author Avatar and Info */}
              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-[#E5E7EB] overflow-hidden flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{(t.author || t.clientName || '?').charAt(0)}</span>
                </div>
                <div>
                  <span className="text-[#111111] text-[13px] font-bold">{t.author} </span>
                  <span className="text-gray-500 text-[13px] ml-1">{t.title}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
