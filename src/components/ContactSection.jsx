import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Santa Rosa Port, Olango Island, Lapu-Lapu City, Cebu, Philippines" },
  { icon: Phone, label: "Phone", value: "+1 847-909-6598" },
  { icon: Mail, label: "Email", value: "enjoy@ocean-dreamer.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 847-909-6598" },
  { icon: MessageCircle, label: "Viber", value: "+1 847-909-6598" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Tour inquiry", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "enjoy@ocean-dreamer.com",
      subject: `[Ocean Dreamer] ${form.subject}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "Tour inquiry", message: "" });
  };

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
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="font-body text-sm text-muted-foreground">We'll get back to you at {form.email || "your email"} soon.</p>
                <button onClick={() => setSent(false)} className="mt-6 font-body text-xs text-primary underline">Send another message</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-body text-xs font-medium">Name</Label>
                    <Input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="font-body rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-xs font-medium">Email</Label>
                    <Input required type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="font-body rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-xs font-medium">Subject</Label>
                  <Input placeholder="Tour inquiry" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="font-body rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-xs font-medium">Message</Label>
                  <Textarea
                    required
                    placeholder="Tell us about your dream tour..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="font-body rounded-xl min-h-[120px] resize-none"
                  />
                </div>
                <Button disabled={sending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-xl py-6">
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}