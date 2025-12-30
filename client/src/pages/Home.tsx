import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DestinationsSection />
        <TestimonialsSection />
        <WhyUsSection />
        <ContactUsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
