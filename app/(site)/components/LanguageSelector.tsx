'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/lib/i18n/utils/detectLanguage'

const languageNames: Record<SupportedLanguage, string> = {
  es: 'Español',
  en: 'English',
}

const languageFlags: Record<SupportedLanguage, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
}

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-line text-sm text-ink hover:bg-panel transition-colors focus-brand"
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg" aria-hidden="true">
          {languageFlags[language]}
        </span>
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-line rounded-lg shadow-card overflow-hidden z-50">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 transition-colors ${
                language === lang
                  ? 'bg-brand/10 text-brand font-medium'
                  : 'text-ink hover:bg-panel'
              }`}
            >
              <span className="text-lg" aria-hidden="true">
                {languageFlags[lang]}
              </span>
              <span>{languageNames[lang]}</span>
              {language === lang && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

