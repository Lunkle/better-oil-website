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
  // Hardcoded visual positioning for the 5 placeholder POIs to match the map aesthetic
  const positions = [
    { top: "45%", right: "25%", cardTop: "20%", cardRight: "20%" }, // 1. HQ
    { top: "35%", right: "40%", cardTop: "20%", cardRight: "80%" }, // 2. Overseas
    { top: "47%", right: "26%", cardTop: "80%", cardRight: "20%" }, // 3. R&D
    { top: "46%", right: "24%", cardTop: "80%", cardRight: "80%" }, // 4. Production
    { top: "40%", right: "30%", cardTop: "50%", cardRight: "50%" }  // 5. Project Mgmt
  ];

  // Limit to 2 locations
  const pois = data.pois.slice(0, 2);

  return (
    <div className="relative w-full flex flex-col md:block md:h-[600px] bg-brand-white border border-border">

      {/* Map Container (fixed height on mobile, full height absolute on desktop) */}
      <div className="relative w-full h-[300px] md:h-full md:absolute md:inset-0 overflow-hidden">
        {/* Minimalist World Map Background Placeholder */}
        <div
          className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"
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
                 <div className="w-4 h-4 rounded-full bg-brand-orange animate-pulse" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards Container (listed vertically on mobile, absolute positioned on desktop) */}
      <div className="relative flex flex-col gap-4 p-4 md:p-0 z-20 pointer-events-none md:absolute md:inset-0">
        {data.pois.map((poi, idx) => {
          const pos = positions[idx];
          if (!pos) return null;

          return (
            <div key={poi.id}>
              {/* Descriptor Card */}
              <div
                className="bg-brand-white p-4 md:p-6 shadow-2xl w-full md:w-[320px] pointer-events-auto border-l-4 border-brand-orange md:absolute"
                style={{
                  top: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardTop : 'auto',
                  right: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardRight : 'auto',
                  transform: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'translate(50%, -50%)' : 'none'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Circular Image Placeholder */}
                  <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-brand-white overflow-hidden shadow-inner flex-shrink-0 bg-brand-deep-blue/5 flex items-center justify-center">
                      <MapPin className="text-brand-deep-blue w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-brand-deep-blue mb-1">{poi.name}</h3>
                    <p className="text-sm text-brand-deep-blue/70 font-medium">{poi.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {poi.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-brand-deep-blue font-bold text-sm leading-tight">
                      <div className="w-1.5 h-1.5 bg-brand-red mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
