/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Old /labs URLs briefly went live; keep them working
  async redirects() {
    return [
      { source: '/labs', destination: '/', permanent: true },
      { source: '/labs/tworing', destination: '/ai/tworing', permanent: true },
      { source: '/labs/knee-ledger', destination: '/ai/knee-ledger', permanent: true },
      { source: '/labs/allspark', destination: '/ai/allspark', permanent: true },
      { source: '/labs/quantum-benchmarking', destination: '/research', permanent: true },
      { source: '/labs/homelab', destination: '/infrastructure', permanent: true },
    ]
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

module.exports = nextConfig
