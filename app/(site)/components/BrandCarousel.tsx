"use client"
import React, { useRef } from 'react'
import Section from './Section'

export default function BrandCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }
  const brands = Array.from({ length: 10 }).map((_, i) => `Marca ${i + 1}`)
  return (
    <Section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="h3 text-ink">Estarás en buena compañía</h3>
        <div className="flex items-center gap-3">
          <button aria-label="Anterior" className="size-10 rounded-full bg-black text-white flex items-center justify-center hover:ring-2 hover:ring-black/20" onClick={() => scrollBy(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Próximo" className="size-10 rounded-full bg-brand text-ink flex items-center justify-center hover:ring-2 hover:ring-brand/50" onClick={() => scrollBy(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <div ref={ref} className="flex gap-6 overflow-x-auto scroll-smooth pb-2">
        {brands.map((b) => (
          <div key={b} className="min-w-[200px] h-20 rounded-xl border border-line bg-white shadow-sm flex items-center justify-center text-muted">{b}</div>
        ))}
      </div>
    </Section>
  )
}


