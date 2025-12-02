"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const MarketsData = [
  {
    id: 1,
    regionTitle: "India",
    regionDesc:
      "Our largest market with 10,000+ students counseled across all education levels. Strong presence in major cities including Mumbai, Delhi, Bangalore, and Hyderabad.",
    regionUrl: "/markets/india",
    image: "/images/india.jpg",
  },
  {
    id: 2,
    regionTitle: "United Arab Emirates",
    regionDesc:
      "150+ partnerships established with leading universities. Strategic hub for Middle East operations serving students from across the GCC region.",
    regionUrl: "/markets/uae",
    image: "/images/uae.jpg",
  },
  {
    id: 3,
    regionTitle: "Saudi Arabia",
    regionDesc:
      "Rapidly expanding market with growing demand for international education. Active partnerships with top-tier institutions and government entities.",
    regionUrl: "/markets/saudi-arabia",
    image: "/images/saudi.jpg",
  },
  {
    id: 4,
    regionTitle: "Nepal",
    regionDesc:
      "Established network connecting students to global opportunities. Strong relationships with educational institutions and counseling centers across the region.",
    regionUrl: "/markets/nepal",
    image: "/images/nepal.jpg",
  },
];

interface MarketCardProps {
  regionTitle: string;
  regionDesc: string;
  regionUrl: string;
  image: string;
}

function MarketCard({
  regionTitle,
  regionDesc,
  regionUrl,
  image,
}: MarketCardProps) {
  return (
    <Link href={regionUrl} className="group block h-full">
      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={regionTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300"></div>

                {/* Content Panel - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="font-FiraSans font-light text-xl sm:text-2xl md:text-3xl leading-tight">
                      {regionTitle}
                    </h4>
                    <FaArrowRight className="text-xl sm:text-2xl mt-1 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Text content - hidden by default, shown on hover */}
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-FiraSans text-sm sm:text-base text-white/90 line-clamp-2 mb-3">
                      {regionDesc}
                    </p>
                    <div className="flex items-center gap-2 text-white font-FiraSans text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
                      <span>Find out more</span>
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>
      </div>
    </Link>
  );
}

export default function Markets() {
  return (
    <section
      id="markets"
      className="py-12 sm:py-16 md:py-20 relative bg-white"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 mb-4">
            Markets / Regions We Serve
          </h2>
          <p className="font-FiraSans text-base sm:text-lg text-gray-600 max-w-2xl">
            With deep expertise and established networks, we connect universities to exceptional students across South Asia and the Middle East.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MarketsData.map(
            ({
              id,
              regionTitle,
              regionDesc,
              regionUrl,
              image,
            }) => {
              return (
                <MarketCard
                  key={id}
                  regionTitle={regionTitle}
                  regionDesc={regionDesc}
                  regionUrl={regionUrl}
                  image={image}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
