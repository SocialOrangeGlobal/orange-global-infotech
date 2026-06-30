'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Layers, Globe, Code2, Smartphone, Cloud } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/data'

function ServiceVisual({ service }: { service: typeof services[0] }) {
  return (
    <div className="relative w-full group cursor-pointer">
      {/* Outer card */}
      <div
        className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]"
        style={{ boxShadow: `0 40px 80px -20px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)` }}
      >
        {/* Header stripe */}
        <div
          className="flex items-center gap-3 px-6 py-4 border-b border-gray-100"
          style={{ background: `${service.accentColor}08` }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${service.accentColor}20` }}
          >
            <service.badgeIcon size={16} style={{ color: service.accentColor }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: service.accentColor }}>
            {service.badge}
          </span>
          {/* Dots */}
          <div className="ml-auto flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: service.accentColor }} />
          </div>
        </div>

        {/* Sub-service cards grid */}
        <div className="grid grid-cols-2 gap-px bg-gray-100">
          {service.subServices.map((sub, i) => (
            <div key={sub.title} className="bg-white p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.accentColor}15` }}
                >
                  <Layers size={12} style={{ color: service.accentColor }} />
                </div>
                <span className="text-[13px] font-semibold text-[#111111] leading-tight">{sub.title}</span>
              </div>
              <ul className="space-y-1.5">
                {sub.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <Check size={10} style={{ color: service.accentColor }} className="flex-shrink-0" />
                    <span className="text-[11px] text-gray-500 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex flex-wrap gap-3 bg-gray-50/50">
          {service.techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              className="w-8 h-8 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center transition-transform hover:scale-110"
              title={tech.name}
            >
              <tech.icon size={16} color={tech.color} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow beneath */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-25"
        style={{ background: service.accentColor }}
      />
    </div>
  )
}

export default function HomeServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — mirrors ProjectsSection exactly */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white shadow-sm">
              <Globe size={20} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-400 flex items-center justify-center text-white shadow-sm">
              <Code2 size={20} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center text-white shadow-sm">
              <Smartphone size={20} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-white shadow-sm">
              <Cloud size={20} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">
            Meet our services
          </h2>
          <p className="text-lg text-gray-500">
            From web development to cloud infrastructure and everything in between.{' '}
            <br className="hidden md:block" />
            Pick the solution that powers your business.
          </p>
        </motion.div>

        {/* Services List — same alternating layout as ProjectsSection */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${service.lightBg} ${service.textColor} font-semibold text-sm mb-5`}>
                  <service.badgeIcon size={15} />
                  <span>{service.badge}</span>
                </div>

                <h3 className="text-3xl md:text-[2.25rem] font-semibold text-[#111111] mb-5 leading-tight">
                  {service.title}
                </h3>

                <p className="text-base text-gray-500 mb-7 leading-relaxed">
                  {service.description}
                </p>

                {/* Includes list */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.includes.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg text-[15px] mt-8"
                  style={{
                    backgroundColor: service.accentColor,
                    boxShadow: `0 8px 20px -6px ${service.accentColor}80`,
                  }}
                >
                  {service.buttonText}
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Service Visual Card */}
              <div className="w-full lg:w-[62%]">
                <ServiceVisual service={service} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-medium rounded-2xl hover:bg-black transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
