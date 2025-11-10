'use client'
import Section from './Section'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context/LanguageProvider'

function getCurrentYear(): number {
  return new Date().getFullYear()
}

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = getCurrentYear()


  return (
    <footer className="mt-12 bg-dark text-slate-100 relative">
      <div className="absolute inset-0 grid-bg-dark opacity-50 pointer-events-none" aria-hidden/>
      <Section className="py-16 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-20">
            <Image 
              src="/img/logo-segundarry.webp" 
              alt="Veloxgi Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Sobre nosotros */}
          <div className="space-y-4">
            <h5 className="font-semibold text-lg mb-4 text-white">{t('footer.aboutUs')}</h5>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {t('footer.aboutDescription')}
            </p>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h5 className="font-semibold text-lg mb-4 text-white">{t('footer.links')}</h5>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white hover:underline transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-white hover:underline transition-colors">{t('nav.features')}</a>
              </li>
              <li>
                <a href="#ventajas" className="hover:text-white hover:underline transition-colors">{t('nav.advantages')}</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white hover:underline transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h5 className="font-semibold text-lg mb-4 text-white">{t('footer.contact')}</h5>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+573227858583" className="hover:text-white hover:underline transition-colors">
                  +57 322 785 8583
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:veloxgi.com@gmail.com" className="hover:text-white hover:underline transition-colors break-all">
                  veloxgi.com@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <Section className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="text-center sm:text-left">
              © {currentYear} Veloxgi. {t('footer.rightsReserved')}
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="/terms" 
                className="hover:text-white hover:underline transition-colors cursor-pointer relative z-10"
              >
                {t('footer.terms')}
              </Link>
              <Link 
                href="/privacy" 
                className="hover:text-white hover:underline transition-colors cursor-pointer relative z-10"
              >
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </footer>
  )
}


