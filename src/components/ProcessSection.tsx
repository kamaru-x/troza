import { ClipboardList, Home, Hammer, Zap } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a free consultation where our experts assess your property and energy needs.",
  },
  {
    icon: Home,
    step: "02",
    title: "Custom Design",
    description:
      "We create a custom solar system design optimized for your roof and energy consumption.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Professional Installation",
    description:
      "Our certified team installs your system quickly and efficiently, typically in 1-2 days.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Power On",
    description:
      "Once approved by your utility, flip the switch and start generating clean energy!",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Simple Steps to Solar
          </h2>
          <p className="text-muted-foreground text-lg">
            Going solar has never been easier. Our streamlined process takes the
            complexity out of switching to clean energy.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10">
                    <span className="font-heading font-bold text-solar-white">
                      {item.step}
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-solar-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
