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