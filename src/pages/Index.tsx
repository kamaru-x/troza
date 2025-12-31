import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolarParkSection from "@/components/SolarParkSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SolarParkSection />
      <ProjectsSection />
      <AdditionalServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
