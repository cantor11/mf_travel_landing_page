import { Button } from "@/components/ui/button";
import { SiWhatsapp, SiInstagram} from "react-icons/si";
import { Plane, MapPin, Mountain, Palmtree } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
              Planeamos tu viaje para que vivas{" "}
              <span className="text-primary">experiencias inolvidables</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-hero-subtitle">
              Asesoría personalizada, precios accesibles y acompañamiento antes, durante y después de tu viaje. 
              Hacemos que viajar sea fácil y emocionante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild data-testid="button-hero-whatsapp">
                <a href="https://api.whatsapp.com/send?phone=573215804855&text=Hola%20%0A1.%20Quiero%20Cotizar%0A2.%20Quisiera%20saber%20m%C3%A1s%20del%20negocio" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-hero-instagram">
                <a href="https://www.instagram.com/mf_.travel/" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="mr-2 h-5 w-5" />
                  Ver Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div 
                className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
                data-testid="visual-destination-1"
              >
                <div className="text-center p-4">
                  <img src="/assets/paris.webp" alt="París" className="h-full w-full object-cover rounded-lg" />
                  <span className="text-sm font-medium text-foreground">París</span>
                </div>
              </div>
              <div 
                className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0099A5]/20 to-[#0099A5]/40 flex items-center justify-center"
                data-testid="visual-destination-2"
              >
                <div className="text-center p-4">
                  <img src="/assets/machu-picchu.webp" alt="Machu Picchu" className="h-full w-full object-cover rounded-lg" />
                  <span className="text-sm font-medium text-foreground">Machu Picchu</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div 
                className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0043A5]/20 to-[#0043A5]/40 flex items-center justify-center"
                data-testid="visual-destination-3"
              >
                <div className="text-center p-4">
                  <img src="/assets/roma.webp" alt="Roma" className="h-full w-full object-cover rounded-lg" />
                  <span className="text-sm font-medium text-foreground">Roma</span>
                </div>
              </div>
              <div 
                className="aspect-square rounded-lg bg-gradient-to-br from-[#21A4C0]/20 to-[#21A4C0]/40 flex items-center justify-center"
                data-testid="visual-destination-4"
              >
                <div className="text-center p-4">
                  <img src="/assets/cancun.webp" alt="Cancún" className="h-full w-full object-cover rounded-lg" />
                  <span className="text-sm font-medium text-foreground">Cancún</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
