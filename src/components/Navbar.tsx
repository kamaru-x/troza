import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#solar-park", label: "Solar Parks" },
    { href: "#projects", label: "Projects" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-solar-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Sun className="h-8 w-8 text-solar-white" />
            <span className="font-heading font-bold text-xl text-solar-white">
              Troza
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-solar-white/90 hover:text-solar-white font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-solar-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-solar-white/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-solar-white/90 hover:text-solar-white font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-4 w-full">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
