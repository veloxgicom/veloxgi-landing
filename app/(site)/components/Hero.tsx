"use client"
import Image from 'next/image'
import Section from './Section'
import GridBgLight from './GridBgLight'
import ActionPill from './ActionPill'
import { useWaitlist } from './WaitlistProvider'
import { useScrollAnimation } from './useScrollAnimation'

export default function Hero() {
  const { openModal } = useWaitlist()
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
          <div className="relative w-full max-w-md lg:max-w-none overflow-visible isolate">
            {/* Fondo verde */}
            <div className="bg-brand rounded-2xl shadow-card h-[500px] lg:h-[560px] w-full z-0" />

            {/* Imagen flotando por encima del fondo */}
            <div className="absolute -top-12 -left-[2rem] lg:-top-[4.5rem] lg:-left-12 h-[631px] w-[590px] z-10 pointer-events-none">
              <Image
                src="/img/hero.png"
                alt="Cliente feliz con Veloxgi"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* text */}
        <div 
          ref={textRef.ref}
          className={`space-y-6 transition-all duration-1000 ${textRef.animationClasses}`}
        >
          <h1 className="display">Gestiona toda tu logística desde un solo lugar</h1>
          <p className="text-base muted max-w-lg">
            La herramienta para pequeñas y medianas empresas que centraliza pedidos y ventas de múltiples plataformas, gestiona colaboradores (conductores, repartidores y administrativos) y optimiza cada entrega.
          </p>
          <div>
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
        </div>
      </Section>
    </div>
  )
}
