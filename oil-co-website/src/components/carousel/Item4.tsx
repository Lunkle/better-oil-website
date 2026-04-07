"use client";

import { ArrowRight, Building2 } from "lucide-react";

interface Item4Props {
  data: {
    departments: string[];
  };
}

export default function Item4({ data }: Item4Props) {
  return (
    <div className="relative w-full h-[600px] bg-slate-50 flex flex-col p-12 border border-border">

      <div className="text-left mb-8">
         <h2 className="text-4xl font-black text-[#1a1a3a] border-l-8 border-primary pl-4">Global Departments</h2>
      </div>

      {/* 2x4 Grid of Buttons with Checkerboard Shading */}
      <div className="flex-1 grid grid-cols-4 grid-rows-2 w-full h-full border border-[#1a1a3a]/10">
        {data.departments.map((dept, idx) => {
          // Checkerboard logic for a 4-column grid:
          // Row 0 (idx 0-3): even cols are white, odd are navy
          // Row 1 (idx 4-7): even cols are navy, odd are white
          const row = Math.floor(idx / 4);
          const col = idx % 4;
          const isNavy = (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0);

          return (
            <button
              key={idx}
              className={`group flex flex-col items-start justify-between p-6 transition-all duration-300 ${
                isNavy
                  ? "bg-[#1a1a3a] text-white hover:bg-primary"
                  : "bg-white text-[#1a1a3a] hover:bg-slate-100"
              }`}
            >
              <span className="text-xl font-black">{dept}</span>
              <div className="self-end opacity-50 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="w-6 h-6" />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
