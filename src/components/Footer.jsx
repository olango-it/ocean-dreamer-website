import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const scrollTo = (id) => {
  const el = document.querySelector(`#${id.toLowerCase()}`);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const { content } = useSiteContent();
  const footer = content.footer;

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-4">
            <img
              src={footer.logo}
              alt="Ocean Dreamer Island Tours"
              className="h-28 w-auto object-contain"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
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
                <span className="font-body text-sm text-white/60 leading-relaxed">{footer.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">{footer.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">{footer.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-body text-sm text-white/60">{footer.messaging}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {footer.copyright} <span className="text-secondary/70">{footer.copyrightTagline}</span>
          </p>
          <div className="flex items-center gap-6">
            {footer.socials.map((s) => (
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