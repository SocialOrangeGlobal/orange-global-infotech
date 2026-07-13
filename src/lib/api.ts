import type {
  Service,
  Project,
  WebsiteContent,
  HeroContent,
  ProcessContent,
  CTAContent,
  TestimonialsContent,
  IndustriesContent,
  FAQContent,
  SolutionsContent,
  TechStackContent,
  BlogContent,
  AboutContent,
  ContactContent,
} from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001/api';

// ─── Generic fetcher ──────────────────────────────────────────────────────────
async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return (json.data ?? fallback) as T;
  } catch (error) {
    console.error(`[API] Error fetching ${path}:`, error);
    return fallback;
  }
}

// ─── Services ─────────────────────────────────────────────────────────────────
export async function fetchServices(): Promise<Service[]> {
  return apiFetch<Service[]>('/services', []);
}

// ─── Projects ─────────────────────────────────────────────────────────────────
export async function fetchProjects(): Promise<Project[]> {
  return apiFetch<Project[]>('/projects', []);
}

// ─── Website Content sections (typed) ─────────────────────────────────────────
export async function fetchWebsiteContent<T = Record<string, unknown>>(
  sectionKey: string
): Promise<WebsiteContent<T> | null> {
  return apiFetch<WebsiteContent<T> | null>(`/website-content/${sectionKey}`, null);
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export async function submitContactInquiry(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Failed to submit inquiry');
  }

  return res.json();
}


// ─── Typed convenience helpers ────────────────────────────────────────────────
export const fetchHeroContent = () => fetchWebsiteContent<HeroContent>('hero');
export const fetchProcessContent = () => fetchWebsiteContent<ProcessContent>('process');
export const fetchCTAContent = () => fetchWebsiteContent<CTAContent>('cta');
export const fetchTestimonials = () => fetchWebsiteContent<TestimonialsContent>('testimonials');
export const fetchIndustries = () => fetchWebsiteContent<IndustriesContent>('industries');
export const fetchFAQ = () => fetchWebsiteContent<FAQContent>('faqs');
export const fetchSolutions = () => fetchWebsiteContent<SolutionsContent>('solutions');
export const fetchTechStack = () => fetchWebsiteContent<TechStackContent>('tech-stack');
export const fetchBlog = () => fetchWebsiteContent<BlogContent>('blog');
export const fetchAboutContent = () => fetchWebsiteContent<AboutContent>('about');
export const fetchContactContent = () => fetchWebsiteContent<ContactContent>('contact');
export const fetchWhyChooseUs = () => fetchWebsiteContent<any>('whyChooseUs');