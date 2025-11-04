import Image from 'next/image'
import Section from './Section'

const DATA = [
  { title: 'Centralizamos todo el flujo de pedidos', name: 'Juan Pérez', role: 'COO en Tienda Rápida', ava: '/img/ava-1.jpg' },
  { title: 'Asignar repartos ahora es cuestión de minutos', name: 'Marcela Simón', role: 'Directora de Operaciones en FreshGo', ava: '/img/ava-2.jpg' },
  { title: 'Un solo panel para todo el equipo', name: 'María Silva', role: 'Gerente General en Colmena', ava: '/img/ava-3.jpg' },
]

export default function Testimonials() {
  return (
    <Section className="py-12">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {DATA.map((t) => (
          <article key={t.name} className="bg-white rounded-xl p-6 shadow-card transition-transform hover:-translate-y-0.5">
            <h4 className="font-semibold text-lg mb-2">“{t.title}”</h4>
            <p className="muted text-sm mb-4">La plataforma nos permitió integrar canales de venta, coordinar a los repartidores y tener trazabilidad completa de cada pedido.</p>
            <div className="flex items-center gap-3">
              <Image src={t.ava} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-muted text-xs">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}


