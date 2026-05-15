"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { ArrowRight, Gauge, Thermometer, Beaker, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface ContentNode {
  title: string;
  pain: string;
  solution: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface MetricIconItem {
  title: string;
  desc: string;
}

interface LimitationCard {
  title: string;
  desc: string;
}

function Content() {
  const { t, locale } = useTranslation();
  const content = t.targetedLubrication;

  const breadcrumbItems = content.breadcrumb.map((label: string, idx: number) => {
      // Remove leading "> " if present for Breadcrumb component
      const cleanLabel = label.startsWith("> ") ? label.slice(2) : label;
      let href: string | undefined;

      if (idx === 0) href = `/?lang=${locale}`;
      else if (idx === 1) href = `/?lang=${locale}#tech`;
      else if (idx === 2) href = `/?lang=${locale}#tech`; // Also link to tech section as it's the parent category

      return { label: cleanLabel, href };
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans overflow-x-hidden">
      <Navbar nav={t.nav} currentLang={locale} />

      {/* Section 1: Hero & Breadcrumbs */}
      <section className="relative w-full min-h-[70vh] flex flex-col pt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech/lubrication/high-tech-generic.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 flex-1 flex flex-col">
          <Breadcrumb items={breadcrumbItems} lang={locale} className="mb-12 text-gray-300" />

          <div className="mt-auto mb-20 max-w-4xl">
             <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
             >
               {content.hero.title}
             </motion.h1>

             <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-3 bg-[#00ff41] hover:bg-[#00e63a] text-black px-8 py-4 rounded-none font-bold transition-all group"
             >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </motion.button>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Limitations & Problem Space */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center md:text-left border-l-4 border-[#00ff41] pl-6">
            {content.limitations.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Image */}
            <div className="relative aspect-video rounded-none overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/tech/lubrication/drill-cross-section.png"
                alt="Drill Cross Section"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 to-transparent"></div>
            </div>

            {/* Right side: HUD Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                {/* Background reference visual if needed, but here we'll use style */}
                {content.limitations.cards.map((card: LimitationCard, idx: number) => (
                    <div
                      key={idx}
                      className="bg-slate-900/40 border border-slate-800 p-6 backdrop-blur-sm group hover:border-[#00ff41]/50 transition-all duration-300"
                    >
                        <div className="text-[#00ff41] font-bold text-lg mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[#00ff41]"></span>
                            {card.title}
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {card.desc}
                        </p>
                    </div>
                ))}

                {/* HUD Decorative background */}
                <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none">
                    <Image src="/tech/lubrication/drill-stats.png" alt="HUD Decoration" fill className="object-contain" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dual-Reduction Mechanism */}
      <section className="py-24 bg-slate-900/20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {content.mechanism.title}
            </h2>
            <p className="text-[#00ff41] text-xl font-medium">
              {content.mechanism.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Ball-Bearing Effect */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-slate-800 p-8 flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-8">
                <Image src="/tech/lubrication/ball-bearing-1.png" alt="Ball Bearing 1" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00ff41]">{content.mechanism.left.title}</h3>
              <p className="text-gray-400 leading-relaxed">{content.mechanism.left.desc}</p>
            </motion.div>

            {/* Center: Mechanism/Trigger */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-[#00ff41]/30 p-8 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="relative w-full aspect-square mb-8">
                <Image src="/tech/lubrication/orange-blob.png" alt="Mechanism" fill className="object-contain" />
                {/* Labels for Shell and Core */}
                <div className="absolute top-[20%] left-[15%] bg-black/80 border border-[#00ff41] px-2 py-1 text-xs text-[#00ff41] rounded">
                    {content.mechanism.center.layers[0]}
                </div>
                <div className="absolute top-[50%] left-[45%] bg-black/80 border border-[#00ff41] px-2 py-1 text-xs text-[#00ff41] rounded">
                    {content.mechanism.center.layers[1]}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{content.mechanism.center.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{content.mechanism.center.desc}</p>

              {/* Decorative scanline */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#00ff41]/5 to-transparent h-2 w-full animate-[bounce_3s_infinite] pointer-events-none"></div>
            </motion.div>

            {/* Right: Targeted Lubrication */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-slate-800 p-8 flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-8">
                <Image src="/tech/lubrication/ball-bearing-2.png" alt="Ball Bearing 2" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00ff41]">{content.mechanism.right.title}</h3>
              <p className="text-gray-400 leading-relaxed">{content.mechanism.right.desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Performance Metrics & HUD */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech/lubrication/faded-background-bottle.png"
            alt="Background Bottle"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Grid 1: Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {content.metrics.icons.map((item: MetricIconItem, idx: number) => {
              const Icons = [Gauge, Thermometer, Beaker, Leaf];
              const Icon = Icons[idx];
              return (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 hover:bg-slate-800/80 transition-all group">
                  <div className="w-12 h-12 bg-[#00ff41]/10 flex items-center justify-center mb-6 border border-[#00ff41]/20 group-hover:border-[#00ff41]/50 transition-all">
                    <Icon className="w-6 h-6 text-[#00ff41]" />
                  </div>
                  <h4 className="text-white font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Grid 2: Stats & Radar Chart Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#0d0d0d] p-12 border border-slate-800">
            <div className="relative aspect-square max-w-md mx-auto w-full">
                {/* Visual reference stats.png */}
                <Image src="/tech/lubrication/stats.png" alt="Stats Chart" fill className="object-contain" />
            </div>

            <div className="grid grid-cols-2 gap-6">
                {content.metrics.stats.map((stat: StatItem, idx: number) => (
                    <div key={idx} className="bg-black/50 border-l-2 border-[#00ff41] p-6">
                        <div className="text-[#00ff41] text-2xl md:text-3xl font-black mb-1">{stat.value}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Full-Process Crisis Elimination */}
      <section className="py-24 bg-[#0a0a0a] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
                {content.crisis.title}
            </h2>

            <div className="relative w-full max-w-5xl mx-auto aspect-video mb-16">
                <Image
                    src="/tech/lubrication/friction-mitigations.png"
                    alt="Crisis Elimination Overview"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {content.crisis.nodes.map((node: ContentNode, idx: number) => (
                    <div key={idx} className="bg-slate-900/40 border-t-2 border-[#00ff41] p-8 h-full">
                        <h4 className="text-[#00ff41] font-bold text-lg mb-4">{node.title}</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-brand-red text-xs uppercase font-bold mb-1 opacity-80">Problem</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{node.pain}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-800">
                                <p className="text-[#00ff41] text-xs uppercase font-bold mb-1 opacity-80">Solution</p>
                                <p className="text-white text-sm font-medium leading-relaxed">{node.solution}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Footer t={t.footer} currentLang={locale} />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
