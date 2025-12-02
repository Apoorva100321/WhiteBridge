"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function WorkWithUs() {
  return (
    <section className="py-2 sm:py-3 md:py-4 relative overflow-hidden" style={{ backgroundColor: '#2a2b76' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* CTA Section - Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-5"
              >
                Work with Us
              </motion.h2>

              {/* Subtitle/Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-FiraSans text-base sm:text-lg text-white mb-8 leading-relaxed"
              >
                Join our team and help shape the future of global education. Build meaningful pathways for students worldwide.
              </motion.p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="mailto:careers@whitebridgeeducation.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 text-white font-FiraSans font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                  style={{ backgroundColor: '#cd553b' }}
                >
                  <span>Get in Touch</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-gradient-to-br from-PrimaryColor-0/10 to-AccentColor-0/10 rounded-full blur-3xl"></div>
                <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10"></div>
              </div>
              
              {/* Team Images Collage - Modern Layout */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Left Image - Largest */}
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute left-0 sm:left-8 md:left-12 z-30 group"
                >
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 group-hover:ring-PrimaryColor-0/30 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/team/1.png"
                      alt="Team member"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Top Right Image - Medium */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-12 right-12 sm:top-16 sm:right-16 md:top-20 md:right-20 z-20 group"
                >
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 group-hover:ring-AccentColor-0/30 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/team/2.png"
                      alt="Team member"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Bottom Right Image - Smallest */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-8 right-24 sm:bottom-10 sm:right-28 md:bottom-12 md:right-32 z-10 group"
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 group-hover:ring-PrimaryColor-0/30 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/team/3.png"
                      alt="Team member"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

