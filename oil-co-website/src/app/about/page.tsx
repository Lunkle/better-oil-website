"use client";

import { Suspense, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "../../hooks/useTranslation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Content() {
  const { t, locale } = useTranslation();
  const bannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-16.6%"]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar nav={t.nav} currentLang={locale} />

      {/* Main Content */}
      <main className="flex-1 mt-20">
        {/* Breadcrumb Section */}
        <section className="bg-brand-white py-4 border-b border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
              {t.about.breadcrumb}
            </nav>
          </div>
        </section>

        {/* Parallax Banner Section */}
        <section ref={bannerRef} className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <Image
              src="/about-us/about-us-banner.png"
              alt="About Us Banner"
              fill
              className="object-cover"
              priority
            />
            {/* Optional Overlay to ensure visibility if needed */}
            <div className="absolute inset-0 bg-brand-deep-blue/10" />
          </motion.div>
        </section>

        {/* About Video Section */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-[#000000] mb-12"
            >
              {t.about.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              <video
                className="w-full h-full object-cover"
                controls
                poster="/about-us/about-us-banner.png"
              >
                <source src="/about-us/about-us-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer t={t.footer} currentLang={locale} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
