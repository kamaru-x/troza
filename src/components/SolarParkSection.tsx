import { Sun, Leaf, TrendingUp, MapPin, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const solarParkFeatures = [
  {
    icon: Sun,
    title: "Utility-Scale Projects",
    description: "From 1MW to 100MW+ installations for energy companies and large corporations.",
  },
  {
    icon: MapPin,
    title: "Land Assessment",
    description: "Complete site analysis including solar irradiance mapping and terrain evaluation.",
  },
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Average 15-20% annual returns with government incentives and feed-in tariffs.",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Each 1MW installation prevents 1,500 tons of CO2 emissions annually.",
  },
  {
    icon: Zap,
    title: "Grid Integration",
    description: "Seamless connection to power grids with advanced inverter technology.",
  },
  {
    icon: Users,
    title: "Community Solar",
    description: "Enable local communities to benefit from shared solar installations.",
  },
];

const parkStats = [
  { value: "500MW+", label: "Total Capacity Installed" },
  { value: "25+", label: "Solar Parks Developed" },
  { value: "750K", label: "Tons CO2 Prevented" },
  { value: "100K+", label: "Homes Powered" },
];

const SolarParkSection = () => {
  return (
<section id="solar-park" className="py-24 bg-solar-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Large Scale Solutions
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Solar Park Development
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Partner with us for utility-scale solar farm development. We handle
              everything from land acquisition and permitting to construction and
              grid connection, delivering turnkey solar parks that generate
              substantial clean energy and returns.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {parkStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-primary/10 rounded-xl p-5 text-center border border-primary/20"
                >
                  <div className="font-heading font-bold text-2xl md:text-3xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="redOnWhite" size="lg">
              Discuss Your Project
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {solarParkFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarParkSection;
