"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "In-Country Representation",
    description: "By partnering with WBE, your institution will gain access to a comprehensive suite of enrollment solutions tailored for global universities and higher education institutions to enter and succeed in high growth markets with customised solutions that optimise your cost of acquisition per student.",
    image: "/icr.jpg",
  },
  {
    id: 2,
    name: "Digital Marketing Solutions",
    description: "We enhance the applicant journeys and boost enrollment outcomes by connecting you with reputable schools and universities to recruit high-performing, best-fit students in South Asia and the Middle East.",
    image: "/digital.jpg",
  },
  {
    id: 3,
    name: "TNE & Institutional Partnerships",
    description: "Enter and succeed in high growth markets with customised solutions that optimise your cost of acquisition per student. We help institutions build strategic partnerships for sustainable growth in South Asia and the Middle East.",
    image: "/tne.jpg",
  },
  {
    id: 4,
    name: "Advisory services",
    description: "Our comprehensive advisory services help institutions navigate complex international education markets and develop strategic partnerships for sustainable growth. We provide expert guidance on market entry and expansion strategies.",
    image: "/advisory.jpg",
  },
];

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
}

function ServiceCard({ name, description, image }: ServiceCardProps) {
  return (
    <Link href="/services" className="group block h-full">
      <div className="relative h-[320px] sm:h-[350px] lg:h-[380px] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-500"></div>

        {/* Content Panel - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform transition-all duration-500 group-hover:-translate-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h4 className="font-FiraSans font-light text-2xl sm:text-3xl md:text-4xl leading-tight">
                {name}
              </h4>
              <FaArrowRight className="text-2xl sm:text-3xl mt-1 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 opacity-0 group-hover:opacity-100" />
            </div>

            {/* Description - Hidden by default, shown on hover */}
            <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <p className="font-FiraSans text-sm sm:text-base text-white/90 line-clamp-3 mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex items-center gap-2 text-white font-FiraSans text-base sm:text-lg font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10 sm:mb-12"
        >
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 mb-4">
            Our Services
          </h2>
          <p className="font-FiraSans text-base sm:text-lg text-gray-600 max-w-2xl">
            Comprehensive solutions tailored for global universities and higher education institutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                name={service.name}
                description={service.description}
                image={service.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

