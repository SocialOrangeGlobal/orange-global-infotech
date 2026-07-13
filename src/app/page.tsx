import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import HomeServicesSection from '@/components/HomeServicesSection'
import SolutionsSection from '@/components/SolutionsSection'
import IndustriesSection from '@/components/IndustriesSection'
import TechStackSection from '@/components/TechStackSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import {
  fetchProjects, fetchServices,
  fetchHeroContent, fetchProcessContent, fetchCTAContent,
  fetchTestimonials, fetchIndustries, fetchSolutions, fetchTechStack,
  fetchWebsiteContent,
} from '@/lib/api'
import type { Stat, ClientLogo } from '@/lib/types'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Orange Global Infotech | Web & Software Development',
  description: 'We build high-performance web apps, scalable software, and cloud-powered solutions for businesses worldwide.',
}

export default async function HomePage() {
  const [
    heroRes,
    projects,
    services,
    testimonialsRes,
    clientLogosRes,
    statsRes,
    homeProjectsRes,
    solutionsRes,
    homeServicesRes,
    techStackRes,
    industriesRes,
    processRes,
    ctaRes,
  ] = await Promise.all([
    fetchHeroContent(),
    fetchProjects(),
    fetchServices(),
    fetchTestimonials(),
    fetchWebsiteContent('clientLogos'),
    fetchWebsiteContent('stats'),
    fetchWebsiteContent('homeProjects'),
    fetchSolutions(),
    fetchWebsiteContent('homeServices'),
    fetchTechStack(),
    fetchIndustries(),
    fetchProcessContent(),
    fetchCTAContent(),
  ]);

  // Safely extract typed content from generic sections
  const heroData = heroRes?.content ?? {};
  const clientLogosData = ((clientLogosRes?.content as any)?.items ?? []) as ClientLogo[];
  const statsData = ((statsRes?.content as any)?.items ?? []) as Stat[];
  const testimonialsData = testimonialsRes?.content?.items ?? [];

  return (
    <main>
      {/* Hero */}
      {heroRes?.isActive !== false && (
        <HeroSection
          title={heroRes?.title}
          description={heroRes?.description}
          ctaPrimary={heroData.ctaPrimary}
          ctaSecondary={heroData.ctaSecondary}
          builtForText={heroData.builtForText}
          rotatingWords={heroData.rotatingWords}
          trustedByText={heroData.trustedByText}
          clientLogos={clientLogosData}
          stats={statsData}
        />
      )}

      {/* Featured Projects */}
      {homeProjectsRes?.isActive !== false && projects.length > 0 && (
        <ProjectsSection
          title={homeProjectsRes?.title}
          description={homeProjectsRes?.description}
          projects={projects}
          filterIds={['macquarie', 'anl', 'nri']}
        />
      )}

      {/* Solutions */}
      {solutionsRes?.isActive !== false && (
        <SolutionsSection
          title={solutionsRes?.title}
          description={solutionsRes?.description}
          solutions={solutionsRes?.content?.items}
        />
      )}

      {/* Home Services */}
      {homeServicesRes?.isActive !== false && services.length > 0 && (
        <HomeServicesSection
          title={homeServicesRes?.title}
          description={homeServicesRes?.description}
          services={(() => {
            const targeted = services.filter(s => 
              ['web', 'software', 'app', 'cloud'].some(keyword => s.title.toLowerCase().includes(keyword))
            );
            return (targeted.length >= 4 ? targeted : services).slice(0, 4);
          })()}
        />
      )}

      {/* Tech Stack */}
      {techStackRes?.isActive !== false && (
        <TechStackSection
          title={techStackRes?.title}
          description={techStackRes?.description}
          categories={techStackRes?.content?.categories}
        />
      )}

      {/* Industries */}
      {industriesRes?.isActive !== false && (
        <IndustriesSection
          title={industriesRes?.title}
          description={industriesRes?.description}
          industriesData={industriesRes?.content?.items}
        />
      )}

      {/* Process */}
      {processRes?.isActive !== false && (
        <ProcessSection
          title={processRes?.title}
          description={processRes?.description}
          stepsData={processRes?.content?.items}
        />
      )}

      {/* Testimonials */}
      {testimonialsRes?.isActive !== false && testimonialsData.length > 0 && (
        <TestimonialsSection testimonials={testimonialsData} />
      )}

      {/* CTA */}
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
