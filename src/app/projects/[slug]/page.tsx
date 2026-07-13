import { notFound } from 'next/navigation'
import { fetchProjects, fetchCTAContent } from '@/lib/api'
import CTASection from '@/components/CTASection'
import { Check, Link as LinkIcon, Calendar, User, Layout, ArrowUpRight } from 'lucide-react'
import dynamicImport from 'next/dynamic'
const TechIconRenderer = dynamicImport(() => import('@/components/TechIconRenderer'), { ssr: false })
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projects = await fetchProjects()
  const project = projects.find(p => p.slug === resolvedParams.slug)
  
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `${project.title} | Orange Global Infotech`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const [projects, ctaRes] = await Promise.all([
    fetchProjects(),
    fetchCTAContent(),
  ])
  
  const project = projects.find(p => p.slug === resolvedParams.slug)
  
  if (!project) {
    notFound()
  }

  const meta = project.metadata || {}
  const accentColor = meta.accentColor || '#f97316'
  const techStack = meta.techStack ?? (project.technologies ?? []).map(name => ({ name, icon: name, color: '#333' }))

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Project Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm mb-6"
            style={{ backgroundColor: accentColor + '15', color: accentColor }}
          >
            <Layout size={16} />
            <span>{meta.badge || meta.category || 'Our Work'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-gray-100 text-left">
            {meta.client && (
              <div>
                <span className="block text-sm text-gray-500 font-medium mb-1">Client</span>
                <span className="text-[#111111] font-semibold flex items-center gap-2">
                  <User size={16} style={{ color: accentColor }} />
                  {meta.client}
                </span>
              </div>
            )}
            {meta.year && (
              <div>
                <span className="block text-sm text-gray-500 font-medium mb-1">Timeline</span>
                <span className="text-[#111111] font-semibold flex items-center gap-2">
                  <Calendar size={16} style={{ color: accentColor }} />
                  {meta.year}
                </span>
              </div>
            )}
            {(project.projectUrl || meta.liveUrl) && (
              <div>
                <span className="block text-sm text-gray-500 font-medium mb-1">Live URL</span>
                <Link
                  href={project.projectUrl || meta.liveUrl || '#'}
                  target="_blank"
                  className="text-[#111111] font-semibold hover:underline flex items-center gap-2 transition-all"
                  style={{ textDecorationColor: accentColor }}
                >
                  <LinkIcon size={16} style={{ color: accentColor }} />
                  Visit Website
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      {(project.image || meta.images?.desktop) && (
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={project.image || meta.images?.desktop || ''}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Results & Key Features */}
      {meta.results && meta.results.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#111111] mb-8 text-center">Key Results & Features</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {meta.results.map((result: string, i: number) => (
                <div key={i} className="flex items-start gap-3 p-6 bg-[#FAFAFA] border border-gray-100 rounded-2xl">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: accentColor + '15' }}>
                    <Check size={16} style={{ color: accentColor }} />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#111111] mb-12">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech: any, i: number) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <TechIconRenderer iconName={tech.icon} color={tech.color || '#333'} size={32} />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">Want to build something similar?</h2>
          <p className="text-lg text-gray-600 mb-10">Let's discuss how we can bring your vision to life with cutting-edge technology and beautiful design.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: accentColor, boxShadow: `0 8px 25px -8px ${accentColor}` }}
          >
            Start Your Project <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

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
