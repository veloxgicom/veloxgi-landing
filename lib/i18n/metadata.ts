import type { Metadata } from 'next'
import { SupportedLanguage } from './utils/detectLanguage'

export function generateMetadata(language: SupportedLanguage = 'es'): Partial<Metadata> {
  const isEnglish = language === 'en'

  if (isEnglish) {
    return {
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
        'marketplace integration'
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
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
    }
  }

  // Spanish (default)
  return {
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
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://veloxgi.com',
      title: 'Veloxgi — Gestión de Logística para PyMEs',
      description: 'Centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas desde una sola plataforma.',
      siteName: 'Veloxgi',
      images: [
        {
          url: '/img/hero.webp',
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
      images: ['/img/hero.webp'],
      creator: '@veloxgi',
    },
  }
}

export function getHomePageMetadata(language: SupportedLanguage = 'es'): Metadata {
  const isEnglish = language === 'en'
  const baseMetadata = generateMetadata(language)

  return {
    ...baseMetadata,
    title: isEnglish 
      ? 'Home' 
      : 'Inicio',
    description: isEnglish
      ? 'Veloxgi — The logistics management platform that centralizes orders and sales from multiple marketplaces. Manage collaborators, optimize deliveries, and control your inventory from one place. Perfect for small and medium businesses.'
      : 'Veloxgi — La plataforma de gestión logística que centraliza pedidos y ventas de múltiples marketplaces. Gestiona colaboradores, optimiza entregas y controla tu inventario desde un solo lugar. Perfecto para pequeñas y medianas empresas.',
    keywords: isEnglish
      ? [
          'SME logistics management',
          'order centralization',
          'marketplace management',
          'logistics software',
          'delivery optimization',
          'delivery personnel management',
          'inventory control',
          'order tracking',
          'delivery coordination'
        ]
      : [
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
      ...baseMetadata.openGraph,
      title: isEnglish
        ? 'Veloxgi — Logistics Management for SMEs'
        : 'Veloxgi — Gestión de Logística para PyMEs',
      description: isEnglish
        ? 'Centralize orders and sales from multiple marketplaces, manage collaborators, and optimize deliveries from a single platform.'
        : 'Centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas desde una sola plataforma.',
    },
  }
}

export function getTermsMetadata(language: SupportedLanguage = 'es'): Metadata {
  const isEnglish = language === 'en'

  return {
    title: isEnglish ? 'Terms and Conditions' : 'Términos y Condiciones',
    description: isEnglish
      ? 'Veloxgi terms and conditions of use. Read our terms of service before using our logistics management platform. Information about usage, rights, and obligations.'
      : 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma de gestión logística. Información sobre uso, derechos y obligaciones.',
    keywords: isEnglish
      ? [
          'terms and conditions',
          'terms of service',
          'terms of use',
          'Veloxgi terms',
          'service agreement',
          'consumer rights'
        ]
      : [
          'términos y condiciones',
          'términos de servicio',
          'condiciones de uso',
          'términos Veloxgi',
          'contrato de servicio',
          'derechos del consumidor'
        ],
    openGraph: {
      title: isEnglish ? 'Terms and Conditions — Veloxgi' : 'Términos y Condiciones — Veloxgi',
      description: isEnglish
        ? 'Veloxgi terms and conditions of use. Read our terms of service before using our platform.'
        : 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma.',
      url: 'https://veloxgi.com/terms',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_ES',
    },
    alternates: {
      canonical: '/terms',
      languages: {
        'es': '/terms',
        'en': '/terms',
        'es-ES': '/terms',
        'en-US': '/terms',
      },
    },
  }
}

export function getPrivacyMetadata(language: SupportedLanguage = 'es'): Metadata {
  const isEnglish = language === 'en'

  return {
    title: isEnglish ? 'Privacy Policy' : 'Política de Privacidad',
    description: isEnglish
      ? 'Veloxgi privacy policy. Information about how we collect, use, and protect your personal data. GDPR compliance and data protection for users of our logistics management platform.'
      : 'Política de privacidad de Veloxgi. Información sobre cómo recopilamos, usamos y protegemos tus datos personales. Cumplimiento con GDPR y protección de datos para usuarios de nuestra plataforma de gestión logística.',
    keywords: isEnglish
      ? [
          'privacy policy',
          'data privacy',
          'data protection',
          'GDPR',
          'Veloxgi privacy',
          'personal information protection'
        ]
      : [
          'política de privacidad',
          'privacidad de datos',
          'protección de datos',
          'GDPR',
          'privacidad Veloxgi',
          'protección de información personal'
        ],
    openGraph: {
      title: isEnglish ? 'Privacy Policy — Veloxgi' : 'Política de Privacidad — Veloxgi',
      description: isEnglish
        ? 'Veloxgi privacy policy. Information about how we collect, use, and protect your personal data.'
        : 'Política de privacidad de Veloxgi. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
      url: 'https://veloxgi.com/privacy',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_ES',
    },
    alternates: {
      canonical: '/privacy',
      languages: {
        'es': '/privacy',
        'en': '/privacy',
        'es-ES': '/privacy',
        'en-US': '/privacy',
      },
    },
  }
}

