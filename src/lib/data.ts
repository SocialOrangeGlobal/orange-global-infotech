import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiDotnet,
  SiDocker,
  SiMongodb,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiExpress,
  SiDjango,
  SiVercel,
  SiTypescript,
  SiSanity
} from 'react-icons/si'
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa'

import {
  Globe,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  LayoutTemplate,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react'

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const clientLogos = [
  { src: '/logos/google.png', alt: 'Google' },
  { src: '/logos/microsoft.png', alt: 'Microsoft' },
  { src: '/logos/paypallogo.png', alt: 'PayPal' },
  { src: '/logos/slack.png', alt: 'Slack' },
  { src: '/logos/spotify.png', alt: 'Spotify' },
  { src: '/logos/stripe.png', alt: 'Stripe' },
  { src: '/logos/google.png', alt: 'Google' },
  { src: '/logos/microsoft.png', alt: 'Microsoft' },
  { src: '/logos/paypallogo.png', alt: 'PayPal' },
  { src: '/logos/slack.png', alt: 'Slack' },
  { src: '/logos/spotify.png', alt: 'Spotify' },
  { src: '/logos/stripe.png', alt: 'Stripe' },
]

export const stats = [
  { value: '100+', label: 'Countries Worldwide' },
  { value: '8', label: 'Years building for businesses' },
  { value: '35000+', label: 'Installations' },
  { value: '20+', label: 'Technologies supported' },
]

export const services = [
  {
    id: 'web',
    badge: 'Web Development',
    badgeIcon: Globe,
    title: 'Pixel-Perfect Web Development',
    description: 'In today\'s digital-first world, your website is your most powerful asset. We engineer high-performance, scalable, and visually stunning web applications that convert visitors into loyal customers.',
    techStack: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' }
    ],
    includes: ['Corporate Websites', 'Business Websites', 'Landing Pages', 'E-Commerce Websites', 'Web Portals', 'Custom Web Applications'],
    subServices: [
      { title: 'Corporate Websites', features: ['Premium UI/UX Design', 'SEO Optimization', 'CMS Integration'] },
      { title: 'E-Commerce Solutions', features: ['Secure Payment Gateways', 'Inventory Management', 'Conversion Optimization'] },
      { title: 'Custom Web Apps', features: ['Scalable Architecture', 'API Integrations', 'Real-time Processing'] },
      { title: 'Web Portals', features: ['Role-based Access Control', 'Secure Authentication', 'Dashboard Analytics'] },
    ],
    accentColor: '#f97316',
    textColor: 'text-orange-500',
    lightBg: 'bg-orange-500/10',
    href: '/contact',
    buttonText: 'Start Web Project',
  },
  {
    id: 'software',
    badge: 'Software Development',
    badgeIcon: Code2,
    title: 'Scalable Software Solutions',
    description: 'Off-the-shelf software often falls short of meeting unique business challenges. We build bespoke software solutions from the ground up, tailored exactly to your operational needs.',
    techStack: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ],
    includes: ['ERP Solutions', 'Business Management Systems', 'SaaS Platforms', 'Workflow Automation Tools'],
    subServices: [
      { title: 'SaaS Platforms', features: ['Multi-tenant Architecture', 'Subscription Management', 'High Availability'] },
      { title: 'ERP Solutions', features: ['Centralized Data Hub', 'Process Automation', 'Custom Reporting'] },
      { title: 'Workflow Automation', features: ['Task Scheduling', 'Third-party Integrations', 'Efficiency Tracking'] },
      { title: 'Business Management', features: ['CRM Integration', 'Inventory Tracking', 'Analytics Dashboards'] },
    ],
    accentColor: '#a855f7',
    textColor: 'text-purple-500',
    lightBg: 'bg-purple-500/10',
    href: '/contact',
    buttonText: 'Build Software',
  },
  {
    id: 'mobile',
    badge: 'Mobile App Development',
    badgeIcon: Smartphone,
    title: 'Powerful Mobile Applications',
    description: 'Reach your users wherever they are. We build intuitive, fast, and feature-rich applications for both iOS and Android — native or cross-platform — that drive engagement and retention.',
    techStack: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Swift', icon: SiSwift, color: '#F05138' },
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
    ],
    includes: ['Android Applications', 'Cross-Platform Apps', 'Progressive Web Apps (PWA)', 'Enterprise Mobile Solutions'],
    subServices: [
      { title: 'Cross-Platform Apps', features: ['Single Codebase', 'Native-like Performance', 'Faster Time-to-Market'] },
      { title: 'Native Android & iOS', features: ['Hardware Integration', 'Maximum Performance', 'App Store Optimization'] },
      { title: 'Progressive Web Apps', features: ['Offline Capabilities', 'Push Notifications', 'Zero Installation'] },
      { title: 'Enterprise Mobility', features: ['Enterprise Security', 'MDM Integration', 'Offline Syncing'] },
    ],
    accentColor: '#06b6d4',
    textColor: 'text-cyan-500',
    lightBg: 'bg-cyan-500/10',
    href: '/contact',
    buttonText: 'Build Mobile App',
  },
  {
    id: 'cloud',
    badge: 'Cloud & DevOps',
    badgeIcon: Cloud,
    title: 'Secure Cloud Infrastructure',
    description: 'Modernize your IT infrastructure with robust cloud architectures. We help businesses migrate, optimize, and manage their cloud environments for maximum scalability, security, and cost-efficiency.',
    techStack: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Azure', icon: FaMicrosoft, color: '#00A4EF' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Terraform', icon: SiTerraform, color: '#844FBA' }
    ],
    includes: ['Cloud Migration', 'Serverless Architecture', 'CI/CD Pipelines', 'Cloud Security & Compliance'],
    subServices: [
      { title: 'Cloud Migration', features: ['Zero Downtime', 'Data Integrity', 'Legacy Modernization'] },
      { title: 'DevOps Automation', features: ['Continuous Integration', 'Automated Testing', 'Infrastructure as Code'] },
      { title: 'Serverless Solutions', features: ['Auto-scaling', 'Pay-per-use', 'Reduced Operational Overhead'] },
      { title: 'Cloud Security', features: ['Access Control', 'Threat Monitoring', 'Compliance Audits'] },
    ],
    accentColor: '#10b981',
    textColor: 'text-emerald-500',
    lightBg: 'bg-emerald-500/10',
    href: '/contact',
    buttonText: 'Transform IT',
  }
]

