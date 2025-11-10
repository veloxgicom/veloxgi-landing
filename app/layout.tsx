import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './(site)/components/GoogleAnalytics'
import { LanguageProvider } from '@/lib/i18n/context/LanguageProvider'
import ClientLang from './(site)/components/ClientLang'
import SkipToContent from './(site)/components/SkipToContent'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#22E37E',
}

export const metadata: Metadata = {
  title: {
    default: 'Veloxgi — Logistics Management for SMEs | Centralize Your Marketplaces',
    template: '%s | Veloxgi'
  },
  description: 'Veloxgi is the logistics management platform that centralizes orders and sales from multiple marketplaces, manages collaborators, and optimizes deliveries. Perfect for small and medium businesses.',
  keywords: [
    'logistics management',
    'SME logistics',
    'order centralization',
    'marketplace management',
    'delivery optimization',
    'delivery personnel management',
    'inventory control',
    'business logistics',
    'fleet management',
    'order tracking',
    'logistics platform',
    'logistics software',
    'driver management',
    'delivery coordination',
    'marketplace integration',
    'gestión logística',
    'logística para PyMEs',
    'centralización de pedidos',
    'gestión de marketplaces',
    'optimización de entregas',
  ],
  authors: [{ name: 'Veloxgi' }],
  creator: 'Veloxgi',
  publisher: 'Veloxgi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://veloxgi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/',
      'en': '/',
      'es-ES': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://veloxgi.com',
    title: 'Veloxgi — Logistics Management for SMEs',
    description: 'Centralize orders and sales from multiple marketplaces, manage collaborators, and optimize deliveries from a single platform.',
    siteName: 'Veloxgi',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Veloxgi — Logistics Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veloxgi — Logistics Management for SMEs',
    description: 'Centralize orders and sales from multiple marketplaces, manage collaborators, and optimize deliveries.',
    images: ['/img/hero.webp'],
    creator: '@veloxgi',
  },
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
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'verification_code',
    // yandex: 'verification_code',
    // bing: 'verification_code',
  },
  category: 'Technology',
  classification: 'Business Software',
  icons: {
    icon: [
      { url: '/favicon.webp', type: 'image/webp' },
    ],
    apple: [
      { url: '/favicon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.webp',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Veloxgi',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Veloxgi',
    url: 'https://veloxgi.com',
    logo: 'https://veloxgi.com/img/logo-primary.webp',
    description: 'Logistics management platform for small and medium businesses',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+57-322-785-8583',
        contactType: 'customer service',
        email: 'veloxgi.com@gmail.com',
        areaServed: ['ES', 'US', 'EU'],
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
    ],
  }

  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <LanguageProvider>
          <ClientLang />
          <GoogleAnalytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SkipToContent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
