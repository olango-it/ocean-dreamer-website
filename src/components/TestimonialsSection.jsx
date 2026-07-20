import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const { content } = useSiteContent();
  const section = content.testimonials;

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-muted/40">
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
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-md mx-auto">
            {section.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex flex-col gap-4"
            >
              <Stars count={t.rating} />
              <p className="font-body text-sm text-foreground/80 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-body text-sm font-bold text-primary">
                    {t.name[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location} · {t.date}</p>
                </div>
                <div className="ml-auto">
                  <span className="font-body text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">TripAdvisor</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}