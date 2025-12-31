import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Phoenix, AZ",
    rating: 5,
    text: "SolarPro made the entire process seamless. From the initial consultation to the final installation, their team was professional and knowledgeable. Our energy bills dropped by 80%!",
  },
  {
    name: "Michael Chen",
    location: "San Diego, CA",
    rating: 5,
    text: "I was skeptical at first, but SolarPro exceeded all my expectations. The installation was completed in just one day, and their customer service is top-notch.",
  },
  {
    name: "Emily Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "Best investment we've ever made for our home. The team was incredibly helpful in explaining our options and finding the perfect financing solution for our budget.",
  },
];

const TestimonialsSection = () => {
  return (
<section id="testimonials" className="py-24 bg-solar-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from thousands of satisfied
            homeowners who made the switch to solar with SolarPro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-solar-white rounded-2xl p-8 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
