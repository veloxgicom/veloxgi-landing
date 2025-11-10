"use client"
import Section from './Section'
import { useScrollAnimation } from './useScrollAnimation'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function PromoStrip() {
  const { t } = useLanguage()
  const textRef = useScrollAnimation<HTMLParagraphElement>({ direction: 'up', delay: 0 })

  return (
    <Section className="py-12">
      <p 
        ref={textRef.ref}
        className={`h3 text-center max-w-3xl mx-auto text-ink/90 transition-all duration-1000 ${textRef.animationClasses}`}
      >
        {t('promo.text')}
      </p>
    </Section>
  )
}


