import { Card, CardContent } from "@/components/ui/card";
import { Backpack, Users, Compass, Calendar } from "lucide-react";

const destinations = [
  {
    icon: Backpack,
    title: "Viajes mochileros",
    description: "Aventuras económicas y auténticas para explorar el mundo con libertad y flexibilidad.",
    gradient: "from-primary/20 to-primary/40",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Viajes para familias",
    description: "Experiencias diseñadas para que toda la familia disfrute, desde los más pequeños hasta los abuelos.",
    gradient: "from-[#0099A5]/20 to-[#0099A5]/40",
    iconColor: "text-[#0099A5]",
  },
  {
    icon: Compass,
    title: "Viajes personalizados",
    description: "Itinerarios únicos creados especialmente según tus intereses, gustos y ritmo de viaje.",
    gradient: "from-[#0043A5]/20 to-[#0043A5]/40",
    iconColor: "text-[#0043A5]",
  },
  {
    icon: Calendar,
    title: "Escapadas de fin de semana",
    description: "Planes cortos pero intensos para desconectar y recargar energías cerca de casa.",
    gradient: "from-[#21A4C0]/20 to-[#21A4C0]/40",
    iconColor: "text-[#21A4C0]",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-destinations-title">
            Tipos de viajes que organizamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-destinations-description">
            Sea cual sea tu estilo de viaje, tenemos la experiencia perfecta para ti.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {destinations.map((destination, index) => (
            <Card key={destination.title} className="overflow-visible hover-elevate" data-testid={`card-destination-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${destination.gradient} flex items-center justify-center flex-shrink-0`}>
                    <destination.icon className={`h-7 w-7 ${destination.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{destination.title}</h3>
                    <p className="text-sm text-muted-foreground">{destination.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
