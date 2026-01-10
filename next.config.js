/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 이미지 최적화 설정
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },

  // 실험적 기능
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // 헤더 설정 (보안)
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
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // 리다이렉트 설정
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/agentforge/docs',
        destination: 'http://localhost:8001/docs',
        permanent: false,
      },
    ];
  },

  // Webpack 설정 (Three.js 최적화)
  webpack: (config) => {
    config.externals = config.externals || [];
    return config;
  },
};

module.exports = nextConfig;
