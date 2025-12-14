import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center text-xl font-bold text-foreground" data-testid="link-footer-logo">
              <img src="/assets/mf_travel_logo.webp" alt="MF Travel Logo" className="h-24 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Tu agencia de viajes de confianza.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+57 321 580 4855</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>mftravel2021@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Horario</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Lun - Vie: 8:00 - 21:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Sáb: 9:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Dom: No disponible</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=573215804855&text=Hola%20%0A1.%20Quiero%20Cotizar%0A2.%20Quisiera%20saber%20m%C3%A1s%20del%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mf_.travel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088800170569&mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MF Travel. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            La información proporcionada será utilizada únicamente para contactarte sobre nuestros servicios de viajes.
          </p>
        </div>
      </div>
    </footer>
  );
}
