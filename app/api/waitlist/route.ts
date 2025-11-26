import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email válido requerido' },
        { status: 400 }
      )
    }

    // URL base para las imágenes (ajusta según tu dominio)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://veloxgi.com'
    const logoUrl = `${baseUrl}/img/email-logo.png`

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: 'noreply@veloxgi.com', // Cambia esto con tu dominio verificado
      to: email,
      subject: '¡Bienvenido a la lista de espera de Veloxgi!',
      html: `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F6F7F8; line-height: 1.6;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F6F7F8;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(16,24,40,.06);">
                    <!-- Header con logo -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #22E37E 0%, #19C56A 100%); padding: 40px 30px; text-align: center;">
                        <img src="${logoUrl}" alt="Veloxgi Logo" style="max-width: 200px; height: auto; display: block; margin: 0 auto;" />
                      </td>
                    </tr>
                    
                    <!-- Contenido principal -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h1 style="color: #0F172A; font-size: 28px; font-weight: 700; margin: 0 0 20px 0; line-height: 1.2;">
                          ¡Bienvenido a Veloxgi! 🎉
                        </h1>
                        
                        <p style="color: #0F172A; font-size: 16px; margin: 0 0 20px 0;">
                          Hola,
                        </p>
                        
                        <p style="color: #0F172A; font-size: 16px; margin: 0 0 20px 0;">
                          ¡Gracias por unirte a nuestra lista de espera! Estamos emocionados de tenerte con nosotros en este viaje hacia la transformación de la gestión de marketplaces.
                        </p>
                        
                        <p style="color: #0F172A; font-size: 16px; margin: 0 0 30px 0;">
                          Te notificaremos tan pronto como lancemos <strong>Veloxgi</strong>, la plataforma que centraliza la gestión de todos tus marketplaces desde un solo lugar.
                        </p>
                        
                        <!-- Sección de beneficios -->
                        <div style="background: linear-gradient(135deg, #F6F7F8 0%, #ffffff 100%); padding: 25px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #22E37E;">
                          <h2 style="color: #0F172A; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
                            Lo que puedes esperar:
                          </h2>
                          <ul style="margin: 0; padding-left: 20px; color: #0F172A; font-size: 15px; line-height: 1.8;">
                            <li style="margin-bottom: 10px;">🎯 <strong>Acceso anticipado</strong> a la plataforma</li>
                            <li style="margin-bottom: 10px;">📧 <strong>Actualizaciones exclusivas</strong> sobre el lanzamiento</li>
                            <li style="margin-bottom: 10px;">📚 <strong>Recursos y guías</strong> para optimizar tu logística</li>
                            <li style="margin-bottom: 0;">💡 <strong>Tips y mejores prácticas</strong> de gestión de marketplaces</li>
                          </ul>
                        </div>
                        
                        <!-- Firma -->
                        <p style="color: #6B7280; font-size: 15px; margin: 40px 0 0 0; padding-top: 30px; border-top: 1px solid #E5E7EB;">
                          Saludos cordiales,<br>
                          <strong>El equipo de Veloxgi</strong>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #0A0D12; padding: 30px; text-align: center;">
                        <!-- Redes sociales -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 20px;">
                          <tr>
                            <td style="padding: 0 12px;">
                              <a href="https://www.instagram.com/veloxgi/" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                                <div style="background-color: #22E37E; border-radius: 50%; width: 44px; height: 44px; display: table-cell; vertical-align: middle; text-align: center;">
                                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#ffffff"/>
                                  </svg>
                                </div>
                              </a>
                            </td>
                            <td style="padding: 0 12px;">
                              <a href="https://x.com/veloxgi" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                                <div style="background-color: #22E37E; border-radius: 50%; width: 44px; height: 44px; display: table-cell; vertical-align: middle; text-align: center;">
                                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
                                  </svg>
                                </div>
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <p style="color: #6B7280; font-size: 13px; margin: 0 0 15px 0;">
                          © ${new Date().getFullYear()} Veloxgi. Todos los derechos reservados.
                        </p>
                        <p style="color: #6B7280; font-size: 12px; margin: 0; line-height: 1.6;">
                          Si tienes alguna pregunta, no dudes en contactarnos en<br>
                          <a href="mailto:veloxgi.com@gmail.com" style="color: #22E37E; text-decoration: none;">veloxgi.com@gmail.com</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    // Opcional: Enviar notificación interna al equipo
    await resend.emails.send({
      from: 'Veloxgi <onboarding@resend.dev>',
      to: 'veloxgi.com@gmail.com', // Email del equipo
      subject: `Nuevo registro en lista de espera: ${email}`,
      html: `
        <p>Nueva suscripción a la lista de espera:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

