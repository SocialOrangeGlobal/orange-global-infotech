import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { fetchWebsiteContent } from '@/lib/api'
import type { NavContent, FooterContent } from '@/lib/types'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://orange-global-infotech.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Orange Global Infotech | Building Future-Ready Software for Modern Businesses',
    template: '%s | Orange Global Infotech',
  },
  description:
    'We design and develop scalable web applications, AI-powered solutions, cloud platforms, and enterprise software that help businesses innovate, grow, and stay ahead in a rapidly evolving digital world.',
  keywords: [
    'web development',
    'software development',
    'mobile app development',
    'cloud solutions',
    'digital transformation',
    'Orange Global Infotech',
  ],
  authors: [{ name: 'Orange Global Infotech' }],
  creator: 'Orange Global Infotech',
  publisher: 'Orange Global Infotech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://orangeglobalinfotech.com',
  },
  openGraph: {
    title: 'Orange Global Infotech | Building Future-Ready Software for Modern Businesses',
    description:
      'We design and develop scalable web applications, AI-powered solutions, cloud platforms, and enterprise software that help businesses innovate, grow, and stay ahead in a rapidly evolving digital world.',
    url: 'https://orangeglobalinfotech.com',
    siteName: 'Orange Global Infotech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Global Infotech | Building Future-Ready Software for Modern Businesses',
    description:
      'We design and develop scalable web applications, AI-powered solutions, cloud platforms, and enterprise software that help businesses innovate, grow, and stay ahead in a rapidly evolving digital world.',
    creator: '@OrangeGlobal', // Example handle
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FF6B00',
  width: 'device-width',
  initialScale: 1,
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [navRes, footerRes] = await Promise.all([
    fetchWebsiteContent('nav'),
    fetchWebsiteContent('footer')
  ]);

  let navLinks = (navRes?.content as NavContent)?.links || [];
  if (!navLinks.some(link => link.href === '/')) {
    navLinks = [{ label: 'Home', href: '/' }, ...navLinks];
  }
  const footerData = (footerRes?.content as FooterContent) || {};

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} bg-[#FAFAFA]`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <Navbar navLinks={navLinks} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  )
}
