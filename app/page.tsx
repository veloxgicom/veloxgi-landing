import type { Metadata } from 'next'
import { WaitlistProvider } from './(site)/components/WaitlistProvider'
import Header from './(site)/components/Header'
import Sections from './(site)/components/Sections'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Veloxgi — La plataforma de gestión logística que centraliza pedidos y ventas de múltiples marketplaces. Gestiona colaboradores, optimiza entregas y controla tu inventario desde un solo lugar. Perfecto para pequeñas y medianas empresas.',
  keywords: [
    'gestión logística PyMEs',
    'centralización de pedidos',
    'gestión de marketplaces',
    'software logística',
    'optimización de entregas',
    'gestión de repartidores',
    'control de inventario',
    'rastreo de pedidos',
    'coordinación de entregas'
  ],
  openGraph: {
    title: 'Veloxgi — Gestión de Logística para PyMEs',
    description: 'Centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas desde una sola plataforma.',
    url: 'https://veloxgi.com',
    siteName: 'Veloxgi',
    images: [
      {
        url: '/img/hero.png',
        width: 1200,
        height: 630,
        alt: 'Veloxgi — Plataforma de gestión logística',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function Page() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Veloxgi',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/PreOrder',
    },
    description: 'Plataforma de gestión logística que centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas.',
    featureList: [
      'Integración con múltiples marketplaces',
      'Panel único de pedidos y ventas',
      'Asignación y seguimiento de repartos',
      'Control de roles y colaboradores',
      'Seguimiento en tiempo real',
      'Optimización de rutas y costos',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Veloxgi',
    url: 'https://veloxgi.com',
    description: 'Plataforma de gestión logística para pequeñas y medianas empresas',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://veloxgi.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://veloxgi.com',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WaitlistProvider>
        <main id="main">
          <Header />
          <Sections />
        </main>
      </WaitlistProvider>
    </>
  )
}


