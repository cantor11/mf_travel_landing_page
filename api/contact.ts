export const config = {
    runtime: 'edge',
};

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        if (process.env.NODE_ENV === 'development') return { success: true, score: 1.0 };
        return { success: false };
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secretKey}&response=${token}`,
        });
        const data = await response.json();
        return {
            success: data.success && (data.score === undefined || data.score >= 0.5),
            score: data.score,
        };
    } catch (error) {
        return { success: false };
    }
}

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 });
    }

    try {
        const body = await req.json();
        const { name, phone, email, message, recaptchaToken } = body;

        if (!name || !phone || !email || !message || !recaptchaToken) {
            return new Response(JSON.stringify({ error: 'Todos los campos son requeridos' }), { status: 400 });
        }

        const recaptchaResult = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaResult.success) {
            return new Response(JSON.stringify({ error: 'Verificación de seguridad fallida.' }), { status: 403 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return new Response(JSON.stringify({ error: 'Configuración del servidor incompleta' }), { status: 500 });
        }

        const emailTo = process.env.EMAIL_TO || 'contacto@viajesviajaja.com';
        const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';

        // Usamos fetch directamente para Resend para evitar problemas con el SDK en Windows local
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: `MF Travel <${emailFrom}>`,
                to: [emailTo],
                subject: `Nueva consulta de ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #239e8aff;">Nueva consulta desde MF Travel</h2>
                        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Nombre:</strong> ${name}</p>
                            <p><strong>Teléfono:</strong> ${phone}</p>
                            <p><strong>Email:</strong> ${email}</p>
                        </div>
                        <div style="margin: 20px 0;">
                            <p><strong>Mensaje:</strong></p>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                `,
            }),
        });

        const resendData = await resendResponse.json();

        if (!resendResponse.ok) {
            console.error('Error de Resend:', resendData);
            return new Response(JSON.stringify({ error: resendData.message || 'Error al enviar email' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, message: 'Mensaje enviado correctamente' }), { status: 200 });
    } catch (error: any) {
        console.error('Error en /api/contact:', error);
        return new Response(JSON.stringify({ error: 'Error al procesar la solicitud' }), { status: 500 });
    }
}

