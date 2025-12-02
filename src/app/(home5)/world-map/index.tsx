// "use client";

// import { useRef, useState, useMemo, useCallback, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import DottedMap from "dotted-map";
// import Image from "next/image";

// // ============================================================================
// // TYPES & INTERFACES
// // ============================================================================

// interface MapProps {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
//   showLabels?: boolean;
//   labelClassName?: string;
//   animationDuration?: number;
//   loop?: boolean;
// }

// interface MapPropsWithTooltip {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
// }

// type LocationId =
//   | "india"
//   | "nepal"
//   | "bangladesh"
//   | "sriLanka"
//   | "africa"
//   | "middleEast"
//   | "centralAsia"
//   | "westAsia";

// type WorldLocation = {
//   id: LocationId;
//   label: string;
//   lat: number;
//   lng: number;
//   pinSize: "small" | "medium" | "large";
// };

// // ============================================================================
// // DATA
// // ============================================================================

// const worldLocations: Record<LocationId, WorldLocation> = {
//   india: {
//     id: "india",
//     label: "New Delhi, India",
//     lat: 28.6139,
//     lng: 77.2090,
//     pinSize: "large",
//   },
//   nepal: {
//     id: "nepal",
//     label: "Kathmandu, Nepal",
//     lat: 27.7172,
//     lng: 85.3240,
//     pinSize: "large",
//   },
//   bangladesh: {
//     id: "bangladesh",
//     label: "Dhaka, Bangladesh",
//     lat: 23.8103,
//     lng: 90.4125,
//     pinSize: "large",
//   },
//   sriLanka: {
//     id: "sriLanka",
//     label: "Colombo, Sri Lanka",
//     lat: 6.9271,
//     lng: 79.8612,
//     pinSize: "large",
//   },
//   africa: {
//     id: "africa",
//     label: "Nairobi, Kenya",
//     lat: -1.2921,
//     lng: 36.8219,
//     pinSize: "large",
//   },
//   middleEast: {
//     id: "middleEast",
//     label: "Dubai, UAE",
//     lat: 25.2048,
//     lng: 55.2708,
//     pinSize: "large",
//   },
//   centralAsia: {
//     id: "centralAsia",
//     label: "Tashkent, Uzbekistan",
//     lat: 41.2995,
//     lng: 69.2401,
//     pinSize: "large",
//   },
//   westAsia: {
//     id: "westAsia",
//     label: "Tehran, Iran",
//     lat: 35.6892,
//     lng: 51.3890,
//     pinSize: "large",
//   },
// };

// const dotConnections: Array<{ start: LocationId; end: LocationId }> = [
//   { start: "india", end: "nepal" },
//   { start: "nepal", end: "bangladesh" },
//   { start: "bangladesh", end: "sriLanka" },
//   { start: "sriLanka", end: "africa" },
//   { start: "africa", end: "middleEast" },
//   { start: "middleEast", end: "centralAsia" },
//   { start: "centralAsia", end: "westAsia" },
// ];

// const pinOrder: LocationId[] = [
//   "india",
//   "nepal",
//   "bangladesh",
//   "sriLanka",
//   "africa",
//   "middleEast",
//   "centralAsia",
//   "westAsia",
// ];

// const toDotPoint = (location: WorldLocation) => ({
//   lat: location.lat,
//   lng: location.lng,
//   label: location.label,
// });

// export const worldMapDots = dotConnections.map(({ start, end }) => ({
//   start: toDotPoint(worldLocations[start]),
//   end: toDotPoint(worldLocations[end]),
// }));

// export const worldMapPins = pinOrder.map((id) => {
//   const location = worldLocations[id];
//   return {
//     lat: location.lat,
//     lng: location.lng,
//     label: location.label,
//     size: location.pinSize,
//   };
// });

// export { worldLocations };

// // ============================================================================
// // HELPER FUNCTIONS
// // ============================================================================

// // Helper function to get location name from coordinates
// const getLocationName = (lat: number, lng: number, label?: string): string => {
//   if (label) return label;

