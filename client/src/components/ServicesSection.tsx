import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";
import {
  MessageSquare,
  Search,
  Map,
  Users,
  Headphones,
  Wallet
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Asesoría personalizada",
    description: "Conversamos contigo para entender tus gustos, presupuesto y expectativas de viaje.",
  },
  {
    icon: Search,
    title: "Búsqueda de vuelos y hospedajes",
    description: "Encontramos las mejores opciones de vuelos y alojamiento a precios accesibles.",
  },
  {
    icon: Map,
    title: "Itinerarios a medida",
    description: "Diseñamos rutas y actividades adaptadas a tu estilo de viaje y tiempo disponible.",
  },
  {
    icon: Users,
    title: "Viajes para todos",
    description: "Organizamos aventuras para mochileros, familias, parejas y grupos de amigos.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description: "Estamos contigo antes, durante y después del viaje para resolver cualquier duda.",
  },
  {
    icon: Wallet,
    title: "Precios accesibles",
    description: "Trabajamos para que tu viaje soñado sea posible sin salirte del presupuesto.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-colorSecondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            ¿Qué hacemos por tu viaje?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Nos encargamos de todo para que tú solo te preocupes por disfrutar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Card key={service.title} className="hover-elevate" data-testid={`card-service-${index}`}>
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild data-testid="button-services-quote">
            <a href="https://api.whatsapp.com/send?phone=573215804855&text=Hola%20%0A1.%20Quiero%20Cotizar%0A2.%20Quisiera%20saber%20m%C3%A1s%20del%20negocio" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
