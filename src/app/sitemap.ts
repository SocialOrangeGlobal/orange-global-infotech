import { MetadataRoute } from 'next'
import { fetchServices, fetchProjects } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://orangeglobalinfotech.com'

  // Fetch dynamic routes
  const [services, projects] = await Promise.all([
    fetchServices(),
    fetchProjects(),
  ])

  // Static routes
  const routes = ['', '/about', '/services', '/projects', '/contact', '/privacy-policy', '/terms-conditions'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...serviceRoutes, ...projectRoutes]
}
