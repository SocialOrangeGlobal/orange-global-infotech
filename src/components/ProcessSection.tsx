'use client'
import type { ProcessStep } from '@/lib/types'
import { getIcon } from '@/lib/iconMap'
import { motion } from 'framer-motion'

const PROCESS_COLORS = ['#FF6B00', '#6EC1FF', '#A78BFA', '#34D399', '#F59E0B', '#EC4899'];

export default function ProcessSection({
  title = 'How We Work',
  description = 'A proven 6-step framework that transforms your vision into a polished, production-ready digital product.',
  stepsData = []
}: {
  title?: string;
  description?: string;
  stepsData?: ProcessStep[];
}) {
  if (!stepsData || stepsData.length === 0) return null;

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
            {title}
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-[#5F6368] text-lg max-w-xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsData.map((step, i) => {
            const color = step.color || PROCESS_COLORS[i % PROCESS_COLORS.length];
            const numStr = step.number ?? String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={step.number ?? i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                whileHover={{ y: -6 }}
                className="relative p-8 bg-white rounded-[28px] border border-[#111111]/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 group overflow-hidden cursor-default"
              >
                {/* Large number bg */}
                <div className="absolute top-4 right-6 font-heading font-bold text-6xl text-[#111111]/[0.03] select-none group-hover:text-[#111111]/[0.05] transition-colors">
                  {numStr}
                </div>

                {/* Step number badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    {(() => {
                      const Icon = getIcon(step.icon);
                      return <Icon size={22} style={{ color }} />;
                    })()}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>
                    Step {numStr}
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
                  style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Timeline connector (desktop) */}
        <motion.div
          className="hidden lg:flex items-center justify-center gap-2 mt-12 overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {stepsData.map((step, i) => {
            const color = step.color || PROCESS_COLORS[i % PROCESS_COLORS.length];
            const numStr = step.number ?? String(i + 1).padStart(2, '0');
            return (
              <div key={step.number ?? i} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                  style={{ backgroundColor: color }}
                >
                  {numStr}
                </div>
                {i < stepsData.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-gray-200 to-gray-100" />
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
