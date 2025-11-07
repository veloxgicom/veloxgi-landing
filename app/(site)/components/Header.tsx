"use client"
import React from 'react'
import Section from './Section'
import { ArrowRight } from './Icons'
import Image from 'next/image'
import { useWaitlist } from './WaitlistProvider'

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Ventajas", href: "#ventajas" },
  { label: "Contacto", href: "#contacto" },
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
          aria-label="Página inicial"
          onClick={(e) => scrollToSection(e, "#inicio")}
        >
          <div className="relative w-32 h-10">
            <Image 
              src="/img/logo-primary.png" 
              alt="Veloxgi Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="link-underline text-sm text-ink/90 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#lista-espera"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 bg-brand text-ink font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:bg-brand600 focus-brand"
          >
            Únete a la lista
            <span aria-hidden className="inline-flex items-center justify-center size-6 rounded-full bg-white/90 text-ink">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        <button
          className="md:hidden size-10 inline-flex items-center justify-center rounded-lg border border-line text-ink focus-brand"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
            <path d="M1 1h20M1 7h20M1 13h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </Section>

      {/* mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-card p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-28 h-8">
                <Image 
                  src="/img/logo-primary.png" 
                  alt="Veloxgi Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <button 
                aria-label="Cerrar menu" 
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
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-3 px-4 rounded-lg text-ink hover:bg-panel transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-line">
              <a
                href="#lista-espera"
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand text-ink font-semibold px-5 py-3 rounded-full text-sm transition-all hover:bg-brand600 focus-brand"
              >
                Únete a la lista
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


