import React from "react";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <div className="w-full bg-yellow-400 text-yellow-900 text-center py-2 px-4 font-body text-sm font-semibold z-50 relative">
        🚧 This website is currently under construction. Some features may not be available yet.
      </div>
      <HeroSection />
      <TestimonialsSection />
    </>
  );
}