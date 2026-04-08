"use client";

import { ArrowRight } from "lucide-react";

interface Item4Props {
  data: {
    departments: string[];
  };
}

function DepartmentGridButton({ label, index }: { label: string; index: number }) {
  // Checkerboard logic for a 4-column grid:
  // Row 0 (idx 0-3): even cols are white, odd are navy
  // Row 1 (idx 4-7): even cols are navy, odd are white
  const row = Math.floor(index / 4);
  const col = index % 4;
  const isNavy =
    (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0);

  return (
    <button
      type="button"
      className={`cursor-pointer group flex flex-col items-start justify-between p-6 transition-all duration-300 ${
        isNavy
          ? "bg-[#1a1a3a] text-white hover:bg-primary"
          : "bg-white text-[#1a1a3a] hover:bg-primary hover:text-white"
      }`}
    >
      <span className="text-xl font-black">{label}</span>
      <div className="opacity-50 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}

export default function Item4({ data }: Item4Props) {
  return (
    <div className="relative w-full h-[600px] bg-slate-50 flex flex-col border border-border">
      {/* 2x4 Grid of Buttons with Checkerboard Shading */}
      <div className="flex-1 grid grid-cols-4 grid-rows-2 w-full h-full border border-[#1a1a3a]/10">
        {data.departments.map((dept, idx) => (
          <DepartmentGridButton key={idx} label={dept} index={idx} />
        ))}
      </div>

    </div>
  );
}
