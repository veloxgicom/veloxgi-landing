import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Section from '../(site)/components/Section'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma de gestión logística. Información sobre uso, derechos y obligaciones.',
  keywords: [
    'términos y condiciones',
    'términos de servicio',
    'condiciones de uso',
    'términos Veloxgi',
    'contrato de servicio',
    'derechos del consumidor'
  ],
  openGraph: {
    title: 'Términos y Condiciones — Veloxgi',
    description: 'Términos y condiciones de uso de Veloxgi. Lee nuestros términos de servicio antes de utilizar nuestra plataforma.',
    url: 'https://veloxgi.com/terms',
    type: 'website',
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white border-b border-line">
        <Section className="h-[72px] flex items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="Página inicial">
            <div className="relative w-32 h-10">
              <Image 
                src="/img/logo-primary.png" 
                alt="Veloxgi Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
        </Section>
      </header>

      <main className="py-12 bg-white">
        <Section className="max-w-4xl">
          <div className="max-w-none">
            <h1 className="text-4xl font-bold text-ink mb-4">Términos y Condiciones</h1>
            <p className="text-muted text-sm mb-8">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p className="text-ink leading-relaxed mb-6">
              Bienvenido a Veloxgi ("Servicio"), operado por Veloxgi ("Compañía", "nosotros", "nos" o "nuestro"). Al acceder o usar nuestro Servicio, aceptas estos Términos y Condiciones ("Términos"). Si no estás de acuerdo, no uses el Servicio.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">1. Uso del Servicio</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">1.1. Elegibilidad</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Debes tener al menos 18 años de edad y tener capacidad legal para celebrar contratos para usar nuestro Servicio.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">1.2. Licencia</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Te concedemos una licencia limitada, no exclusiva, no transferible y revocable para usar nuestro Servicio para su propósito previsto.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">1.3. Actividades Prohibidas</h3>
              <p className="text-ink mb-4 leading-relaxed">
                No puedes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
                <li>Usar el Servicio para fines ilegales.</li>
                <li>Intentar realizar ingeniería inversa, copiar o modificar nuestro software.</li>
                <li>Interferir o interrumpir el Servicio.</li>
                <li>Usar el Servicio para acosar o dañar a individuos.</li>
                <li>Acceder no autorizado a sistemas o datos del Servicio.</li>
                <li>Usar robots, spiders o herramientas automatizadas para acceder al Servicio sin autorización.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">2. Lista de Espera y Recopilación de Datos</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">2.1. Registro en la Lista de Espera</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Al unirte a la lista de espera, proporcionas tu dirección de correo electrónico y consientes en recibir actualizaciones sobre el Servicio, incluyendo notificaciones de lanzamiento, características nuevas y comunicaciones relacionadas con Veloxgi.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">2.2. Uso de Datos</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Recopilamos y almacenamos tu correo electrónico con fines de notificación. No vendemos ni compartimos tu correo electrónico con terceros sin tu consentimiento, excepto según se describe en nuestra Política de Privacidad.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">2.3. Opt-Out</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Puedes cancelar tu suscripción en cualquier momento haciendo clic en el enlace "cancelar suscripción" en nuestros correos electrónicos o contactándonos directamente en <a href="mailto:veloxgi.com@gmail.com" className="text-brand hover:underline">veloxgi.com@gmail.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">3. Propiedad Intelectual</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">3.1. Propiedad</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Todos los derechos, títulos e intereses en el Servicio, incluyendo marcas comerciales, contenido y software, permanecen con nosotros. El Servicio y su contenido original, características y funcionalidad son propiedad de Veloxgi y están protegidos por leyes internacionales de derechos de autor, marcas comerciales, patentes, secretos comerciales y otras leyes de propiedad intelectual.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">3.2. Restricciones</h3>
              <p className="text-ink mb-4 leading-relaxed">
                No puedes usar nuestra marca, logos u otros materiales propietarios sin permiso escrito. Esto incluye, pero no se limita a, el nombre "Veloxgi", nuestro logo y cualquier otro elemento de identificación visual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">4. Descargos de Responsabilidad y Limitación de Responsabilidad</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">4.1. Sin Garantía</h3>
              <p className="text-ink mb-4 leading-relaxed">
                El Servicio se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. No garantizamos que el Servicio será ininterrumpido, oportuno, seguro o libre de errores.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">4.2. Limitación de Responsabilidad</h3>
              <p className="text-ink mb-4 leading-relaxed">
                En la máxima medida permitida por la ley, no seremos responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de tu uso del Servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">5. Terminación</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">5.1. Incumplimiento</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Nos reservamos el derecho de terminar o suspender tu acceso al Servicio inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo si violas estos Términos.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">5.2. Efecto de la Terminación</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Al terminar, tu derecho a usar el Servicio cesa inmediatamente. Todas las disposiciones de estos Términos que por su naturaleza deberían sobrevivir a la terminación sobrevivirán, incluyendo disposiciones de propiedad, descargos de responsabilidad y limitación de responsabilidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">6. Cambios a Estos Términos</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos actualizar estos Términos en cualquier momento. Te notificaremos de cualquier cambio publicando los nuevos Términos en esta página y actualizando la fecha de "Última actualización". El uso continuado del Servicio después de los cambios constituye la aceptación de los nuevos Términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">7. Ley Aplicable y Disputas</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">7.1. Ley Aplicable</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Estos Términos se rigen por la ley española.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">7.2. Derechos del Consumidor</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Nada en estos Términos afecta tus derechos legales como consumidor bajo la ley española y de la UE, incluyendo derechos bajo el Real Decreto Legislativo 1/2007 (Ley General para la Defensa de los Consumidores y Usuarios).
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">7.3. Resolución de Disputas</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Para cualquier disputa, puedes contactarnos en <a href="mailto:veloxgi.com@gmail.com" className="text-brand hover:underline">veloxgi.com@gmail.com</a>. Si no podemos resolver la disputa de manera amistosa:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
                <li>Los consumidores españoles tienen el derecho de usar las juntas arbitrales de consumo (Juntas Arbitrales de Consumo)</li>
                <li>También puedes usar la plataforma de resolución de disputas en línea de la UE: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">https://ec.europa.eu/consumers/odr</a></li>
                <li>Las disputas estarán sujetas a la jurisdicción de los tribunales españoles</li>
              </ul>

              <h3 className="text-xl font-medium text-ink mb-3">7.4. Idioma</h3>
              <p className="text-ink mb-4 leading-relaxed">
                En caso de conflicto entre versiones de idioma, la versión en español prevalecerá.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">8. Derecho de Desistimiento</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">8.1. Para Consumidores</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Como consumidor de la UE, tienes el derecho de desistir de este acuerdo dentro de 14 días sin dar ninguna razón, de acuerdo con la ley de protección al consumidor española.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">8.2. Renuncia para Servicio Inmediato</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Al unirte a nuestra lista de espera y consentir en recibir comunicaciones inmediatas, renuncias expresamente a tu derecho de desistimiento para la prestación de servicios que comienzan inmediatamente a tu solicitud.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">8.3. Cómo Ejercer</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Para ejercer tu derecho de desistimiento, contáctanos en <a href="mailto:veloxgi.com@gmail.com" className="text-brand hover:underline">veloxgi.com@gmail.com</a> con una declaración clara de tu decisión.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">9. Servicio de Veloxgi</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">9.1. Descripción del Servicio</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Veloxgi es una plataforma diseñada para pequeñas y medianas empresas que centraliza la gestión de pedidos y ventas de múltiples marketplaces desde un solo lugar. El Servicio permite gestionar colaboradores (conductores, repartidores y administrativos), optimizar entregas y tener visibilidad completa de la logística empresarial.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">9.2. Disponibilidad del Servicio</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Actualmente, Veloxgi está en fase de desarrollo y disponemos de una lista de espera. Te notificaremos cuando el Servicio esté disponible para tu uso. No garantizamos fechas específicas de lanzamiento.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">9.3. Cambios al Servicio</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento, con o sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">10. Información de Contacto</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Para preguntas sobre estos Términos, contáctanos en:
              </p>
              <div className="bg-panel rounded-lg p-4 mb-6">
                <p className="text-ink font-medium mb-2">Veloxgi</p>
                <p className="text-ink mb-1">
                  <strong>Email:</strong> <a href="mailto:veloxgi.com@gmail.com" className="text-brand hover:underline">veloxgi.com@gmail.com</a>
                </p>
                <p className="text-ink mb-1">
                  <strong>Teléfono:</strong> <a href="tel:+573227858583" className="text-brand hover:underline">+57 322 785 8583</a>
                </p>
              </div>
            </section>

            <div className="border-t border-line pt-8 mt-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-brand hover:text-brand600 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Volver al inicio
                </Link>
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center gap-2 text-brand hover:text-brand600 transition-colors"
                >
                  Ver Política de Privacidad
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

