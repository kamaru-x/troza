import { Battery, Wrench, Shield, Gauge, Plug, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Battery,
    title: "Battery Storage Systems",
    description: "Tesla Powerwall and other premium battery solutions for 24/7 energy independence. Store excess solar energy for nighttime use or emergencies.",
    features: ["5-13.5 kWh capacity options", "Seamless backup power", "Smart energy management"],
  },
  {
    icon: Plug,
    title: "EV Charging Stations",
    description: "Integrate electric vehicle charging with your solar system. Power your car with free, clean energy from your roof.",
    features: ["Level 2 & DC fast charging", "Smart scheduling", "Solar-optimized charging"],
  },
  {
    icon: Gauge,
    title: "System Monitoring",
    description: "Real-time monitoring through our app shows exactly how much energy you produce, use, and save every day.",
    features: ["Mobile app access", "Production alerts", "Performance analytics"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Keep your system running at peak efficiency with our professional maintenance services and rapid repair response.",
    features: ["Annual inspections", "Panel cleaning", "24/7 emergency support"],
  },
  {
    icon: Shield,
    title: "Extended Warranties",
    description: "Peace of mind with comprehensive coverage. Our warranties protect your investment for decades to come.",
    features: ["25-year panel warranty", "12-year inverter coverage", "Workmanship guarantee"],
  },
  {
    icon: HeadphonesIcon,
    title: "Consultation Services",
    description: "Expert guidance on solar feasibility, ROI calculations, financing options, and system optimization.",
    features: ["Free site assessment", "Custom system design", "Financing guidance"],
  },
];

const AdditionalServicesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Complete Solutions
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Additional Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond installation, we offer a complete ecosystem of services to
            maximize your solar investment and ensure long-term performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
