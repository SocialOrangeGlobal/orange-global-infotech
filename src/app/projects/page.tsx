import ProjectsHeroSection from '@/components/ProjectsHeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TechStackSection from '@/components/TechStackSection'
import CTASection from '@/components/CTASection'
import { fetchProjects, fetchTechStack, fetchCTAContent } from '@/lib/api'

export const metadata = {
  title: 'Our Projects | Orange Global Infotech',
  description: 'Explore our portfolio of cutting-edge web applications, robust software systems, and engaging mobile platforms.',
}

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const [projects, techStackRes, ctaRes] = await Promise.all([
    fetchProjects(),
    fetchTechStack(),
    fetchCTAContent(),
  ])

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header / Hero */}
      <ProjectsHeroSection />

      {/* Main Projects List (Without the top header) */}
      <ProjectsSection showTitle={false} projects={projects} />

      {/* Tech Stack */}
      {techStackRes?.isActive !== false && (
        <TechStackSection
          title={techStackRes?.title}
          description={techStackRes?.description}
          categories={techStackRes?.content?.categories}
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
