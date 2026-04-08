"use client";

import { Award } from "lucide-react";

interface Pillar {
  header: string;
  title: string;
  sub: string;
}

interface Category {
  title: string;
  items: string[];
}

interface Item3Props {
  data: {
    leftPillars: Pillar[];
    rightCategories: Category[];
  };
}

export default function Item3({ data }: Item3Props) {
  return (
    <div className="relative w-full h-[600px] bg-white overflow-hidden border border-border p-8 flex gap-12">

      {/* Left Side: 3x2 Pillars */}
      <div className="w-2/3 grid grid-cols-2 grid-rows-3 gap-6">
        {data.leftPillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col h-full bg-slate-50 border border-slate-100 p-4 shadow-sm">
            {/* Parallelogram Header */}
            <div className="self-start -skew-x-12 bg-slate-800 px-4 py-1 mb-4">
               <span className="skew-x-12 block text-xs font-bold text-white uppercase tracking-wider">{pillar.header}</span>
            </div>

            {/* Content */}
            <h4 className="text-xl font-black text-foreground mb-2">{pillar.title}</h4>
            <div className="flex items-start gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
               <p className="text-sm text-foreground/70 font-medium">{pillar.sub}</p>
            </div>

            {/* Patent Icons Placeholder */}
            <div className="mt-auto flex gap-2">
               {[1, 2].map(i => (
                 <div key={i} className="w-6 h-6 bg-slate-200 flex items-center justify-center">
                    <Award size={12} className="text-slate-500" />
                 </div>
               ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Product System Vertical List */}
      <div className="w-1/3 bg-slate-800 p-8 text-white flex flex-col justify-center">
         <div className="space-y-8">
            {data.rightCategories.map((cat, idx) => (
              <div key={idx}>
                 <h4 className="text-lg font-bold text-primary mb-3">{cat.title}</h4>
                 <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                         <div className="w-1.5 h-1.5 bg-white/50" />
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
         </div>
      </div>

    </div>
  );
}
