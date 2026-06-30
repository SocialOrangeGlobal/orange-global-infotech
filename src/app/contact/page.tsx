import Navbar from '@/components/Navbar'
import ContactHeroSection from '@/components/ContactHeroSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | Orange Global Infotech',
  description: 'Get in touch with Orange Global Infotech. We are ready to help you with your web development, software, and digital marketing needs.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      {/* Page Header / Hero */}
      <ContactHeroSection />

      {/* Main Contact Form and Details */}
      <ContactSection />
      
      {/* Frequently Asked Questions */}
      <FAQSection />
      
      {/* Ready to start */}
      <CTASection />
      
      <Footer />
    </main>
  )
}
