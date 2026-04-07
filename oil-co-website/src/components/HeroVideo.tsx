"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroVideoProps {
  title: string;
  subtitle: string;
  descriptionLines: string[];
  companyName: string;
  exploreText: string;
  videoText: string;
}

export default function HeroVideo({
  title,
  subtitle,
  descriptionLines,
  companyName,
  exploreText,
  videoText,
}: HeroVideoProps) {
  // Split title to stylize the first word like in the original page
  const titleWords = title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-start overflow-hidden bg-black">
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
      <div className="relative z-10 container mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 space-y-2">
            {descriptionLines.map((line, i) => (
              <p key={i} className="text-white/90 text-2xl leading-relaxed font-bold drop-shadow max-w-3xl">
                {line}
              </p>
            ))}
          </div>

          <p className="text-white text-xl font-medium tracking-wide mb-12 drop-shadow">
            {companyName}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <Link
              href="/tech"
              className="px-10 py-5 bg-white text-black font-black tracking-widest hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-xl text-lg flex items-center justify-center"
            >
              {exploreText}
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 bg-white text-black font-black tracking-widest hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-xl text-lg flex items-center justify-center"
            >
              {videoText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
