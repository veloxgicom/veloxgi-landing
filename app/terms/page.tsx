import type { Metadata } from 'next'
import Section from '../(site)/components/Section'
import PageHeader from '../(site)/components/PageHeader'
import TermsContent from './TermsContent'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma de gestión logística. Información sobre uso, derechos y obligaciones.',
  keywords: [
    'términos y condiciones',
    'términos de servicio',
    'condiciones de uso',
    'términos Veloxgi',
    'contrato de servicio',
    'derechos del consumidor'
  ],
  openGraph: {
    title: 'Términos y Condiciones — Veloxgi',
    description: 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma.',
    url: 'https://veloxgi.com/terms',
    type: 'website',
  },
  alternates: {
    canonical: '/terms',
    languages: {
      'es': '/terms',
      'en': '/terms',
    },
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main className="py-12 bg-white">
        <Section className="max-w-4xl">
          <div className="max-w-none">
            <TermsContent />
          </div>
        </Section>
      </main>
    </div>
  )
}
