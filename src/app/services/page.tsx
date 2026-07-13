import ServicesHeroSection from '@/components/ServicesHeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import CTASection from '@/components/CTASection'
import { fetchServices, fetchProcessContent, fetchCTAContent } from '@/lib/api'

export const metadata = {
  title: 'Our Services | Orange Global Infotech',
  description: 'Explore our comprehensive web development, software development, mobile app development, and cloud solutions.',
}

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const [services, processRes, ctaRes] = await Promise.all([
    fetchServices(),
    fetchProcessContent(),
    fetchCTAContent(),
  ]);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header / Hero */}
      <ServicesHeroSection />

      {/* Main Services List (Detailed) */}
      <ServicesSection servicesData={services} />

      {/* How we work */}
      {processRes?.isActive !== false && (
        <ProcessSection
          title={processRes?.title}
          description={processRes?.description}
          stepsData={processRes?.content?.items}
        />
      )}

      {/* Ready to start */}
      {ctaRes?.isActive !== false && (
        <CTASection
          title={ctaRes?.title}
          description={ctaRes?.description}
          primaryButton={ctaRes?.content?.buttonText}
        />
      )}
    </main>
  )
}
