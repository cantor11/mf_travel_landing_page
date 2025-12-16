import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: Briefcase,
    title: "Profesional",
    description: "Experiencia y conocimiento para planificar cada detalle de tu viaje con precisión y calidad.",
  },
  {
    icon: Heart,
    title: "Cercana",
    description: "Te acompañamos en cada paso, escuchando tus necesidades y adaptándonos a tus sueños.",
  },
  {
    icon: Leaf,
    title: "Natural",
    description: "Creemos en viajes auténticos que conecten con la esencia de cada destino y cultura.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-colorSecondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            Viajar es más fácil cuando alguien te acompaña
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-description">
            En MF Travel creemos que cada viaje debe ser una experiencia única y memorable.
            Por eso, nos dedicamos a conocerte y entender qué tipo de aventura buscas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="text-center" data-testid={`card-value-${index}`}>
              <CardContent className="pt-6 pb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
