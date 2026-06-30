'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap, Shield, HeadphonesIcon, Globe, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const whyCards = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Over 8+ years of experience delivering premium digital solutions across industries globally.',
    color: '#f97316',
    gradient: 'from-orange-50/80 to-amber-50/40',
    iconBg: 'bg-orange-50',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'We follow agile methodologies ensuring faster delivery, flexible iterations, and continuous improvement.',
    color: '#06b6d4',
    gradient: 'from-cyan-50/80 to-blue-50/40',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '10+ dedicated technology experts with deep domain knowledge in modern tech stacks.',
    color: '#a855f7',
    gradient: 'from-purple-50/80 to-violet-50/40',
    iconBg: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security, data privacy, and reliability built into every solution we deliver.',
    color: '#10b981',
    gradient: 'from-emerald-50/80 to-green-50/40',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 50+ countries with culturally aware, globally optimized digital products.',
    color: '#3b82f6',
    gradient: 'from-blue-50/80 to-indigo-50/40',
    iconBg: 'bg-blue-50',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock dedicated support to ensure your systems run smoothly without interruption.',
    color: '#f43f5e',
    gradient: 'from-rose-50/80 to-pink-50/40',
    iconBg: 'bg-rose-50',
  },
]

export default function AboutSection() {
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
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#111111] mb-4 tracking-tight">
              Why Choose Us
            </h3>
            <p className="text-[#5F6368] text-lg max-w-xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly matter.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`relative group p-8 rounded-[28px] bg-gradient-to-br ${card.gradient} border border-[#111111]/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden cursor-default hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${card.color}15, transparent 60%)` }} />

                {/* Corner icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={18} style={{ color: card.color }} />
                </div>

                <div className="w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={28} style={{ color: card.color }} strokeWidth={1.5} />
                </div>

                <h4 className="font-heading font-bold text-xl text-[#111111] mb-3">
                  {card.title}
                </h4>
                <p className="text-[#5F6368] text-sm leading-relaxed relative z-10">
                  {card.description}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[28px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.color}50, transparent)` }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
