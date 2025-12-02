import Link from "next/link";
import Image from "next/image";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { FaYoutube, FaWhatsapp, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Who we are", href: "/about" },
    { label: "What we do", href: "/service" },
    { label: "Our Universities", href: "/universities" },
    { label: "Events, Tours & Fairs", href: "/events" },
    { label: "Careers @ WBE", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "text-gray-600" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "text-gray-600" },
    { icon: FaWhatsapp, href: "https://whatsapp.com", label: "WhatsApp", color: "text-gray-600" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook", color: "text-gray-600" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "text-gray-600" },
  ];

  return (
    <footer className="bg-white text-gray-800 relative z-10 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/blue_logo.jpeg"
                alt="White Bridge Education Logo"
                width={150}
                height={45}
                draggable={false}
                className="h-auto w-full max-w-[150px]"
                unoptimized
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Connecting Global Universities to South Asia and the Middle East - the world&apos;s fastest growing economies.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.color} text-lg hover:text-PrimaryColor-0 transition-colors duration-300`}
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-5 text-gray-900 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-5 text-gray-900 uppercase tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <MdPhone className="text-PrimaryColor-0 text-lg" />
                </div>
                <div>
                  <Link
                    href="tel:+919136130742"
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors text-sm"
                  >
                    +91 9136130742
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <MdEmail className="text-PrimaryColor-0 text-lg" />
                </div>
                <div>
                  <Link
                    href="mailto:info@whitebridgeeducation.com"
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors text-sm break-all"
                  >
                    info@whitebridgeeducation.com
                  </Link>
                </div>
              </div>

              {/* Mumbai Location */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <MdLocationPin className="text-PrimaryColor-0 text-lg" />
                </div>
                <div>
                  <Link
                    href="https://www.google.com/maps/place/Prasad+Chambers,+Tata+Rd+No+2,+Charni+Road+East,+Opera+House,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9544015,72.8146768,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce103e6ec89d:0xe9100d13231f6ef6!8m2!3d18.9543964!4d72.8172517!16s%2Fg%2F12hnmggmy?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors text-sm leading-relaxed"
                  >
                    Prasad Chambers #302,
                    <br />
                    Opera House, Mumbai - 400004
                  </Link>
                </div>
              </div>

              {/* Dubai Location */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <MdLocationPin className="text-PrimaryColor-0 text-lg" />
                </div>
                <div>
                  <Link
                    href="https://www.google.com/maps/search/Dubai+World+Trade+Centre,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors text-sm leading-relaxed"
                  >
                    World Trade Center Dubai,
                    <br />
                    Dubai, UAE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-5 text-gray-900 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-PrimaryColor-0 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright &copy; {currentYear} White Bridge Education. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built on Ethics. Powered by Data. Committed to ROI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
