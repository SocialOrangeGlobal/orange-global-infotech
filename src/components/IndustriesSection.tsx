'use client'

import { motion } from 'framer-motion'
import { Heart, GraduationCap, DollarSign, Home, ShoppingBag, Users, Factory, Truck, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Patient management systems, telemedicine platforms, and health data analytics.',
    color: '#EF4444',
    lightBg: 'bg-red-50',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'LMS platforms, online learning tools, and student engagement applications.',
    color: '#3B82F6',
    lightBg: 'bg-blue-50',
  },
  {
    icon: DollarSign,
    title: 'Finance',
    description: 'Fintech solutions, payment gateways, banking portals, and investment dashboards.',
    color: '#10B981',
    lightBg: 'bg-emerald-50',
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Property listing platforms, virtual tours, CRM, and transaction management.',
    color: '#F59E0B',
    lightBg: 'bg-amber-50',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-Commerce',
    description: 'E-commerce stores, POS systems, inventory management, and loyalty programs.',
    color: '#EC4899',
    lightBg: 'bg-pink-50',
  },
  {
    icon: Users,
    title: 'Recruitment & HR',
    description: 'ATS systems, job portals, candidate tracking, and HR automation platforms.',
    color: '#A855F7',
    lightBg: 'bg-purple-50',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'ERP systems, supply chain management, quality control, and IoT integrations.',
    color: '#FF6B00',
    lightBg: 'bg-orange-50',
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Fleet management, route optimization, shipment tracking, and warehouse automation.',
    color: '#0EA5E9',
    lightBg: 'bg-sky-50',
  },
]

// Duplicate for seamless marquee
const row1 = [...industries, ...industries]
const row2 = [...industries.slice(4), ...industries.slice(0, 4), ...industries.slice(4), ...industries.slice(0, 4)]

function IndustryChip({ industry }: { industry: typeof industries[0] }) {
  return (
    <div className="shrink-0 group flex items-center gap-3 px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default hover:border-gray-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 mx-2.5 min-w-[175px]">
      <div
        className={`w-9 h-9 ${industry.lightBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
      >
        <industry.icon size={17} style={{ color: industry.color }} />
      </div>
      <span className="font-semibold text-sm text-[#111111] whitespace-nowrap">{industry.title}</span>
    </div>
  )
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">
            Built for every industry
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Domain expertise across diverse verticals —{' '}
            <br className="hidden md:block" />
            delivering solutions tailored to each industry&apos;s unique challenges.
          </p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
          <div className="flex animate-marquee py-3">
            {row1.map((ind, i) => (
              <IndustryChip key={`r1-${i}`} industry={ind} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
          <div className="flex py-3" style={{ animation: 'marquee 35s linear infinite reverse' }}>
            {row2.map((ind, i) => (
              <IndustryChip key={`r2-${i}`} industry={ind} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#FF6B00] transition-colors duration-300 text-[15px] shadow-lg"
          >
            Discuss Your Industry Needs
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
