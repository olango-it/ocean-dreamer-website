import { base44 } from "@/api/base44Client";
import {
  Compass, Heart, Users, MapPin, Phone, Mail, MessageCircle,
  Star, Clock, Shield, Sun, Camera, Anchor, Waves, Leaf, Gift, Ship, Cloud,
} from "lucide-react";

// Icon lookup for content that stores icon names as strings.
export const iconMap = {
  Compass, Heart, Users, MapPin, Phone, Mail, MessageCircle,
  Star, Clock, Shield, Sun, Camera, Anchor, Waves, Leaf, Gift, Ship, Cloud,
};

export const getIcon = (name) => iconMap[name] || MapPin;

export const DEFAULT_CONTENT = {
  navbar: {
    logo: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/459e2ffef_transparentlogo.png",
    bookNowLabel: "Book Now",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Packages", href: "#packages" },
      { label: "Gallery", href: "#gallery" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Enjoy Tomorrow Today",
    title: "Ocean Dreamer",
    subtitle: "Island Tours",
    description: "Discover the breathtaking beauty of Olango Island and its neighboring islets with an unforgettable island-hopping experience.",
    image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/0bf267555_image.png",
    primaryButton: "View Packages",
    secondaryButton: "Learn More",
  },
  about: {
    eyebrow: "Discover",
    title: "What is Ocean Dreamer?",
    description: [
      "**Ocean Dreamer Island Tours** is a premier island-hopping and eco-tourism operator based in **Olango Island, Cebu**, offering exceptional travel experiences across **Mactan Island, Olango Island, and the surrounding islets**. We are dedicated to showcasing the region's pristine natural beauty, rich marine biodiversity, vibrant coastal culture, and world-class island destinations.",
      "Our carefully curated tours take guests to stunning white-sand beaches, crystal-clear waters, protected marine sanctuaries, hidden sandbars, vibrant coral reefs, snorkeling and diving sites, and picturesque island communities. Whether you're seeking a relaxing tropical escape, an exciting island-hopping adventure, a private boat tour, or a customized group excursion, our experienced team is committed to providing a safe, comfortable, and unforgettable experience.",
      "At **Ocean Dreamer Island Tours**, we take pride in delivering exceptional customer service, professional tour operations, and authentic local hospitality. We are committed to promoting sustainable tourism by supporting local communities and helping preserve the natural beauty and marine ecosystems that make our islands truly extraordinary.",
      "Discover the breathtaking destinations of **Mactan Island, Olango Island, Nalusuan Island, Hilutungan Island, Caohagan Island, Sulpa Island, Pandanon Island**, and other nearby tropical gems with confidence, comfort, and peace of mind.",
      "**Ocean Dreamer Island Tours – Enjoy Tomorrow Today.**",
    ],
    values: [
      {
        icon: "Compass",
        title: "Our Mission",
        description: "Ocean Dreamer Island Tours aims to provide a fun-filled tour experience of Olango Island and its neighboring islets, creating memories that last a lifetime.",
      },
      {
        icon: "Heart",
        title: "Our Philosophy",
        description: "We're not your typical island-hopping business. Our staff and crew are committed to meeting every guest's expectations. Nothing is more satisfying than the smile of a satisfied customer.",
      },
      {
        icon: "Users",
        title: "Tour Overview",
        description: "Swim with rare tropical fish in crystal-clear waters, relax on white sand beaches, visit popular local destinations, and mingle with the friendly Islahanon people.",
      },
    ],
  },
  packagesSection: {
    eyebrow: "Explore",
    title: "Tour Packages",
    description: "Choose from our carefully curated island tour packages designed to give you an unforgettable experience.",
  },
  packages: [
    {
      slug: "three-island-dreamer",
      title: "Three-Island Dreamer Package",
      subtitle: "3 Islands",
      featured: true,
      image: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/bf494ba18_generated_7522d7ea.png",
      highlights: ["3 Island Stops", "Snorkeling", "Beach BBQ", "Full Day"],
      duration: "Full Day (8–10 hours)",
      groupSize: "Up to 20 guests",
      description: "Experience the ultimate island-hopping adventure visiting three stunning islands with pristine beaches, crystal-clear waters, and vibrant marine life. This is our signature package — the one guests rave about most!",
      longDescription: "Embark on a full-day voyage across three of the most breathtaking islands in the Cebu area. You'll start your morning at the dock in Maribago Port, Olango Island, where you'll be greeted by Jay and his friendly crew. As you cruise through turquoise waters, you'll stop at three handpicked island gems — each offering its own unique charm.",
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
      description: "Explore the beauty of Olango Island with its famous bird sanctuary, white sand beaches, and charming local culture in a relaxing day trip.",
      longDescription: "Olango Island is a hidden gem just off the coast of Mactan. It's one of the most important bird sanctuaries in Southeast Asia and a haven of natural beauty. This tour takes you through the mangroves, along pristine beaches, and into the heart of local Filipino island life. Perfect for nature lovers, bird watchers, and anyone seeking a peaceful escape.",
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
      description: "Swim alongside gentle whale sharks in their natural habitat, then cool off under the majestic cascading waters of Tumalog Falls.",
      longDescription: "This is the adventure of a lifetime! We'll take you south to Oslob, where you'll have an intimate, once-in-a-lifetime encounter with whale sharks — the largest fish in the ocean. These gentle giants are known to gather near the shore, giving you an unforgettable up-close experience. After your swim, we head to the magical Tumalog Falls — a stunning cascade hidden in the jungle that will take your breath away.",
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
  ],
  gallery: {
    eyebrow: "Memories",
    title: "Gallery",
    description: "Real moments from our guests — snorkeling, beaches, and island adventures.",
    photos: [
      { src: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/2a3d5b12e_image.png", alt: "Happy guests jumping on the beach" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/38/0f/24/20180302-133645-largejpg.jpg?w=800&h=600&s=1", alt: "Snorkeling with tropical fish" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b6/e1/78/photo2jpg.jpg?w=800&h=600&s=1", alt: "Crystal clear waters" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1f/05/ab/img-20200309-120304-103.jpg?w=800&h=600&s=1", alt: "Snorkeling adventure" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/11/img-20190818-121909-largejpg.jpg?w=800&h=600&s=1", alt: "Tropical paradise waters" },
      { src: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/3dea061d7_image.png", alt: "Group selfie with guests and crew" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/10/img-20190818-115830-largejpg.jpg?w=900&h=-1&s=1", alt: "Sunset at the beach" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1f/05/ad/img-20200309-wa0000-largejpg.jpg?w=800&h=600&s=1", alt: "Island hopping fun" },
      { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/17/8f/14/img-20190818-134245-largejpg.jpg?w=800&h=600&s=1", alt: "Tropical island scenery" },
      { src: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/3ff5abf90_image.png", alt: "Beach picnic with happy guests" },
      { src: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/cc1e65881_image.png", alt: "Guests and crew on the boat" },
    ],
  },
  testimonials: {
    eyebrow: "TripAdvisor Reviews",
    title: "What Our Guests Say",
    description: "Don't just take our word for it — here's what travelers from around the world say about their Ocean Dreamer experience.",
    items: [
      { name: "Deen_Singapore", location: "Singapore", date: "Dec 2014", rating: 5, text: "Where do I start? From the minute my partner and I met Jay outside my hotel to the time we stepped off the boat, we had an amazing time! Apart from the beautiful marine life, Jay and his crew were so warm, funny and entertaining. The food was also amazing — fresh fish, mangoes, rice. Highly recommend!" },
      { name: "758angel1990", location: "Europe", date: "Nov 2014", rating: 5, text: "Jay and the crew were very nice. We had so much fun! If ever you guys plan for an island hopping tour, never hesitate to choose Ocean Dreamer. Very nice people. They offered you everything you needed and made sure you had the best experience." },
      { name: "MargaretM_10", location: "United States", date: "Mar 2020", rating: 5, text: "Absolutely incredible experience! The snorkeling spots were breathtaking — crystal clear water, vibrant coral, and so many fish. The crew was attentive and friendly the whole time. The beach picnic lunch was a wonderful surprise. This tour was the highlight of our entire Philippines trip!" },
      { name: "TravellerJo_AU", location: "Australia", date: "Aug 2019", rating: 5, text: "Ocean Dreamer exceeded all our expectations. Jay is a fantastic guide who truly cares about his guests. The islands were stunning, the water was perfect, and the whole day felt magical. We will definitely be back next time we visit Cebu!" },
      { name: "CebuAdventurer", location: "United Kingdom", date: "Jan 2020", rating: 5, text: "Best island hopping tour in Cebu, hands down! The crew was super friendly, the food was delicious, and the snorkeling was out of this world. Jay made sure every guest was comfortable and having fun. Don't think twice — just book it!" },
      { name: "NomadCouple_DE", location: "Germany", date: "Feb 2019", rating: 5, text: "We booked Ocean Dreamer on a recommendation and it was the best decision of our trip. Stunning beaches, amazing snorkeling gear provided, and a warm crew who treated us like family. The sunset on the way back was unforgettable." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently Asked",
    items: [
      { q: "What should I bring on the tour?", a: "We recommend bringing sunscreen, a hat, swimwear, a towel, a change of clothes, and a waterproof bag for your valuables. We provide life vests, snorkeling gear, and lunch." },
      { q: "How many people can join a tour?", a: "Our boat can comfortably accommodate groups of various sizes. We offer private tours as well as shared tours. Contact us for group bookings and special arrangements." },
      { q: "Is the tour safe for non-swimmers?", a: "Absolutely! Life vests are provided for all guests, and our experienced crew will ensure your safety throughout the entire tour. Shallow areas are available for wading." },
      { q: "What is the cancellation policy?", a: "Tours may be cancelled due to inclement weather for safety reasons. In such cases, we offer a full reschedule or refund. Please give us at least 24 hours notice for personal cancellations." },
      { q: "Where do the tours depart from?", a: "All tours depart from our designated meeting point near the Hilton Port in Mactan, Cebu. Exact pickup details will be provided upon booking confirmation." },
    ],
  },
  contact: {
    eyebrow: "Reach Out",
    title: "Contact Us",
    intro: "Ready to book your dream island tour? Have questions about our packages? We'd love to hear from you. Reach out through any of the channels below.",
    recipientEmail: "enjoy@ocean-dreamer.com",
    info: [
      { icon: "MapPin", label: "Location", value: "Santa Rosa Port, Olango Island, Lapu-Lapu City, Cebu, Philippines" },
      { icon: "Phone", label: "Phone", value: "+1 847-909-6598" },
      { icon: "Mail", label: "Email", value: "enjoy@ocean-dreamer.com" },
      { icon: "MessageCircle", label: "WhatsApp", value: "+1 847-909-6598" },
      { icon: "MessageCircle", label: "Viber", value: "+1 847-909-6598" },
    ],
  },
  footer: {
    logo: "https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/76b0e6cf7_transparentlogo.png",
    tagline: "Experience the magic of Olango Island and its stunning neighboring islets with the most memorable island-hopping tours in the Philippines.",
    quickLinks: ["About", "Packages", "Gallery", "FAQ", "Contact"],
    location: "Santa Rosa Port, Olango Island, Lapu-Lapu City, Cebu, Philippines",
    phone: "+1 847-909-6598",
    email: "enjoy@ocean-dreamer.com",
    messaging: "WhatsApp & Viber: +1 847-909-6598",
    copyright: "Ocean Dreamer Island Tours. All Rights Reserved.",
    copyrightTagline: "Enjoy Tomorrow Today!",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
};

function mergeDeep(base, override) {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) return override;
  if (base && typeof base === "object" && override && typeof override === "object") {
    const out = { ...base };
    for (const k of Object.keys(override)) {
      out[k] = mergeDeep(base[k], override[k]);
    }
    return out;
  }
  return override;
}

export function mergeContent(stored) {
  return mergeDeep(DEFAULT_CONTENT, stored);
}

export async function loadContent() {
  try {
    const records = await base44.entities.SiteContent.list();
    if (records && records.length > 0) {
      return mergeContent(records[0].data);
    }
    return DEFAULT_CONTENT;
  } catch (e) {
    return DEFAULT_CONTENT;
  }
}

export async function saveContent(data) {
  const records = await base44.entities.SiteContent.list();
  if (records && records.length > 0) {
    return await base44.entities.SiteContent.update(records[0].id, { data });
  }
  return await base44.entities.SiteContent.create({ data });
}