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
    <main id="main">
      <Header />
      <Hero />
      <FeaturePanel />
      <PromoStrip />
      <GalleryMosaic />
      <DarkCta />
      {/* <BrandCarousel /> */}
      {/* <Testimonials /> */}
      <Footer />
    </main>
  )
}


