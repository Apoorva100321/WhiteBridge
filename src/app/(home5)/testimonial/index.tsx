"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface TestimonialCardProps {
  testiImg: string;
  testiName: string;
  testiDesignation: string;
  testiDesc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testiImg,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-5 lg:p-6 h-[280px] sm:h-[300px] lg:h-[320px] flex flex-col md:flex-row gap-3 md:gap-4 border border-gray-100 relative">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-PrimaryColor-0/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-AccentColor-0/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Image on Left */}
        <div className="flex-shrink-0 relative z-10 flex items-center justify-center md:items-start">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden ring-2 ring-PrimaryColor-0/10 group-hover:ring-PrimaryColor-0/30 transition-all duration-500 shadow-md group-hover:scale-105">
            <Image
              src={testiImg}
              alt={testiName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 144px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-PrimaryColor-0/20 to-transparent"></div>
          </div>
        </div>

        {/* Content on Right */}
        <div className="flex-1 flex flex-col relative z-10 min-h-0">
          {/* Quote Icon */}
          <div className="mb-2 flex-shrink-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-PrimaryColor-0 to-AccentColor-0 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 inline-flex"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </motion.div>
          </div>

          {/* Stars Rating */}
          <div className="mb-2 flex-shrink-0">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-1 items-center"
            >
              {[...Array(5)].map((_, i) => (
                <motion.li
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 }}
                  className="text-[#ffb609]"
                >
                  <FaStar size={14} className="group-hover:scale-110 transition-transform duration-300" />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Testimonial Text - Scrollable with PerfectScrollbar */}
          <div className="flex-1 min-h-0 mb-3 testimonial-scroll-wrapper">
            <PerfectScrollbar
              options={{
                suppressScrollX: true,
                wheelSpeed: 1,
                swipeEasing: true,
              } as any}
              style={{
                height: '100%',
                maxHeight: '100%'
              }}
            >
              <div className="pr-2">
                <p className="font-FiraSans text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  <span className="text-PrimaryColor-0 text-xl font-bold leading-none mr-1 align-top inline-block">"</span>
                  <span className="text-gray-800">{testiDesc}</span>
                  <span className="text-PrimaryColor-0 text-xl font-bold leading-none ml-1 align-top inline-block">"</span>
                </p>
              </div>
            </PerfectScrollbar>
          </div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 pt-2 border-t border-gray-100 flex-shrink-0"
          >
            <div className="flex-1 min-w-0">
              <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-sm sm:text-base mb-0.5 group-hover:text-PrimaryColor-0 transition-colors duration-300">
                {testiName}
              </h5>
              <p className="font-FiraSans text-PrimaryColor-0 text-xs font-medium">
                {testiDesignation}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const testiData = [
  {
    id: 1,
    testiImg: "/11.avif",
    testiName: "Darren Wagner",
    testiDesignation: "Rowan University",
    testiDesc: `My time working with the team at White Bridge Education has been a genuine pleasure. They are not only professional and reliable but also incredibly thoughtful partners who bring insight, warmth, and consistency to our collaboration. Our interactions are always productive and enjoyable, and their strong communication ensures we're aligned and proactive in our recruitment efforts. The team providing our in-country representative is highly engaged, responsive, and represents Rowan University with great care, integrity, and amazing energy. White Bridge Education has become an essential part of Rowan's international presence, and I deeply value the partnership we've built together.`,
  },
  {
    id: 2,
    testiImg: "/22.avif",
    testiName: "John White",
    testiDesignation: "Wake Forest University School of Business",
    testiDesc: `White Bridge is a valued and respected partner to the Wake Forest University School of Business, working to expand our brand presence and graduate program awareness in the highly competitive Indian market. They take the time to deeply understand our strategic priorities and convey them effectively to an Indian audience. Their data-driven insights have been instrumental in guiding how we engage with a complex and dynamic graduate student population. We value White Bridge as a thoughtful, collaborative, and data-centric partner.`,
  },
  {
    id: 3,
    testiImg: "/33.avif",
    testiName: "Jordan Aird",
    testiDesignation: "University of Salford",
    testiDesc: `Here at the University of Salford, we are delighted with the services provided by White Bridge Education and are proud to be their first UK university partner. The vast amount of expertise, insight, and network across the continent support us daily in our student recruitment and partnership development goals. The team are extremely personable and always work collaboratively with us to find a solution to any problem faced, no matter what. Working with White Bridge Education has also allowed us to explore opportunities to build on our undergraduate student recruitment, through their alignment with The Red Pen, and we see both organisations as real assets to work with. Approaching one year of our working relationship, we are already looking to expand on the work we do together and are setting even more ambitious targets for the future.`,
  },
  {
    id: 4,
    testiImg: "/11.avif",
    testiName: "Director of International Admissions",
    testiDesignation: "La Salle University",
    testiDesc: `As the Director of International Admissions at La Salle University, I recently had the privilege of visiting India alongside our trusted partners at White Bridge Education. The trip, which included visits to several top-tier private high schools in Mumbai and Delhi, was an exceptional experience that showcased White Bridge's professionalism, hospitality, and deep commitment to educational engagement. WBE ensured the entire visit was thoughtfully organized and strategically planned. From seamless logistics to meaningful meetings with key stakeholders, every detail reflected their deep understanding of the Indian educational landscape and their dedication to fostering international partnerships. Their support was instrumental not only in facilitating productive conversations with students and school leaders, but also in strengthening La Salle University's presence in India. We are proud to collaborate with such a dedicated and forward-thinking organization.`,
  },
  {
    id: 5,
    testiImg: "/22.avif",
    testiName: "Summer Programs Fair Participant",
    testiDesignation: "Educational Professional",
    testiDesc: `As an educator and participant in the summer programs fair this January, I was extremely happy and impressed with the event in terms of the extent and quality of outreach, footfalls, internal arrangements and handling, variety of participating programs and the overall experience for students and parents at all levels. The event served well what it set out to do - It was a dynamic platform for educational institutes and students looking to enrich their academic and non academic skills.`,
  },
  {
    id: 6,
    testiImg: "/33.avif",
    testiName: "Educational Partner",
    testiDesignation: "South Asia",
    testiDesc: `Possibly the highest quality bespoke student counselling service we have seen in South Asia. They understand cultural nuances and educational variations of schools and colleges in USA, Europe and developed Asia, thereby delivering the right match for their students with a high-touch guidance through the entire admissions process. Their thought leadership can be seen in their book, Acing Admissions.`,
  },
];

export default function Testimonial() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 mb-4">
            Testimonials
          </h2>
          <p className="font-FiraSans text-base sm:text-lg text-gray-600 max-w-2xl">
            Discover how White Bridge Education is transforming international student recruitment for universities worldwide
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 lg:px-6 z-30 pointer-events-none">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 pointer-events-auto hover:scale-105 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-PrimaryColor-0 text-lg" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 pointer-events-auto hover:scale-105 border border-gray-100"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-PrimaryColor-0 text-lg" />
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={30}
            speed={800}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonials-swiper relative z-0 pb-12"
          >
            {testiData.map((testi) => (
              <SwiperSlide key={testi.id} className="!h-auto">
                <div className="h-full">
                  <TestimonialCard {...testi} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .testimonials-swiper .swiper-pagination-bullet {
            background-color: #2a2b76 !important;
            opacity: 0.3 !important;
            width: 12px !important;
            height: 12px !important;
            transition: all 0.3s ease !important;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background-color: #2a2b76 !important;
            width: 32px !important;
            border-radius: 6px !important;
          }
          .testimonials-swiper .swiper-slide {
            height: auto !important;
            display: flex !important;
          }
          .testimonials-swiper .swiper-wrapper {
            display: flex !important;
            align-items: stretch !important;
          }
          /* Hide PerfectScrollbar scrollbar */
          .testimonial-scroll-wrapper .ps__rail-x,
          .testimonial-scroll-wrapper .ps__rail-y {
            display: none !important;
            opacity: 0 !important;
          }
          .testimonial-scroll-wrapper .ps__thumb-x,
          .testimonial-scroll-wrapper .ps__thumb-y {
            display: none !important;
          }
        `}}></style>
      </div>
    </section>
  );
}
