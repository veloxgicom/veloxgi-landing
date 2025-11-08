import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './(site)/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#22E37E',
}

export const metadata: Metadata = {
  title: {
    default: 'Veloxgi — Gestión de Logística para PyMEs | Centraliza tus Marketplaces',
    template: '%s | Veloxgi'
  },
  description: 'Veloxgi es la plataforma de gestión logística que centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas. Ideal para pequeñas y medianas empresas.',
  keywords: [
    'gestión logística',
    'logística para PyMEs',
    'centralización de pedidos',
    'gestión de marketplaces',
    'optimización de entregas',
    'gestión de repartidores',
    'control de inventario',
    'logística empresarial',
    'gestión de flotas',
    'rastreo de pedidos',
    'plataforma logística',
    'software de logística',
    'gestión de conductores',
    'coordinación de entregas',
    'integración de marketplaces'
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
      'es-ES': '/es',
      'es-MX': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://veloxgi.com',
    title: 'Veloxgi — Gestión de Logística para PyMEs',
    description: 'Centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas desde una sola plataforma.',
    siteName: 'Veloxgi',
    images: [
      {
        url: '/img/hero.png',
        width: 1200,
        height: 630,
        alt: 'Veloxgi — Plataforma de gestión logística',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veloxgi — Gestión de Logística para PyMEs',
    description: 'Centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas.',
    images: ['/img/hero.png'],
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
    logo: 'https://veloxgi.com/img/logo-primary.png',
    description: 'Plataforma de gestión logística para pequeñas y medianas empresas',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57-322-785-8583',
      contactType: 'customer service',
      email: 'veloxgi.com@gmail.com',
      areaServed: 'ES',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
    ],
  }

  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 bg-brand text-white px-3 py-2 rounded-lg shadow-card font-medium">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
