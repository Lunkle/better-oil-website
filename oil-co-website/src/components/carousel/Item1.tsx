"use client";

interface Item1Props {
  data: {
    rows: { topic: string; detail: string }[];
  };
}

export default function Item1({ data }: Item1Props) {
  return (
    <div className="relative w-full min-h-[600px] bg-brand-deep-blue/99 bg-[url('/carousel/1-innovations/bg.webp')] bg-blend-overlay bg-cover bg-center flex items-center justify-center p-8 overflow-hidden">
      {/* 3 rows, 2 columns (Left: Topic, Right: Detail) */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col gap-y-8 md:gap-y-12">
        {data.rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 gap-x-16 items-start md:items-center border-b border-brand-white/10 pb-8 last:border-0">
            <h3 className="text-2xl md:text-3xl font-black text-brand-orange leading-tight">
              {row.topic}
            </h3>
            <p className="text-lg md:text-xl text-brand-white font-medium leading-relaxed">
              {row.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
