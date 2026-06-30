import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import HomeServicesSection from '@/components/HomeServicesSection'
import AboutSection from '@/components/AboutSection'
import SolutionsSection from '@/components/SolutionsSection'
import IndustriesSection from '@/components/IndustriesSection'
import TechStackSection from '@/components/TechStackSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection filterIds={['macquarie', 'anl', 'nri']} />
      <SolutionsSection />
      <HomeServicesSection />
      <TechStackSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
