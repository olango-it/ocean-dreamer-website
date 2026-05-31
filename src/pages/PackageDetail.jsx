import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, Clock, Users, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";

const packages = [
  {
    slug: "three-island-dreamer",
    title: "Three-Island Dreamer Package",
    subtitle: "3 Islands",
    featured: true,
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/bf494ba18_generated_7522d7ea.png",
    highlights: ["3 Island Stops", "Snorkeling", "Beach BBQ", "Full Day"],
    duration: "Full Day (8–10 hours)",
    groupSize: "Up to 20 guests",
    description:
      "Experience the ultimate island-hopping adventure visiting three stunning islands with pristine beaches, crystal-clear waters, and vibrant marine life. This is our signature package — the one guests rave about most!",
    longDescription:
      "Embark on a full-day voyage across three of the most breathtaking islands in the Cebu area. You'll start your morning at the dock in Maribago Port, Olango Island, where you'll be greeted by Jay and his friendly crew. As you cruise through turquoise waters, you'll stop at three handpicked island gems — each offering its own unique charm.",
    itinerary: [
      { time: "8:00 AM", activity: "Meet at Maribago Port, Olango Island — welcome briefing & safety orientation" },
      { time: "8:30 AM", activity: "Set sail to Island #1 — snorkeling in vibrant coral reef waters" },
      { time: "10:30 AM", activity: "Cruise to Island #2 — white sand beach relaxation & swimming" },
      { time: "12:30 PM", activity: "Beach BBQ lunch served on the island — fresh fish, rice, tropical fruits" },
      { time: "2:00 PM", activity: "Journey to Island #3 — explore the beach and take in the stunning scenery" },
      { time: "4:00 PM", activity: "Sunset cruise back to port — photos, music, and celebration!" },
      { time: "5:30 PM", activity: "Arrive back at Maribago Port" },
    ],
    includes: [
      "Boat transportation throughout the day",
      "Snorkeling equipment (mask, fins, life vest)",
      "Beach BBQ lunch with fresh fish & sides",
      "Tropical fruits & refreshments",
      "Friendly, experienced local crew",
      "Life jackets and safety equipment",
    ],
    notIncludes: [
      "Hotel transfers (can be arranged separately)",
      "Personal expenses & souvenirs",
      "Travel insurance",
    ],
    notes: [
      "Tour subject to weather conditions",
      "Suitable for all ages including children",
      "Bring sunscreen, swimwear, and a towel",
      "Non-swimmers are welcome — life vests provided",
    ],
  },
  {
    slug: "olango-island-day-tour",
    title: "Olango Island Day Tour",
    subtitle: "1 Island",
    featured: false,
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/fe65d6a6a_generated_f2a41034.png",
    highlights: ["Bird Sanctuary", "Beach Time", "Local Culture", "Half Day"],
    duration: "Half Day (4–5 hours)",
    groupSize: "Up to 15 guests",
    description:
      "Explore the beauty of Olango Island with its famous bird sanctuary, white sand beaches, and charming local culture in a relaxing day trip.",
    longDescription:
      "Olango Island is a hidden gem just off the coast of Mactan. It's one of the most important bird sanctuaries in Southeast Asia and a haven of natural beauty. This tour takes you through the mangroves, along pristine beaches, and into the heart of local Filipino island life. Perfect for nature lovers, bird watchers, and anyone seeking a peaceful escape.",
    itinerary: [
      { time: "8:00 AM", activity: "Depart from Maribago Port — scenic boat ride to Olango" },
      { time: "8:30 AM", activity: "Visit the Olango Island Wildlife Sanctuary — guided bird watching tour" },
      { time: "10:00 AM", activity: "Walk through traditional fishing village — meet the local community" },
      { time: "11:00 AM", activity: "Relax on a white sand beach — swimming & leisure time" },
      { time: "12:00 PM", activity: "Fresh seafood snack by the beach" },
      { time: "1:00 PM", activity: "Return cruise back to port" },
    ],
    includes: [
      "Boat transportation to and from Olango",
      "Guided bird sanctuary tour",
      "Snorkeling gear (optional use)",
      "Light refreshments & fresh seafood snack",
      "Life jackets and safety equipment",
    ],
    notIncludes: [
      "Full lunch (snack only — lunch can be arranged at extra cost)",
      "Hotel transfers",
      "Personal expenses",
    ],
    notes: [
      "Best for bird watchers & nature lovers",
      "Bring binoculars if you have them!",
      "Comfortable walking shoes recommended",
      "Suitable for families and senior guests",
    ],
  },
  {
    slug: "whale-sharks-tumalog-falls",
    title: "Whale Sharks & Tumalog Falls",
    subtitle: "Adventure",
    featured: false,
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/d7e7c6c48_generated_ade5e2a3.png",
    highlights: ["Whale Sharks", "Tumalog Falls", "Guided Tour", "Full Day"],
    duration: "Full Day (10–12 hours)",
    groupSize: "Up to 12 guests",
    description:
      "Swim alongside gentle whale sharks in their natural habitat, then cool off under the majestic cascading waters of Tumalog Falls.",
    longDescription:
      "This is the adventure of a lifetime! We'll take you south to Oslob, where you'll have an intimate, once-in-a-lifetime encounter with whale sharks — the largest fish in the ocean. These gentle giants are known to gather near the shore, giving you an unforgettable up-close experience. After your swim, we head to the magical Tumalog Falls — a stunning cascade hidden in the jungle that will take your breath away.",
    itinerary: [
      { time: "5:30 AM", activity: "Early departure from Maribago Port — drive south to Oslob (approx. 3 hrs)" },
      { time: "8:30 AM", activity: "Arrival at Oslob Whale Shark Watching — safety briefing & rules" },
      { time: "9:00 AM", activity: "Swim & snorkel with whale sharks in their natural habitat!" },
      { time: "10:30 AM", activity: "Drive to Tumalog Falls (15 minutes away)" },
      { time: "11:00 AM", activity: "Explore and swim under the breathtaking Tumalog Falls" },
      { time: "12:30 PM", activity: "Lunch at a local restaurant near Oslob" },
      { time: "2:00 PM", activity: "Depart for return journey north" },
      { time: "5:00 PM", activity: "Arrive back at Olango / Mactan area" },
    ],
    includes: [
      "Private van transport (round trip)",
      "Whale shark watching & snorkeling fees",
      "Tumalog Falls entrance fee",
      "Life jackets and snorkeling equipment",
      "Lunch at a local restaurant",
      "Experienced tour guide throughout",
    ],
    notIncludes: [
      "Hotel pick-up/drop-off (can be arranged)",
      "Underwater camera rental",
      "Personal expenses & souvenirs",
      "Travel insurance",
    ],
    notes: [
      "Early departure required for whale shark encounter",
      "Guests must follow strict whale shark interaction rules (no sunscreen, no touching)",
      "Not recommended for guests with mobility issues (waterfall trail is uneven)",
      "Minimum age: 5 years for whale shark swimming",
    ],
  },
];

export default function PackageDetail() {
  const { slug } = useParams();
  const pkg = packages.find((p) => p.slug === slug);

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
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-72 md:h-[420px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Back button */}
        <Link to="/" className="absolute top-6 left-6">
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
                  <span className="font-body text-sm text-foreground">+1 847-909-6598</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">enjoy@ocean-dreamer.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">WhatsApp & Viber</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}