//   // Approximate city names based on coordinates
//   const locations: Record<string, string> = {
//     "64.2008,-149.4937": "Fairbanks, Alaska",
//     "34.0522,-118.2437": "Los Angeles, USA",
//     "-15.7975,-47.8919": "Brasilia, Brazil",
//     "38.7223,-9.1393": "Lisbon, Portugal",
//     "51.5074,-0.1278": "London, UK",
//     "28.6139,77.2090": "New Delhi, India",
//     "12.9716,77.5946": "Bengaluru, India",
//     "25.2048,55.2708": "Dubai, UAE",
//     "30.0444,31.2357": "Cairo, Egypt",
//     "43.1155,131.8855": "Vladivostok, Russia",
//     "-1.2921,36.8219": "Nairobi, Kenya",
//   };

//   // Try exact match first, then try with tolerance for floating point differences
//   const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
//   if (locations[key]) {
//     return locations[key];
//   }

//   // Fallback: try matching with tolerance (within 0.01 degrees)
//   for (const [locKey, locName] of Object.entries(locations)) {
//     const [locLat, locLng] = locKey.split(",").map(Number);
//     if (Math.abs(lat - locLat) < 0.01 && Math.abs(lng - locLng) < 0.01) {
//       return locName;
//     }
//   }

//   return `Location (${lat.toFixed(2)}, ${lng.toFixed(2)})`;
// };

// // ============================================================================
// // WORLD MAP COMPONENT (Main - with labels and looping animations)
// // ============================================================================

// export function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9",
//   showLabels = true,
//   labelClassName = "",
//   animationDuration = 2,
//   loop = true,
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
//   const [currentActiveIndex, setCurrentActiveIndex] = useState<number | null>(null);
//   const [activeLine, setActiveLine] = useState<{ from: number; to: number } | null>(null);
//   const labelBoxClasses = useMemo(
//     () =>
//       [
//         "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
//         "text-xs md:text-sm font-semibold tracking-tight",
//         "bg-white/95 text-gray-900",
//         "shadow-lg border border-black/5 whitespace-nowrap",
//         labelClassName,
//       ]
//         .filter(Boolean)
//         .join(" "),
//     [labelClassName]
//   );
//   const labelDimensions = { width: 180, height: 44 };

//   const mapData = useMemo(() => {
//     const instance = new DottedMap({ height: 100, grid: "diagonal" });
//     return {
//       instance,
//       width: instance.image.width,
//       height: instance.image.height,
//     };
//   }, []);

//   const svgMap = useMemo(
//     () =>
//       mapData.instance.getSVG({
//         radius: 0.22,
//         color: "#00000040",
//         shape: "circle",
//         backgroundColor: "white",
//       }),
//     [mapData]
//   );

//   const projectPoint = (lat: number, lng: number) => {
//     const pin = mapData.instance.getPin({ lat, lng });
//     return {
//       x: (pin.x / mapData.width) * 800,
//       y: (pin.y / mapData.height) * 400,
//     };
//   };

//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   // Sequential animation - show one location at a time
//   useEffect(() => {
//     if (dots.length === 0) return;
    
//     let timers: NodeJS.Timeout[] = [];
//     let isMounted = true;
//     let currentIndex = 0;
//     const displayDuration = 4000; // 4 seconds per location (2s line + 2s display)

//     const showNextLocation = () => {
//       if (!isMounted) return;

//       setCurrentActiveIndex(currentIndex);

//       // Create line from previous location to current location
//       if (currentIndex > 0) {
//         setActiveLine({ from: currentIndex - 1, to: currentIndex });
//       } else if (currentIndex === 0 && dots.length > 1) {
//         // Connect last location to first location when looping back
//         setActiveLine({ from: dots.length - 1, to: 0 });
//       } else {
//         // First location - no line, just show marker
//         setActiveLine(null);
//       }

//       // Move to next location after display duration
//       const nextTimer = setTimeout(() => {
//         if (!isMounted) return;
//         currentIndex = (currentIndex + 1) % dots.length;
//         showNextLocation();
//       }, displayDuration);

//       timers.push(nextTimer);
//     };

//     // Show first location immediately
//     setCurrentActiveIndex(0);
//     setActiveLine(null);

//     // Start the loop after a delay
//     const startTimer = setTimeout(() => {
//       if (!isMounted) return;
//       currentIndex = 1;
//       showNextLocation();
//     }, displayDuration);

//     timers.push(startTimer);

