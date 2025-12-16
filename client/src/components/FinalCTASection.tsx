import { Button } from "@/components/ui/button";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0043A5]/70 to-[#0043A5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
          ¿Listo para tu próximo viaje?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8" data-testid="text-cta-description">
          Estamos aquí para ayudarte a planificar la aventura de tus sueños.
          Contáctanos hoy y empieza a hacer realidad ese viaje que siempre has soñado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#0043A5] border-white hover:bg-white/90"
            asChild
            data-testid="button-cta-whatsapp"
          >
            <a href="https://api.whatsapp.com/send?phone=573215804855&text=Hola%20%0A1.%20Quiero%20Cotizar%0A2.%20Quisiera%20saber%20m%C3%A1s%20del%20negocio" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white/10"
            asChild
            data-testid="button-cta-instagram"
          >
            <a href="https://www.instagram.com/mf_.travel/" target="_blank" rel="noopener noreferrer">
              <SiInstagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </Button>
          <Button size="lg"
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white/10"
            asChild data-testid="button-hero-facebook">
            <a href="https://www.facebook.com/profile.php?id=100088800170569&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <SiFacebook className="mr-2 h-5 w-5" />
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
