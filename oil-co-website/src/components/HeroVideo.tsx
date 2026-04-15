"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
            <Link
              href={`/tech?lang=${currentLang}`}
              className="px-6 py-4 md:px-10 md:py-5 bg-white text-black font-black tracking-widest hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-xl text-base md:text-lg flex items-center justify-center text-center"
            >
              {exploreText}
            </Link>
            <Link
              href={`/contact?lang=${currentLang}`}
              className="px-6 py-4 md:px-10 md:py-5 bg-white text-black font-black tracking-widest hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-xl text-base md:text-lg flex items-center justify-center text-center"
            >
              {videoText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
