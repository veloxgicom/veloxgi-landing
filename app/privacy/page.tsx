import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Section from '../(site)/components/Section'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Veloxgi',
  description: 'Política de privacidad de Veloxgi. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-ink mb-4">Política de Privacidad</h1>
            <p className="text-muted text-sm mb-8">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p className="text-ink leading-relaxed mb-6">
              Veloxgi ("nosotros", "nos" o "nuestro") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y compartimos información sobre ti cuando utilizas nuestro Servicio.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">1. Información que Recopilamos</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">1.1. Información Personal</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Cuando te unes a nuestra lista de espera, recopilamos tu dirección de correo electrónico <strong>con tu consentimiento explícito</strong>.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">1.2. Datos de Uso</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos recopilar información sobre cómo interactúas con nuestro Servicio, incluyendo dirección IP, tipo de navegador y patrones de uso.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">1.3. Cookies y Tecnologías de Seguimiento</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Utilizamos cookies para mejorar nuestro Servicio y analizar el tráfico. Puedes gestionar las preferencias de cookies a través de la configuración de tu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">2. Base Legal para el Procesamiento de Datos</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Procesamos tus datos personales bajo las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
                <li><strong>Consentimiento</strong> – Cuando proporcionas voluntariamente tu correo electrónico para unirte a nuestra lista de espera.</li>
                <li><strong>Interés Legítimo</strong> – Para mejorar nuestro Servicio y comunicar actualizaciones relevantes.</li>
                <li><strong>Obligación Contractual</strong> – Cuando los datos son necesarios para proporcionar el Servicio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">3. Cómo Usamos Tu Información</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">3.1. Operación del Servicio</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Utilizamos tu correo electrónico para notificarte sobre actualizaciones, lanzamientos de producto y comunicaciones relacionadas con Veloxgi.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">3.2. Mejoras</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Analizamos los datos de uso para mejorar nuestro Servicio y ofrecer una mejor experiencia a nuestros usuarios.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">3.3. Cumplimiento Legal</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos usar o divulgar tu información si es requerido por ley o para proteger nuestros derechos legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">4. Compartir Información</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">4.1. Proveedores de Servicios de Terceros</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos compartir datos con proveedores de servicios que nos ayudan en la entrega de correos electrónicos, análisis e infraestructura. Todos los terceros están obligados a cumplir con el GDPR y han firmado <strong>Acuerdos de Procesamiento de Datos (DPAs)</strong> con nosotros.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">4.2. Obligaciones Legales</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos divulgar información si es necesario para cumplir con requisitos legales o proteger nuestros derechos.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">4.3. Transferencias Comerciales</h3>
              <p className="text-ink mb-4 leading-relaxed">
                En el evento de una fusión, adquisición o venta de activos, los datos de usuario pueden ser transferidos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">5. Derechos del Usuario bajo el GDPR</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Bajo el <strong>Reglamento General de Protección de Datos (GDPR)</strong>, los usuarios tienen los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
                <li><strong>Derecho de Acceso</strong> – Solicitar una copia de los datos que tenemos sobre ti.</li>
                <li><strong>Derecho de Rectificación</strong> – Solicitar la corrección de datos personales inexactos.</li>
                <li><strong>Derecho de Supresión</strong> – Solicitar la eliminación de tus datos ("Derecho al Olvido").</li>
                <li><strong>Derecho a Restringir el Procesamiento</strong> – Solicitar limitar cómo procesamos tus datos.</li>
                <li><strong>Derecho a la Portabilidad de Datos</strong> – Recibir una copia de tus datos en un formato estructurado.</li>
                <li><strong>Derecho de Oposición</strong> – Oponerte al procesamiento de datos basado en intereses legítimos.</li>
                <li><strong>Derecho a Retirar el Consentimiento</strong> – Retirar el consentimiento previamente dado en cualquier momento.</li>
              </ul>
              <p className="text-ink mb-4 leading-relaxed">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:veloxgi.com@gmail.com" className="text-brand hover:underline">veloxgi.com@gmail.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">6. Seguridad y Retención de Datos</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">6.1. Medidas de Seguridad</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos. Sin embargo, ningún método de transmisión por internet es 100% seguro.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">6.2. Retención de Datos</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Conservamos tus datos personales <strong>solo el tiempo necesario</strong> para cumplir con su propósito previsto, a menos que un período de retención más largo sea requerido por ley. Puedes solicitar la eliminación de tus datos en cualquier momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">7. Transferencias Internacionales de Datos</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Si transferimos tus datos fuera del <strong>Espacio Económico Europeo (EEE)</strong>, implementamos salvaguardias apropiadas, como <strong>Cláusulas Contractuales Estándar (SCCs)</strong>, para proteger tus datos personales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">8. Cookies y Tecnologías de Seguimiento</h2>
              
              <h3 className="text-xl font-medium text-ink mb-3">8.1. Tipos de Cookies que Usamos</h3>
              <ul className="list-disc pl-6 space-y-2 text-ink mb-4">
                <li><strong>Cookies Estrictamente Necesarias:</strong> Esenciales para que el Servicio funcione</li>
                <li><strong>Cookies Analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro Servicio</li>
                <li><strong>Cookies Funcionales:</strong> Recuerdan tus preferencias</li>
              </ul>

              <h3 className="text-xl font-medium text-ink mb-3">8.2. Consentimiento de Cookies</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Por ley (LSSI), requerimos tu consentimiento explícito para cookies no esenciales. Puedes gestionar tus preferencias a través de nuestro banner de cookies cuando visitas nuestro Servicio por primera vez.
              </p>

              <h3 className="text-xl font-medium text-ink mb-3">8.3. Gestionar Cookies</h3>
              <p className="text-ink mb-4 leading-relaxed">
                Puedes gestionar o desactivar las cookies a través de la configuración de tu navegador. Sin embargo, desactivar ciertas cookies puede afectar la funcionalidad del Servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">9. Privacidad de Menores</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Nuestro Servicio no está destinado a menores de 16 años (o menores de 13 años en Estados Unidos). No recopilamos conscientemente datos personales de menores bajo estos límites de edad. Si nos damos cuenta de que hemos recopilado datos personales de un menor bajo estas edades, tomaremos medidas para eliminar dicha información de inmediato. Si crees que hemos recopilado información de un menor bajo el límite de edad aplicable, por favor contáctanos inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">10. Cambios a esta Política de Privacidad</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Podemos actualizar esta Política de Privacidad de vez en cuando. El uso continuado del Servicio después de los cambios constituye la aceptación de la nueva política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">11. Información de Contacto y Solicitudes de Protección de Datos</h2>
              <p className="text-ink mb-4 leading-relaxed">
                Para preguntas sobre esta Política de Privacidad o solicitudes relacionadas con GDPR, contáctanos en:
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
                  href="/terms" 
                  className="inline-flex items-center gap-2 text-brand hover:text-brand600 transition-colors"
                >
                  Ver Términos y Condiciones
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

