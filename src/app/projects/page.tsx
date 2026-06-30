import Navbar from '@/components/Navbar'
import ProjectsHeroSection from '@/components/ProjectsHeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TechStackSection from '@/components/TechStackSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Projects | Orange Global Infotech',
  description: 'Explore our portfolio of cutting-edge web applications, robust software systems, and engaging mobile platforms.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Page Header / Hero */}
      <ProjectsHeroSection />

      {/* Main Projects List (Without the top header) */}
      <ProjectsSection showTitle={false} />

      {/* Tech Stack */}
      <TechStackSection />

      {/* Ready to start */}
      <CTASection />

      <Footer />
    </main>
  )
}
