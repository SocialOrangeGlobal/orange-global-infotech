import Navbar from '@/components/Navbar'
import AboutHeroSection from '@/components/AboutHeroSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | Orange Global Infotech',
  description: 'Learn more about Orange Global Infotech, our mission, our values, and the team behind our innovative digital solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      {/* Page Header / Hero */}
      <AboutHeroSection />

      {/* Main About Content */}
      <AboutSection />
      
      {/* Ready to start */}
      <CTASection />
      
      <Footer />
    </main>
  )
}
