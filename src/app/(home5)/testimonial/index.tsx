"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CountUp from "react-countup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";

interface TestimonialCardProps {
  testiImg: string;
  testiRatingIcon: React.ReactNode;
  testiName: string;
  testiDesignation: string;
  testiDesc: string;
  testiQuote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiQuote,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 sm:p-10 lg:p-12 h-full flex flex-col border border-gray-100 group relative z-20">
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full bg-PrimaryColor-0/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-PrimaryColor-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
      </div>

      {/* Stars Rating */}
      <div className="mb-6">
        <ul className="flex gap-1 items-center">
          <li className="text-[#ffb609]">
            <FaStar size={20} />
          </li>
          <li className="text-[#ffb609]">
            <FaStar size={20} />
          </li>
          <li className="text-[#ffb609]">
            <FaStar size={20} />
          </li>
          <li className="text-[#ffb609]">
            <FaStar size={20} />
          </li>
          <li className="text-[#ffb609]">
            <FaStar size={20} />
          </li>
        </ul>
      </div>

      {/* Testimonial Text */}
      <p className="font-FiraSans text-gray-700 text-base sm:text-lg leading-relaxed mb-8 flex-grow">
        "{testiDesc}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-PrimaryColor-0/20 group-hover:ring-PrimaryColor-0/40 transition-all duration-300">
          <Image
            src={testiImg}
            alt={testiName}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-lg mb-1">
            {testiName}
          </h5>
          <p className="font-FiraSans text-gray-600 text-sm sm:text-base">
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

const testiData = [
  {
    id: 1,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/11.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Darren Wagner",
    testiDesignation: "Rowan University",
    testiDesc: `My time working with the team at White Bridge Education has been a genuine pleasure. They are not only professional and reliable but also incredibly thoughtful partners who bring insight, warmth, and consistency to our collaboration. Our interactions are always productive and enjoyable, and their strong communication ensures we're aligned and proactive in our recruitment efforts. The team providing our in-country representative is highly engaged, responsive, and represents Rowan University with great care, integrity, and amazing energy. White Bridge Education has become an essential part of Rowan's international presence, and I deeply value the partnership we've built together.`,
  },
  {
    id: 2,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/22.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "John White",
    testiDesignation: "Wake Forest University School of Business",
    testiDesc: `White Bridge is a valued and respected partner to the Wake Forest University School of Business, working to expand our brand presence and graduate program awareness in the highly competitive Indian market. They take the time to deeply understand our strategic priorities and convey them effectively to an Indian audience. Their data-driven insights have been instrumental in guiding how we engage with a complex and dynamic graduate student population. We value White Bridge as a thoughtful, collaborative, and data-centric partner.`,
  },
  {
    id: 3,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/33.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jordan Aird",
    testiDesignation: "University of Salford",
    testiDesc: `Here at the University of Salford, we are delighted with the services provided by White Bridge Education and are proud to be their first UK university partner. The vast amount of expertise, insight, and network across the continent support us daily in our student recruitment and partnership development goals. The team are extremely personable and always work collaboratively with us to find a solution to any problem faced, no matter what. Working with White Bridge Education has also allowed us to explore opportunities to build on our undergraduate student recruitment, through their alignment with The Red Pen, and we see both organisations as real assets to work with. Approaching one year of our working relationship, we are already looking to expand on the work we do together and are setting even more ambitious targets for the future.`,
  },
  {
    id: 4,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/11.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Director of International Admissions",
    testiDesignation: "La Salle University",
    testiDesc: `As the Director of International Admissions at La Salle University, I recently had the privilege of visiting India alongside our trusted partners at White Bridge Education. The trip, which included visits to several top-tier private high schools in Mumbai and Delhi, was an exceptional experience that showcased White Bridge's professionalism, hospitality, and deep commitment to educational engagement. WBE ensured the entire visit was thoughtfully organized and strategically planned. From seamless logistics to meaningful meetings with key stakeholders, every detail reflected their deep understanding of the Indian educational landscape and their dedication to fostering international partnerships. Their support was instrumental not only in facilitating productive conversations with students and school leaders, but also in strengthening La Salle University's presence in India. We are proud to collaborate with such a dedicated and forward-thinking organization.`,
  },
  {
    id: 5,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/22.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Summer Programs Fair Participant",
    testiDesignation: "Educational Professional",
    testiDesc: `As an educator and participant in the summer programs fair this January, I was extremely happy and impressed with the event in terms of the extent and quality of outreach, footfalls, internal arrangements and handling, variety of participating programs and the overall experience for students and parents at all levels. The event served well what it set out to do - It was a dynamic platform for educational institutes and students looking to enrich their academic and non academic skills.`,
  },
  {
    id: 6,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/33.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Educational Partner",
    testiDesignation: "South Asia",
    testiDesc: `Possibly the highest quality bespoke student counselling service we have seen in South Asia. They understand cultural nuances and educational variations of schools and colleges in USA, Europe and developed Asia, thereby delivering the right match for their students with a high-touch guidance through the entire admissions process. Their thought leadership can be seen in their book, Acing Admissions.`,
  },
];

export default function Testimonial() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-left mb-10 sm:mb-12">
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 mb-4">
            Testimonial
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={30}
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="testimonials-swiper relative z-0"
          >
            {testiData.map((testi) => (
              <SwiperSlide key={testi.id}>
                <TestimonialCard {...testi} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
