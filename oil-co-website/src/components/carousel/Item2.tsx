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

  return (
    <div className="relative w-full h-[600px] bg-[#f8f9fa] overflow-hidden border border-border">
      {/* Minimalist World Map Background Placeholder */}
      <div
        className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"
      />

      {/* SVG Container for Curved Dotted Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#ff6600" />
          </marker>
        </defs>
        {data.pois.map((poi, idx) => {
          if (!positions[idx]) return null;
          const pos = positions[idx];

          // Using percentages in path is tricky, so we rely on relative visual proximity.
          // This creates a curved dotted line effect from the card area to the point area.
          // Note: In a production scenario, precise coordinate mapping would be needed.
          return (
            <path
              key={`path-${idx}`}
              d={`M ${parseInt(pos.cardRight)}% ${parseInt(pos.cardTop)}% Q ${(parseInt(pos.cardRight) + parseInt(pos.right))/2}% ${parseInt(pos.top) - 10}% ${parseInt(pos.right)}% ${parseInt(pos.top)}%`}
              fill="none"
              stroke="#1a1a3a"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-40"
            />
          );
        })}
      </svg>

      {/* Map Content Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">

        {data.pois.map((poi, idx) => {
          const pos = positions[idx];
          if (!pos) return null;

          return (
            <div key={poi.id}>
              {/* POI Dot */}
              <div
                className="absolute flex items-center justify-center pointer-events-auto"
                style={{ top: pos.top, right: pos.right, transform: 'translate(50%, -50%)' }}
              >
                 <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Descriptor Card */}
              <div
                className="absolute bg-white p-6 shadow-2xl max-w-sm pointer-events-auto border border-border/50"
                style={{ top: pos.cardTop, right: pos.cardRight, transform: 'translate(50%, -50%)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Circular Image Placeholder */}
                  <div className="w-16 h-16 border-4 border-slate-100 overflow-hidden shadow-inner flex-shrink-0">
                     <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                       <MapPin className="text-slate-500" />
                     </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1a1a3a] mb-1">{poi.name}</h3>
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
            </div>
          );
        })}

      </div>
    </div>
  );
}
