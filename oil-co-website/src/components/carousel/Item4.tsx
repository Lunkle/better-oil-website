"use client";

import { ArrowRight } from "lucide-react";

interface Item4Props {
  data: {
    departments: string[];
  };
}

function DepartmentGridButton({ label }: { label: string }) {
  // Using pure CSS rules for checkerboard to properly handle responsive grid changes
  // instead of hardcoding row/col math that only works for 4-columns

  return (
    <button
      type="button"
      className="dept-btn cursor-pointer group flex flex-col items-start justify-between p-6 transition-all duration-300 hover:bg-brand-red hover:text-brand-white"
    >
      <span className="text-xl font-black text-left">{label}</span>
      <div className="opacity-50 group-hover:opacity-100 transition-opacity mt-4 md:mt-0">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}

export default function Item4({ data }: Item4Props) {
  return (
    <div className="relative w-full min-h-[600px] md:h-[600px] bg-brand-white flex flex-col border border-border">
      <style dangerouslySetInnerHTML={{__html: `
        /* 1 column: alternate rows */
        .dept-btn { background-color: #fbfcff; color: #0a2b4e; }
        .dept-btn:nth-child(even) { background-color: #0a2b4e; color: #fbfcff; }

        /* 2 columns (sm breakpoint and up) */
        @media (min-width: 640px) {
          .dept-btn:nth-child(even) { background-color: #fbfcff; color: #0a2b4e; }
          .dept-btn:nth-child(4n+2), .dept-btn:nth-child(4n+3) { background-color: #0a2b4e; color: #fbfcff; }
        }

        /* 4 columns (md breakpoint and up) */
        @media (min-width: 768px) {
          .dept-btn:nth-child(4n+2), .dept-btn:nth-child(4n+3) { background-color: #fbfcff; color: #0a2b4e; }
          .dept-btn:nth-child(8n+2), .dept-btn:nth-child(8n+4), .dept-btn:nth-child(8n+5), .dept-btn:nth-child(8n+7) { background-color: #0a2b4e; color: #fbfcff; }
        }
      `}} />

      {/* Grid of Buttons with Checkerboard Shading */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-full border border-brand-deep-blue/10">
        {data.departments.map((dept, idx) => (
          <DepartmentGridButton key={idx} label={dept} />
        ))}
      </div>
    </div>
  );
}
