import { MapPin, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sunset Valley Residence",
    type: "Residential",
    capacity: "10KW",
    location: "Phoenix, AZ",
    year: "2024",
    savings: "$3,200/year",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    title: "Metro Industrial Complex",
    type: "Commercial",
    capacity: "250KW",
    location: "San Diego, CA",
    year: "2024",
    savings: "$45,000/year",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
  },
  {
    title: "Green Valley Solar Farm",
    type: "Solar Park",
    capacity: "5MW",
    location: "Tucson, AZ",
    year: "2023",
    savings: "$850,000/year",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
  },
  {
    title: "Oceanview Apartments",
    type: "Multi-Family",
    capacity: "75KW",
    location: "Los Angeles, CA",
    year: "2024",
    savings: "$18,000/year",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
  },
  {
    title: "TechHub Office Park",
    type: "Commercial",
    capacity: "150KW",
    location: "Austin, TX",
    year: "2023",
    savings: "$32,000/year",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
  },
  {
    title: "Desert Sun Energy Park",
    type: "Solar Park",
    capacity: "20MW",
    location: "Nevada",
    year: "2023",
    savings: "$3.2M/year",
    image: "https://images.unsplash.com/photo-1509391111050-d37818ee7d4c?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of successful solar installations,
            from cozy homes to expansive solar farms generating megawatts of clean energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-solar-white/90 text-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {project.capacity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    Completed {project.year}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-heading font-semibold text-primary">
                      {project.savings}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">saved</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
