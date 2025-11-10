export type SupportedLanguage = 'es' | 'en'

export const DEFAULT_LANGUAGE: SupportedLanguage = 'es'
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['es', 'en']

const STORAGE_KEY = 'veloxgi-language'

/**
 * Detecta el idioma preferido del navegador
 */
export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  // Primero intenta obtener la preferencia guardada en localStorage
  const savedLanguage = localStorage.getItem(STORAGE_KEY)
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as SupportedLanguage)) {
    return savedLanguage as SupportedLanguage
  }

  // Si no hay preferencia guardada, detecta el idioma del navegador
  const browserLanguage = navigator.language || (navigator as any).userLanguage || ''
  const languageCode = browserLanguage.split('-')[0].toLowerCase()

  // Si el idioma del navegador está soportado, lo usa
  if (SUPPORTED_LANGUAGES.includes(languageCode as SupportedLanguage)) {
    return languageCode as SupportedLanguage
  }

  // Por defecto, usa español
  return DEFAULT_LANGUAGE
}

/**
 * Guarda la preferencia de idioma en localStorage
 */
export function saveLanguagePreference(language: SupportedLanguage): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, language)
  }
}

/**
 * Obtiene el idioma guardado en localStorage
 */
export function getSavedLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') {
    return null
  }

  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED_LANGUAGES.includes(saved as SupportedLanguage)) {
    return saved as SupportedLanguage
  }

  return null
}

