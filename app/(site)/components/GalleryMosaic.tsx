"use client"
import Image from 'next/image'
import Section from './Section'
import { useState } from 'react'

const ADVANTAGES = {
  clientes: [
    {
      title: "Seguimiento en tiempo real",
      description: "Los clientes pueden rastrear sus pedidos desde que se realiza hasta la entrega, con actualizaciones en tiempo real del estado y ubicación de su paquete."
    }
  ],
  empresas: [
    {
      title: "Centralización de operaciones",
      description: "Gestiona pedidos de múltiples marketplaces desde un solo panel, reduciendo errores y tiempo de procesamiento. Visualiza todas tus ventas y entregas en un lugar."
    },
    {
      title: "Optimización de rutas y costos",
      description: "Asigna repartos de forma inteligente, optimiza rutas y reduce costos operativos. Gana visibilidad completa de tu logística y mejora la eficiencia."
    }
  ],
  colaboradores: [
    {
      title: "Herramientas para conductores y repartidores",
      description: "Los colaboradores acceden a una app móvil sencilla para gestionar entregas, recibir asignaciones automáticas y actualizar estados. Todo desde su dispositivo."
    }
  ]
}

export default function GalleryMosaic() {
  const [openSection, setOpenSection] = useState<string | null>('clientes')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <Section className="py-8">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: Ventajas */}
        <div className="space-y-4 border-l-2 border-ink/20 pl-6">
          {/* Clientes */}
          <div className="py-4">
            <button
              onClick={() => toggleSection('clientes')}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openSection === 'clientes'}
            >
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'clientes' ? 'text-ink' : 'text-muted'}`}>Clientes</h3>
              {openSection === 'clientes' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {openSection === 'clientes' && (
              <div className="mt-3 space-y-3">
                {ADVANTAGES.clientes.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    {/* <p className="font-medium text-[22px] text-ink">{item.title}</p> */}
                    <p className="text-lg text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Empresas */}
          <div className="py-4 border-t border-line/50">
            <button
              onClick={() => toggleSection('empresas')}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openSection === 'empresas'}
            >
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'empresas' ? 'text-ink' : 'text-muted'}`}>Empresas</h3>
              {openSection === 'empresas' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {openSection === 'empresas' && (
              <div className="mt-3 space-y-4">
                {ADVANTAGES.empresas.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    {/* <p className="font-medium text-sm text-ink">{item.title}</p> */}
                    <p className="text-lg text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Colaboradores */}
          <div className="py-4 border-t border-line/50">
            <button
              onClick={() => toggleSection('colaboradores')}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openSection === 'colaboradores'}
            >
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'colaboradores' ? 'text-ink' : 'text-muted'}`}>Colaboradores</h3>
              {openSection === 'colaboradores' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {openSection === 'colaboradores' && (
              <div className="mt-3 space-y-3">
                {ADVANTAGES.colaboradores.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    {/* <p className="font-medium text-sm text-ink">{item.title}</p> */}
                    <p className="text-lg text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Columna derecha: Imágenes */}
        <div className="grid grid-cols-2 gap-6">
          {/* Primera columna: dos imágenes apiladas */}
          <div className="space-y-6">
            <div className="relative h-[240px]">
              <Image src="/img/store.png" alt="Tienda" fill className="rounded-xl object-cover" />
            </div>
            <div className="relative h-[240px]">
              <Image src="/img/conductor.png" alt="Cliente" fill className="rounded-xl object-cover" />
            </div>
          </div>
          
          {/* Segunda columna: una imagen vertical */}
          <div className="relative h-full min-h-[500px]">
            <Image src="/img/client.png" alt="Conductor" fill className="rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </Section>
  )
}


