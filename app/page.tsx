import { WaitlistProvider } from './(site)/components/WaitlistProvider'
import Header from './(site)/components/Header'
import Hero from './(site)/components/Hero'
import FeaturePanel from './(site)/components/FeaturePanel'
import PromoStrip from './(site)/components/PromoStrip'
import GalleryMosaic from './(site)/components/GalleryMosaic'
import DarkCta from './(site)/components/DarkCta'
import BrandCarousel from './(site)/components/BrandCarousel'
import Testimonials from './(site)/components/Testimonials'
import Footer from './(site)/components/Footer'

export default function Page() {
  return (
    <WaitlistProvider>
      <main id="main">
        <Header />
        <section id="inicio">
          <Hero />
        </section>
        <section id="caracteristicas">
          <FeaturePanel />
        </section>
        <PromoStrip />
        <section id="ventajas">
          <GalleryMosaic />
        </section>
        <section id="lista-espera">
          <DarkCta />
        </section>
        {/* <BrandCarousel /> */}
        {/* <section id="testimonios">
          <Testimonials />
        </section> */}
        <section id="contacto">
          <Footer />
        </section>
      </main>
    </WaitlistProvider>
  )
}


