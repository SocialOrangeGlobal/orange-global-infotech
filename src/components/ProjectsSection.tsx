'use client'
import type { Project, ProjectMetadata } from '@/lib/types'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import TechIconRenderer from './TechIconRenderer'
import { getIcon } from '@/lib/iconMap'
import { Monitor, Tablet, Smartphone, Rocket, Code2, Zap, ArrowUpRight, Loader2 } from 'lucide-react'

// ─── Types ─────────────────────────────────────────────────────────────────────

type DeviceType = 'desktop' | 'tablet' | 'mobile'

interface DeviceMockupProps {
  images: { desktop: string; tablet?: string; mobile?: string };
  alt: string;
  url: string;
  accentColor: string;
}

// ─── DeviceMockup ─────────────────────────────────────────────────────────────

function DeviceMockup({ images, alt, url, accentColor }: DeviceMockupProps) {
  const [device, setDevice] = useState<DeviceType>('desktop')
  const [isLoading, setIsLoading] = useState(false)

  const handleDeviceSwitch = useCallback((next: DeviceType) => {
    if (device === next) return
    setIsLoading(true)
    setDevice(next)
  }, [device])

  const handleLoad = useCallback(() => setIsLoading(false), [])

  const DEVICES: { key: DeviceType; Icon: React.ElementType; label: string }[] = [
    { key: 'desktop', Icon: Monitor, label: 'Desktop view' },
    { key: 'tablet', Icon: Tablet, label: 'Tablet view' },
    { key: 'mobile', Icon: Smartphone, label: 'Mobile view' },
  ]

  const currentSrc = device === 'desktop'
    ? images.desktop
    : device === 'tablet'
      ? (images.tablet ?? images.desktop)
      : (images.mobile ?? images.desktop)

  return (
    <div className="relative w-full select-none group flex flex-col items-center">
      {/* Device Toggle */}
      <div className="flex items-center gap-1 mb-8 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm z-10">
        {DEVICES.map(({ key, Icon, label }) => (
          <button
            key={key}
            onClick={() => handleDeviceSwitch(key)}
            className={`p-2.5 rounded-full transition-all duration-300 ${device === key
                ? 'bg-[#FAFAFA] shadow-sm text-[#111111]'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            aria-label={label}
          >
            <Icon size={18} />
          </button>
        ))}
      </div>

      <div className="relative flex justify-center w-full min-h-[300px] sm:min-h-[400px] items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={device}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={
              device === 'desktop'
                ? 'relative w-full'
                : device === 'tablet'
                  ? 'relative w-[340px] sm:w-[480px] md:w-[560px]'
                  : 'relative w-[240px] sm:w-[280px] md:w-[320px]'
            }
          >
            {device === 'desktop' && (
              <>
                <div
                  className="relative bg-[#1a1a1e] rounded-t-xl sm:rounded-t-2xl pt-2 sm:pt-3 px-2 sm:px-3 pb-0"
                  style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)' }}
                >
                  <div className="bg-[#111113] rounded-lg sm:rounded-xl overflow-hidden flex flex-col">
                    {/* Browser chrome */}
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
                    {/* Screenshot */}
                    <div className="relative w-full bg-[#FAFAFA] overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
                      {isLoading && <Loader2 className="absolute animate-spin z-10" size={32} style={{ color: accentColor }} />}
                      <img src={currentSrc} alt={alt} className={`w-full h-auto block transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} onLoad={handleLoad} />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none z-20" />
                    </div>
                  </div>
                </div>
                {/* Laptop hinge */}
                <div className="relative h-2 sm:h-3 bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-b-sm">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0.5 sm:top-1 w-12 sm:w-16 h-1 rounded-full bg-white/10" />
                </div>
                <div className="h-3 sm:h-4 rounded-b-lg sm:rounded-b-xl mx-[-4px] sm:mx-[-6px]" style={{ background: 'linear-gradient(to bottom, #1a1a1e, #111113)', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.5)' }} />
              </>
            )}

            {device === 'tablet' && (
              <div className="relative bg-[#1a1a1e] rounded-[2rem] sm:rounded-[2.5rem] p-[10px] sm:p-[14px]" style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}>
                <div className="bg-[#FAFAFA] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  {isLoading && <Loader2 className="absolute animate-spin z-10" size={32} style={{ color: accentColor }} />}
                  <img src={currentSrc} alt={`${alt} Tablet`} className={`w-full h-auto block transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} onLoad={handleLoad} />
                </div>
                <div className="absolute top-[20px] sm:top-[28px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black border border-[#1a1a1e]" />
              </div>
            )}

            {device === 'mobile' && (
              <div className="relative bg-[#1a1a1e] rounded-[2.5rem] sm:rounded-[3rem] p-[10px] sm:p-[12px]" style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}>
                <div className="bg-[#FAFAFA] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-7 bg-[#1a1a1e] rounded-b-2xl sm:rounded-b-3xl z-30" />
                  {isLoading && <Loader2 className="absolute animate-spin z-10" size={32} style={{ color: accentColor }} />}
                  <img src={currentSrc} alt={`${alt} Mobile`} className={`w-full h-auto block transition-opacity duration-500 z-20 relative ${isLoading ? 'opacity-0' : 'opacity-100'}`} onLoad={handleLoad} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glow beneath */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" style={{ background: accentColor }} />
    </div>
  )
}

// ─── ProjectsSection ──────────────────────────────────────────────────────────

export default function ProjectsSection({
  showTitle = true,
  filterIds,
  projects = [],
  title = 'Meet the projects',
  description = 'From initial design to final deployment and creative exploration. Pick the solution that fits your needs.',
}: {
  showTitle?: boolean;
  filterIds?: string[];
  projects?: Project[];
  title?: string;
  description?: string;
}) {
  if (!projects || projects.length === 0) return null;

  const displayProjects = filterIds
    ? filterIds.map(id => projects.find(p => p.id === id || p.slug === id)).filter((p): p is Project => Boolean(p))
    : projects;

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
              <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center text-white shadow-sm"><Zap size={20} /></div>
              <div className="w-10 h-10 rounded-xl bg-purple-400 flex items-center justify-center text-white shadow-sm"><Code2 size={20} /></div>
              <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white shadow-sm"><Rocket size={20} /></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">{title}</h2>
            <p className="text-lg text-gray-500">{description}</p>
          </motion.div>
        )}

        {/* Projects List */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {displayProjects.map((project, index) => {
              const meta: ProjectMetadata = project.metadata ?? {};
              const accentColor = meta.accentColor ?? '#f97316';
              const techStack = meta.techStack ?? (project.technologies ?? []).map(name => ({ name, icon: name, color: '#333' }));
              const BadgeIcon = meta.badgeIcon ? getIcon(meta.badgeIcon) : Zap;

              return (
                <motion.div
                  key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm mb-5"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    <BadgeIcon size={15} />
                    <span>{meta.badge ?? 'Project'}</span>
                  </div>

                  <h3 className="text-3xl md:text-[2.25rem] font-semibold text-[#111111] mb-5 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-base text-gray-500 mb-7 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {techStack.map((tech, i) => (
                        <motion.div
                          key={tech.name + i}
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                          className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center transition-transform hover:scale-110"
                          title={tech.name}
                        >
                          <TechIconRenderer iconName={tech.icon} color={tech.color} size={20} />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href={project.projectUrl ?? meta.liveUrl ?? '#'}
                    target={project.projectUrl || meta.liveUrl ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-[15px]"
                    style={{ backgroundColor: accentColor, boxShadow: `0 8px 20px -6px ${accentColor}80` }}
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Visual Mockup */}
                <div className="w-full lg:w-[62%] relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
                  <DeviceMockup
                    images={{
                      desktop: meta.images?.desktop ?? project.image ?? '',
                      tablet: meta.images?.tablet,
                      mobile: meta.images?.mobile,
                    }}
                    alt={project.title}
                    url={meta.liveUrl ?? project.projectUrl ?? ''}
                    accentColor={accentColor}
                  />
                </div>
              </motion.div>
            );
          })}
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
