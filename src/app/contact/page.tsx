import ContactHeroSection from '@/components/ContactHeroSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import { fetchFAQ, fetchContactContent, fetchCTAContent } from '@/lib/api'

export const metadata = {
  title: 'Contact Us | Orange Global Infotech',
  description: 'Get in touch with Orange Global Infotech. We are ready to help you with your web development, software, and digital marketing needs.',
}

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  const [faqsRes, contactRes, ctaRes] = await Promise.all([
    fetchFAQ(),
    fetchContactContent(),
    fetchCTAContent(),
  ])

  const faqs = faqsRes?.content?.items || []
  const contactData = contactRes?.content || {}

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header / Hero */}
      <ContactHeroSection contactData={contactRes} />

      {/* Main Contact Form and Details */}
      {contactRes?.isActive !== false && (
        <ContactSection
          contactInfo={contactData.contactInfo}
          contactServices={contactData.contactServices}
          budgets={contactData.budgets}
        />
      )}

      {/* Frequently Asked Questions */}
      {faqsRes?.isActive !== false && (
        <FAQSection faqs={faqs} />
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
