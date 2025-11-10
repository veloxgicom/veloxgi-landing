'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { detectBrowserLanguage, saveLanguagePreference, DEFAULT_LANGUAGE, type SupportedLanguage } from '../utils/detectLanguage'
import esTranslations from '../translations/es.json'
import enTranslations from '../translations/en.json'

type Translations = typeof esTranslations

interface LanguageContextType {
  language: SupportedLanguage
  setLanguage: (lang: SupportedLanguage) => void
  t: (key: string) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<SupportedLanguage, Translations> = {
  es: esTranslations,
  en: enTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(DEFAULT_LANGUAGE)
  const [isLoading, setIsLoading] = useState(true)

  // Inicializar idioma en el cliente
  useEffect(() => {
    const detectedLanguage = detectBrowserLanguage()
    setLanguageState(detectedLanguage)
    setIsLoading(false)
    
    // Actualizar el atributo lang del HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = detectedLanguage
    }
  }, [])

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang)
    saveLanguagePreference(lang)
    
    // Actualizar el atributo lang del HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [])

  // Función para obtener traducciones usando notación de puntos (ej: "nav.home")
  const t = useCallback((key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Si no se encuentra la traducción, devuelve la clave
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

