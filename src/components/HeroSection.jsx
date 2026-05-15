import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/0bf267555_image.png";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Ocean Dreamer tour boat on crystal clear tropical waters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Animated wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/40" />
            <Waves className="w-5 h-5 text-secondary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-white/70">
              Enjoy Tomorrow Today
            </span>
            <Waves className="w-5 h-5 text-secondary" />
            <div className="h-px w-12 bg-white/40" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
            Ocean Dreamer
            <span className="block text-secondary text-3xl md:text-4xl lg:text-5xl mt-2 font-medium">
              Island Tours
            </span>
          </h1>

          <p className="font-body text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Discover the breathtaking beauty of Olango Island and its neighboring islets 
            with an unforgettable island-hopping experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#packages")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold px-8 py-6 text-base rounded-full shadow-xl shadow-secondary/20"
            >
              View Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#about")}
              className="border-white/30 text-white hover:bg-white/10 font-body px-8 py-6 text-base rounded-full backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}