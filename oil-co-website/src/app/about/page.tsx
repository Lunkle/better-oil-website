"use client";

import { Suspense, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "../../hooks/useTranslation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
        <section ref={bannerRef} className="relative h-[40vh] md:h-[60vh] overflow-hidden flex items-center">
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
          {/* Text overlay on banner */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white text-left tracking-wider shadow-sm"
            >
              {t.nav.companyName}
            </motion.h1>
          </div>
        </section>

        {/* About Title & Video Section */}
        <section className="py-12 md:py-24 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16">

              {/* Left Column: Heading with orange background and red vertical line */}
              <div className="flex-1 flex items-stretch">
                <div className="w-2 bg-brand-red flex-shrink-0" /> {/* Red vertical line */}
                <div className="bg-brand-orange p-8 md:p-16 flex items-center flex-1">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#000000] leading-tight"
                  >
                    {t.about.title}
                  </motion.h2>
                </div>
              </div>

              {/* Right Column: Video */}
              <div className="flex-1 flex flex-col justify-center">
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

            </div>
          </div>
        </section>

        {/* Dynamic Horizontal Slices */}
        {t.about.sections?.map((section, index) => (
          <DynamicSection key={index} section={section} locale={locale} />
        ))}
      </main>

      <Footer t={t.footer} currentLang={locale} />
    </div>
  );
}

// --- Local Components ---

function DynamicSection({ section, locale }: { section: any; locale: string }) {
  return (
    <section className="py-12 md:py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${section.imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>

          {/* Image portion (45%) */}
          <div className="w-full md:w-[45%] flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"
            >
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={600}
                className="object-contain max-h-full"
              />
            </motion.div>
          </div>

          {/* Content portion (55%) */}
          <div className="w-full md:w-[55%] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-brand-deep-blue mb-6">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.content.split('\n\n').map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} className="text-brand-deep-blue/80 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href={section.link.startsWith('/') ? `${section.link}?lang=${locale}` : section.link}
                className={`inline-block px-8 py-3 font-bold text-white transition-transform hover:scale-105 ${
                  section.buttonColor === 'red' ? 'bg-brand-red' : 'bg-brand-orange'
                }`}
              >
                {section.button}
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Main Page Export ---

export default function AboutPage() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
