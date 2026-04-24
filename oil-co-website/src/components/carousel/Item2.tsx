"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

interface POI {
  id: string;
  name: string;
  location: string;
  points: string[];
  images?: string[];
}

interface Item2Props {
  data: {
    pois: POI[];
  };
}

export default function Item2({ data }: Item2Props) {
  const [showAll, setShowAll] = useState(true);

  // Hardcoded visual positioning for the 5 POIs to match the map aesthetic
  // Note: Using left/top coordinates relative to the map container for both dots and cards.
  const positions = [
    // 1. Headquarters (Chengdu, Sichuan)
    { dotTop: "55%", dotLeft: "52%", cardTop: "15%", cardLeft: "85%", cardAlign: "right" },
    // 2. Overseas Market Expansion (Middle East / Russia / Central Asia)
    { dotTop: "60%", dotLeft: "52%", cardTop: "65%", cardLeft: "90%", cardAlign: "right" },
    // 3. R&D Center (Chengdu, Sichuan)
    { dotTop: "58%", dotLeft: "53%", cardTop: "82%", cardLeft: "45%", cardAlign: "left" },
    // 4. Production Base (Nanchong, Sichuan)
    { dotTop: "56%", dotLeft: "54%", cardTop: "65%", cardLeft: "15%", cardAlign: "left" },
    // 5. Project Management Center (Xinjiang, Southwest Region)
    { dotTop: "50%", dotLeft: "49%", cardTop: "15%", cardLeft: "20%", cardAlign: "left" }
  ];

  const displayPois = showAll ? data.pois : data.pois.slice(0, 2);

  return (
    <div className="relative w-full flex flex-col md:block md:h-[600px] bg-[#fdfdfe] border border-border">

      {/* Map Container (fixed height on mobile, full height absolute on desktop) */}
      <div className="relative w-full h-[300px] md:h-full md:absolute md:inset-0 overflow-hidden bg-[#fdfdfe]">
        <div
          className="absolute inset-0 opacity-40 bg-[url('/carousel/2-map/map.png')] bg-no-repeat bg-center bg-cover md:bg-contain"
        />

        {/* Desktop Dotted Lines Connecting Dots to Cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10" style={{ zIndex: 10 }}>
          {data.pois.map((poi, idx) => {
            const pos = positions[idx];
            if (!pos) return null;

            // Calculate anchor points (simplistic center-to-center for now, adjust based on cardAlign if needed)
            const x1 = pos.dotLeft;
            const y1 = pos.dotTop;
            const x2 = pos.cardLeft;
            const y2 = pos.cardTop;

            return (
              <line
                key={`line-${poi.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F15A24" // brand-orange
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.6"
              />
            );
          })}
        </svg>

        {/* POI Dots only */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {data.pois.map((poi, idx) => {
            const pos = positions[idx];
            if (!pos) return null;

            return (
              <div
                key={poi.id}
                className="absolute flex items-center justify-center pointer-events-auto hidden md:flex"
                style={{ top: pos.dotTop, left: pos.dotLeft, transform: 'translate(-50%, -50%)' }}
              >
                 <div className="w-4 h-4 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(241,90,36,0.8)] animate-pulse" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards Container (listed vertically on mobile, absolute positioned on desktop) */}
      <div className="relative flex flex-col gap-4 p-4 md:p-0 z-30 pointer-events-none md:absolute md:inset-0">
        {displayPois.map((poi) => {
          // Find the correct position for desktop layout based on original index
          const originalIdx = data.pois.findIndex(p => p.id === poi.id);
          const pos = positions[originalIdx];
          if (!pos) return null;

          return (
            <div
              key={poi.id}
              className={`bg-brand-white/95 backdrop-blur-sm p-4 md:p-5 shadow-2xl w-full md:w-[320px] pointer-events-auto border-t-4 md:border-t-0 md:border-l-4 border-brand-orange md:absolute transition-all duration-300`}
              style={{
                top: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardTop : 'auto',
                left: typeof window !== 'undefined' && window.innerWidth >= 768 ? pos.cardLeft : 'auto',
                transform: typeof window !== 'undefined' && window.innerWidth >= 768 ?
                  (pos.cardAlign === 'right' ? 'translate(-100%, -50%)' : 'translate(0%, -50%)') : 'none'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Images */}
                <div className="flex -space-x-4 flex-shrink-0">
                  {poi.images && poi.images.length > 0 ? (
                    poi.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-white overflow-hidden shadow-md bg-brand-deep-blue/5"
                        style={{ zIndex: poi.images!.length - imgIdx }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgSrc} alt={`${poi.name} image ${imgIdx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))
                  ) : (
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-white overflow-hidden shadow-md flex items-center justify-center bg-brand-deep-blue/10">
                      <div className="w-6 h-6 bg-brand-deep-blue/30 rounded-full" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-brand-deep-blue mb-0.5 leading-tight">{poi.name}</h3>
                  {poi.location && (
                    <p className="text-xs text-brand-deep-blue/70 font-medium">{poi.location}</p>
                  )}
                </div>
              </div>

              <ul className="space-y-1.5">
                {poi.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-brand-deep-blue font-semibold text-xs leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Mobile "Show More/Less" button */}
        {data.pois.length > 2 && (
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="md:hidden mt-2 pointer-events-auto flex items-center justify-center gap-2 rounded-full text-brand-deep-blue font-bold text-sm shadow-sm"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show More Locations <ChevronDown className="w-4 h-4" /></>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
