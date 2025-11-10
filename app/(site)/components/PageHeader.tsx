'use client'

import Link from 'next/link'
import Image from 'next/image'
import Section from './Section'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function PageHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <Section className="h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={t('commonPages.homePage')}>
          <div className="relative w-32 h-10">
            <Image 
              src="/img/logo-primary.webp" 
              alt="Veloxgi Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>
        <LanguageSelector />
      </Section>
    </header>
  )
}

