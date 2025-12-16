import { Check } from "lucide-react";

const reasons = [
  "Atención cercana y personalizada",
  "Precios accesibles para todos los presupuestos",
  "Acompañamiento continuo antes, durante y después",
  "Experiencia con viajeros reales como tú",
  "Conexión natural con cada cliente",
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-colorSecondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-whyus-title">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-muted-foreground mb-8" data-testid="text-whyus-description">
              En MF Travel no solo planificamos viajes, creamos experiencias que recordarás para siempre.
              Nuestro compromiso es hacer que cada viaje sea único y especial.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={reason} className="flex items-center gap-3" data-testid={`item-reason-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-[#4ED7CF]/70 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">100+</span>
                  <p className="text-sm text-muted-foreground">Viajeros felices</p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0043A5]/20 to-[#21A4C0]/70 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">50+</span>
                  <p className="text-sm text-muted-foreground">Destinos</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#E76F00]/20 to-[#F5C316]/70 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">5</span>
                  <p className="text-sm text-muted-foreground">Años de experiencia</p>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-gradient-to-br from-[#0099A5]/20 to-primary/70 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">24/7</span>
                  <p className="text-sm text-muted-foreground">Soporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
