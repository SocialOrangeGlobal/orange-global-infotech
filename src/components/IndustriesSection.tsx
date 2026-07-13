'use client'
import { getIcon } from '@/lib/iconMap'
import type { IndustryItem } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

const COLOR_PALETTE = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#A855F7', '#FF6B00', '#0EA5E9']

function IndustryChip({ industry, index }: { industry: IndustryItem, index: number }) {
  const Icon = getIcon(industry.icon || 'Factory');
  const color = industry.color || COLOR_PALETTE[index % COLOR_PALETTE.length];

  return (
    <div className="shrink-0 group flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default hover:border-gray-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 mx-2.5 min-w-[175px]">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={17} style={{ color }} />
      </div>
      <span className="font-semibold text-sm text-[#111111] whitespace-nowrap">{industry.name}</span>
    </div>
  )
}

export default function IndustriesSection({
  title = 'Built for every industry',
  description = 'Deep domain expertise across various sectors to deliver tailored, high-impact digital solutions.',
  industriesData = []
}: {
  title?: string;
  description?: string;
  industriesData?: any[];
}) {

  // Safety check to ensure we have data
  if (!industriesData || industriesData.length === 0) return null;

  // Duplicate for seamless marquee
  const { row1, row2 } = useMemo(() => {
    const data = industriesData as IndustryItem[];
    // To ensure the marquee has enough items to scroll smoothly, we duplicate the array.
    const r1 = [...data, ...data, ...data];
    const mid = Math.ceil(data.length / 2);
    // Try to stagger row 2 by slicing from the middle
    const r2Base = [...data.slice(mid), ...data.slice(0, mid)];
    const r2 = [...r2Base, ...r2Base, ...r2Base];
    return { row1: r1, row2: r2 };
  }, [industriesData]);

  return (
    <section id="industries" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
          <div className="flex animate-marquee py-3">
            {row1.map((ind, i) => (
              <IndustryChip key={`r1-${i}`} industry={ind} index={i % (industriesData.length || 1)} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
          <div className="flex py-3" style={{ animation: 'marquee 35s linear infinite reverse' }}>
            {row2.map((ind, i) => (
              <IndustryChip key={`r2-${i}`} industry={ind} index={(i + Math.ceil(industriesData.length / 2)) % (industriesData.length || 1)} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#FF6B00] transition-colors duration-300 text-[15px] shadow-lg"
          >
            Discuss Your Industry Needs
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
