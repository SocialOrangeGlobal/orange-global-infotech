'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import HeroBubblePhysics from './animations/HeroBubblePhysics'

export default function CTASection({
  title = 'Ready To Build Your Next Digital Solution?',
  description = "Every Orange Global product is shaped by real production experience. We tackle the real problems in digital transformation, and we don't stop until they're solved.",
  primaryButton = 'Discuss Your Project',
  secondaryButton,
  features = [
    'Free Consultation',
    'No Hidden Fees',
    'NDA Protected',
    '100% Satisfaction'
  ]
}: {
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  features?: string[];
}) {
  return (
    <section
      id="careers"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#f7f7f5' }}
    >
      {/* 3D Bubble Physics Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[20] pointer-events-none">
        <HeroBubblePhysics />
      </div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Cyan glow — left */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '10%',
          left: '0%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(20,201,225,0.35) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Purple glow — center */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '5%',
          left: '22%',
          width: '56%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(158,60,236,0.2) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Orange glow — right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '10%',
          right: '0%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(249,115,21,0.3) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <motion.div
          className="text-center max-w-3xl mx-auto pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Heading */}
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance mb-6"
            style={{ color: '#0a0a0a', letterSpacing: '-0.03em' }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xl leading-relaxed mb-12 text-pretty"
            style={{ color: '#5f6368' }}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-[30] pointer-events-auto"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 text-base"
              style={{
                backgroundColor: '#ffffff',
                color: '#0a0a0a',
                border: '0.5px solid rgba(17,17,17,0.10)',
              }}
              onMouseEnter={e => {
                ; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(249,115,21,0.30)'
                  ; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#fff8f4'
              }}
              onMouseLeave={e => {
                ; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(17,17,17,0.10)'
                  ; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'
              }}
            >
              <MessageSquare size={18} />
              {primaryButton}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="flex flex-wrap items-center justify-center gap-6 mt-14"
          >
            {features.map((feature: string) => (
              <div key={feature} className="flex items-center gap-2 text-sm" style={{ color: '#5f6368' }}>
                <span className="text-xs" style={{ color: '#f97315' }}>✦</span>
                {feature}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div >
    </section >
  )
}