import Image from 'next/image'
import Link from 'next/link'
import type { FooterContent } from '@/lib/types'

// Custom SVGs for Brands
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Discord: DiscordIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  YouTube: YoutubeIcon,
}

export default function Footer({ footerData }: { footerData?: FooterContent }) {
  const columns = footerData?.columns || [];
  const socials = footerData?.socials || [];

  return (
    <footer className="bg-[#202020] text-white py-10 md:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">

          {/* Brand Column (Left) */}
          <div className="flex flex-col items-start max-w-xs mb-16 lg:mb-0">
            <Link href="/" className="inline-block mb-10">
              <Image
                src="/logo-dark.png"
                alt="Orange Global Infotech"
                width={240}
                height={90}
                className="h-22 w-auto object-contain"
              />
            </Link>

            <p className="text-white font-semibold text-[15px] mb-8 leading-snug tracking-tight">
              Professional digital solutions for global businesses
            </p>

            {/* Dynamic Socials */}
            {socials.length > 0 && (
              <div className="flex items-center gap-3">
                {socials.map((s, idx) => {
                  const Icon = ICON_MAP[s.label] || FacebookIcon; // fallback to FB
                  return (
                    <a
                      key={s.label + idx}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-[10px] bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Dynamic Links Columns (Right) */}
          {columns.length > 0 && (
            <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-x-8 sm:gap-x-16 gap-y-10 lg:gap-x-28">
              {columns.map((col, idx) => (
                <div key={col.title + idx} className={`${idx === columns.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <h4 className="text-white text-sm font-semibold mb-6 tracking-wide">
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {(col.links || []).map((link, linkIdx) => (
                      <li key={link.label + linkIdx}>
                        <Link
                          href={link.href}
                          className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 whitespace-pre-line leading-relaxed block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-white/60 text-[13px] font-medium">
            &copy; {new Date().getFullYear()} Orange Global Infotech. All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <Link href="/terms-conditions" className="text-white/60 hover:text-white text-[13px] font-medium transition-colors duration-200">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="text-white/60 hover:text-white text-[13px] font-medium transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
