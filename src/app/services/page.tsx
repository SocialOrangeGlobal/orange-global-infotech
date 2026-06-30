import Navbar from '@/components/Navbar'
import ServicesHeroSection from '@/components/ServicesHeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import TechStackSection from '@/components/TechStackSection'

export const metadata = {
  title: 'Our Services | Orange Global Infotech',
  description: 'Explore our comprehensive web development, software development, mobile app development, and cloud solutions.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      {/* Page Header / Hero */}
      <ServicesHeroSection />

      {/* Main Services List (Detailed) */}
      <ServicesSection />
          
      {/* How we work */}
      <ProcessSection />
      
      {/* Ready to start */}
      <CTASection />
      
      <Footer />
    </main>
  )
}
