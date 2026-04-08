"use client";

import { MapPin } from "lucide-react";

interface POI {
  id: string;
  name: string;
  location: string;
  points: string[];
}

interface Item2Props {
  data: {
    pois: POI[];
  };
}

export default function Item2({ data }: Item2Props) {
  // Hardcoded visual positioning for the 3 placeholder POIs to match the map aesthetic
  const positions = [
    { top: "35%", right: "25%", cardTop: "20%", cardRight: "40%" }, // Asia/China
    { top: "45%", right: "35%", cardTop: "50%", cardRight: "50%" }, // Middle East
    { top: "60%", right: "20%", cardTop: "70%", cardRight: "35%" }  // SE Asia
  ];

  // Limit to 2 locations
  const pois = data.pois.slice(0, 2);

  return (
    <div className="relative w-full flex flex-col md:block md:h-[600px] bg-[#f8f9fa] border border-border">

      {/* Map Container (fixed height on mobile, full height absolute on desktop) */}
      <div className="relative w-full h-[300px] md:h-full md:absolute md:inset-0 overflow-hidden">
        {/* Minimalist World Map Background Placeholder */}
        <div
          className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"
        />

        {/* POI Dots only */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {pois.map((poi, idx) => {
            const pos = positions[idx];
            if (!pos) return null;

            return (
              <div
                key={poi.id}
                className="absolute flex items-center justify-center pointer-events-auto"
                style={{ top: pos.top, right: pos.right, transform: 'translate(50%, -50%)' }}
              >
                 <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards Container (listed vertically on mobile, absolute positioned on desktop) */}
      <div className="relative flex flex-col gap-4 p-4 md:p-0 z-20 pointer-events-none md:absolute md:inset-0">
        {pois.map((poi, idx) => {
          const pos = positions[idx];
          if (!pos) return null;

          return (
            <div
              key={poi.id}
              className="bg-white p-4 md:p-6 shadow-2xl w-full md:max-w-sm pointer-events-auto border border-border/50 md:absolute"
              style={{
                top: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardTop : 'auto',
                right: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardRight : 'auto',
                transform: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'translate(50%, -50%)' : 'none'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Circular Image Placeholder */}
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-slate-100 overflow-hidden shadow-inner flex-shrink-0">
                   <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                     <MapPin className="text-slate-500 w-6 h-6 md:w-8 md:h-8" />
                   </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-[#1a1a3a] mb-1">{poi.name}</h3>
                  <p className="text-sm text-[#1a1a3a]/70 font-medium">{poi.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {poi.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-[#1a1a3a] font-bold text-sm leading-tight">
                    <div className="w-1.5 h-1.5 bg-[#1a1a3a] mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
