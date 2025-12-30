import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, Phone } from "lucide-react";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default function ContactUsSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    // Cargar reCAPTCHA script
    useEffect(() => {
        const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

        if (!siteKey) {
            console.error("VITE_RECAPTCHA_SITE_KEY no está configurada");
            return;
        }

        // Verificar si el script ya está cargado
        if (window.grecaptcha) {
            setRecaptchaLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setRecaptchaLoaded(true);
        };
        script.onerror = () => {
            console.error("Error cargando reCAPTCHA");
        };

        document.head.appendChild(script);

        return () => {
            // Cleanup: remover el script cuando el componente se desmonte
            const existingScript = document.querySelector(
                `script[src*="recaptcha/api.js"]`
            );
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

            if (!window.grecaptcha || !siteKey) {
                throw new Error("reCAPTCHA no está cargado");
            }

            // Obtener token de reCAPTCHA
            const token = await window.grecaptcha.execute(siteKey, {
                action: "submit_contact",
            });

            // Llamar a la función serverless de Vercel
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                const errorData = await response.json();
                console.error("Error del servidor:", errorData);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error al enviar:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-colorSecondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Lado izquierdo - Decorativo */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#4ED7CF]/20 rounded-3xl transform rotate-6"></div>
                            <Card className="relative shadow-2xl">
                                <CardContent className="pt-12 pb-12 text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#0043A5]/40 to-[#0043A5]/90 rounded-full flex items-center justify-center shadow-lg">
                                        <Phone className="h-16 w-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        ¿Necesitas ayuda?
                                    </h3>
                                    <p className="text-muted-foreground text-sm px-4">
                                        Contáctanos si necesitas más información o asistencia personalizada para tu viaje.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div>
                        <div className="mb-8">
                            <h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                                data-testid="text-contact-title"
                            >
                                Contáctanos
                            </h2>
                            <p className="text-muted-foreground" data-testid="text-contact-description">
                                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                            </p>
                        </div>

                        <Card className="shadow-lg">
                            <CardContent className="pt-6 pb-6">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Nombre */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Nombre y apellido
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ingresa tu nombre completo"
                                            className="w-full"
                                            data-testid="input-contact-name"
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                            Teléfono
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+57 300 123 4567"
                                            className="w-full"
                                            data-testid="input-contact-phone"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Correo electrónico
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tucorreo@ejemplo.com"
                                            className="w-full"
                                            data-testid="input-contact-email"
                                        />
                                    </div>

                                    {/* Mensaje */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Detalles de tu consulta
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos qué tipo de viaje estás buscando, destinos de interés, fechas aproximadas..."
                                            rows={5}
                                            className="w-full resize-none"
                                            data-testid="textarea-contact-message"
                                        />
                                    </div>

                                    {/* Botón Submit */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting || !recaptchaLoaded}
                                        data-testid="button-contact-submit"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Enviar consulta
                                            </>
                                        )}
                                    </Button>

                                    {/* Badge de reCAPTCHA */}
                                    <p className="text-xs text-muted-foreground text-center">
                                        Este sitio está protegido por reCAPTCHA y se aplican la{" "}
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="underline">
                                            Política de Privacidad
                                        </a>{" "}
                                        y los{" "}
                                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="underline">
                                            Términos de Servicio
                                        </a>{" "}
                                        de Google.
                                    </p>

                                    {/* Mensajes de estado */}
                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-sm text-green-800 font-medium">
                                                ✓ Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                                            </p>
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-sm text-red-800 font-medium">
                                                ✗ Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
