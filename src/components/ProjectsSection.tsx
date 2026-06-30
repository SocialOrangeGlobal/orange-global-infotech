'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { Monitor, Tablet, Smartphone, Rocket, Code2, Zap, ArrowUpRight, Loader2 } from 'lucide-react'

function DeviceMockup({ images, alt, url, accentColor }: { images: { desktop: string; tablet: string; mobile: string }; alt: string; url: string; accentColor: string }) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [loadedState, setLoadedState] = useState({
    desktop: false,
    tablet: false,
    mobile: false
  })

  // Preload and robustly track image loading states
  useEffect(() => {
    const checkImage = (src: string, key: 'desktop' | 'tablet' | 'mobile') => {
      const img = new window.Image()
      img.src = src
      if (img.complete) {
        setLoadedState(prev => ({ ...prev, [key]: true }))
      } else {
        img.onload = () => setLoadedState(prev => ({ ...prev, [key]: true }))
        img.onerror = () => setLoadedState(prev => ({ ...prev, [key]: true }))
      }
    }

    checkImage(images.desktop, 'desktop')
    checkImage(images.tablet, 'tablet')
    checkImage(images.mobile, 'mobile')
  }, [images])

  return (
    <div className="relative w-full select-none group flex flex-col items-center">
      {/* Device Toggle */}
      <div className="flex items-center gap-1 mb-8 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm z-10">
        <button
          onClick={() => setDevice('desktop')}
          className={`p-2.5 rounded-full transition-all duration-300 ${device === 'desktop' ? 'bg-[#FAFAFA] shadow-sm text-[#111111]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
          aria-label="Desktop view"
        >
          <Monitor size={18} />
        </button>
        <button
          onClick={() => setDevice('tablet')}
          className={`p-2.5 rounded-full transition-all duration-300 ${device === 'tablet' ? 'bg-[#FAFAFA] shadow-sm text-[#111111]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
          aria-label="Tablet view"
        >
          <Tablet size={18} />
        </button>
        <button
          onClick={() => setDevice('mobile')}
          className={`p-2.5 rounded-full transition-all duration-300 ${device === 'mobile' ? 'bg-[#FAFAFA] shadow-sm text-[#111111]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
          aria-label="Mobile view"
        >
          <Smartphone size={18} />
        </button>
      </div>

      <div className="relative flex justify-center w-full min-h-[300px] sm:min-h-[400px] items-center">
        <AnimatePresence mode="wait">
          {device === 'desktop' && (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* Screen bezel */}
              <div
                className="relative bg-[#1a1a1e] rounded-t-xl sm:rounded-t-2xl pt-2 sm:pt-3 px-2 sm:px-3 pb-0"
                style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)' }}
              >
                <div className="bg-[#111113] rounded-lg sm:rounded-xl overflow-hidden flex flex-col">
                  {/* Browser chrome top bar */}
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1c1c1f] border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-2 sm:mx-4">
                      <div className="flex items-center gap-2 bg-[#2a2a2e] rounded-md px-2 sm:px-3 py-1 sm:py-1.5 max-w-xs mx-auto">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white/30 flex-shrink-0" />
                        <span className="text-white/50 text-[10px] sm:text-xs font-mono truncate">{url}</span>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative w-full bg-[#FAFAFA] overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
                    {!loadedState.desktop && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#FAFAFA]">
                        <Loader2 className="animate-spin" size={32} style={{ color: accentColor }} />
                      </div>
                    )}
                    <img src={images.desktop} alt={alt} className={`w-full h-auto block transition-opacity duration-500 ${loadedState.desktop ? 'opacity-100' : 'opacity-0'}`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none z-20" />
                  </div>
                </div>
              </div>
              {/* Laptop hinge */}
              <div className="relative h-2 sm:h-3 bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-b-sm">
                <div className="absolute left-1/2 -translate-x-1/2 top-0.5 sm:top-1 w-12 sm:w-16 h-1 rounded-full bg-white/10" />
              </div>
              <div
                className="h-3 sm:h-4 rounded-b-lg sm:rounded-b-xl mx-[-4px] sm:mx-[-6px]"
                style={{
                  background: 'linear-gradient(to bottom, #1a1a1e, #111113)',
                  boxShadow: '0 10px 30px -5px rgba(0,0,0,0.5)',
                }}
              />
            </motion.div>
          )}

          {device === 'tablet' && (
            <motion.div
              key="tablet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[340px] sm:w-[480px] md:w-[560px]"
            >
              <div
                className="relative bg-[#1a1a1e] rounded-[2rem] sm:rounded-[2.5rem] p-[10px] sm:p-[14px]"
                style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}
              >
                <div className="bg-[#FAFAFA] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  {!loadedState.tablet && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#FAFAFA]">
                      <Loader2 className="animate-spin" size={32} style={{ color: accentColor }} />
                    </div>
                  )}
                  <img src={images.tablet} alt={`${alt} Tablet`} className={`w-full h-auto block transition-opacity duration-500 ${loadedState.tablet ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                {/* Camera dot */}
                <div className="absolute top-[20px] sm:top-[28px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black border border-[#1a1a1e]" />
              </div>
            </motion.div>
          )}

          {device === 'mobile' && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[240px] sm:w-[280px] md:w-[320px]"
            >
              <div
                className="relative bg-[#1a1a1e] rounded-[2.5rem] sm:rounded-[3rem] p-[10px] sm:p-[12px]"
                style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}
              >
                <div className="bg-[#FAFAFA] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-7 bg-[#1a1a1e] rounded-b-2xl sm:rounded-b-3xl z-30"></div>

                  {!loadedState.mobile && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#FAFAFA]">
                      <Loader2 className="animate-spin" size={32} style={{ color: accentColor }} />
                    </div>
                  )}
                  <img
                    src={images.mobile}
                    alt={`${alt} Mobile`}
                    className={`w-full h-auto block transition-opacity duration-500 z-20 relative ${loadedState.mobile ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Glow beneath */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none"
        style={{ background: accentColor }}
      />
    </div>
  )
}

export default function ProjectsSection({ showTitle = true, filterIds }: { showTitle?: boolean; filterIds?: string[] }) {
  const displayProjects = filterIds
    ? filterIds.map(id => projects.find(p => p.id === id)).filter(Boolean) as typeof projects
    : projects

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        {showTitle && (
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center text-white shadow-sm">
                <Zap size={20} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-400 flex items-center justify-center text-white shadow-sm">
                <Code2 size={20} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white shadow-sm">
                <Rocket size={20} />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">
              Meet the projects
            </h2>
            <p className="text-lg text-gray-500">
              From initial design to final deployment and creative exploration.{' '}
              <br className="hidden md:block" />
              Pick the solution that fits your needs.
            </p>
          </motion.div>
        )}

        {/* Projects List */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${project.lightBg} ${project.textColor} font-semibold text-sm mb-5`}>
                  <project.badgeIcon size={15} />
                  <span>{project.badge}</span>
                </div>

                <h3 className="text-3xl md:text-[2.25rem] font-semibold text-[#111111] mb-5 leading-tight">
                  {project.title}
                </h3>

                <p className="text-base text-gray-500 mb-7 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-[22px] transition-transform hover:scale-110"
                      title={tech.name}
                    >
                      <tech.icon color={tech.color} />
                    </motion.div>
                  ))}
                </div>

                <Link
                  href={project.browserUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-[15px]"
                  style={{
                    backgroundColor: project.accentColor,
                    boxShadow: `0 8px 20px -6px ${project.accentColor}80`,
                  }}
                >
                  {project.buttonText}
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Browser Mockup */}
              <div className="w-full lg:w-[62%]">
                <DeviceMockup
                  images={project.images}
                  alt={project.title}
                  url={project.browserUrl}
                  accentColor={project.accentColor}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        {showTitle && (
          <motion.div
            className="flex justify-center mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-medium rounded-2xl hover:bg-black transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  )
}
