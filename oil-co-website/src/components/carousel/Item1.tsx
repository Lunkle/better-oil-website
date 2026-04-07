"use client";

interface Item1Props {
  data: {
    rows: { topic: string; detail: string }[];
  };
}

export default function Item1({ data }: Item1Props) {
  return (
    <div className="relative w-full h-[600px] bg-slate-800 flex items-center justify-center p-8 overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621687947404-e41b3113ef79?q=80&w=2000&auto=format&fit=crop")' }}
      />

      {/* 3 rows, 2 columns (Left: Topic, Right: Detail) */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col gap-y-12">
        {data.rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
            <h3 className="text-3xl font-black text-white leading-tight">
              {row.topic}
            </h3>
            <p className="text-xl text-white/80 font-medium leading-relaxed">
              {row.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
