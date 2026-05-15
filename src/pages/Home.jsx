import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PackagesSection from "../components/PackagesSection";
import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full bg-yellow-400 text-yellow-900 text-center py-2 px-4 font-body text-sm font-semibold z-50 relative">
        🚧 This website is currently under construction. Some features may not be available yet.
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}