import { Home, Building2, ChevronRight, Check, Zap, Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const homeSolarPackages = [
  {
    capacity: "3KW",
    title: "Starter Home Package",
    subtitle: "Perfect for small homes & apartments",
    panels: "8-10 Premium Panels",
    coverage: "1,000-1,200 sq ft",
    production: "~360 kWh/month",
    savings: "Up to $80/month",
    ideal: "Small homes, apartments, low energy usage households",
    price: "$5,999",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=500&fit=crop",
    ],
    features: [
      "8-10 Tier-1 monocrystalline panels (400W each)",
      "3KW string inverter with 10-year warranty",
      "Complete mounting system with weatherproof rails",
      "Professional installation by certified technicians",
      "25-year panel performance warranty",
      "10-year workmanship warranty",
      "Free system monitoring app",
      "Net metering setup assistance",
    ],
    specs: {
      panelType: "Monocrystalline 400W",
      inverter: "3KW String Inverter",
      efficiency: "21.5%",
      warranty: "25 Years",
      installation: "1-2 Days",
      roi: "4-5 Years",
    },
    faq: [
      {
        question: "How much roof space do I need for a 3KW system?",
        answer: "A 3KW system typically requires approximately 150-200 square feet of unshaded roof space. Our team will conduct a free site assessment to determine the optimal placement for maximum energy production."
      },
      {
        question: "What is the expected monthly electricity bill reduction?",
        answer: "With a 3KW system, you can expect to generate around 360 kWh per month, potentially reducing your electricity bill by $60-$100 depending on your local utility rates and energy consumption patterns."
      },
      {
        question: "Is financing available for this package?",
        answer: "Yes! We offer flexible financing options including $0 down payment plans, low-interest loans, and lease-to-own programs. Monthly payments can start as low as $49/month."
      },
      {
        question: "What maintenance is required?",
        answer: "Solar panels require minimal maintenance. We recommend an annual inspection and occasional cleaning. Our monitoring system alerts you to any performance issues automatically."
      },
    ],
  },
  {
    capacity: "5KW",
    title: "Family Home Package",
    subtitle: "Most popular choice for medium homes",
    panels: "13-16 Premium Panels",
    coverage: "1,500-1,800 sq ft",
    production: "~600 kWh/month",
    savings: "Up to $140/month",
    ideal: "Medium-sized homes, families of 3-5",
    price: "$8,999",
    popular: true,
    images: [
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&h=500&fit=crop",
    ],
    features: [
      "13-16 Tier-1 monocrystalline panels (400W each)",
      "5KW hybrid inverter with battery-ready design",
      "Premium mounting system with wind resistance up to 140mph",
      "Professional installation by master electricians",
      "25-year panel performance warranty",
      "12-year workmanship warranty",
      "Advanced monitoring with mobile app",
      "Priority customer support",
      "Free annual maintenance for 2 years",
    ],
    specs: {
      panelType: "Monocrystalline 400W",
      inverter: "5KW Hybrid Inverter",
      efficiency: "22.0%",
      warranty: "25 Years",
      installation: "2-3 Days",
      roi: "3-4 Years",
    },
    faq: [
      {
        question: "Can I add battery storage to this system later?",
        answer: "Absolutely! The 5KW package includes a hybrid inverter that's battery-ready. You can add battery storage at any time without replacing the inverter, making future upgrades seamless and cost-effective."
      },
      {
        question: "How much can I save over 25 years with this system?",
        answer: "Based on average electricity rates and a 3% annual increase, a 5KW system can save you between $35,000-$50,000 over its 25-year lifespan. This doesn't include potential increases in property value."
      },
      {
        question: "What happens during a power outage?",
        answer: "Standard grid-tied systems will shut off during outages for safety. However, if you add a battery backup system, you can maintain power to essential circuits during outages."
      },
      {
        question: "Do I qualify for tax credits?",
        answer: "Most homeowners qualify for the 30% Federal Investment Tax Credit (ITC). For a 5KW system at $8,999, you could receive approximately $2,700 back on your taxes. State and local incentives may also apply."
      },
    ],
  },
  {
    capacity: "10KW",
    title: "Large Home Package",
    subtitle: "Maximum power for high-usage homes",
    panels: "26-32 Premium Panels",
    coverage: "2,500-3,000 sq ft",
    production: "~1,200 kWh/month",
    savings: "Up to $280/month",
    ideal: "Large homes, home offices, EV owners, pool owners",
    price: "$15,999",
    images: [
      "https://images.unsplash.com/photo-1611365892117-00ac6fb4bfef?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&h=500&fit=crop",
    ],
    features: [
      "26-32 Premium monocrystalline panels (400W each)",
      "10KW dual MPPT inverter for optimal performance",
      "Heavy-duty mounting with lifetime warranty",
      "Installation by senior certified professionals",
      "25-year panel performance warranty",
      "15-year workmanship warranty",
      "Premium monitoring with energy analytics",
      "VIP customer support with dedicated account manager",
      "Free maintenance for 5 years",
      "EV charger installation discount",
    ],
    specs: {
      panelType: "Premium Monocrystalline 400W",
      inverter: "10KW Dual MPPT Inverter",
      efficiency: "22.5%",
      warranty: "25 Years",
      installation: "3-4 Days",
      roi: "3-4 Years",
    },
    faq: [
      {
        question: "Is my roof strong enough for 26-32 panels?",
        answer: "Our engineering team conducts a comprehensive structural assessment before installation. Most modern roofs can support solar panels without modifications. If reinforcement is needed, we'll provide a detailed quote."
      },
      {
        question: "Can this system power an electric vehicle?",
        answer: "Yes! A 10KW system produces enough excess energy to charge an EV for approximately 1,000+ miles per month. We also offer discounted EV charger installation with this package."
      },
      {
        question: "What's the difference between string and microinverters?",
        answer: "Our 10KW package uses a high-efficiency string inverter with dual MPPT tracking. For homes with shading issues, we can upgrade to microinverters for optimal panel-level performance at an additional cost."
      },
      {
        question: "How long until I see a return on investment?",
        answer: "With federal tax credits and monthly savings of up to $280, most 10KW system owners see full ROI in 3-4 years. After that, you're essentially generating free electricity for 20+ years."
      },
    ],
  },
];

