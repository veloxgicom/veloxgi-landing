"use client"
import Image from 'next/image'
import Section from './Section'
import { useState, useMemo } from 'react'
import { useScrollAnimation } from './useScrollAnimation'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function GalleryMosaic() {
  const { t } = useLanguage()
  const [openSection, setOpenSection] = useState<string | null>('clientes')
  const textRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', delay: 0 })
  const image1Ref = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 0 })
  const image2Ref = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 150 })
  const image3Ref = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 300 })

  const ADVANTAGES = useMemo(() => ({
    clientes: [
      {
        description: t('gallery.clientsAdvantage1')
      }
    ],
    empresas: [
      {
        description: t('gallery.companiesAdvantage1')
      },
      {
        description: t('gallery.companiesAdvantage2')
      }
    ],
    colaboradores: [
      {
        description: t('gallery.collaboratorsAdvantage1')
      }
    ]
  }), [t])

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <Section className="py-8">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: Ventajas */}
        <div 
          ref={textRef.ref}
          className={`space-y-4 border-l-2 border-ink/20 pl-6 transition-all duration-1000 ${
            textRef.isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}
        >
          {/* Clientes */}
          <div className="py-4">
            <button
              onClick={() => toggleSection('clientes')}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openSection === 'clientes'}
            >
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'clientes' ? 'text-ink' : 'text-muted'}`}>{t('gallery.clients')}</h3>
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
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'empresas' ? 'text-ink' : 'text-muted'}`}>{t('gallery.companies')}</h3>
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
              <h3 className={`font-bold text-lg text-ink text-[40px] ${openSection === 'colaboradores' ? 'text-ink' : 'text-muted'}`}>{t('gallery.collaborators')}</h3>
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
            <div 
              ref={image1Ref.ref}
              className={`relative h-[240px] overflow-hidden rounded-xl transition-all duration-1000 ${
                image1Ref.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative w-full h-full group cursor-pointer">
                <Image 
                  src="/img/store.png" 
                  alt={t('gallery.storeImageAlt')} 
                  fill 
                  className="rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                />
              </div>
            </div>
            <div 
              ref={image2Ref.ref}
              className={`relative h-[240px] overflow-hidden rounded-xl transition-all duration-1000 ${
                image2Ref.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: image2Ref.isVisible ? '150ms' : '0ms' }}
            >
              <div className="relative w-full h-full group cursor-pointer">
                <Image 
                  src="/img/conductor.png" 
                  alt={t('gallery.driverImageAlt')} 
                  fill 
                  className="rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
          
          {/* Segunda columna: una imagen vertical */}
          <div 
            ref={image3Ref.ref}
            className={`relative h-full min-h-[500px] overflow-hidden rounded-xl transition-all duration-1000 ${
              image3Ref.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: image3Ref.isVisible ? '300ms' : '0ms' }}
          >
            <div className="relative w-full h-full group cursor-pointer">
              <Image 
                src="/img/client.png" 
                alt={t('gallery.clientImageAlt')} 
                fill 
                className="rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


