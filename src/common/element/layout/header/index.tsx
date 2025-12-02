"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";

export default function Navbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const pathname = usePathname();

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={toggleOffcanvas}
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
          >
            <FaTimes />
          </button>

          {/* Logo */}
          <Link href="/" className="block mb-6">
            <Image
              src="/blue-logo.jpeg"
              alt="Logo"
              width={130}
              height={39}
              draggable={false}
            />
          </Link>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6">
            Business consultation provides expert advice to improve performance.
          </p>

          {/* Mobile Navigation Menu */}
          <nav className="mb-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="/universities"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Our Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Events, Tours & Fairs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Careers @ WBE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={toggleOffcanvas}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <MdLocationPin className="text-xl" />
                <Link href="/">Melbone st, Australia, Ny 12099</Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaEnvelope className="text-xl" />
                <Link href="/">needhelp@company.com</Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <FaPhoneAlt className="text-xl" />
                <Link href="/">+48 555 223 224</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Get Update</h4>
            <form className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter E-Mail"
                required
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 text-xl hover:text-blue-700"
              >
                <IoMdPaperPlane />
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaPinterestP />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleOffcanvas}
        />
      )}

      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-2 lg:grid lg:grid-cols-12">
            {/* Logo */}
            <div className="lg:col-span-2">
              <Link href="/">
                <Image
                  src="/blue_logo.jpeg"
                  alt="Logo"
                  width={100}
                  height={30}
                  draggable={false}
                  className="h-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="lg:col-span-10 hidden lg:block">
              <ul className="flex items-center justify-center gap-8 lg:gap-12 whitespace-nowrap">
                <li className="group">
                  <Link
                    href="/about"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/about"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    Who we are
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/about"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/service"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/service"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    What we do
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/service"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/universities"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/universities"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    Our Universities
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/universities"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/events"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/events"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    Events, Tours & Fairs
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/events"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/careers"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/careers"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    Careers @ WBE
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/careers"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/contact"
                    className={`relative py-3 inline-block text-sm lg:text-base transition-colors whitespace-nowrap ${
                      pathname === "/contact"
                        ? "text-[#2a2b76] font-medium"
                        : "text-black group-hover:text-[#2a2b76]"
                    }`}
                  >
                    Contact Us
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a2b76] transition-all duration-300 ease-in-out origin-left ${
                        pathname === "/contact"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Side */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 justify-end">
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleOffcanvas}
                  className="lg:hidden flex flex-col gap-1.5 w-8"
                >
                  <span className="w-full h-0.5 bg-black"></span>
                  <span className="w-full h-0.5 bg-black"></span>
                  <span className="w-full h-0.5 bg-black"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
