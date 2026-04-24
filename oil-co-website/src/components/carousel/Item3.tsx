"use client";

import Image from "next/image";

export default function Item3() {
  return (
    <div className="relative w-full min-h-[600px] md:h-[600px] bg-brand-white overflow-hidden border border-border p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
      <Image src="/carousel/3-technologies/technologies.png" alt="Technologies" width={2096} height={878} className="size-full object-contain" />

    </div>
  );
}
