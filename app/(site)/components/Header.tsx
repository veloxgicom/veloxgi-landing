"use client"
import React from 'react'
import Section from './Section'
import { LogoGreen, ArrowRight } from './Icons'

const NAV = ["Início","Cartões","Empréstimos","Investimentos","Sobre nós"]

export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <Section className="h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Página inicial">
          <img src="/img/logo-primary.png" alt="Logo" width={120} height={100} />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a key={n} href="#" className="link-underline text-ink/90 hover:text-ink">{n}</a>
          ))}
        </nav>
        <button
          className="md:hidden size-10 inline-flex items-center justify-center rounded-lg border border-line text-ink focus-brand"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Menu</span>
          {/* hamburger */}
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
            <path d="M1 1h20M1 7h20M1 13h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </Section>

      {/* mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-card p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <LogoGreen />
              <button aria-label="Fechar menu" className="size-9 rounded-lg border border-line" onClick={() => setOpen(false)}>
                <ArrowRight className="rotate-180" />
              </button>
            </div>
            <nav className="mt-4 grid gap-3 text-ink">
              {NAV.map((n) => (
                <a key={n} href="#" className="py-2 link-underline">{n}</a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}


