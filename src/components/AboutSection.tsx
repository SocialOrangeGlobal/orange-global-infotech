'use client'
import type { AboutItem } from '@/lib/types'
import { getIcon } from '@/lib/iconMap'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function AboutSection({
  title = 'Why Choose Us',
  description = 'We combine technical expertise with business acumen to deliver solutions that truly matter.',
  items = []
}: {
  title?: string;
  description?: string;
  items?: AboutItem[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dotted-grid opacity-25" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111111] mb-5 tracking-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((card, i) => {
              const Icon = getIcon(card.icon);
              const color = card.color ?? '#f97316';
              return (
                <motion.div
                  key={card.title + i}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative group p-8 lg:p-10 rounded-[32px] overflow-hidden cursor-default transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)]"
                  style={{ backgroundColor: `${color}0C` }}
                >
                  {/* Corner icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={18} style={{ color }} />
                  </div>

                  <div className="mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Icon size={26} style={{ color }} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#111111] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed relative z-10">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
