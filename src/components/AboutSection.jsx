import React from "react";
import { motion } from "framer-motion";
import { Compass, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "Ocean Dreamer Island Tours aims to provide a fun-filled tour experience of Olango Island and its neighboring islets, creating memories that last a lifetime.",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    description:
      "We're not your typical island-hopping business. Our staff and crew are committed to meeting every guest's expectations. Nothing is more satisfying than the smile of a satisfied customer.",
  },
  {
    icon: Users,
    title: "Tour Overview",
    description:
      "Swim with rare tropical fish in crystal-clear waters, relax on white sand beaches, visit popular local destinations, and mingle with the friendly Islahanon people.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Discover
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What is Ocean Dreamer?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}