const industrialSolarPackages = [
  {
    capacity: "50KW",
    title: "Small Business Package",
    subtitle: "Ideal for retail & small offices",
    panels: "130-160 Commercial Panels",
    coverage: "Small commercial buildings",
    production: "~6,000 kWh/month",
    savings: "Up to $1,400/month",
    ideal: "Retail stores, small offices, restaurants",
    price: "From $45,000",
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=500&fit=crop",
    ],
    features: [
      "130-160 Commercial-grade panels (400-500W each)",
      "50KW commercial string inverter system",
      "Industrial mounting with 25-year warranty",
      "Dedicated project manager",
      "25-year panel warranty, 15-year inverter warranty",
      "Commercial monitoring with demand analysis",
      "Peak shaving optimization",
      "Utility interconnection handling",
      "Accelerated depreciation benefits consultation",
    ],
    specs: {
      panelType: "Commercial 450W Bifacial",
      inverter: "50KW String Inverter Array",
      efficiency: "23%",
      warranty: "25 Years",
      installation: "1-2 Weeks",
      roi: "4-5 Years",
    },
    faq: [
      {
        question: "What commercial tax benefits are available?",
        answer: "Commercial solar qualifies for the 30% Federal ITC, plus accelerated depreciation (MACRS) allowing you to depreciate 85% of the system over 5 years. This can result in tax benefits exceeding 50% of the system cost."
      },
      {
        question: "Can solar reduce my commercial demand charges?",
        answer: "Yes! Our systems include peak shaving optimization to reduce demand charges. Combined with battery storage, you can significantly reduce or eliminate demand charges that often make up 30-50% of commercial bills."
      },
      {
        question: "How will installation affect my business operations?",
        answer: "We schedule installations to minimize disruption. Most work is done on the roof and doesn't affect interior operations. Electrical connections are typically completed outside business hours."
      },
      {
        question: "What about commercial PPAs and leasing options?",
        answer: "We offer Power Purchase Agreements (PPAs) with $0 upfront cost, commercial leases, and traditional financing. PPAs allow you to buy solar electricity at a fixed rate lower than utility prices."
      },
    ],
  },
  {
    capacity: "100KW",
    title: "Medium Enterprise Package",
    subtitle: "Powerful solution for growing businesses",
    panels: "260-320 Commercial Panels",
    coverage: "Medium industrial units",
    production: "~12,000 kWh/month",
    savings: "Up to $2,800/month",
    ideal: "Warehouses, manufacturing facilities, large offices",
    price: "From $85,000",
    popular: true,
    images: [
      "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
    ],
    features: [
      "260-320 High-efficiency commercial panels",
      "100KW central inverter with 98%+ efficiency",
      "Heavy-duty industrial mounting system",
      "Full project engineering and permitting",
      "25-year comprehensive warranty",
      "Advanced SCADA monitoring system",
      "Load management and energy arbitrage",
      "Carbon credit consultation",
      "Dedicated maintenance team",
      "24/7 emergency support",
    ],
    specs: {
      panelType: "Commercial 500W Bifacial",
      inverter: "100KW Central Inverter",
      efficiency: "23.5%",
      warranty: "25 Years",
      installation: "2-3 Weeks",
      roi: "3-4 Years",
    },
    faq: [
      {
        question: "Can this system integrate with our existing energy management?",
        answer: "Yes! Our SCADA monitoring system integrates with most building management systems (BMS). We provide API access for custom integrations and can work with your IT team for seamless implementation."
      },
      {
        question: "What happens if panels are damaged or underperform?",
        answer: "Our 25-year warranty covers both parts and labor. We continuously monitor system performance and proactively address any issues. Our 24/7 support ensures minimal downtime for your operations."
      },
      {
        question: "How do you handle permitting for large commercial systems?",
        answer: "Our team manages the entire permitting process, including structural engineering, electrical plans, utility interconnection applications, and all local permits. This is included in our project management service."
      },
      {
        question: "Can we expand the system in the future?",
        answer: "Absolutely! We design systems with future expansion in mind. The infrastructure can typically accommodate 25-50% additional capacity. We'll document expansion options in your initial proposal."
      },
    ],
  },
  {
    capacity: "500KW",
    title: "Industrial Powerhouse",
    subtitle: "Maximum power for large operations",
    panels: "1,300-1,600 Industrial Panels",
    coverage: "Large industrial complexes",
    production: "~60,000 kWh/month",
    savings: "Up to $14,000/month",
    ideal: "Manufacturing plants, data centers, distribution hubs",
    price: "From $400,000",
    images: [
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
    ],
    features: [
      "1,300-1,600 Premium industrial panels",
      "500KW utility-scale inverter system",
      "Custom-engineered mounting solution",
      "Complete turn-key project delivery",
      "30-year performance guarantee",
      "Enterprise SCADA with AI optimization",
      "Grid services and demand response ready",
      "Carbon offset certification",
      "Dedicated account team",
      "Preventive maintenance program",
      "Insurance and liability support",
    ],
    specs: {
      panelType: "Industrial 550W Bifacial",
      inverter: "500KW Utility-Scale System",
      efficiency: "24%",
      warranty: "30 Years",
      installation: "4-8 Weeks",
      roi: "3-4 Years",
    },
    faq: [
      {
        question: "What financing options exist for large industrial systems?",
        answer: "We offer multiple structures: direct purchase, commercial loans, sale-leaseback arrangements, PPAs, and even third-party ownership models. Our finance team will model different scenarios to find the optimal structure for your business."
      },
      {
        question: "How do you ensure minimal operational disruption during installation?",
        answer: "We create detailed phased installation plans coordinated with your operations team. Critical connections are scheduled during planned shutdowns or off-hours. We maintain safety protocols that meet or exceed OSHA requirements."
      },
      {
        question: "What environmental certifications can we obtain?",
        answer: "Your installation qualifies for Renewable Energy Certificates (RECs), carbon credits, and supports LEED certification. We provide documentation for ESG reporting and can help with sustainability goal verification."
      },
      {
        question: "What's the maintenance requirement for a system this size?",
        answer: "We include a comprehensive preventive maintenance program: quarterly inspections, annual deep cleaning, thermal imaging, and performance optimization. Our remote monitoring detects issues before they impact production."
      },
    ],
  },
];