//     return () => {
//       isMounted = false;
//       timers.forEach((timer) => clearTimeout(timer));
//     };
//   }, [dots.length]);

//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-white">
//       <div className="w-full">
//         {/* Section Header */}
//         <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-6">
//           <div className="text-left">
//             <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
//               <span className="text-PrimaryColor-0">Regions</span> <span className="text-HeadingColor-0">We Serve</span>
//             </h2>
//           </div>
//         </div>

//         {/* Map Container */}
//         <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-white rounded-lg relative font-sans overflow-hidden">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
//         alt="world map"
//         height="495"
//         width="1056"
//         draggable={false}
//         priority
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-auto select-none"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>

//           <filter id="glow">
//             <feMorphology operator="dilate" radius="0.5" />
//             <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Animated Lines - Only show active line */}
//         {activeLine !== null && (() => {
//           const dot = dots[activeLine.to];
//           if (!dot) return null;
          
//           const prevDot = dots[activeLine.from];
//           if (!prevDot) return null;

//           const startPoint = projectPoint(prevDot.end.lat, prevDot.end.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           const pathData = createCurvedPath(startPoint, endPoint);

//           return (
//             <g key={`path-group-${activeLine.from}-${activeLine.to}`}>
//               <motion.path
//                 d={pathData}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="2"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 2,
//                   ease: "easeInOut",
//                 }}
//               />

//               <motion.circle
//                 r="4"
//                 fill={lineColor}
//                 filter="url(#glow)"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: [0, 1, 1, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   times: [0, 0.1, 0.9, 1],
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   offsetPath: `path('${pathData}')`,
//                 }}
//               >
//                 <animate
//                   attributeName="offset-distance"
//                   values="0%;100%"
//                   dur="2s"
//                   keyTimes="0;1"
//                   calcMode="linear"
//                   fill="freeze"
//                 />
//               </motion.circle>
//             </g>
//           );
//         })()}

//         {/* Location Markers - Only show current active location */}
//         {dots.map((dot, i) => {
//           // Only show the end point of the current active location
//           if (currentActiveIndex !== i) return null;

//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           const isActive = currentActiveIndex === i;

//           return (
//             <g key={`point-${i}`}>
//               <motion.g
//                 onHoverStart={() =>
//                   setHoveredLocation(dot.end.label || `Location ${i}`)
//                 }
//                 onHoverEnd={() => setHoveredLocation(null)}
//                 className="cursor-pointer"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 {/* White background circle for contrast */}
//                 <circle
//                   cx={endPoint.x}
//                   cy={endPoint.y}
//                   r="4"
//                   fill="white"
//                   stroke="white"
//                   strokeWidth="1"
//                   className="pointer-events-none"
//                   opacity="0.9"
//                 />
                
//                 {/* Blue Dot Marker */}
//                 <motion.circle
//                   cx={endPoint.x}
//                   cy={endPoint.y}
//                   r="3"
//                   fill={lineColor}
//                   stroke="white"
//                   strokeWidth="1.5"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ 
//                     opacity: 1, 
//                     scale: 1,
//                   }}
//                   transition={{ 
//                     duration: 0.5,
//                     ease: "easeOut"
//                   }}
//                   className="pointer-events-none"
//                   style={{
//                     filter: "drop-shadow(0 2px 4px rgba(14, 165, 233, 0.4))",
//                   }}
//                 />
                
//                 {/* Pulsing ring when active */}
//                 {isActive && (
//                   <circle
//                     cx={endPoint.x}
//                     cy={endPoint.y}
//                     r="3"
//                     fill={lineColor}
//                     opacity="0.5"
//                     className="pointer-events-none"
//                   >
//                     <animate
//                       attributeName="r"
//                       from="3"
//                       to="10"
//                       dur="1.5s"
//                       begin="0s"
//                       repeatCount="indefinite"
//                     />
//                     <animate
//                       attributeName="opacity"
//                       from="0.5"
//                       to="0"
//                       dur="1.5s"
//                       begin="0s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
//               </motion.g>

