import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Santa Rosa Port, Olango Island, Lapu-Lapu City, Cebu, Philippines" },
  { icon: Phone, label: "Phone", value: "+1 847-909-6598" },
  { icon: Mail, label: "Email", value: "enjoy@ocean-dreamer.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 847-909-6598" },
  { icon: MessageCircle, label: "Viber", value: "+1 847-909-6598" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Reach Out
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Get in Touch
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Ready to book your dream island tour? Have questions about our packages? 
                We'd love to hear from you. Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-body text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-body text-xs font-medium">Name</Label>
                  <Input placeholder="Your name" className="font-body rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-xs font-medium">Email</Label>
                  <Input type="email" placeholder="you@email.com" className="font-body rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-body text-xs font-medium">Subject</Label>
                <Input placeholder="Tour inquiry" className="font-body rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label className="font-body text-xs font-medium">Message</Label>
                <Textarea
                  placeholder="Tell us about your dream tour..."
                  className="font-body rounded-xl min-h-[120px] resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-xl py-6">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}