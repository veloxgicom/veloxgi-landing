import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Section from '../(site)/components/Section'
import PageHeader from '../(site)/components/PageHeader'
import PrivacyContent from './PrivacyContent'
import { getPrivacyMetadata } from '@/lib/i18n/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  const language = acceptLanguage.includes('en') ? 'en' : 'es'
  
  return getPrivacyMetadata(language)
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
