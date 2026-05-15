import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    title: "Three-Island Dreamer Package",
    subtitle: "3 Islands",
    description:
      "Experience the ultimate island-hopping adventure visiting three stunning islands with pristine beaches, crystal-clear waters, and vibrant marine life.",
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/bf494ba18_generated_7522d7ea.png",
    featured: true,
    highlights: ["3 Island Stops", "Snorkeling", "Beach BBQ", "Full Day"],
  },
  {
    title: "Olango Island Day Tour",
    subtitle: "1 Island",
    description:
      "Explore the beauty of Olango Island with its famous bird sanctuary, white sand beaches, and charming local culture in a relaxing day trip.",
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/fe65d6a6a_generated_f2a41034.png",
    featured: false,
    highlights: ["Bird Sanctuary", "Beach Time", "Local Culture", "Half Day"],
  },
  {
    title: "Whale Sharks & Tumalog Falls",
    subtitle: "Adventure",
    description:
      "Swim alongside gentle whale sharks in their natural habitat, then cool off under the majestic cascading waters of Tumalog Falls.",
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/d7e7c6c48_generated_ade5e2a3.png",
    featured: false,
    highlights: ["Whale Sharks", "Tumalog Falls", "Guided Tour", "Full Day"],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 md:py-32 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Explore
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Tour Packages
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="font-body text-muted-foreground mt-6 max-w-lg mx-auto">
            Choose from our carefully curated island tour packages designed to give you an unforgettable experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-border/50 hover:border-primary/20 ${
                pkg.featured ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {pkg.featured && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-body text-xs px-3 py-1">
                    <Star className="w-3 h-3 mr-1" /> Most Popular
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="font-body text-sm text-white/90 font-medium">{pkg.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight">
                  {pkg.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-body text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-xl group/btn"
                >
                  More Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}