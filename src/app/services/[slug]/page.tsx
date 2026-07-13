import { notFound } from 'next/navigation'
import { fetchServices, fetchCTAContent } from '@/lib/api'
import CTASection from '@/components/CTASection'
import { Layers, Check } from 'lucide-react'
import dynamicImport from 'next/dynamic'
import Link from 'next/link'

const TechIconRenderer = dynamicImport(() => import('@/components/TechIconRenderer'))

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const services = await fetchServices()
  const service = services.find(s => s.slug === resolvedParams.slug)
  
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `${service.title} | Orange Global Infotech`,
    description: service.shortDescription || service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const [services, ctaRes] = await Promise.all([
    fetchServices(),
    fetchCTAContent(),
  ])
  
  const service = services.find(s => s.slug === resolvedParams.slug)
  
  if (!service) {
    notFound()
  }

  const accentColor = service.metadata?.accentColor || '#f97316'
  const textColor = service.metadata?.textColor || '#ffffff'
  const lightBg = service.metadata?.lightBg || '#fff7ed'

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Dynamic Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ backgroundColor: lightBg }}>
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px]" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm mb-6"
            style={{ backgroundColor: accentColor + '15', color: accentColor }}
          >
            <Layers size={16} />
            <span>{service.metadata?.badge || 'Our Services'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
              style={{ backgroundColor: accentColor, boxShadow: '0 8px 25px -8px ' + accentColor }}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-services & Features Grid */}
      {service.metadata?.subServices && service.metadata.subServices.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">What We Offer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.metadata.subServices.map((sub: any, i: number) => (
                <div key={i} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-[#111111] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accentColor + '15' }}>
                      <Layers size={20} style={{ color: accentColor }} />
                    </div>
                    {sub.title}
                  </h3>
                  <ul className="space-y-3">
                    {(sub.features || []).map((feature: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600">
                        <Check size={16} className="mt-1 flex-shrink-0" style={{ color: accentColor }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {service.metadata?.techStack && service.metadata.techStack.length > 0 && (
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#111111] mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {service.metadata.techStack.map((tech: any, i: number) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <TechIconRenderer iconName={tech.icon} color={tech.color || '#333'} size={32} />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ready to start */}
      {ctaRes?.isActive !== false && (
        <CTASection
          title={ctaRes?.title || 'Ready to transform your business?'}
          description={ctaRes?.description}
          primaryButton={ctaRes?.content?.buttonText}
        />
      )}
    </main>
  )
}
