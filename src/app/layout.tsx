import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import "swiper/css";
import Navbar from "@/common/element/layout/header";
import Footer from "@/common/element/layout/footer";
import BackToTop from "@/common/element/layout/back-to-top";
import ClientInit from "@/common/element/layout/client-init";
import AnnouncementBanner from "@/common/element/layout/announcement-banner";

const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "whitebridgeeducation",
  description: "whitebridgeeducation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased`}>
        <ClientInit />
        <Navbar />
        <AnnouncementBanner />
        <div>{children}</div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
