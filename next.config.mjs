/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'pubtdkmhmlgbvpvcqutb.supabase.co' }
    ],
  },
  // Allow all devices on the local network to access the dev server
  allowedDevOrigins: ['192.168.1.16', '192.168.1.*'],
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react', 'framer-motion'],
  },
}

export default nextConfig
