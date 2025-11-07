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

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: 'Veloxgi <onboarding@resend.dev>', // Cambia esto con tu dominio verificado
      to: email,
      subject: '¡Bienvenido a la lista de espera de Veloxgi!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #22E37E 0%, #19C56A 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">¡Bienvenido a Veloxgi!</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
              <p style="font-size: 16px; margin-bottom: 20px;">
                Hola,
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                ¡Gracias por unirte a nuestra lista de espera! Estamos emocionados de tenerte con nosotros.
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Te notificaremos tan pronto como lancemos Veloxgi, la plataforma que centraliza la gestión de todos tus marketplaces desde un solo lugar.
              </p>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22E37E;">
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  <strong>Lo que puedes esperar:</strong>
                </p>
                <ul style="margin: 10px 0 0 20px; color: #6b7280;">
                  <li>Acceso anticipado a la plataforma</li>
                  <li>Actualizaciones exclusivas sobre el lanzamiento</li>
                  <li>Recursos y guías para optimizar tu logística</li>
                </ul>
              </div>
              <p style="font-size: 16px; margin-top: 30px;">
                Mientras tanto, síguenos en nuestras redes sociales para estar al día con las últimas novedades.
              </p>
              <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                Saludos,<br>
                El equipo de Veloxgi
              </p>
            </div>
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

