'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { faqs } from '@/lib/data'

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-gray-100 last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className={`font-semibold text-[17px] leading-snug transition-colors duration-200 ${open ? 'text-[#f97316]' : 'text-[#111111] group-hover:text-[#f97316]'}`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-[#f97316] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-orange-50 group-hover:text-[#f97316]'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-[15px] leading-relaxed pb-6 pr-14">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left sticky */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-5 leading-tight tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Everything you need to know about working with Orange Global Infotech.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#f97316] transition-colors duration-300 text-[15px] shadow-lg"
            >
              Ask Us Anything
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          {/* Right: accordion */}
          <div className="bg-white border border-gray-100 rounded-[1.5rem] px-7 md:px-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
