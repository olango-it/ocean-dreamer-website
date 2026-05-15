import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Deen_Singapore",
    location: "Singapore",
    date: "Dec 2014",
    rating: 5,
    text: "Where do I start? From the minute my partner and I met Jay outside my hotel to the time we stepped off the boat, we had an amazing time! Apart from the beautiful marine life, Jay and his crew were so warm, funny and entertaining. The food was also amazing — fresh fish, mangoes, rice. Highly recommend!",
  },
  {
    name: "758angel1990",
    location: "Europe",
    date: "Nov 2014",
    rating: 5,
    text: "Jay and the crew were very nice. We had so much fun! If ever you guys plan for an island hopping tour, never hesitate to choose Ocean Dreamer. Very nice people. They offered you everything you needed and made sure you had the best experience.",
  },
  {
    name: "MargaretM_10",
    location: "United States",
    date: "Mar 2020",
    rating: 5,
    text: "Absolutely incredible experience! The snorkeling spots were breathtaking — crystal clear water, vibrant coral, and so many fish. The crew was attentive and friendly the whole time. The beach picnic lunch was a wonderful surprise. This tour was the highlight of our entire Philippines trip!",
  },
  {
    name: "TravellerJo_AU",
    location: "Australia",
    date: "Aug 2019",
    rating: 5,
    text: "Ocean Dreamer exceeded all our expectations. Jay is a fantastic guide who truly cares about his guests. The islands were stunning, the water was perfect, and the whole day felt magical. We will definitely be back next time we visit Cebu!",
  },
  {
    name: "CebuAdventurer",
    location: "United Kingdom",
    date: "Jan 2020",
    rating: 5,
    text: "Best island hopping tour in Cebu, hands down! The crew was super friendly, the food was delicious, and the snorkeling was out of this world. Jay made sure every guest was comfortable and having fun. Don't think twice — just book it!",
  },
  {
    name: "NomadCouple_DE",
    location: "Germany",
    date: "Feb 2019",
    rating: 5,
    text: "We booked Ocean Dreamer on a recommendation and it was the best decision of our trip. Stunning beaches, amazing snorkeling gear provided, and a warm crew who treated us like family. The sunset on the way back was unforgettable.",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
    ))}
  </div>
);

export default function TestimonialsSection() {
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
            TripAdvisor Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-md mx-auto">
            Don't just take our word for it — here's what travelers from around the world say about their Ocean Dreamer experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
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