"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroVideoProps {
  descriptionLines: string[];
  companyName: string;
  exploreText: string;
  videoText: string;
  currentLang: string;
}

export default function HeroVideo({
  descriptionLines,
  companyName,
  exploreText,
  videoText,
  currentLang,
}: HeroVideoProps) {
  return (
    <section className="relative px-4 w-full flex items-center justify-start overflow-hidden bg-black">
      {/* Autoplay Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="container mx-auto z-10 text-left pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full space-y-4 md:space-y-6 container mx-auto"
        >
          <div className="space-y-2">
            {descriptionLines.map((line, i) => (
              <p key={i} className="text-white/90 text-lg md:text-2xl leading-relaxed font-bold drop-shadow">
                {line}
              </p>
            ))}
          </div>

          <p className="text-white text-base md:text-xl font-medium tracking-wide drop-shadow">
            {companyName}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 md:gap-6">
            <Button asChild size="lg" variant="outline" className="bg-white text-black border-0 hover:bg-primary hover:text-white shadow-xl">
              <Link href={`/tech?lang=${currentLang}`}>
                {exploreText}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-black border-0 hover:bg-primary hover:text-white shadow-xl">
              <Link href={`/contact?lang=${currentLang}`}>
                {videoText}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
