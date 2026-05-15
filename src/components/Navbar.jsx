import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg shadow-primary/10" : "bg-white"}`}>
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center group flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/459e2ffef_transparentlogo.png"
              alt="Ocean Dreamer Island Tours"
              className="h-24 md:h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 font-body text-sm font-semibold tracking-wide text-foreground/70 hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary rounded-full group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-body text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left py-3 px-3 rounded-xl font-body text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="block w-full mt-2 py-3 bg-gradient-to-r from-primary to-accent text-white font-body text-sm font-bold rounded-xl text-center"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}