import { Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-solar-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-solar-white" />
              <span className="font-heading font-bold text-xl text-solar-white">
                SolarPro
              </span>
            </a>
            <p className="text-solar-white/70 mb-6 max-w-md">
              Leading the way in residential solar installations. We're
              committed to making clean energy accessible to every homeowner.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-solar-white/10 rounded-lg flex items-center justify-center hover:bg-solar-white/20 transition-colors"
                >
                  <Icon className="h-5 w-5 text-solar-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-solar-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Why Us", "Process", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-solar-white/70 hover:text-solar-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-solar-white mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-solar-white/70">
              <li>(555) 123-4567</li>
              <li>info@solarpro.com</li>
              <li>123 Solar Street</li>
              <li>Phoenix, AZ 85001</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-solar-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-solar-white/60 text-sm">
            © {currentYear} SolarPro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-solar-white/60 text-sm hover:text-solar-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-solar-white/60 text-sm hover:text-solar-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
