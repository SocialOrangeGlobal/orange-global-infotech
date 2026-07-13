'use client'
import type { SolutionItem } from '@/lib/types'
import { getIcon } from '@/lib/iconMap'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const SOLUTION_THEMES = [
  { color: '#FF6B00', gradient: 'from-orange-50/80 to-amber-50/40', iconBg: 'bg-orange-50' },
  { color: '#6EC1FF', gradient: 'from-blue-50/80 to-cyan-50/40', iconBg: 'bg-blue-50' },
  { color: '#A78BFA', gradient: 'from-purple-50/80 to-violet-50/40', iconBg: 'bg-purple-50' },
  { color: '#34D399', gradient: 'from-green-50/80 to-emerald-50/40', iconBg: 'bg-green-50' },
  { color: '#F59E0B', gradient: 'from-yellow-50/80 to-amber-50/40', iconBg: 'bg-yellow-50' },
  { color: '#EC4899', gradient: 'from-pink-50/80 to-rose-50/40', iconBg: 'bg-pink-50' },
]

// Safelist for Tailwind parser (so DB-injected classes aren't purged)
const SAFELIST = [
  'from-rose-50/80', 'to-pink-50/40', 'bg-rose-50',
  'from-emerald-50/80', 'to-teal-50/40', 'bg-emerald-50',
  'from-blue-50/80', 'to-indigo-50/40', 'bg-blue-50',
  'from-orange-50/80', 'to-amber-50/40', 'bg-orange-50',
  'from-purple-50/80', 'to-violet-50/40', 'bg-purple-50',
  'from-green-50/80', 'to-emerald-50/40', 'bg-green-50',
  'from-yellow-50/80', 'to-amber-50/40', 'bg-yellow-50',
  'from-pink-50/80', 'to-rose-50/40', 'bg-pink-50',
]


export default function SolutionsSection({
  title = 'Solutions We Build',
  description = 'Comprehensive digital solutions engineered for businesses of all sizes and industries.',
  solutions = []
}: {
  title?: string;
  description?: string;
  solutions?: SolutionItem[];
}) {
  if (!solutions || solutions.length === 0) return null;

  return (
    <section id="solutions" className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-25" />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-3xl opacity-60 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl text-[#111111] mb-5 text-balance">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#5F6368] text-lg max-w-xl mx-auto">
            {description}
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {solutions.map((sol, i) => {
            const Icon = getIcon(sol.icon);
            // Fallback to our custom theme palette cyclically
            const theme = SOLUTION_THEMES[i % SOLUTION_THEMES.length];
            const color = sol.color || theme.color;
            const gradientClass = sol.gradient || theme.gradient;
            const iconBgClass = sol.iconBg || theme.iconBg;
            
            return (
              <motion.div
                key={sol.title + i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`relative group p-8 rounded-[28px] bg-gradient-to-br ${gradientClass} border border-[#111111]/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden cursor-default hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${color}15, transparent 60%)` }} />

                {/* Corner icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={18} style={{ color }} />
                </div>

                <div className={`w-12 h-12 ${iconBgClass} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} style={{ color }} />
                </div>

                <h3 className="font-heading font-bold text-xl text-[#111111] mb-3">
                  {sol.title}
                </h3>
                <p className="text-[#5F6368] text-sm leading-relaxed">
                  {sol.description}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[28px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}50, transparent)` }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