export const projects = [
  {
    id: "jobreadyexperts",
    badge: "EdTech Platform",
    badgeIcon: Globe,
    title: "Job Ready Experts Platform",
    description: "A comprehensive educational and career advancement platform. It provides learners with industry-aligned courses, real-time mentorship, and automated resume building tools to accelerate their tech careers.",
    techStack: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' }
    ],
    buttonText: "Discover Platform",
    href: "/contact",
    accentColor: "#f97316",
    textColor: "text-orange-500",
    lightBg: "bg-orange-500/10",
    browserUrl: "https://www.jobreadyexperts.com/",
    images: {
      desktop: "/portfolio/jobreadyexperts/jobreadyexperts-web.png",
      tablet: "/portfolio/jobreadyexperts/jobreadyexperts-tablet.png",
      mobile: "/portfolio/jobreadyexperts/jobreadyexperts-mobile.png",
    }
  },
  {
    id: "nri",
    badge: "Corporate Website",
    badgeIcon: LayoutTemplate,
    title: "NRI Web Portal",
    description: "A modern, highly optimized corporate web portal for NRI. Featuring a bespoke glassmorphism UI, advanced scroll animations, and a secure content management system for their global client base.",
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' }
    ],
    buttonText: "Discover Portal",
    href: "/contact",
    accentColor: "#a855f7",
    textColor: "text-purple-500",
    lightBg: "bg-purple-500/10",
    browserUrl: "https://nri-construction.vercel.app/",
    images: {
      desktop: "/portfolio/nri/nri-web.png",
      tablet: "/portfolio/nri/nri-tablet.png",
      mobile: "/portfolio/nri/nri-mobile.png",
    }
  },
  {
    id: "sgss",
    badge: "Software Development",
    badgeIcon: Cpu,
    title: "SGSS Enterprise System",
    description: "A robust enterprise resource planning (ERP) system tailored for SGSS. It centralizes their operations, manages secure client data, and provides real-time analytics through interactive dashboards.",
    techStack: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' }
    ],
    buttonText: "Discover System",
    href: "/contact",
    accentColor: "#06b6d4",
    textColor: "text-cyan-500",
    lightBg: "bg-cyan-500/10",
    browserUrl: "https://sgss-ten.vercel.app/",
    images: {
      desktop: "/portfolio/sgss/sgss-web.png",
      tablet: "/portfolio/sgss/sgss-tablet.png",
      mobile: "/portfolio/sgss/sgss-mobile.png",
    }
  },
  {
    id: "anl",
    badge: "Web Development",
    badgeIcon: Globe,
    title: "ANL Digital Presence",
    description: "A digital transformation project for ANL, migrating their legacy systems to a blazing-fast, server-side rendered application. It significantly improved their SEO rankings and user engagement.",
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' }
    ],
    buttonText: "Discover Site",
    href: "/contact",
    accentColor: "#10b981",
    textColor: "text-emerald-500",
    lightBg: "bg-emerald-500/10",
    browserUrl: "https://anl-ashy.vercel.app/",
    images: {
      desktop: "/portfolio/anl/anl-web.png",
      tablet: "/portfolio/anl/anl-tablet.png",
      mobile: "/portfolio/anl/anl-mobile.png",
    }
  },
  {
    id: "macquarie",
    badge: "Corporate Portal",
    badgeIcon: Globe,
    title: "Macquarie Engineering & Construction",
    description: "A highly robust corporate web platform built for Macquarie Engineering & Construction to showcase their massive global infrastructure portfolio. It features advanced project filtering, interactive maps, and a headless CMS for real-time updates.",
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Sanity CMS', icon: SiSanity, color: '#F03E2F' }
    ],
    buttonText: "Discover Site",
    href: "/contact",
    accentColor: "#3b82f6",
    textColor: "text-blue-500",
    lightBg: "bg-blue-500/10",
    browserUrl: "https://www.macquarieec.com/",
    images: {
      desktop: "/portfolio/macquarie/macquarie-web.png",
      tablet: "/portfolio/macquarie/macquarie-tablet.png",
      mobile: "/portfolio/macquarie/macquarie-mobile.png",
    }
  }
]

