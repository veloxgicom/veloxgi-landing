'use client'

import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function SkipToContent() {
  const { t } = useLanguage()

  return (
    <a 
      href="#main" 
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 bg-brand text-white px-3 py-2 rounded-lg shadow-card font-medium"
    >
      {t('common.skipToContent')}
    </a>
  )
}

