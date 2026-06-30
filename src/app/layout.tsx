import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://orangeglobalinfotech.com'),
  title: 'Orange Global Infotech | Transforming Ideas Into Powerful Digital Solutions',
  description:
    'Orange Global Infotech helps startups, businesses, and enterprises build modern websites, scalable software solutions, mobile applications, and cloud-powered systems.',
  keywords: [
    'web development',
    'software development',
    'mobile app development',
    'cloud solutions',
    'digital transformation',
    'Orange Global Infotech',
  ],
  authors: [{ name: 'Orange Global Infotech' }],
  openGraph: {
    title: 'Orange Global Infotech | Transforming Ideas Into Powerful Digital Solutions',
    description:
      'Orange Global Infotech helps startups, businesses, and enterprises build modern websites, scalable software solutions, mobile applications, and cloud-powered systems.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Orange Global Infotech Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Global Infotech | Transforming Ideas Into Powerful Digital Solutions',
    description:
      'Orange Global Infotech helps startups, businesses, and enterprises build modern websites, scalable software solutions, mobile applications, and cloud-powered systems.',
    images: ['/logo.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} bg-[#FAFAFA]`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
