'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Code2, Smartphone, Cloud, ArrowUpRight, Check, Layers } from 'lucide-react'

const detailedServices = [
  {
    id: 'web',
    badge: 'Web Development',
    badgeIcon: Globe,
    title: 'Pixel-Perfect Web Development',
    description: 'In today\'s digital-first world, your website is your most powerful asset. We engineer high-performance, scalable, and visually stunning web applications that convert visitors into loyal customers. We dive deep into your business logic to create custom experiences that align perfectly with your strategic goals.',
    techStack: ['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'Vercel'],
    includes: ['Corporate Websites', 'Business Websites', 'Landing Pages', 'E-Commerce Websites', 'Web Portals', 'Custom Web Applications', 'Progressive Web Apps'],
    subServices: [
      { title: 'Corporate Websites', features: ['Premium UI/UX Design', 'SEO Optimization', 'CMS Integration'] },
      { title: 'E-Commerce Solutions', features: ['Secure Payment Gateways', 'Inventory Management', 'Conversion Optimization'] },
      { title: 'Custom Web Apps', features: ['Scalable Architecture', 'API Integrations', 'Real-time Processing'] },
      { title: 'Web Portals', features: ['Role-based Access Control', 'Secure Authentication', 'Dashboard Analytics'] },
      { title: 'UI/UX Design', features: ['Wireframing', 'User Research', 'Interactive Prototypes'] },
      { title: 'SEO & Performance', features: ['Core Web Vitals', 'On-page SEO', 'Lightning Fast Load'] },
    ],
    accentColor: '#f97316',
    textColor: 'text-orange-500',
    lightBg: 'bg-orange-500/10',
    href: '/contact',
    buttonText: 'Start Web Project',
  },
  {
    id: 'software',
    badge: 'Software Development',
    badgeIcon: Code2,
    title: 'Scalable Software Solutions',
    description: 'Off-the-shelf software often falls short of meeting unique business challenges. We build bespoke software solutions from the ground up, tailored exactly to your operational needs. Our enterprise-grade software is designed for high availability, security, and effortless scaling as your company grows.',
    techStack: ['Python', 'Java', '.NET', 'Docker', 'MongoDB', 'Redis', 'Elasticsearch'],
    includes: ['ERP Solutions', 'Business Management Systems', 'SaaS Platforms', 'Workflow Automation Tools', 'Legacy Modernization'],
    subServices: [
      { title: 'SaaS Platforms', features: ['Multi-tenant Architecture', 'Subscription Management', 'High Availability'] },
      { title: 'ERP Solutions', features: ['Centralized Data Hub', 'Process Automation', 'Custom Reporting'] },
      { title: 'Workflow Automation', features: ['Task Scheduling', 'Third-party Integrations', 'Efficiency Tracking'] },
      { title: 'Business Management', features: ['CRM Integration', 'Inventory Tracking', 'Analytics Dashboards'] },
      { title: 'API Development', features: ['RESTful & GraphQL', 'Rate Limiting', 'Secure Endpoints'] },
      { title: 'Legacy Modernization', features: ['Code Refactoring', 'Cloud Migration', 'Performance Boost'] },
    ],
    accentColor: '#a855f7',
    textColor: 'text-purple-500',
    lightBg: 'bg-purple-500/10',
    href: '/contact',
    buttonText: 'Build Software',
  },
  {
    id: 'mobile',
    badge: 'Mobile App Development',
    badgeIcon: Smartphone,
    title: 'Powerful Mobile Applications',
    description: 'Reach your users wherever they are. We build intuitive, fast, and feature-rich applications for both iOS and Android — native or cross-platform — that drive engagement and retention. Our apps follow strict design guidelines and utilize device hardware to the fullest.',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    includes: ['Android Applications', 'Cross-Platform Apps', 'Progressive Web Apps (PWA)', 'Enterprise Mobile Solutions', 'Wearable Tech Apps'],
    subServices: [
      { title: 'Cross-Platform Apps', features: ['Single Codebase', 'Native-like Performance', 'Faster Time-to-Market'] },
      { title: 'Native Android & iOS', features: ['Hardware Integration', 'Maximum Performance', 'App Store Optimization'] },
      { title: 'Progressive Web Apps', features: ['Offline Capabilities', 'Push Notifications', 'Zero Installation'] },
      { title: 'Enterprise Mobility', features: ['Enterprise Security', 'MDM Integration', 'Offline Syncing'] },
      { title: 'UI/UX for Mobile', features: ['Touch-friendly Design', 'Fluid Animations', 'Dark Mode Support'] },
      { title: 'App Maintenance', features: ['OS Updates', 'Bug Fixing', 'Feature Additions'] },
    ],
    accentColor: '#06b6d4',
    textColor: 'text-cyan-500',
    lightBg: 'bg-cyan-500/10',
    href: '/contact',
    buttonText: 'Build Mobile App',
  },
  {
    id: 'cloud',
    badge: 'Cloud Solutions',
    badgeIcon: Cloud,
    title: 'Cloud-Powered Infrastructure',
    description: 'Future-proof your business with a secure, scalable, and highly available cloud infrastructure. We handle everything from architecture planning and migration to 24/7 server management. We ensure you meet compliance standards while reducing operational costs.',
    techStack: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Azure', 'GCP'],
    includes: ['Cloud Migration', 'Cloud Hosting', 'AWS Solutions', 'DevOps Services', 'Server Management', 'Disaster Recovery'],
    subServices: [
      { title: 'Cloud Migration', features: ['Zero-Downtime Migration', 'Data Integrity Checks', 'Architecture Review'] },
      { title: 'DevOps & CI/CD', features: ['Automated Deployments', 'Infrastructure as Code', 'Continuous Integration'] },
      { title: 'AWS & Azure Solutions', features: ['Auto-scaling Architecture', 'Cost Optimization', 'High Availability'] },
      { title: '24/7 Server Management', features: ['Proactive Monitoring', 'Security Patching', 'Performance Tuning'] },
      { title: 'Security & Compliance', features: ['DDoS Protection', 'Data Encryption', 'Access Management'] },
      { title: 'Disaster Recovery', features: ['Automated Backups', 'Failover Systems', 'Rapid Restoration'] },
    ],
    accentColor: '#10b981',
    textColor: 'text-emerald-500',
    lightBg: 'bg-emerald-500/10',
    href: '/contact',
    buttonText: 'Scale with Cloud',
  },
]

function ServiceVisual({ service }: { service: typeof detailedServices[0] }) {
  return (
    <div className="relative w-full">
      {/* Outer card */}
      <div
        className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl bg-white"
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

        {/* Sub-service cards grid - Expanded for full details */}
        <div className="grid grid-cols-2 gap-px bg-gray-100">
          {service.subServices.map((sub, i) => (
            <div key={sub.title} className="bg-white p-5 flex flex-col gap-3 transition-colors hover:bg-gray-50/50">
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

        {/* Tech stack footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex flex-wrap gap-2 bg-gray-50/50">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 text-[11px] font-medium rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow beneath */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ background: service.accentColor }}
      />
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="pb-24 pt-24 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services List — Alternating layout */}
        <div className="flex flex-col gap-36">
          {detailedServices.map((service, index) => (
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
              <div className="w-full lg:w-[38%] flex flex-col items-start text-left flex-shrink-0">
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
                    <span key={item} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-[13px] font-medium rounded-full shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-[15px]"
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

      </div>
    </section>
  )
}
