import React from "react";
import { Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Anchor className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-heading text-base font-bold text-background">
                Ocean Dreamer
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-background/50 block">
                Island Tours
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {["Facebook", "YouTube", "Instagram", "Twitter"].map((social) => (
              <span
                key={social}
                className="font-body text-xs text-background/50 hover:text-background transition-colors cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Ocean Dreamer Island Tours. All Rights Reserved. Enjoy Tomorrow Today.
          </p>
        </div>
      </div>
    </footer>
  );
}