//               {/* Label - Only show when active */}
//               {showLabels && dot.end.label && isActive && (
//                 <motion.g
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 2, duration: 0.5 }}
//                   className="pointer-events-none"
//                 >
//                   <foreignObject
//                     x={endPoint.x - labelDimensions.width / 2}
//                     y={endPoint.y - labelDimensions.height - 12}
//                     width={labelDimensions.width}
//                     height={labelDimensions.height}
//                     className="overflow-visible"
//                   >
//                     <div className="flex items-center justify-center w-full h-full">
//                       <span className={labelBoxClasses}>
//                         <span
//                           className="h-1.5 w-1.5 rounded-full"
//                           style={{ backgroundColor: lineColor }}
//                         />
//                         {dot.end.label}
//                       </span>
//                     </div>
//                   </foreignObject>
//                 </motion.g>
//               )}
//             </g>
//           );
//         })}
//       </svg>

//       {/* Mobile Tooltip */}
//       <AnimatePresence>
//         {hoveredLocation && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-gray-200"
//           >
//             {hoveredLocation}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       </div>
//       </div>
//     </section>
//   );
// }

// // ============================================================================
// // WORLD MAP WITH TOOLTIP COMPONENT (Alternative - with tooltip on hover)
// // ============================================================================

// export function WorldMapWithTooltip({
//   dots = [],
//   lineColor = "#0ea5e9",
// }: MapPropsWithTooltip) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [hoveredPoint, setHoveredPoint] = useState<{
//     x: number;
//     y: number;
//     label: string;
//   } | null>(null);
//   const [tooltipPosition, setTooltipPosition] = useState<{
//     left: number;
//     top: number;
//   } | null>(null);

//   // Calculate tooltip position based on SVG coordinates
//   useEffect(() => {
//     if (hoveredPoint && containerRef.current && svgRef.current) {
//       const svgRect = svgRef.current.getBoundingClientRect();

//       // Map SVG viewBox coordinates (0-800, 0-400) to actual pixel positions
//       const xPercent = hoveredPoint.x / 800;
//       const yPercent = hoveredPoint.y / 400;

//       const actualX = svgRect.width * xPercent;
//       const actualY = svgRect.height * yPercent;

//       setTooltipPosition({
//         left: actualX,
//         top: actualY,
//       });
//     } else {
//       setTooltipPosition(null);
//     }
//   }, [hoveredPoint]);

//   // Memoize the DottedMap instance
//   const mapData = useMemo(() => {
//     const instance = new DottedMap({ height: 100, grid: "diagonal" });
//     return {
//       instance,
//       width: instance.image.width,
//       height: instance.image.height,
//     };
//   }, []);

//   // Memoize SVG map generation
//   const svgMap = useMemo(
//     () =>
//       mapData.instance.getSVG({
//         radius: 0.22,
//         color: "#00000040",
//         shape: "circle",
//         backgroundColor: "white",
//       }),
//     [mapData]
//   );

//   // Use DottedMap's projection to guarantee pin alignment
//   const projectPoint = useCallback(
//     (lat: number, lng: number) => {
//       const pin = mapData.instance.getPin({ lat, lng });
//       return {
//         x: (pin.x / mapData.width) * 800,
//         y: (pin.y / mapData.height) * 400,
//       };
//     },
//     [mapData]
//   );

//   // Memoize path creation function
//   const createCurvedPath = useCallback(
//     (start: { x: number; y: number }, end: { x: number; y: number }) => {
//       const midX = (start.x + end.x) / 2;
//       const midY = Math.min(start.y, end.y) - 50;
//       return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//     },
//     []
//   );

//   // Memoize all projected points
//   const projectedPoints = useMemo(
//     () =>
//       dots.map((dot) => ({
//         start: projectPoint(dot.start.lat, dot.start.lng),
//         end: projectPoint(dot.end.lat, dot.end.lng),
//         startLabel: getLocationName(
//           dot.start.lat,
//           dot.start.lng,
//           dot.start.label
//         ),
//         endLabel: getLocationName(dot.end.lat, dot.end.lng, dot.end.label),
//       })),
//     [dots, projectPoint]
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans"
//     >
//       <img
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//         alt="world map"
//         height="495"
//         width="1056"
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 select-none"
//       >
//         {projectedPoints.map((point, i) => (
//           <g key={`path-group-${i}`} className="pointer-events-none">
//             <motion.path
//               d={createCurvedPath(point.start, point.end)}
//               fill="none"
//               stroke="url(#path-gradient)"
//               strokeWidth="1"
//               initial={{
//                 pathLength: 0,
//               }}
//               animate={{
//                 pathLength: 1,
//               }}
//               transition={{
//                 duration: 1,
//                 delay: 0.5 * i,
//                 ease: "easeOut",
//               }}
//             />
//           </g>
//         ))}

