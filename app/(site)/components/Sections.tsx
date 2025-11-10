'use client'

import Hero from './Hero'
import FeaturePanel from './FeaturePanel'
import PromoStrip from './PromoStrip'
import GalleryMosaic from './GalleryMosaic'
import DarkCta from './DarkCta'
import Footer from './Footer'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

export default function Sections() {
  const { t } = useLanguage()

  return (
    <>
      <section id="inicio" aria-label={t('sections.home')}>
        <Hero />
      </section>
      <section id="caracteristicas" aria-label={t('sections.features')}>
        <FeaturePanel />
      </section>
      <PromoStrip />
      <section id="ventajas" aria-label={t('sections.advantages')}>
        <GalleryMosaic />
      </section>
      <section id="lista-espera" aria-label={t('sections.waitlist')}>
        <DarkCta />
      </section>
      {/* <BrandCarousel /> */}
      {/* <section id="testimonios" aria-label="Testimonios de clientes">
        <Testimonials />
      </section> */}
      <section id="contacto" aria-label={t('sections.contact')}>
        <Footer />
      </section>
    </>
  )
}

