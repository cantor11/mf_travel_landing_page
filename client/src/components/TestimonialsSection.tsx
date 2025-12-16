import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    name: "María González",
    tripType: "Viaje familiar a Europa",
    rating: 5,
    review: "Increíble experiencia. MF Travel se encargó de todo y pudimos disfrutar en familia sin preocupaciones. Los hoteles fueron perfectos para los niños.",
  },
  {
    name: "Carlos Rodríguez",
    tripType: "Mochilero por Sudamérica",
    rating: 5,
    review: "La mejor decisión que tomé fue contactar a MF Travel. Me ayudaron a armar un itinerario económico pero completo. El acompañamiento durante el viaje fue invaluable.",
  },
  {
    name: "Ana Martínez",
    tripType: "Luna de miel en París",
    rating: 5,
    review: "Planificaron cada detalle de nuestra luna de miel. Restaurantes, tours privados y hoteles de ensueño. Superó todas nuestras expectativas.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-[#F5C316] fill-[#F5C316]" : "text-muted"}`}
        />
      ))}
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6 pb-6">
                <StarRating rating={testimonial.rating} />
                <p className="text-sm text-muted-foreground mt-4 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.tripType}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
