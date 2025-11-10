import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { WaitlistProvider } from './(site)/components/WaitlistProvider'
import Header from './(site)/components/Header'
import Sections from './(site)/components/Sections'
import DynamicSchemas from './(site)/components/DynamicSchemas'
import { getHomePageMetadata } from '@/lib/i18n/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  const language = acceptLanguage.includes('en') ? 'en' : 'es'
  
  return getHomePageMetadata(language)
}

export default function Page() {
  return (
    <WaitlistProvider>
      <DynamicSchemas />
      <main id="main">
        <Header />
        <Sections />
      </main>
    </WaitlistProvider>
  )
}


