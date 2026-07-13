/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  // Allow all devices on the local network to access the dev server
  allowedDevOrigins: ['192.168.1.16', '192.168.1.*'],
}

export default nextConfig
