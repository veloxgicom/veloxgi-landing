"use client"
import Section from './Section'
import GridBgDark from './GridBgDark'
import PhoneCollage from './PhoneCollage'
import { useWaitlist } from './WaitlistProvider'

export default function DarkCta() {
  const { openModal } = useWaitlist()

  return (
    <div className="relative py-10 sm:py-12 lg:py-14">
      <Section>
        <div className="relative rounded-2xl bg-slate-900 text-slate-100 px-6 sm:px-8 lg:px-12 py-10 sm:py-14 grid lg:grid-cols-2 gap-8 lg:gap-10 overflow-hidden">
          <GridBgDark />

          {/* Texto (arriba en móvil, derecha en lg) */}
          <div className="space-y-5 relative z-10 order-1 lg:order-2">
            <h2 className="h2 text-white">
              Empieza hoy: opera más rápido y con menos errores
            </h2>
            <p className="text-slate-300 max-w-md">
              Únete a la lista de espera y sé de los primeros en simplificar tu logística, integrar canales y coordinar a tu equipo desde un solo panel.
            </p>
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-between gap-3 bg-brand text-ink font-semibold px-6 py-3 rounded-full transition-transform focus-brand hover:bg-brand600"
            >
              <span>Unirme a la lista de espera</span>
              <span aria-hidden className="relative inline-flex items-center justify-center size-8 rounded-full bg-white/90 text-ink transition-transform group-hover:translate-x-0.5 group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Collage (abajo en móvil, izquierda en lg) */}
          <div className="relative z-10 order-2 lg:order-1">
            <PhoneCollage />
          </div>
        </div>
      </Section>
    </div>
  )
}
