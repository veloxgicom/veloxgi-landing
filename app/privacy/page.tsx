import type { Metadata } from 'next'
import Section from '../(site)/components/Section'
import PageHeader from '../(site)/components/PageHeader'
import PrivacyContent from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Veloxgi. Información sobre cómo recopilamos, usamos y protegemos tus datos personales. Cumplimiento con GDPR y protección de datos para usuarios de nuestra plataforma de gestión logística.',
  keywords: [
    'política de privacidad',
    'privacidad de datos',
    'protección de datos',
    'GDPR',
    'privacidad Veloxgi',
    'protección de información personal'
  ],
  openGraph: {
    title: 'Política de Privacidad — Veloxgi',
    description: 'Política de privacidad de Veloxgi. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
    url: 'https://veloxgi.com/privacy',
    type: 'website',
  },
  alternates: {
    canonical: '/privacy',
    languages: {
      'es': '/privacy',
      'en': '/privacy',
    },
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main className="py-12 bg-white">
        <Section className="max-w-4xl">
          <div className="max-w-none">
            <PrivacyContent />
          </div>
        </Section>
      </main>
    </div>
  )
}
