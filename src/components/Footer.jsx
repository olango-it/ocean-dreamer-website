import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const socials = [
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
];

const quickLinks = ["About", "Packages", "Gallery", "FAQ", "Contact"];

const scrollTo = (id) => {
  const el = document.querySelector(`#${id.toLowerCase()}`);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/459e2ffef_transparentlogo.png"
              alt="Ocean Dreamer Island Tours"
              className="h-28 w-auto object-contain brightness-0 invert"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Experience the magic of Olango Island and its stunning neighboring islets with the most memorable island-hopping tours in the Philippines.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-body text-sm text-white/60 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-secondary/40 group-hover:bg-secondary group-hover:w-6 transition-all duration-200 rounded-full" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-5 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60 leading-relaxed">Santa Rosa Port, Olango Island, Lapu-Lapu City, Cebu, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">+1 847-909-6598</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">enjoy@ocean-dreamer.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">WhatsApp & Viber: +1 847-909-6598</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Ocean Dreamer Island Tours. All Rights Reserved. <span className="text-secondary/70">Enjoy Tomorrow Today!</span>
          </p>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-xs font-semibold text-white/50 hover:text-secondary transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}