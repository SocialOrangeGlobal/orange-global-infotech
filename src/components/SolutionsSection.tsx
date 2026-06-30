'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, ShoppingCart, Cpu, Server, Smartphone, Building2, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const solutions = [
  {
    icon: Building2,
    title: 'Business Websites',
    description:
      'Premium corporate websites that establish your brand authority and generate consistent leads with powerful design and SEO.',
    color: '#FF6B00',
    gradient: 'from-orange-50/80 to-amber-50/40',
    iconBg: 'bg-orange-50',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Feature-rich online stores built for conversions, with seamless payment gateways, inventory management, and rich UX.',
    color: '#6EC1FF',
    gradient: 'from-blue-50/80 to-cyan-50/40',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Cpu,
    title: 'Custom Software',
    description:
      'Bespoke software solutions engineered to automate workflows, reduce costs, and drive operational efficiency across your organization.',
    color: '#A78BFA',
    gradient: 'from-purple-50/80 to-violet-50/40',
    iconBg: 'bg-purple-50',
  },
  {
    icon: Server,
    title: 'SaaS Applications',
    description:
      'End-to-end SaaS product development — from MVP to scale — with multi-tenancy, subscriptions, and enterprise integrations.',
    color: '#34D399',
    gradient: 'from-green-50/80 to-emerald-50/40',
    iconBg: 'bg-green-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'iOS and Android apps crafted for engagement and performance, with elegant UI, offline capabilities, and real-time features.',
    color: '#F59E0B',
    gradient: 'from-yellow-50/80 to-amber-50/40',
    iconBg: 'bg-yellow-50',
  },
  {
    icon: LayoutDashboard,
    title: 'Enterprise Solutions',
    description:
      'Large-scale enterprise platforms with advanced analytics, role management, integrations, and robust architecture for complex organizations.',
    color: '#EC4899',
    gradient: 'from-pink-50/80 to-rose-50/40',
    iconBg: 'bg-pink-50',
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-25" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-3xl opacity-60 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.06) 0%, transparent 70%)' }} />

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
            Solutions We Build
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#5F6368] text-lg max-w-xl mx-auto">
            Comprehensive digital solutions engineered for businesses of all sizes and industries.
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
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`relative group p-8 rounded-[28px] bg-gradient-to-br ${sol.gradient} border border-[#111111]/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden cursor-default hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300`}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${sol.color}15, transparent 60%)` }} />

              {/* Corner icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={18} style={{ color: sol.color }} />
              </div>

              <div className={`w-12 h-12 ${sol.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <sol.icon size={22} style={{ color: sol.color }} />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#111111] mb-3">
                {sol.title}
              </h3>
              <p className="text-[#5F6368] text-sm leading-relaxed">
                {sol.description}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[28px]"
                style={{ background: `linear-gradient(90deg, transparent, ${sol.color}50, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
