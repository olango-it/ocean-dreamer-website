import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  {
    src: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/2a3d5b12e_image.png",
    alt: "Happy guests jumping on the beach",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/38/0f/24/20180302-133645-largejpg.jpg?w=800&h=600&s=1",
    alt: "Snorkeling with tropical fish",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b6/e1/78/photo2jpg.jpg?w=800&h=600&s=1",
    alt: "Crystal clear waters",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1f/05/ab/img-20200309-120304-103.jpg?w=800&h=600&s=1",
    alt: "Snorkeling adventure",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/11/img-20190818-121909-largejpg.jpg?w=800&h=600&s=1",
    alt: "Tropical paradise waters",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/0f/img-20190818-102317-largejpg.jpg?w=700&h=600&s=1",
    alt: "Morning island adventure",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/10/img-20190818-115830-largejpg.jpg?w=900&h=-1&s=1",
    alt: "Sunset at the beach",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1f/05/ad/img-20200309-wa0000-largejpg.jpg?w=800&h=600&s=1",
    alt: "Island hopping fun",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/df/c2/6f/img-20160905-wa0016-largejpg.jpg?w=800&h=600&s=1",
    alt: "White sand beach",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

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
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-md mx-auto">
            Real moments from our guests — snorkeling, beaches, and island adventures.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`overflow-hidden rounded-2xl cursor-pointer group relative ${i === 0 ? "col-span-2 md:col-span-2 row-span-1" : ""}`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${i === 0 ? "h-64 md:h-80" : "h-48 md:h-56"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-white text-xs font-medium">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                onClick={() => setSelected(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}