"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface ServiceCardProps {
  serviceIcon: string;
  serviceSubTitle: string;
  serviceTitle: string;
  serviceDesc: string;
  serviceUrl: string;
  btnContent: string;
  btnIcon: React.ReactNode;
  serviceThumb: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceIcon,
  serviceSubTitle,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
  serviceThumb,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch rounded-lg bg-white group relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
      <div className="px-6 py-6 flex flex-col">
        <div className="mb-4">
          <Image src={serviceIcon} alt={serviceTitle} width={36} height={36} />
        </div>
        <span
          className="font-medium text-xs uppercase inline-block mb-2"
          style={{ color: "#2a2b76" }}
        >
          {serviceSubTitle}
        </span>
        <Link href={serviceUrl}>
          <h4 className="font-bold text-sm text-gray-900 mb-2 hover:text-teal-700 transition-colors">
            {serviceTitle}
          </h4>
        </Link>
        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          {serviceDesc}
        </p>
        <Link href={serviceUrl} className="inline-block mt-auto">
          <button
            className="font-medium flex gap-1 items-center text-xs transition-all duration-300 hover:gap-2"
            style={{ color: "#2a2b76" }}
          >
            {btnContent}
            <span className="text-lg transition-all duration-300 group-hover:rotate-45">
              {btnIcon}
            </span>
          </button>
        </Link>
      </div>
      <div className="h-[280px] w-full overflow-hidden">
        <Image
          src={serviceThumb}
          alt={serviceTitle}
          width={400}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const ServiceData = [
  {
    id: 1,
    serviceIcon: "/images/service_icon1.png",
    serviceSubTitle: "Vision",
    serviceTitle: "Global Vision",
    serviceDesc:
      "With nearly two decades of experience, our globally-minded leadership team, comprising dual-nationality professionals, brings unmatched expertise in international education.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=280&fit=crop",
  },
  {
    id: 2,
    serviceIcon: "/images/service_icon2.png",
    serviceSubTitle: "Excellence",
    serviceTitle: "Pursuit of Excellence",
    serviceDesc:
      "Our unwavering commitment to quality and excellence has established us as a trusted partner for global organizations seeking entry into South Asia and the Middle East's education sectors.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=280&fit=crop",
  },
  {
    id: 3,
    serviceIcon: "/images/service_icon1.png",
    serviceSubTitle: "Networks",
    serviceTitle: "Extensive Networks",
    serviceDesc:
      "Since 2011, we've counseled over 10,000 applicants across all education levels and partnered with 150+ enrichment providers.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop",
  },
  {
    id: 4,
    serviceIcon: "/images/service_icon2.png",
    serviceSubTitle: "Leadership",
    serviceTitle: "Thought Leadership",
    serviceDesc:
      "Through active memberships in NACAC, IACAC, HECA, IECA, AIGAC, and IC3, we've built strong connections with admissions professionals and gathered actionable insights to enhance the student experience.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=280&fit=crop",
  },
  {
    id: 5,
    serviceIcon: "/images/service_icon1.png",
    serviceSubTitle: "Knowledge",
    serviceTitle: "In-Depth Knowledge",
    serviceDesc:
      "Our expertise spans India's diverse curricula, enabling us to help students maximize opportunities while advising universities on recruitment strategies tailored to South Asia and the Middle East.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=280&fit=crop",
  },
  {
    id: 6,
    serviceIcon: "/images/service_icon2.png",
    serviceSubTitle: "Ethics",
    serviceTitle: "Ethics & Governance",
    serviceDesc:
      "In an unregulated and fragmented sector, we stand out by adhering to the highest standards of ethics and governance, ensuring trust and transparency in all interactions.",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=280&fit=crop",
  },
];

export default function Service() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative h-[600px] sm:h-[650px] lg:h-[550px] xl:h-[600px] bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h1
              className="font-FiraSans font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4"
              style={{ color: "#2a2b76" }}
            >
              Our Values
            </h1>
            <p className="font-medium text-gray-700 text-base sm:text-lg md:text-xl leading-snug mt-2">
              Our values are the foundation of our culture
              <br />
              and guide our actions in everything we do.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
              style={{ backgroundColor: "#cd553b" }}
            >
              <BiChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
              style={{ backgroundColor: "#cd553b" }}
            >
              <BiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="flex-1 max-h-[380px]">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={24}
            speed={1000}
            initialSlide={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              992: { slidesPerView: 2 },
              1400: { slidesPerView: 2.5 },
            }}
            className="h-full"
          >
            {ServiceData.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
