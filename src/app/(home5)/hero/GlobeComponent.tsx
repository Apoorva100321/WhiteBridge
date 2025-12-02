"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

interface GlobeComponentProps {
  className?: string;
}

export default function GlobeComponent({ className }: GlobeComponentProps) {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate the globe
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false;
        controls.enablePan = false;
      }
    }
  }, []);

  return (
    <div className={className} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#0c6e6d"
        atmosphereAltitude={0.2}
        animateIn={true}
        enablePointerInteraction={false}
      />
    </div>
  );
}

