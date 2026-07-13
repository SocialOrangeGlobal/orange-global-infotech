// ─── Service Types ────────────────────────────────────────────────────────────

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}

export interface SubService {
  title: string;
  features: string[];
}

export interface ServiceMetadata {
  techStack?: TechStackItem[];
  subServices?: SubService[];
  accentColor?: string;
  textColor?: string;
  lightBg?: string;
  href?: string;
  buttonText?: string;
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon?: string;
  image?: string | null;
  features?: string[];
  metadata?: ServiceMetadata;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// ─── Project Types ────────────────────────────────────────────────────────────

export interface ProjectImages {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}

export interface ProjectMetadata {
  accentColor?: string;
  category?: string;
  badge?: string;
  badgeIcon?: string;
  techStack?: TechStackItem[];
  images?: ProjectImages;
  liveUrl?: string;
  year?: string;
  client?: string;
  results?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: string | null;
  technologies?: string[];
  metadata?: ProjectMetadata;
  projectUrl?: string | null;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Website Content Types ────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface HeroContent {
  builtForText?: string;
  rotatingWords?: string[];
  trustedByText?: string;
  stats?: Stat[];
  clientLogos?: ClientLogo[];
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export interface ProcessStep {
  number?: string;
  icon?: string;
  title: string;
  description: string;
  color?: string;
  bg?: string;
}

export interface ProcessContent {
  items?: ProcessStep[];
}

export interface TestimonialItem {
  clientName: string;
  logo?: string;
  quote: string;
  author: string;
  title: string;
}

export interface TestimonialsContent {
  items?: TestimonialItem[];
}

export interface CTAContent {
  buttonText?: string;
  secondaryButtonText?: string;
  features?: string[];
}

export interface IndustryItem {
  icon?: string;
  name: string;
  image?: string;
  description?: string;
  color?: string;
  bg?: string;
}

export interface IndustriesContent {
  items?: IndustryItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContent {
  items?: FAQItem[];
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
  sub: string;
  color?: string;
  bg?: string;
}

export interface ContactContent {
  contactInfo?: ContactInfoItem[];
  contactServices?: string[];
  budgets?: string[];
}

export interface SolutionItem {
  icon?: string;
  title: string;
  description: string;
  color?: string;
  gradient?: string;
  iconBg?: string;
  bg?: string;
  features?: string[];
}

export interface SolutionsContent {
  items?: SolutionItem[];
}

export interface TechCategory {
  category: string;
  items: { name: string; icon?: string; color?: string }[];
}

export interface TechStackContent {
  categories?: TechCategory[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image?: string;
  author?: string;
}

export interface BlogContent {
  items?: BlogPost[];
}

export interface AboutItem {
  icon?: string;
  title: string;
  description: string;
  color?: string;
  bg?: string;
}

export interface AboutContent {
  items?: AboutItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavContent {
  links?: NavLink[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterSocial {
  label: string;
  href: string;
}

export interface FooterContent {
  columns?: FooterColumn[];
  socials?: FooterSocial[];
}

// Generic WebsiteContent wrapper from the API
export interface WebsiteContent<T = Record<string, unknown>> {
  id: string;
  sectionKey: string;
  title: string;
  subtitle?: string;
  description?: string;
  content?: T;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Specific typed section helpers ──────────────────────────────────────────
export type HeroSection = WebsiteContent<HeroContent>;
export type ProcessSection = WebsiteContent<ProcessContent>;
export type CTASectionData = WebsiteContent<CTAContent>;
export type TestimonialsData = WebsiteContent<TestimonialsContent>;
export type IndustriesData = WebsiteContent<IndustriesContent>;
export type FAQData = WebsiteContent<FAQContent>;
export type SolutionsData = WebsiteContent<SolutionsContent>;
export type TechStackData = WebsiteContent<TechStackContent>;
export type BlogData = WebsiteContent<BlogContent>;
