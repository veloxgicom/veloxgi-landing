import Image from 'next/image'
import Section from './Section'
import GridBgLight from './GridBgLight'
import ActionPill from './ActionPill'

export default function Hero() {
  return (
    <div className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      <GridBgLight />
      <Section className="relative grid lg:grid-cols-2 gap-10 items-center">
        {/* image card */}
        <div className="order-1 lg:order-none">
          {/* Wrapper con capas separadas */}
          <div className="relative w-full max-w-md lg:max-w-none overflow-visible isolate">
            {/* Fondo verde */}
            <div className="bg-brand rounded-2xl shadow-card h-[500px] lg:h-[560px] w-full z-0" />

            {/* Imagen flotando por encima del fondo */}
            <div className="absolute -top-12 -left-[2rem] lg:-top-[4.5rem] lg:-left-12 h-[631px] w-[590px] z-10 pointer-events-none">
              <Image
                src="/img/hero.png"   // idealmente PNG con fondo transparente
                alt="Cliente feliz com cartão next"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* text */}
        <div className="space-y-6">
          <h1 className="display">Gestiona toda tu logística desde un solo lugar</h1>
          <p className="text-base muted max-w-lg">
            La herramienta para pequeñas y medianas empresas que centraliza pedidos y ventas de múltiples plataformas, gestiona colaboradores (conductores, repartidores y administrativos) y optimiza cada entrega.
          </p>
          <div>
            <ActionPill>Unirme a la lista de espera</ActionPill>
          </div>
        </div>
      </Section>
    </div>
  )
}
