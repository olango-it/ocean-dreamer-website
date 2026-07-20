import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function PackagesSection() {
  const { content } = useSiteContent();
  const section = content.packagesSection;
  const packages = content.packages;

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
            {section.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {section.title}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="font-body text-muted-foreground mt-6 max-w-lg mx-auto">
            {section.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
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

                <Link to={`/packages/${pkg.slug}`}>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-xl group/btn"
                  >
                    More Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}