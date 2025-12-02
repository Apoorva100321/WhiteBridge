"use client";

import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Fixed Video Background - Stays put while scrolling */}
      <div className="fixed top-0 left-0 right-0 w-full h-[100vh] -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ height: "100%", width: "100%", objectPosition: "center 65%" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Section - Content scrolls over the video */}
      <section className="relative min-h-[100vh] flex items-center z-10 pb-0">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-AccentColor-0 opacity-60 hidden lg:block"></div>
        <div className="absolute right-8 top-1/4 w-2 h-2 bg-AccentColor-0 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute right-16 top-3/4 w-1.5 h-1.5 bg-SecondaryColor-0 rounded-full opacity-50"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl mb-0">
            {/* Subtitle/Accent Line */}
            <div className={`flex items-center gap-3 mb-4 transition-opacity duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="w-12 h-0.5 bg-AccentColor-0"></div>
              <span className="text-AccentColor-0 text-sm font-medium uppercase tracking-wider">Global Education Partners</span>
            </div>

            {/* Heading with Creative Styling */}
            <h1 className={`font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 drop-shadow-xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <span className="block">Built on Ethics.</span>
              <span className="block mt-2">Powered by Data.</span>
              <span className="block mt-2">Committed to ROI</span>
            </h1>

            {/* Description with Enhanced Styling */}
            <p className={`text-gray-200 text-base sm:text-lg lg:text-xl mb-0 max-w-2xl leading-relaxed drop-shadow-lg transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Connecting Global Universities to South Asia and the Middle East -
              the world&apos;s fastest growing economies.
            </p>

            {/* Button with Enhanced Design */}
            <div className={`mt-8 transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <Link href="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 text-white text-base font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-PrimaryColor-0 relative overflow-hidden">
                  <span className="absolute inset-0 bg-AccentColor-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <FaRegThumbsUp className="text-lg relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Get Started Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
