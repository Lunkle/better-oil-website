"use client";

import { motion } from "framer-motion";

interface HeroVideoProps {
  title: string;
  subtitle: string;
  description: string;
  exploreText: string;
  videoText: string;
}

export default function HeroVideo({
  title,
  subtitle,
  description,
  exploreText,
  videoText,
}: HeroVideoProps) {
  // Split title to stylize the first word like in the original page
  const titleWords = title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
            <span className="text-primary">{firstWord}</span> {restOfTitle}
          </h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-8 shadow-[0_0_15px_#ff6600]" />
          <p className="text-xl md:text-3xl text-primary font-black tracking-[0.2em] uppercase mb-8 drop-shadow-md">
            {subtitle}
          </p>
          <p className="max-w-2xl mx-auto text-white/90 text-xl mb-12 leading-relaxed font-bold drop-shadow">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/40 text-lg">
              {exploreText}
            </button>
            <button className="px-10 py-5 border-4 border-primary text-white font-black uppercase tracking-widest hover:bg-primary transition-all flex items-center gap-3 text-lg bg-black/30 backdrop-blur-sm">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-white border-b-[5px] border-b-transparent ml-1" />
              </div>
              {videoText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
