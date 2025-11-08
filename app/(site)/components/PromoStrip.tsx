"use client"
import Section from './Section'
import { useScrollAnimation } from './useScrollAnimation'

export default function PromoStrip() {
  const textRef = useScrollAnimation<HTMLParagraphElement>({ direction: 'up', delay: 0 })

  return (
    <Section className="py-12">
      <p 
        ref={textRef.ref}
        className={`h3 text-center max-w-3xl mx-auto text-ink/90 transition-all duration-1000 ${textRef.animationClasses}`}
      >
        Conecta tus tiendas, marketplaces y flotas. Centraliza tu operación en minutos y reduce errores.
      </p>
    </Section>
  )
}


