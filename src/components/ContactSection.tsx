'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getIcon } from '@/lib/iconMap'
import { Send, CheckCircle } from 'lucide-react'
import type { ContactInfoItem } from '@/lib/types'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

function CustomSelect({
  value,
  onChange,
  options,
  placeholder
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3.5 bg-white border rounded-full text-sm flex items-center justify-between transition-all duration-200 focus:outline-none focus:border-[#f97316]/40 focus:ring-2 focus:ring-[#f97316]/10 ${
          isOpen ? 'border-[#f97316]/40 ring-2 ring-[#f97316]/10' : 'border-[#111111]/[0.08]'
        }`}
      >
        <span className={value ? 'text-[#111111]' : 'text-[#5F6368]/60'}>
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#5F6368] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute z-50 w-full mt-2 bg-white border border-[#111111]/[0.08] rounded-2xl shadow-xl overflow-hidden py-1.5"
        >
          <div
            onClick={() => {
              onChange('');
              setIsOpen(false);
            }}
            className={`px-5 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
              !value ? 'bg-[#f97316]/10 text-[#f97316] font-medium' : 'text-[#5F6368] hover:bg-gray-50'
            }`}
          >
            {placeholder}
          </div>
          {options.map((opt, index) => (
            <div
              key={`${opt}-${index}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`px-5 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                value === opt
                  ? 'bg-[#f97316] text-white font-medium'
                  : 'text-[#111111] hover:bg-[#f97316]/10'
              }`}
            >
              {opt}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function ContactSection({
  contactInfo = [],
  contactServices: services = [],
  budgets = []
}: {
  contactInfo?: ContactInfoItem[],
  contactServices?: string[],
  budgets?: string[]
}) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', details: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const { submitContactInquiry } = await import('@/lib/api')
      await submitContactInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        budget: form.budget,
        subject: `New Inquiry for ${form.service || 'General'}`,
        message: form.details,
      })
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-5 py-3.5 bg-white border border-[#111111]/[0.08] rounded-full text-sm text-[#111111] placeholder:text-[#5F6368]/60 focus:outline-none focus:border-[#f97316]/40 focus:ring-2 focus:ring-[#f97316]/10 transition-all duration-200'

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
            {contactInfo.map((info, index) => {
              const Icon = getIcon(info.icon || 'Mail');
              const color = info.color || '#f97316';
              return (
                <motion.div
                  key={`${info.title}-${index}`}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-[28px] border border-[#111111]/[0.06] shadow-sm hover:border-orange-100 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#5F6368] mb-0.5">{info.title}</p>
                    <p className="font-semibold text-[#111111] text-sm">{info.value}</p>
                    <p className="text-xs text-[#5F6368] mt-0.5">{info.sub}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Interactive Map */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-[#111111]/[0.06] h-64 bg-gray-50 relative group mt-6"
            >
              {(() => {
                const addressItem = contactInfo.find(i => i.icon === 'MapPin') || contactInfo.find(i => i.title?.toLowerCase().includes('address'));
                const addressText = addressItem ? `${addressItem.sub || ''}, ${addressItem.value || ''}`.trim().replace(/^,|,$/g, '') : "Chandigarh, India";
                const mapQuery = encodeURIComponent(addressText);
                return (
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    title="Orange Global Infotech Location"
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                );
              })()}
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
            <div className="bg-white rounded-[32px] border border-[#111111]/[0.06] shadow-sm p-6 sm:p-8 md:p-10 lg:h-full lg:flex lg:flex-col">
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
                      <CustomSelect
                        value={form.service}
                        onChange={(val) => setForm({ ...form, service: val })}
                        options={services}
                        placeholder="Select a service"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-2 uppercase tracking-wide">Budget Range</label>
                      <CustomSelect
                        value={form.budget}
                        onChange={(val) => setForm({ ...form, budget: val })}
                        options={budgets}
                        placeholder="Select budget"
                      />
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
                      className="w-full px-5 py-4 bg-white border border-[#111111]/[0.08] rounded-[24px] text-sm text-[#111111] placeholder:text-[#5F6368]/60 focus:outline-none focus:border-[#f97316]/40 focus:ring-2 focus:ring-[#f97316]/10 transition-all duration-200 resize-none lg:flex-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#111111] text-white font-semibold rounded-full hover:bg-black transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-base group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    {!submitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>

                  {error && <p className="text-red-500 text-sm text-center font-medium mt-2">{error}</p>}

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