//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {projectedPoints.map((point, i) => (
//           <g key={`points-group-${i}`}>
//             <g key={`start-${i}`}>
//               <circle
//                 cx={point.start.x}
//                 cy={point.start.y}
//                 r="12"
//                 fill="rgba(0,0,0,0.01)"
//                 stroke="none"
//                 className="cursor-pointer"
//                 onMouseEnter={() => {
//                   setHoveredPoint({
//                     x: point.start.x,
//                     y: point.start.y,
//                     label: point.startLabel,
//                   });
//                 }}
//                 onMouseLeave={() => setHoveredPoint(null)}
//               />
//               {/* White background circle for contrast */}
//               <circle
//                 cx={point.start.x}
//                 cy={point.start.y}
//                 r="4"
//                 fill="white"
//                 stroke="white"
//                 strokeWidth="1"
//                 className="pointer-events-none"
//                 opacity="0.9"
//               />
//               {/* Main dot */}
//               <circle
//                 cx={point.start.x}
//                 cy={point.start.y}
//                 r="3"
//                 fill={lineColor}
//                 stroke="white"
//                 strokeWidth="1.5"
//                 className="pointer-events-none"
//               />
//               {/* Animated pulse circle */}
//               <circle
//                 cx={point.start.x}
//                 cy={point.start.y}
//                 r="3"
//                 fill={lineColor}
//                 opacity="0.5"
//                 className="pointer-events-none"
//               >
//                 <animate
//                   attributeName="r"
//                   from="3"
//                   to="10"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//                 <animate
//                   attributeName="opacity"
//                   from="0.5"
//                   to="0"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </g>
//             <g key={`end-${i}`}>
//               <circle
//                 cx={point.end.x}
//                 cy={point.end.y}
//                 r="12"
//                 fill="rgba(0,0,0,0.01)"
//                 stroke="none"
//                 className="cursor-pointer"
//                 onMouseEnter={() => {
//                   setHoveredPoint({
//                     x: point.end.x,
//                     y: point.end.y,
//                     label: point.endLabel,
//                   });
//                 }}
//                 onMouseLeave={() => setHoveredPoint(null)}
//               />
//               {/* White background circle for contrast */}
//               <circle
//                 cx={point.end.x}
//                 cy={point.end.y}
//                 r="4"
//                 fill="white"
//                 stroke="white"
//                 strokeWidth="1"
//                 className="pointer-events-none"
//                 opacity="0.9"
//               />
//               {/* Main dot */}
//               <circle
//                 cx={point.end.x}
//                 cy={point.end.y}
//                 r="3"
//                 fill={lineColor}
//                 stroke="white"
//                 strokeWidth="1.5"
//                 className="pointer-events-none"
//               />
//               {/* Animated pulse circle */}
//               <circle
//                 cx={point.end.x}
//                 cy={point.end.y}
//                 r="3"
//                 fill={lineColor}
//                 opacity="0.5"
//                 className="pointer-events-none"
//               >
//                 <animate
//                   attributeName="r"
//                   from="3"
//                   to="10"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//                 <animate
//                   attributeName="opacity"
//                   from="0.5"
//                   to="0"
//                   dur="1.5s"
//                   begin="0s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </g>
//           </g>
//         ))}
//       </svg>

//       {/* Tooltip */}
//       <AnimatePresence>
//         {hoveredPoint && tooltipPosition && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.1 }}
//             className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-full pb-2"
//             style={{
//               left: `${tooltipPosition.left}px`,
//               top: `${tooltipPosition.top}px`,
//             }}
//           >
//             <div className="bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-lg whitespace-nowrap">
//               {hoveredPoint.label}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ============================================================================
// // PAGE COMPONENT (Example usage with layout)
// // ============================================================================

