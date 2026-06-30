'use client'

import { motion } from 'framer-motion'
import { Search, Map, Pen, Code2, TestTube2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Consultation',
    description:
      'We start by deeply understanding your business goals, target audience, technical requirements, and competitive landscape through structured discovery sessions.',
    color: '#FF6B00',
    bg: 'bg-orange-50',
  },
  {
    number: '02',
    icon: Map,
    title: 'Planning & Strategy',
    description:
      'Our strategists craft a detailed project roadmap, define milestones, select the optimal technology stack, and create a clear execution plan aligned with your budget.',
    color: '#6EC1FF',
    bg: 'bg-blue-50',
  },
  {
    number: '03',
    icon: Pen,
    title: 'Design & Prototyping',
    description:
      'Our UX/UI designers create wireframes, prototypes, and pixel-perfect designs that align with your brand and prioritize user experience and conversion.',
    color: '#A78BFA',
    bg: 'bg-purple-50',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Development',
    description:
      'Our engineers build your solution using best practices, clean architecture, and modern technology — with agile sprints, regular demos, and transparent progress updates.',
    color: '#34D399',
    bg: 'bg-green-50',
  },
  {
    number: '05',
    icon: TestTube2,
    title: 'Testing & QA',
    description:
      'Rigorous quality assurance through automated testing, manual review, performance testing, security audits, and cross-device compatibility verification.',
    color: '#F59E0B',
    bg: 'bg-amber-50',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Deployment & Support',
    description:
      'Smooth launch with zero downtime deployment, comprehensive documentation, team training, and ongoing 24/7 technical support and maintenance.',
    color: '#EC4899',
    bg: 'bg-pink-50',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="font-heading font-bold text-4xl md:text-5xl text-[#111111] mb-5 text-balance"
          >
            How We Work
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-[#5F6368] text-lg max-w-xl mx-auto"
          >
            A proven 6-step framework that transforms your vision into a polished, production-ready digital product.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
              whileHover={{ y: -6 }}
              className="relative p-8 bg-white rounded-[28px] border border-[#111111]/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 group overflow-hidden cursor-default"
            >
              {/* Large number bg */}
              <div className="absolute top-4 right-6 font-heading font-bold text-6xl text-[#111111]/[0.03] select-none group-hover:text-[#111111]/[0.05] transition-colors">
                {step.number}
              </div>

              {/* Step number badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 ${step.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>
                  Step {step.number}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#111111] mb-3">
                {step.title}
              </h3>
              <p className="text-[#5F6368] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline connector (desktop) */}
        <motion.div
          className="hidden lg:flex items-center justify-center gap-2 mt-12 overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-200 to-gray-100" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
