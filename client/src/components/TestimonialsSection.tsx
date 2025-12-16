import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const testimonials = [
  {
    name: "Manuel Lisboa",
    avatar: "ML",
    messages: [
      {
        text: "Me parecieron las mejores personas capacitadas para este proceso y todo lo que el mismo conlleva.",
        time: "10:15 a.m."
      },
      {
        text: "La experiencia fue excelente, rápido. Todas las necesidades fueron completamente cumplidas.",
        time: "10:16 a.m."
      }
    ]
  },
  {
    name: "Carlos Toro",
    avatar: "CT",
    messages: [
      {
        text: "Sastifactoria, excelente atención e inmediata respuesta por parte de la agente Mariángel Fernández. Atenta y muy dedicada.",
        time: "2:09 p.m."
      },
      {
        text: "Los aspectos más importantes: Atención, puntualidad y responsabilidad.",
        time: "2:10 p.m."
      }
    ]
  },
  {
    name: "Terry Atomy",
    avatar: "TA",
    messages: [
      {
        text: "Me generó confianza y su capacidad de respuesta fue inmediata.",
        time: "11:00 a.m."
      },
      {
        text: "La experiencia fue cómoda, acogedora y segura de inicio a fin. Muy atentos en mis cambios de itinerario.",
        time: "11:02 a.m."
      }
    ]
  },
  {
    name: "Carlos Trujillo",
    avatar: "CT",
    messages: [
      {
        text: "Me hablaron muy bien de ustedes y por eso adquirí el servicio.",
        time: "12:38 p.m."
      },
      {
        text: "Muy bien, son cumplidores y responsables. Super pendiente de todo y muy bien atendido.",
        time: "12:39 p.m."
      }
    ]
  },
  {
    name: "Karina Vecina",
    avatar: "KV",
    messages: [
      {
        text: "Gestionan todo rápido. La experiencia fue excelente, siempre cumplieron.",
        time: "1:47 p.m."
      },
      {
        text: "Deben seguir con la misma eficiencia y amabilidad. Ser amables, atentos y que gestionen.",
        time: "1:48 p.m."
      }
    ]
  },
  {
    name: "Anderson",
    avatar: "AR",
    messages: [
      {
        text: "Deposito toda mi confianza en ustedes.",
        time: "10:59 p.m."
      },
      {
        text: "Gracias por estar, quiero tomar mis vacaciones gracias a ustedes. 🙏",
        time: "11:00 p.m."
      }
    ]
  },
];

function WhatsAppMessage({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="max-w-[85%] bg-white rounded-lg rounded-bl-none px-4 py-2 shadow-sm border border-gray-200">
        <p className="text-sm text-gray-800 leading-relaxed">{text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-gray-500">{time}</span>
          <Check className="h-3 w-3 text-blue-500" />
          <Check className="h-3 w-3 text-blue-500 -ml-2" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-colorSecondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Historias reales de personas que confiaron en nosotros para hacer realidad sus viajes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={`${testimonial.name}-${index}`} data-testid={`card-testimonial-${index}`} className="overflow-hidden flex flex-col">
              {/* Header estilo WhatsApp */}
              <div className="bg-[#00A99E] px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center font-semibold text-[#00A99E] text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/80">Viajero MF Travel</p>
                </div>
              </div>

              {/* Mensajes estilo WhatsApp - ahora flex-1 para llenar todo el espacio */}
              <div className="bg-[#E5DDD5] p-4 flex-1">
                {testimonial.messages.map((message, msgIndex) => (
                  <WhatsAppMessage
                    key={msgIndex}
                    text={message.text}
                    time={message.time}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