const ServiceCard = ({ 
  pkg, 
  type 
}: { 
  pkg: typeof homeSolarPackages[0]; 
  type: "residential" | "industrial" 
}) => {
  return (
    <div className={`w-full rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
      pkg.popular 
        ? "border-primary shadow-2xl shadow-primary/20" 
        : "border-border hover:border-primary/30 hover:shadow-xl"
    }`}>
      {pkg.popular && (
        <div className="bg-primary text-primary-foreground text-center py-3 font-heading font-bold text-sm uppercase tracking-wider">
          {type === "residential" ? "Most Popular Choice" : "Best Value for Business"}
        </div>
      )}
      
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Carousel Section */}
        <div className="relative bg-muted/30 p-6 lg:p-8">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {pkg.images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${pkg.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background/80 hover:bg-background border-0" />
            <CarouselNext className="right-2 bg-background/80 hover:bg-background border-0" />
          </Carousel>
          
          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: Zap, label: "Efficiency", value: pkg.specs.efficiency },
              { icon: Clock, label: "Install Time", value: pkg.specs.installation },
              { icon: Shield, label: "Warranty", value: pkg.specs.warranty },
            ].map((spec) => (
              <div key={spec.label} className="text-center p-3 bg-background rounded-xl border border-border">
                <spec.icon className="h-5 w-5 mx-auto text-primary mb-2" />
                <div className="text-xs text-muted-foreground">{spec.label}</div>
                <div className="font-semibold text-foreground text-sm">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 lg:p-8 bg-card">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-heading font-black text-4xl lg:text-5xl text-primary">
                {pkg.capacity}
              </span>
              <span className="text-muted-foreground font-medium">System</span>
            </div>
            <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-2">
              {pkg.title}
            </h3>
            <p className="text-muted-foreground">{pkg.subtitle}</p>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="text-sm text-muted-foreground mb-1">Monthly Production</div>
              <div className="font-heading font-bold text-lg text-foreground">{pkg.production}</div>
            </div>
            <div className="p-4 bg-primary/10 rounded-xl">
              <div className="text-sm text-muted-foreground mb-1">Monthly Savings</div>
              <div className="font-heading font-bold text-lg text-primary">{pkg.savings}</div>
            </div>
          </div>
          
          {/* Accordion for Details */}
          <Accordion type="single" collapsible className="w-full mb-6">
            <AccordionItem value="features" className="border-border">
              <AccordionTrigger className="text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-2 font-semibold">
                  <Check className="h-4 w-4 text-primary" />
                  What's Included
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="specs" className="border-border">
              <AccordionTrigger className="text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-2 font-semibold">
                  <Zap className="h-4 w-4 text-primary" />
                  Technical Specifications
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pkg.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-medium text-foreground text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq" className="border-border">
              <AccordionTrigger className="text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-2 font-semibold">
                  <Wrench className="h-4 w-4 text-primary" />
                  Common Questions
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <Accordion type="single" collapsible className="w-full">
                  {pkg.faq.map((item, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/50">
                      <AccordionTrigger className="text-sm text-foreground hover:no-underline py-3">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border">
            <div className="text-center sm:text-left">
              <div className="font-heading font-black text-3xl text-foreground">{pkg.price}</div>
              <div className="text-sm text-muted-foreground">
                {type === "residential" ? "Starting price before incentives" : "Contact for custom quote"}
              </div>
            </div>
            <Button 
              variant={pkg.popular ? "redOnWhite" : "outline"} 
              size="lg" 
              className="sm:ml-auto w-full sm:w-auto"
            >
              Get Free Quote
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Complete Solar Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential rooftops to large-scale industrial installations,
            we provide end-to-end solar services tailored to your unique needs.
          </p>
        </div>

        {/* Home Solar Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
                Residential Solar
              </h3>
              <p className="text-muted-foreground text-lg">
                Perfect solutions for your home
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {homeSolarPackages.map((pkg) => (
              <ServiceCard key={pkg.capacity} pkg={pkg} type="residential" />
            ))}
          </div>
        </div>

        {/* Industrial Solar Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
                Industrial & Commercial Solar
              </h3>
              <p className="text-muted-foreground text-lg">
                Scalable power for your business
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {industrialSolarPackages.map((pkg) => (
              <ServiceCard key={pkg.capacity} pkg={pkg} type="industrial" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
