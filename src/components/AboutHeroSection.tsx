'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import HeroBubblePhysics from './animations/HeroBubblePhysics'

function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words])

  return (
    <span className="inline-flex items-center relative h-[1.3em] overflow-hidden align-baseline min-w-[140px] sm:min-w-[240px] ml-1.5 pointer-events-auto">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className="absolute inset-0 flex items-center font-medium text-[#111111] whitespace-nowrap"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function AboutHeroSection() {
  const ref = useRef<HTMLElement>(null)
  useScroll({ target: ref, offset: ['start start', 'end start'] })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
  }

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-start overflow-hidden pt-48 md:pt-52 lg:pt-56 pb-12 md:pb-24 group"
      style={{ backgroundColor: '#f7f7f5' }}
    >
      {/* 3D Bubble Physics Background */}
      <HeroBubblePhysics />

      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Cyan glow — left */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '30%',
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
          top: '15%',
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
          top: '30%',
          right: '0%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(249,115,21,0.3) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-[#111111] leading-[1.05] tracking-tight text-balance mb-6"
          >
            About <br className="hidden md:block" />
            Orange Global InfoTech
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-normal text-gray-700 leading-relaxed max-w-2xl mb-2 text-pretty"
          >
            We are a team of passionate engineers, designers, and strategists dedicated to building the future of digital experiences.
          </motion.p>

          {/* Built for */}
          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-normal text-[#111111] mb-10 flex flex-wrap items-center justify-center gap-1 leading-relaxed"
          >
            Driven by:&nbsp;<RotatingText words={['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Impact']} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
