"use client";

import { MapPin } from "lucide-react";

interface Item2Props {
  data: {
    poi: {
      name: string;
      location: string;
      points: string[];
    };
  };
}

export default function Item2({ data }: Item2Props) {
  return (
    <div className="relative w-full h-[600px] bg-[#f8f9fa] overflow-hidden rounded-xl border border-border">
      {/* Minimalist World Map Background Placeholder */}
      <div
        className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"
      />

      {/* Map Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* POI Point & Line */}
        <div className="absolute top-[40%] right-[30%] flex items-center">
           <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
           <div className="w-48 border-t-2 border-dashed border-primary/50" />
        </div>

        {/* Descriptor Card based on image.png */}
        <div className="absolute top-[30%] right-[45%] bg-white p-6 rounded-2xl shadow-2xl max-w-md pointer-events-auto border border-border/50">
          <div className="flex items-center gap-6 mb-6">
            {/* Circular Image Placeholder */}
            <div className="w-20 h-20 rounded-full border-4 border-slate-100 overflow-hidden shadow-inner flex-shrink-0">
               <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                 <MapPin className="text-slate-500" />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#1a1a3a] mb-1">{data.poi.name}</h3>
              <p className="text-lg text-[#1a1a3a]/70 font-medium">{data.poi.location}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {data.poi.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#1a1a3a] font-bold text-lg">
                <div className="w-2 h-2 rounded-full bg-[#1a1a3a] mt-2.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
