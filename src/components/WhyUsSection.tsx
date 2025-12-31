import { Check, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Licensed and certified installation experts",
  "Premium tier-1 solar panels only",
  "25-year comprehensive warranty",
  "Same-day emergency support",
  "Zero upfront cost options available",
  "Local team, dedicated service",
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "48hr", label: "Install Time" },
  { icon: Users, value: "15,000+", label: "Happy Customers" },
];

const WhyUsSection = () => {
  return (
<section id="why-us" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              The SolarPro Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just another solar company. We're your neighbors,
              committed to bringing clean energy to our community with
              unmatched service and quality.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="redOnWhite" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-4xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
