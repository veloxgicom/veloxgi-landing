'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

/**
 * Componente que actualiza el atributo lang del HTML dinámicamente
 */
export default function ClientLang() {
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  return null
}

