import React from "react";
import { motion } from "framer-motion";

const GALLERY_IMAGE = "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/8c404ae83_generated_9ec08a9d.png";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Memories
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
        >
          <img
            src={GALLERY_IMAGE}
            alt="Gallery of tropical island tour memories - snorkeling, beaches, sunsets"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <p className="font-body text-center text-muted-foreground mt-8 max-w-md mx-auto">
          Create your own unforgettable memories with Ocean Dreamer Island Tours. Every trip is a new adventure.
        </p>
      </div>
    </section>
  );
}