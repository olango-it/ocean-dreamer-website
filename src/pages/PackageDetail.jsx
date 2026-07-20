import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, Clock, Users, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function PackageDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { content } = useSiteContent();
  const pkg = content.packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <p className="font-heading text-2xl text-foreground">Package not found.</p>
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-72 md:h-[420px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Back button */}
        <Link to="/packages" className="absolute top-6 left-6">
          <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full gap-2 font-body">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
        </Link>

        {pkg.featured && (
          <Badge className="absolute top-6 right-6 bg-secondary text-secondary-foreground font-body text-xs px-3 py-1">
            <Star className="w-3 h-3 mr-1" /> Most Popular
          </Badge>
        )}

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-white/80" />
            <span className="font-body text-sm text-white/80">{pkg.subtitle}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
            {pkg.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="md:col-span-2 space-y-10">

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-foreground font-medium">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-foreground font-medium">{pkg.groupSize}</span>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="flex flex-wrap gap-2">
                {pkg.highlights.map((h) => (
                  <span key={h} className="font-body text-xs px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground font-semibold border border-secondary/30">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">About This Tour</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{pkg.description}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{pkg.longDescription}</p>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-5">Itinerary</h2>
              <div className="space-y-0">
                {pkg.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1 flex-shrink-0" />
                      {i < pkg.itinerary.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 my-1" />}
                    </div>
                    <div className="pb-5">
                      <p className="font-body text-xs text-primary font-semibold uppercase tracking-wide mb-0.5">{item.time}</p>
                      <p className="font-body text-sm text-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Includes / Not includes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Not Included</h3>
                <ul className="space-y-2">
                  {pkg.notIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground text-center leading-none">✕</span>
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-muted/50 rounded-2xl p-5 border border-border/50"
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">Good to Know</h3>
              <ul className="space-y-2">
                {pkg.notes.map((note, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar — Book CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <div className="sticky top-6 bg-card rounded-2xl p-6 shadow-md border border-border/50 space-y-5">
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Ready to book?</p>
                <h3 className="font-heading text-xl font-bold text-foreground">Reserve Your Spot</h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Contact us directly to check availability and confirm your booking. We'll take care of the rest!
              </p>

              <Button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-body font-bold rounded-xl py-5 hover:opacity-90"
              >
                Book This Tour
              </Button>

              <div className="border-t border-border/40 pt-4 space-y-3">
                <p className="font-body text-xs font-semibold text-foreground uppercase tracking-wide">Contact Us</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{content.footer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{content.footer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{content.footer.messaging}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}