export const testimonials = [
  {
    logo: '/logos/google.png',
    clientName: 'Google',
    quote: "Orange Global Infotech transformed our entire digital infrastructure. Their team delivered a scalable cloud solution that reduced our operational costs by 40% while dramatically improving performance.",
    author: 'Rahul Sharma',
    title: 'CTO',
  },
  {
    logo: '/logos/microsoft.png',
    clientName: 'Microsoft',
    quote: "Working with Orange Global was a game-changer. They built our SaaS platform from scratch with exceptional attention to detail, meeting every deadline and exceeding our expectations.",
    author: 'Priya Mehta',
    title: 'Product Director',
  },
  {
    logo: '/logos/slack.png',
    clientName: 'Slack',
    quote: "The mobile application they developed has over 50,000 active users and a 4.8-star rating on both app stores. Their understanding of UX and technical execution is world-class.",
    author: 'Amit Patel',
    title: 'Founder & CEO',
  },
  {
    logo: '/logos/spotify.png',
    clientName: 'Spotify',
    quote: "They delivered our e-commerce platform in record time. The site handles thousands of concurrent users without any performance issues. Highly recommend their expertise.",
    author: 'Sneha Gupta',
    title: 'Head of Digital',
  },
  {
    logo: '/logos/stripe.png',
    clientName: 'Stripe',
    quote: "Orange Global's team is responsive, professional, and technically outstanding. They became a true extension of our team and delivered beyond what we imagined possible.",
    author: 'Vikram Singh',
    title: 'VP Technology',
  },
]

export const faqs = [
  {
    q: 'How long does it take to build a website or application?',
    a: 'Project timelines vary based on complexity. A simple business website typically takes 2–4 weeks, while a complex web application or mobile app can take 2–6 months. During our discovery phase, we provide a detailed timeline tailored to your specific requirements.',
  },
  {
    q: 'What technologies do you use for development?',
    a: 'We use modern, battle-tested technologies including React, Next.js, TypeScript, Node.js, NestJS, React Native, Flutter, AWS, Azure, GCP, PostgreSQL, MongoDB, and Docker. We choose the right stack based on your project\'s unique needs and scalability requirements.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes, absolutely. We offer comprehensive post-launch support packages including 24/7 monitoring, bug fixes, security updates, performance optimizations, and feature enhancements. We become your long-term technology partner.',
  },
  {
    q: 'How do you ensure the quality of your deliverables?',
    a: 'Quality is embedded in every stage of our process. We conduct code reviews, automated testing, manual QA, performance audits, security assessments, and cross-browser/device compatibility checks before any release.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer flexible engagement models: fixed-price projects for well-defined scopes, time & material for evolving requirements, and dedicated team models for long-term partnerships. We provide transparent, detailed quotes with no hidden fees.',
  },
  {
    q: 'Can you work with our existing team and codebase?',
    a: 'Yes. We regularly augment existing development teams, modernize legacy codebases, and integrate with existing systems. Our team adapts to your workflows, tools, and communication styles to ensure seamless collaboration.',
  },
  {
    q: 'Do you sign NDAs to protect our intellectual property?',
    a: 'Absolutely. We sign NDA agreements before any project discussion and ensure all intellectual property, code, designs, and data belong exclusively to you upon project completion.',
  },
]

export const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@orangeglobal.com',
    sub: 'We reply within 2 hours',
    color: '#f97316',
    bg: 'bg-orange-50',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9592290407',
    sub: 'Mon–Sat, 10 AM–6 PM IST',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Chandigarh, India',
    sub: 'SCO 3, Level 1, Sector 41-D, 160036',
    color: '#10b981',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat, 10 AM–6 PM',
    sub: '24/7 Support Available',
    color: '#a855f7',
    bg: 'bg-purple-50',
  },
]

export const contactServices = [
  'Web Development',
  'Software Development',
  'Mobile App Development',
  'Cloud Solutions',
  'SaaS Development',
  'Enterprise Solutions',
  'Other',
]

export const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
]
