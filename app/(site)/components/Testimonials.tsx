"use client"
import Image from 'next/image'
import Section from './Section'
import { useScrollAnimation } from './useScrollAnimation'

const DATA = [
  { title: 'Centralizamos todo el flujo de pedidos', name: 'Juan Pérez', role: 'COO en Tienda Rápida', ava: '/img/ava-1.jpg' },
  { title: 'Asignar repartos ahora es cuestión de minutos', name: 'Marcela Simón', role: 'Directora de Operaciones en FreshGo', ava: '/img/ava-2.jpg' },
  { title: 'Un solo panel para todo el equipo', name: 'María Silva', role: 'Gerente General en Colmena', ava: '/img/ava-3.jpg' },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof DATA[0], index: number }) {
  const cardRef = useScrollAnimation<HTMLElement>({ direction: 'up', delay: index * 100 })

  return (
    <article 
      ref={cardRef.ref}
      className={`bg-white rounded-xl p-6 shadow-card transition-all duration-1000 hover:-translate-y-0.5 ${cardRef.animationClasses}`}
    >
      <h4 className="font-semibold text-lg mb-2">"{testimonial.title}"</h4>
      <p className="muted text-sm mb-4">La plataforma nos permitió integrar canales de venta, coordinar a los repartidores y tener trazabilidad completa de cada pedido.</p>
      <div className="flex items-center gap-3">
        <Image src={testimonial.ava} alt={testimonial.name} width={40} height={40} className="rounded-full object-cover" />
        <div>
          <div className="font-semibold text-sm">{testimonial.name}</div>
          <div className="text-muted text-xs">{testimonial.role}</div>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  return (
    <Section className="py-12">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {DATA.map((t, index) => (
          <TestimonialCard key={t.name} testimonial={t} index={index} />
        ))}
      </div>
    </Section>
  )
}