// export default function WorldMapPage2() {
//   return (
//     <div className="py-40 bg-white w-full">
//       <div className="wb-container mx-auto">
//         <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
//           <div className="flex-1 text-left">
//             <p className="font-bold text-xl md:text-4xl text-black">
//               Global{" "}
//               <span className="text-neutral-400">
//                 {"Education".split("").map((word, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="inline-block"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: idx * 0.04 }}
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//               </span>
//             </p>
//             <p className="text-sm md:text-lg text-neutral-500 max-w-2xl py-4">
//               Access world-class educational resources from anywhere in the
//               world. Learn from the best institutions and educators, breaking
//               down geographical barriers to knowledge and learning.
//             </p>
//           </div>
//           <div className="flex-1 w-full">
//             <WorldMapWithTooltip dots={worldMapDots} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useRef, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import DottedMap from "dotted-map";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// interface MapProps {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
//   showLabels?: boolean;
//   labelClassName?: string;
//   animationDuration?: number;
//   loop?: boolean;
// }
// export function WorldMap({
//   dots = [],
//   lineColor = "#0EA5E9",
//   showLabels = true,
//   labelClassName = "text-sm",
//   animationDuration = 2,
//   loop = true,
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
//   const { theme } = useTheme();
//   const map = useMemo(
//     () => new DottedMap({ height: 100, grid: "diagonal" }),
//     []
//   );
//   const svgMap = useMemo(
//     () =>
//       map.getSVG({
//         radius: 0.22,
//         color: theme === "dark" ? "#FFFF7F40" : "#00000040",
//         shape: "circle",
//         backgroundColor: theme === "dark" ? "black" : "white",
//       }),
//     [map, theme]
//   );
//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };
//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };
//   // Calculate animation timing
//   const staggerDelay = 0.3;
//   const totalAnimationTime = dots.length * staggerDelay + animationDuration;
//   const pauseTime = 2; // Pause for 2 seconds when all paths are drawn
//   const fullCycleDuration = totalAnimationTime + pauseTime;
//   return (
//     <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
//         alt="world map"
//         height="495"
//         width="1056"
//         draggable={false}
//         priority
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-auto select-none"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//           <filter id="glow">
//             <feMorphology operator="dilate" radius="0.5" />
//             <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>
//         {dots.map((dot, i) => {
//           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           // Calculate keyframe times for this specific path
//           const startTime = (i * staggerDelay) / fullCycleDuration;
//           const endTime =
//             (i * staggerDelay + animationDuration) / fullCycleDuration;
//           const resetTime = totalAnimationTime / fullCycleDuration;
//           return (
//             <g key={`path-group-${i}`}>
//               <motion.path
//                 d={createCurvedPath(startPoint, endPoint)}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="1"
//                 initial={{ pathLength: 0 }}
//                 animate={
//                   loop
//                     ? {
//                         pathLength: [0, 0, 1, 1, 0],
//                       }
//                     : {
//                         pathLength: 1,
//                       }
//                 }
//                 transition={
//                   loop
//                     ? {
//                         duration: fullCycleDuration,
//                         times: [0, startTime, endTime, resetTime, 1],
//                         ease: "easeInOut",
//                         repeat: Infinity,
//                         repeatDelay: 0,
//                       }
//                     : {
//                         duration: animationDuration,
//                         delay: i * staggerDelay,
//                         ease: "easeInOut",
//                       }
//                 }
//               />
//               {loop && (
//                 <motion.circle
//                   r="4"
//                   fill={lineColor}
//                   initial={{ offsetDistance: "0%", opacity: 0 }}
//                   animate={{
//                     offsetDistance: [null, "0%", "100%", "100%", "100%"],
//                     opacity: [0, 0, 1, 0, 0],
//                   }}
//                   transition={{
//                     duration: fullCycleDuration,
//                     times: [0, startTime, endTime, resetTime, 1],
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                     repeatDelay: 0,
//                   }}
//                   style={{
//                     offsetPath: `path('${createCurvedPath(
//                       startPoint,
//                       endPoint
//                     )}')`,
//                   }}
//                 />
//               )}
//             </g>
//           );
//         })}
//         {dots.map((dot, i) => {
//           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={`points-group-${i}`}>
//               {/* Start Point */}
//               <g key={`start-${i}`}>
//                 <motion.g
//                   onHoverStart={() =>
//                     setHoveredLocation(dot.start.label || `Location ${i}`)
//                   }
//                   onHoverEnd={() => setHoveredLocation(null)}
//                   className="cursor-pointer"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <circle
//                     cx={startPoint.x}
//                     cy={startPoint.y}
//                     r="3"
//                     fill={lineColor}
//                     filter="url(#glow)"
//                     className="drop-shadow-lg"
//                   />
//                   <circle
//                     cx={startPoint.x}
//                     cy={startPoint.y}
//                     r="3"
//                     fill={lineColor}
//                     opacity="0.5"
//                   >
//                     <animate
//                       attributeName="r"
//                       from="3"
//                       to="12"
//                       dur="2s"
//                       begin="0s"
//                       repeatCount="indefinite"
//                     />
//                     <animate
//                       attributeName="opacity"
//                       from="0.6"
//                       to="0"
//                       dur="2s"
//                       begin="0s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 </motion.g>
//                 {/* {showLabels && dot.start.label && (
//                   <motion.g
//                     initial={{ opacity: 0, y: 5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
//                     className="pointer-events-none scale-50"
//                   >
//                     <foreignObject
//                       x={startPoint.x - 50}
//                       y={startPoint.y - 35}
//                       width="100"
//                       height="30"
//                       className="block"
//                     >
//                       <div className="flex items-center justify-center h-full">
//                         <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-white/95 dark:bg-black/95 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm">
//                           {dot.start.label}
//                         </span>
//                       </div>
//                     </foreignObject>
//                   </motion.g>
//                 )} */}
//               </g>
//               {/* End Point */}
//               <g key={`end-${i}`}>
//                 <motion.g
//                   onHoverStart={() =>
//                     setHoveredLocation(dot.end.label || `Destination ${i}`)
//                   }
//                   onHoverEnd={() => setHoveredLocation(null)}
//                   className="cursor-pointer"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <circle
//                     cx={endPoint.x}
//                     cy={endPoint.y}
//                     r="3"
//                     fill={lineColor}
//                     filter="url(#glow)"
//                     className="drop-shadow-lg"
//                   />
//                   <circle
//                     cx={endPoint.x}
//                     cy={endPoint.y}
//                     r="3"
//                     fill={lineColor}
//                     opacity="0.5"
//                   >
//                     <animate
//                       attributeName="r"
//                       from="3"
//                       to="12"
//                       dur="2s"
//                       begin="0.5s"
//                       repeatCount="indefinite"
//                     />
//                     <animate
//                       attributeName="opacity"
//                       from="0.6"
//                       to="0"
//                       dur="2s"
//                       begin="0.5s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 </motion.g>
//                 {showLabels && dot.end.label && (
//                   <motion.g
//                     initial={{ opacity: 0, y: 5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
//                     className="pointer-events-none scale-150"
//                   >
//                     <foreignObject
//                       x={endPoint.x - 50}
//                       y={endPoint.y - 35}
//                       width="100"
//                       height="30"
//                       className="block"
//                     >
//                       <div className="flex items-center justify-center h-full">
//                         <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-white/95 dark:bg-black/95 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm">
//                           {dot.end.label}
//                         </span>
//                       </div>
//                     </foreignObject>
//                   </motion.g>
//                 )}
//               </g>
//             </g>
//           );
//         })}
//       </svg>
//       {/* Mobile Tooltip */}
//       <AnimatePresence>
//         {hoveredLocation && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 text-black dark:text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-gray-200 dark:border-gray-700"
//           >
//             {hoveredLocation}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { WorldMap } from "@/components/map";
export default function WorldMapPage4() {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 pb-4 md:pb-6 bg-white w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4 text-left">
          <h2 className="font-FiraSans font-bold text-3xl sm:text-4xl md:text-5xl text-HeadingColor-0 mb-4">
            <span className="text-PrimaryColor-0">Regions</span> We Serve
          </h2>
        </div>
        <div className="w-full">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                  label: "Los Angeles",
                },
              },
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
              },
              {
                start: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
                end: {
                  lat: 38.7223,
                  lng: -9.1393,
                  label: "Lisbon",
                },
              },
              {
                start: {
                  lat: 51.5074,
                  lng: -0.1278,
                  label: "London",
                },
                end: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: 43.1332,
                  lng: 131.9113,
                  label: "Vladivostok",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: -1.2921,
                  lng: 36.8219,
                  label: "Nairobi",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}