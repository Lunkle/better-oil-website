"use client";

import { ArrowRight } from "lucide-react";

interface Item4Props {
  data: {
    departments: string[];
  };
}

function DepartmentGridButton({ label, index }: { label: string; index: number }) {
  // Using pure CSS rules for checkerboard to properly handle responsive grid changes
  // instead of hardcoding row/col math that only works for 4-columns
  return (
    <button
      type="button"
      className="dept-btn cursor-pointer group flex flex-col items-start justify-between p-6 transition-all duration-300 hover:bg-primary hover:text-white"
    >
      <span className="text-xl font-black">{label}</span>
      <div className="opacity-50 group-hover:opacity-100 transition-opacity mt-4 md:mt-0">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}

export default function Item4({ data }: Item4Props) {
  return (
    <div className="relative w-full min-h-[600px] md:h-[600px] bg-slate-50 flex flex-col border border-border">
      <style dangerouslySetInnerHTML={{__html: `
        /* 1 column: alternate rows */
        .dept-btn { background-color: #ffffff; color: #1a1a3a; }
        .dept-btn:nth-child(even) { background-color: #1a1a3a; color: #ffffff; }

        /* 2 columns (sm breakpoint and up) */
        @media (min-width: 640px) {
          .dept-btn:nth-child(even) { background-color: #ffffff; color: #1a1a3a; }
          .dept-btn:nth-child(4n+2), .dept-btn:nth-child(4n+3) { background-color: #1a1a3a; color: #ffffff; }
        }

        /* 4 columns (md breakpoint and up) */
        @media (min-width: 768px) {
          .dept-btn:nth-child(4n+2), .dept-btn:nth-child(4n+3) { background-color: #ffffff; color: #1a1a3a; }
          .dept-btn:nth-child(8n+2), .dept-btn:nth-child(8n+4), .dept-btn:nth-child(8n+5), .dept-btn:nth-child(8n+7) { background-color: #1a1a3a; color: #ffffff; }
        }
      `}} />

      {/* Grid of Buttons with Checkerboard Shading */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-full border border-[#1a1a3a]/10">
        {data.departments.map((dept, idx) => (
          <DepartmentGridButton key={idx} label={dept} index={idx} />
        ))}
      </div>
    </div>
  );
}
