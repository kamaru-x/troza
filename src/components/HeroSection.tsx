import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
<section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/hero-solar.jpg')` }}
      />
      <div className="absolute inset-0 bg-solar-dark/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-solar-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up">
            <Zap className="h-4 w-4 text-solar-white" />
            <span className="text-solar-white/90 text-sm font-medium">
              #1 Rated Solar Installation Company
            </span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-solar-white leading-tight mb-8 animate-fade-up animation-delay-200">
            Power Your Home with{" "}
            <span className="relative">
              Clean Energy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-solar-white/50"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-solar-white/85 mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-400">
            Transform your home into a sustainable powerhouse. Our expert team
            delivers premium solar installations with industry-leading
            warranties and exceptional savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600 mb-20">
            <Button variant="hero" size="xl" className="group">
              Get Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats in Rounded Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "15K+", label: "Installations Completed" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "25yr", label: "Warranty Coverage" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-solar-white/10 backdrop-blur-sm rounded-2xl p-6 border border-solar-white/20 hover:bg-solar-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-solar-white mb-2">
                  {stat.value}
                </div>
                <div className="text-solar-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
