"use client"
import Section from './Section'
import FeatureCard from './FeatureCard'
import { ArrowRight } from './Icons'
import { useScrollAnimation } from './useScrollAnimation'

export default function FeaturePanel() {
  const textRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', delay: 0 })
  const cardsRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', delay: 200 })

  return (
    <Section className="py-12">
      <div
        className="relative rounded-2xl p-8 md:p-10 lg:p-12 shadow-sm overflow-hidden"
        style={{ backgroundImage: "url('/img/banner-patron.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" aria-hidden />
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
          <div 
            ref={textRef.ref}
            className={`space-y-4 flex flex-col justify-center align-center m-auto transition-all duration-1000 ${textRef.animationClasses}`}
          >
            <p className="text-6xl">Todo lo que tu PyME necesita para crecer</p>
            <p className="muted max-w-md">Centraliza ventas, pedidos y entregas, coordina a tu equipo y gana visibilidad en una sola plataforma.</p>
            <a href="#" className="inline-flex items-center gap-2 text-brand font-medium link-underline">Ver todas las funcionalidades
              <span className="inline-flex items-center justify-center size-6 rounded-full bg-brand text-ink" aria-hidden>
                <ArrowRight size={14}/>
              </span>
            </a>
          </div>
          <div 
            ref={cardsRef.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-1000 ${cardsRef.animationClasses}`}
          >
            <FeatureCard title="Integración con múltiples marketplaces" imageSrc="/img/marketplace.png"/>
            <FeatureCard title="Panel único de pedidos y ventas" imageSrc="/img/panel.png"/>
            <FeatureCard title="Asignación y seguimiento de repartos" imageSrc="/img/truck.png"/>
            <FeatureCard title="Control de roles y colaboradores" imageSrc="/img/order.png"/>
          </div>
        </div>
      </div>
    </Section>
  )
}


