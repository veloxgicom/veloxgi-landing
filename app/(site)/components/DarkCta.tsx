"use client"
import Section from './Section'
import GridBgDark from './GridBgDark'
import PhoneCollage from './PhoneCollage'
import { useWaitlist } from './WaitlistProvider'
import { useScrollAnimation } from './useScrollAnimation'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function DarkCta() {
  const { openModal } = useWaitlist()
  const { t } = useLanguage()
  const textRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', delay: 0 })
  const collageRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', delay: 200 })

  return (
    <div className="relative py-10 sm:py-12 lg:py-14">
      <Section>
        <div className="relative rounded-2xl bg-slate-900 text-slate-100 px-6 sm:px-8 lg:px-12 py-10 sm:py-14 grid lg:grid-cols-2 gap-8 lg:gap-10 overflow-hidden">
          <GridBgDark />

          {/* Texto (arriba en móvil, derecha en lg) */}
          <div 
            ref={textRef.ref}
            className={`space-y-5 relative z-10 order-1 lg:order-2 transition-all duration-1000 ${textRef.animationClasses}`}
          >
            <h2 className="h2 text-white">
              {t('darkCta.title')}
            </h2>
            <p className="text-slate-300 max-w-md">
              {t('darkCta.description')}
            </p>
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-between gap-3 bg-brand text-ink font-semibold px-6 py-3 rounded-full transition-transform focus-brand hover:bg-brand600"
            >
              <span>{t('darkCta.cta')}</span>
              <span aria-hidden className="relative inline-flex items-center justify-center size-8 rounded-full bg-white/90 text-ink transition-transform group-hover:translate-x-0.5 group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Collage (abajo en móvil, izquierda en lg) */}
          <div 
            ref={collageRef.ref}
            className={`relative z-10 order-2 lg:order-1 transition-all duration-1000 ${collageRef.animationClasses}`}
          >
            <PhoneCollage />
          </div>
        </div>
      </Section>
    </div>
  )
}
