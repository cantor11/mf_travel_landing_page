import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Destinos", href: "#destinations" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Por qué elegirnos", href: "#why-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="#"
            className="flex items-center text-xl font-bold text-foreground flex-shrink-0"
            data-testid="link-logo"
          >
            <img src="/assets/mf_travel_logo.webp" alt="MF Travel Logo" className="h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild data-testid="button-header-whatsapp">
              <a href="https://api.whatsapp.com/send?phone=573215804855&text=Hola%20%0A1.%20Quiero%20Cotizar%0A2.%20Quisiera%20saber%20m%C3%A1s%20del%20negocio" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 text-left"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <Button asChild className="mt-4" data-testid="button-mobile-whatsapp">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
