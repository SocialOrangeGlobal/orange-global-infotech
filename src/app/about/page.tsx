import AboutHeroSection from '@/components/AboutHeroSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import { fetchWhyChooseUs, fetchCTAContent } from '@/lib/api'

export const metadata = {
  title: 'About Us | Orange Global Infotech',
  description: 'Learn more about Orange Global Infotech, our mission, our values, and the team behind our innovative digital solutions.',
}

export const dynamic = 'force-dynamic'

export default async function AboutPage() {
  const [whyChooseUsRes, ctaRes] = await Promise.all([
    fetchWhyChooseUs(),
    fetchCTAContent(),
  ])

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header / Hero */}
      <AboutHeroSection />

      {/* Main About Content (Why Choose Us) */}
      {whyChooseUsRes?.isActive !== false && (
        <AboutSection
          title={whyChooseUsRes?.title}
          description={whyChooseUsRes?.description}
          items={whyChooseUsRes?.content?.items}
        />
      )}

      {/* Ready to start */}
      {ctaRes?.isActive !== false && (
        <CTASection
          title={ctaRes?.title}
          description={ctaRes?.description}
          primaryButton={ctaRes?.content?.buttonText}
          secondaryButton={ctaRes?.content?.secondaryButtonText}
          features={ctaRes?.content?.features}
        />
      )}
    </main>
  )
}
