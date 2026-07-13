'use client'
import type { Stat, ClientLogo } from '@/lib/types'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

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

export default function HeroSection({
  title = 'Transforming ideas into scalable digital solutions',
  description = 'Web development, scalable software solutions, and AI-powered systems',
  ctaPrimary = 'Start New Project',
  ctaSecondary = 'Explore Services',
  builtForText = 'Built for:',
  rotatingWords = ['Innovative Businesses', 'Startups & Enterprises', 'Web & Mobile Platforms', 'AI-Driven Systems', 'Scalable Ecosystems'],
  trustedByText = 'Trusted by 3,000+ professionals worldwide',
  stats = [],
  clientLogos = []
}: {
  title?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  builtForText?: string;
  rotatingWords?: string[];
  trustedByText?: string;
  stats?: Stat[];
  clientLogos?: ClientLogo[];
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  // Helper to split title with <br /> roughly in the middle for large screens
  const renderTitle = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 3) return text;
    const mid = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, mid).join(' ')} <br className="hidden md:block" />
        {words.slice(mid).join(' ')}
      </>
    );
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-32 md:pt-56 lg:pt-64 pb-0 group"
      style={{ backgroundColor: '#f7f7f5' }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-72 lg:bottom-80 z-[20] pointer-events-none">
        <HeroBubblePhysics />
      </div>

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
          top: '10%',
          left: '0%',
          width: '50%',
          height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(20,201,225,0.38) 0%, transparent 68%)',
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
          height: '65%',
          background: 'radial-gradient(ellipse at center, rgba(158,60,236,0.22) 0%, transparent 68%)',
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
          height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(249,115,21,0.32) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto pointer-events-none mt-8 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-[#111111] leading-[1.05] tracking-tight text-balance mb-6"
          >
            {renderTitle(title)}
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-normal text-gray-700 leading-relaxed max-w-2xl mb-2 text-pretty"
          >
            {description}
          </motion.p>

          {/* Built for */}
          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-normal text-[#111111] mb-10 flex flex-wrap items-center justify-center gap-1 leading-relaxed"
          >
            {builtForText}&nbsp;<RotatingText words={rotatingWords} />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto relative z-[30] pointer-events-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#111111] text-white font-medium rounded-full hover:bg-black transition-colors duration-300 shadow-lg shadow-[#111111]/10 text-base"
            >
              {ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-[#111111] font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-base shadow-sm"
            >
              {ctaSecondary}
            </Link>
          </motion.div>

          {/* Trusted by */}
          <motion.div variants={itemVariants} className="flex flex-col items-center w-full mb-4">
            <p className="text-xl font-medium text-gray-600 mb-8">
              {trustedByText}
            </p>
          </motion.div>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 py-4 mb-16 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#f7f7f5] to-transparent" />
          <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="inline-flex items-center justify-center mx-10 md:mx-12 flex-shrink-0 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={0}
                  height={0}
                  sizes="120px"
                  className={`object-contain ${logo.alt === 'Microsoft' ? 'scale-[1.35] md:scale-[1.6]' : ''}`}
                  style={{ height: '2.5rem', width: 'auto' }}
                  priority={i === 0}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <div
        className="relative z-10 w-full pt-16 pb-20 max-w-6xl mx-auto"
        style={{ borderTop: '0.5px solid rgba(0,0,0,0.09)' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
          {isMounted && stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center px-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-3">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[#111111]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}