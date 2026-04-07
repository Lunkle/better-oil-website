"use client";

import { ArrowRight, Building2 } from "lucide-react";

interface Item4Props {
  data: {
    departments: string[];
  };
}

export default function Item4({ data }: Item4Props) {
  return (
    <div className="relative w-full h-[600px] bg-slate-50 flex flex-col items-center justify-center p-12 rounded-xl border border-border">

      <div className="text-center mb-12">
         <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="text-primary w-8 h-8" />
         </div>
         <h2 className="text-4xl font-black text-foreground">Global Departments</h2>
      </div>

      {/* Grid of Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {data.departments.map((dept, idx) => (
          <button
            key={idx}
            className="group flex items-center justify-between p-6 bg-white border border-border hover:border-primary rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{dept}</span>
            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
               <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}
