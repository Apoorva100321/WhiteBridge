"use client";

import Link from "next/link";

export default function Project() {
  const partnerLogos = [
    { id: 1, image: "/clarkson.avif", alt: "Clarkson University", link: "/clients/clarkson" },
    { id: 2, image: "/rowan.avif", alt: "Rowan University", link: "/clients/rowan" },
    { id: 3, image: "/lasalle.avif", alt: "La Salle University", link: "/clients/lasalle" },
    { id: 4, image: "/wake.avif", alt: "Wake Forest University", link: "/clients/wake" },
    { id: 5, image: "/clarkson.avif", alt: "Clarkson University", link: "/clients/clarkson" },
    { id: 6, image: "/rowan.avif", alt: "Rowan University", link: "/clients/rowan" },
    { id: 7, image: "/lasalle.avif", alt: "La Salle University", link: "/clients/lasalle" },
    { id: 8, image: "/wake.avif", alt: "Wake Forest University", link: "/clients/wake" },
  ];

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden">
        <div className="partner-logo-box-marquee">
          <div className="section-heading-text margin-bottom-40 text-left mb-10">
            <h1 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="text-HeadingColor-0">Our</span> <span className="text-PrimaryColor-0">Clients</span>
            </h1>
            {/* <p className="align-center font-medium text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              We have a growing list of <strong>450+</strong> university partners.
            </p> */}
          </div>

          <div className="marquee-wrapper overflow-hidden">
            {/* Marquee Row */}
            <div className="marquee flex items-center">
              {/* First set */}
              {partnerLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 marquee-item client-card"
                >
                  <div className="client-card-content">
                    <div className="client-logo-wrapper">
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="auto-fit object-contain"
                        loading="lazy"
                      />
                    </div>
                    <Link href={logo.link || "#"} className="client-button">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {partnerLogos.map((logo) => (
                <div
                  key={`duplicate-${logo.id}`}
                  className="flex-shrink-0 marquee-item client-card"
                >
                  <div className="client-card-content">
                    <div className="client-logo-wrapper">
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="auto-fit object-contain"
                        loading="lazy"
                      />
                    </div>
                    <Link href={logo.link || "#"} className="client-button">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
              {/* Third set to ensure seamless transition back to first */}
              {partnerLogos.map((logo) => (
                <div
                  key={`duplicate-2-${logo.id}`}
                  className="flex-shrink-0 marquee-item client-card"
                >
                  <div className="client-card-content">
                    <div className="client-logo-wrapper">
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="auto-fit object-contain"
                        loading="lazy"
                      />
                    </div>
                    <Link href={logo.link || "#"} className="client-button">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .partner-logo-box-marquee {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-heading-text {
          margin-bottom: 2.5rem;
        }

        .margin-bottom-40 {
          margin-bottom: 2.5rem;
        }

        .header-align-center {
          text-align: center;
        }

        .align-center {
          text-align: center;
        }

        .highlight-text {
          font-weight: 600;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 8px 0;
        }

        .marquee {
          display: flex;
          align-items: center;
          will-change: transform;
          transform-style: preserve-3d;
          animation: marquee-scroll 40s linear infinite;
          padding: 4px 0;
        }

        .marquee-item {
          width: 220px;
          margin-right: 4rem;
        }

        .client-card {
          border: 2px solid #e6eaea;
          border-radius: 12px;
          background: white;
          overflow: visible;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .client-card:hover {
          border-color: #cd553b;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
          z-index: 10;
        }

        .client-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem;
          gap: 1rem;
        }

        .client-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 100%;
        }

        .auto-fit {
          height: auto;
          object-fit: contain;
          max-height: 80px;
          width: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .client-card:hover .auto-fit {
          transform: scale(1.05);
        }

        .client-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.25rem;
          background-color: #2a2b76;
          color: white;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
        }

        .client-button:hover {
          background-color: #cd553b;
          transform: scale(1.05);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .partner-logo-box-marquee {
            padding: 0 0.5rem;
          }

          .marquee {
            animation-duration: 30s;
          }

          .marquee-item {
            width: 180px !important;
            margin-right: 2.5rem !important;
          }

          .client-card-content {
            padding: 1rem 0.75rem !important;
            gap: 0.75rem !important;
          }

          .client-logo-wrapper {
            height: 80px !important;
          }

          .auto-fit {
            max-height: 60px !important;
          }

          .client-button {
            padding: 0.4rem 1rem !important;
            font-size: 0.75rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}}></style>
    </>
  );
}
