import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What should I bring on the tour?",
    a: "We recommend bringing sunscreen, a hat, swimwear, a towel, a change of clothes, and a waterproof bag for your valuables. We provide life vests, snorkeling gear, and lunch.",
  },
  {
    q: "How many people can join a tour?",
    a: "Our boat can comfortably accommodate groups of various sizes. We offer private tours as well as shared tours. Contact us for group bookings and special arrangements.",
  },
  {
    q: "Is the tour safe for non-swimmers?",
    a: "Absolutely! Life vests are provided for all guests, and our experienced crew will ensure your safety throughout the entire tour. Shallow areas are available for wading.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Tours may be cancelled due to inclement weather for safety reasons. In such cases, we offer a full reschedule or refund. Please give us at least 24 hours notice for personal cancellations.",
  },
  {
    q: "Where do the tours depart from?",
    a: "All tours depart from our designated meeting point near the Hilton Port in Mactan, Cebu. Exact pickup details will be provided upon booking confirmation.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Questions
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Frequently Asked
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-shadow"
              >
                <AccordionTrigger className="font-body text-sm md:text-base font-semibold text-foreground py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}