"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaRegThumbsUp,
  FaThumbsUp,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      id: 1,
      name: "ICR",
      description: "By partnering with WBE, your institution will gain access to a comprehensive suite of enrollment solutions tailored for global universities and higher education institutions to enter and succeed in high growth markets with customised solutions that optimise your cost of acquisition per student.",
    },
    {
      id: 2,
      name: "Digital Marketing & Lead Engagement",
      description: "We enhance the applicant journeys and boost enrollment outcomes by connecting you with reputable schools and universities to recruit high-performing, best-fit students in South Asia and the Middle East.",
    },
    {
      id: 3,
      name: "TNE & Institutional Partnerships",
      description: "Enter and succeed in high growth markets with customised solutions that optimise your cost of acquisition per student. We help institutions build strategic partnerships for sustainable growth in South Asia and the Middle East.",
    },
    {
      id: 4,
      name: "Advisory Services",
      description: "Our comprehensive advisory services help institutions navigate complex international education markets and develop strategic partnerships for sustainable growth. We provide expert guidance on market entry and expansion strategies.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= services.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? services.length - 2 : prev - 2));
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 2);

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="/about_2.png"
              alt="White Bridge Education"
              width={650}
              height={700}
              priority
              className="w-full rounded-lg"
            />

            {/* Rotating Badge */}
            <div className="absolute -top-8 sm:-top-12 right-8 sm:right-16 lg:right-12 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-gray-50 rounded-full flex items-center justify-center shadow-lg">
              <div className="size-14 sm:size-24 lg:size-28 xl:size-[120px] animate-rotational">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[32px] uppercase">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-HeadingColor-0"
                    >
                      * Business Const. * Agency 2024 * Finance Consult
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Thumbs Up Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#cd553b]" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Services Section with Grid Layout */}
            <div className="relative mt-8 lg:mt-12">
              {/* Header with Navigation */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 leading-tight">
                  Our Services
                </h2>
                
                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#2a2b76" }}
                    aria-label="Previous services"
                  >
                    <BiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#2a2b76" }}
                    aria-label="Next services"
                  >
                    <BiChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Services Grid - Show 2 at a time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {visibleServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white border-2 border-PrimaryColor-0 rounded-lg px-6 py-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-FiraSans font-semibold text-xl text-HeadingColor-0 mb-3">
                      {service.name}
                    </h3>
                    <p className="font-FiraSans text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Service Indicators */}
              <div className="flex justify-center gap-2 mb-8">
                {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 2)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / 2) === index
                        ? "bg-PrimaryColor-0 w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Go to services ${index * 2 + 1}-${index * 2 + 2}`}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <Link href="/contact">
                  <button
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    style={{ backgroundColor: "#2a2b76" }}
                  >
                    <FaRegThumbsUp />
                    Get Started now
                  </button>
                </Link>

                <Link href="/services">
                  <button className="inline-flex items-center gap-2 text-gray-900 font-semibold group">
                    Our Services
                    <GoArrowUpRight
                      size={20}
                      className="transition-all duration-500 group-hover:rotate-45"
                      style={{ color: "#2a2b76" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
