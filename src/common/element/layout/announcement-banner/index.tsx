"use client";

import Link from "next/link";
import { FaVolumeUp } from "react-icons/fa";

export default function AnnouncementBanner() {
  return (
    <div className="mt-[68px] lg:mt-[72px] pt-1">
      {/* Dark Purple Strip */}
      <div className="h-1 bg-PrimaryColor-0"></div>
      
      {/* Orange Banner */}
      <div className="bg-AccentColor-0 py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
            {/* Speaker Icon */}
            <FaVolumeUp className="text-yellow-400 text-xl flex-shrink-0" />
            
            {/* Announcement Text */}
            <p className="text-white text-sm lg:text-base text-center flex items-center">
              Announcing U.S. News & World Report&apos;s Strategic Investment in White Bridge Education. &nbsp;
              <Link 
                href="/announcement" 
                className="underline hover:opacity-80 transition-opacity font-medium"
              >
                Learn More Here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

