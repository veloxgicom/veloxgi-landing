import Section from './Section'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-12 bg-dark text-slate-100 relative">
      <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden/>
      <Section className="py-16 relative">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-20">
            <Image 
              src="/img/logo-segundarry.png" 
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
            <h5 className="font-semibold text-lg mb-4 text-white">Sobre nosotros</h5>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Veloxgi — Centraliza la gestión de todos tus marketplaces desde un solo lugar. Optimiza tus ventas, controla tu inventario y haz crecer tu negocio con la velocidad y eficiencia que necesitas.
            </p>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h5 className="font-semibold text-lg mb-4 text-white">Enlaces</h5>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">Características</a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">Beneficios</a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h5 className="font-semibold text-lg mb-4 text-white">Contacto</h5>
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
      <div className="border-t border-white/10">
        <Section className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="text-center sm:text-left">
              © 2024 Veloxgi. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white hover:underline transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="hover:text-white hover:underline transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
        </Section>
      </div>
    </footer>
  )
}


