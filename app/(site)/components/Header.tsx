"use client"
import React from 'react'
import Section from './Section'
import { ArrowRight } from './Icons'
import Image from 'next/image'
import { useWaitlist } from './WaitlistProvider'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'
import LanguageSelector from './LanguageSelector'

const NAV_ITEMS = [
  { key: "home", href: "#inicio" },
  { key: "features", href: "#caracteristicas" },
  { key: "advantages", href: "#ventajas" },
  { key: "contact", href: "#contacto" },
]

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    const headerHeight = 72
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const { openModal } = useWaitlist()
  const { t } = useLanguage()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    scrollToSection(e, href)
    setOpen(false)
  }

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    openModal()
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <Section className="h-[72px] flex items-center justify-between">
        <a 
          href="#inicio" 
          className="flex items-center gap-2" 
          aria-label={t('nav.homePage')}
          onClick={(e) => scrollToSection(e, "#inicio")}
        >
          <div className="relative w-32 h-10">
            <Image 
              src="/img/logo-primary.webp" 
              alt="Veloxgi Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.key} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="link-underline text-sm text-ink/90 hover:text-ink transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <a
            href="#lista-espera"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 bg-brand text-ink font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:bg-brand600 focus-brand"
          >
            {t('nav.joinWaitlist')}
            <span aria-hidden className="inline-flex items-center justify-center size-6 rounded-full bg-white/90 text-ink">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            className="size-10 inline-flex items-center justify-center rounded-lg border border-line text-ink focus-brand"
            aria-label={t('common.openMenu')}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">{t('common.menu')}</span>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
              <path d="M1 1h20M1 7h20M1 13h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </Section>

      {/* mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-card p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-28 h-8">
                <Image 
                  src="/img/logo-primary.webp" 
                  alt="Veloxgi Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <button 
                aria-label={t('common.closeMenu')} 
                className="size-9 rounded-lg border border-line flex items-center justify-center hover:bg-panel transition-colors" 
                onClick={() => setOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.key} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-3 px-4 rounded-lg text-ink hover:bg-panel transition-colors font-medium"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3">
              <LanguageSelector />
              <a
                href="#lista-espera"
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand text-ink font-semibold px-5 py-3 rounded-full text-sm transition-all hover:bg-brand600 focus-brand"
              >
                {t('nav.joinWaitlist')}
                <span aria-hidden className="inline-flex items-center justify-center size-6 rounded-full bg-white/90 text-ink">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}


