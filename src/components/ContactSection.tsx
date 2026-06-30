'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { contactInfo, contactServices as services, budgets } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#111111]/[0.08] rounded-2xl text-sm text-[#111111] placeholder:text-[#5F6368]/60 focus:outline-none focus:border-[#f97316]/40 focus:bg-white focus:ring-2 focus:ring-[#f97316]/10 transition-all duration-200'

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-25" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4 text-balance">
            Let&apos;s Build Something Amazing
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#5F6368] text-lg max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 2 hours with a personalized proposal.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#111111]/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <info.icon size={20} style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#5F6368] mb-0.5">{info.label}</p>
                  <p className="font-semibold text-[#111111] text-sm">{info.value}</p>
                  <p className="text-xs text-[#5F6368] mt-0.5">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Interactive Map */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-[#111111]/[0.06] h-64 bg-gray-50 relative group"
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=SCO%203,%20Level%201,%20Sector%2041-D,%20Chandigarh%20160036&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Orange Global Infotech Location"
                className="w-full h-full grayscale-[0.2] contrast-[1.05] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="lg:h-full"
          >
            <div className="bg-white rounded-[28px] border border-[#111111]/[0.06] shadow-[0_10px_60px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 lg:h-full lg:flex lg:flex-col">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#111111] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#5F6368] max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 bg-[#f97316] text-white font-semibold rounded-2xl hover:bg-[#FF8C33] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 lg:h-full lg:flex lg:flex-col">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select budget</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="lg:flex-1 lg:flex lg:flex-col">
                    <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className={`${inputClass} resize-none lg:flex-1`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#111111] text-white font-semibold rounded-2xl hover:bg-black transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 text-base group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-[#5F6368]">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
