'use client'

import { useLanguage } from '@/lib/i18n/context/LanguageProvider'
import { useEffect } from 'react'

export default function DynamicSchemas() {
  const { language } = useLanguage()
  const isEnglish = language === 'en'

  useEffect(() => {
    // SoftwareApplication Schema
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
      description: isEnglish
        ? 'Logistics management platform that centralizes orders and sales from multiple marketplaces, manages collaborators, and optimizes deliveries.'
        : 'Plataforma de gestión logística que centraliza pedidos y ventas de múltiples marketplaces, gestiona colaboradores y optimiza entregas.',
      featureList: isEnglish
        ? [
            'Integration with multiple marketplaces',
            'Unified orders and sales panel',
            'Assignment and tracking of deliveries',
            'Role and collaborator control',
            'Real-time tracking',
            'Route and cost optimization',
          ]
        : [
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
      inLanguage: isEnglish ? 'en' : 'es',
    }

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Veloxgi',
      url: 'https://veloxgi.com',
      description: isEnglish
        ? 'Logistics management platform for small and medium businesses'
        : 'Plataforma de gestión logística para pequeñas y medianas empresas',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://veloxgi.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: isEnglish ? 'en' : 'es',
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isEnglish ? 'Home' : 'Inicio',
          item: 'https://veloxgi.com',
        },
      ],
    }

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
    existingSchemas.forEach((schema) => {
      if (schema.getAttribute('data-dynamic') === 'true') {
        schema.remove()
      }
    })

    // Add new schemas
    const schemas = [softwareApplicationSchema, websiteSchema, breadcrumbSchema]
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-dynamic', 'true')
      script.setAttribute('data-schema-index', index.toString())
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('script[data-dynamic="true"]').forEach((script) => {
        script.remove()
      })
    }
  }, [language, isEnglish])

  return null
}

