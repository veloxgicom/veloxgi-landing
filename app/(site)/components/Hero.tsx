"use client"
import Image from 'next/image'
import Section from './Section'
import GridBgLight from './GridBgLight'
import ActionPill from './ActionPill'
import { useWaitlist } from './WaitlistProvider'
import { useScrollAnimation } from './useScrollAnimation'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function Hero() {
  const { openModal } = useWaitlist()
  const { t } = useLanguage()
  const imageRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', delay: 0 })
  const textRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', delay: 200 })

  return (
    <div className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      <GridBgLight />
      <Section className="relative grid lg:grid-cols-2 gap-10 items-center">
        {/* image card */}
        <div 
          ref={imageRef.ref}
          className={`order-1 lg:order-none transition-all duration-1000 ${imageRef.animationClasses}`}
        >
          {/* Wrapper con capas separadas */}
          <div className="relative w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-none overflow-visible isolate">
            {/* Fondo verde */}
            <div className="bg-brand rounded-2xl shadow-card h-[320px] sm:h-[400px] md:h-[450px] lg:h-[560px] w-full z-0" />

            {/* Imagen flotando por encima del fondo */}
            <div className="absolute -top-14 -left-4 sm:-top-8 sm:-left-6 md:-top-10 md:-left-8 lg:-top-[4.5rem] lg:-left-12 h-[380px] w-[280px] sm:h-[480px] sm:w-[360px] md:h-[540px] md:w-[420px] lg:h-[631px] lg:w-[590px] z-10 pointer-events-none">
              <Image
                src="/img/hero.webp"
                alt={t('hero.imageAlt')}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 590px"
              />
            </div>
          </div>
        </div>

        {/* text */}
        <div 
          ref={textRef.ref}
          className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${textRef.animationClasses}`}
        >
          <h1 className="display text-center lg:text-left">{t('hero.title')}</h1>
          <p className="text-base muted max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            {t('hero.description')}
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-between gap-3 bg-brand text-ink font-semibold px-6 py-3 rounded-full transition-transform focus-brand hover:bg-brand600"
            >
              <span>{t('hero.cta')}</span>
              <span aria-hidden className="relative inline-flex items-center justify-center size-8 rounded-full bg-white/90 text-ink transition-transform group-hover:translate-x-0.5 group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
