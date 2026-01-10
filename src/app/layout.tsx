import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig, defaultSEO } from '@/config/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GlobalBackground } from '@/components/layout/GlobalBackground';

// ========================================
// Fonts
// ========================================
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// ========================================
// Metadata
// ========================================
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${defaultSEO.title} - ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [
      {
        url: defaultSEO.ogImage || '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.ogImage || '/images/og-image.png'],
  },

  // Robots
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

  // Icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icons/icon.svg',
  },

  // Manifest
  manifest: '/site.webmanifest',
};

// ========================================
// Viewport
// ========================================
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0b0d' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ========================================
// Root Layout
// ========================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKr.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-nebula-navy font-sans antialiased">
        {/* Global 3D Background */}
        <GlobalBackground />

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                     bg-quantum-blue-500 text-white px-4 py-2 rounded-lg z-[60]"
        >
          본문으로 건너뛰기
        </a>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
