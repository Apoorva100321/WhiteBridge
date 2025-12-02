"use client";

import Image from "next/image";
import { FaArrowRight, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function ReportCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reports = [
    {
      id: 1,
      title: "MiddleEast Report",
      description: "Comprehensive analysis of global education trends, market insights, and student enrollment data for South Asia and the Middle East.",
      date: "January 2024",
      type: "PDF",
      size: "2.4 MB",
      downloadUrl: "/pdf1.pdf",
      image: "/tne.jpg",
    },
    {
      id: 2,
      title: "India UK CETA 2025",
      description: "Strategic insights and best practices for universities looking to enter high-growth markets in South Asia and the Middle East.",
      date: "December 2023",
      type: "PDF",
      size: "1.8 MB",
      downloadUrl: "/pdf2.pdf",
      image: "/advisory.jpg",
    },
    {
      id: 3,
      title: "Transnational Education",
      description: "Detailed analysis of enrollment patterns, student preferences, and emerging opportunities in international education.",
      date: "November 2023",
      type: "PDF",
      size: "3.1 MB",
      downloadUrl: "/pdf3.pdf",
      image: "/23.png",
    },
    {
      id: 4,
      title: "The India PlayBook",
      description: "Forecasting trends and opportunities in international education markets across emerging economies.",
      date: "October 2023",
      type: "PDF",
      size: "2.7 MB",
      downloadUrl: "/pdf4.pdf",
      image: "/advisory.jpg",
    },
    {
      id: 5,
      title: "Evolving Trends In India",
      description: "Best practices for building strategic partnerships with educational institutions worldwide.",
      date: "September 2023",
      type: "PDF",
      size: "2.1 MB",
      downloadUrl: "/pdf5.pdf",
      image: "/icr.jpg",
    },
    {
      id: 6,
      title: "NORTH-EASTERN STATES OF INDIA",
      description: "In-depth analysis of key markets in South Asia and Middle East for higher education expansion.",
      date: "August 2023",
      type: "PDF",
      size: "3.5 MB",
      downloadUrl: "/pdf6.pdf",
      image: "/tne.jpg",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('a')?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap) * 4,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('a')?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      scrollContainerRef.current.scrollBy({
        left: (cardWidth + gap) * 4,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 relative overflow-hidden" style={{ backgroundColor: '#2a2b76' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3">
            Research & Market Insights
          </h2>
          <p className="font-FiraSans text-base sm:text-lg text-white/80 max-w-2xl">
            Access our latest research reports, market insights, and strategic guides to help inform your education initiatives.
          </p>
        </div>

        {/* Scrollable Container with Navigation */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-PrimaryColor-0 text-lg" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reports.map((report) => (
              <a
                key={report.id}
                href={report.downloadUrl}
                download
                className="group block flex-shrink-0 w-[calc(25%-18px)] min-w-[280px] sm:min-w-[300px]"
              >
                <div className="relative h-[280px] sm:h-[300px] lg:h-[320px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      sizes="(max-width: 768px) 280px, 300px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Title - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10">
                    <h4 className="font-FiraSans font-light text-xl sm:text-2xl md:text-3xl leading-tight">
                      {report.title}
                    </h4>
                  </div>

                  {/* Sliding Panel - Appears on Hover, Covers Whole Box */}
                  <div className="absolute inset-0 bg-white text-gray-900 p-6 sm:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 flex flex-col justify-center">
                    <div className="mb-4">
                      <h4 className="font-FiraSans font-light text-xl sm:text-2xl md:text-3xl leading-tight mb-3 text-HeadingColor-0">
                        {report.title}
                      </h4>
                      <p className="font-FiraSans text-sm sm:text-base text-gray-600 line-clamp-3 mb-4">
                        {report.description}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = report.downloadUrl;
                        link.download = report.title;
                        link.click();
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-PrimaryColor-0 text-white font-FiraSans font-semibold text-base rounded-lg hover:bg-AccentColor-0 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaDownload />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-PrimaryColor-0 text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

