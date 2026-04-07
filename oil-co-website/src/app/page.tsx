"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "../hooks/useTranslation";
import { ChevronDown, Globe, Shield, Cpu, ExternalLink } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  suffix: string;
  details: string[];
}

interface TechItem {
  title: string;
  description: string;
}

interface ESGArea {
  title: string;
  description: string;
}

function HomeContent() {
  const { t, locale } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [activeStat, setActiveStat] = useState(0);

  // Static positions to satisfy purity rules while keeping it looking "random"
  const mapNodes = [
    { top: "25%", left: "30%", delay: 0 },
    { top: "40%", left: "60%", delay: 0.5 },
    { top: "65%", left: "25%", delay: 1.0 },
    { top: "75%", left: "70%", delay: 1.5 },
    { top: "30%", left: "75%", delay: 2.0 },
    { top: "55%", left: "40%", delay: 2.5 },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;
      const height = container.clientHeight;
      const index = Math.round(scrollPos / height);
      setActiveSection(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative bg-background h-screen overflow-hidden">
      <Navbar nav={t.nav} currentLang={locale} />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === i ? "bg-primary scale-125 shadow-[0_0_10px_#ff6600]" : "bg-black/20 hover:bg-black/40"
            }`}
          />
        ))}
      </div>

      <div
        id="main-container"
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Section 1: Hero */}
        <section id="hero" className="snap-start h-screen w-full relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 z-10" />
             <div className="w-full h-full bg-[#fdfdfd] relative overflow-hidden">
                {/* Abstract Tech Background */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-5"
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
             </div>
          </div>

          <div className="container mx-auto px-6 z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter mb-4">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-bold tracking-widest uppercase mb-8">
                {t.hero.subtitle}
              </p>
              <p className="max-w-2xl mx-auto text-foreground/60 text-lg mb-10 leading-relaxed font-medium">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-black transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                  {t.hero.explore}
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
                  </div>
                  {t.hero.video}
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary cursor-pointer"
            onClick={() => scrollToSection(1)}
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* Section 2: Strategic Overview */}
        <section id="global" className="snap-start h-screen w-full relative bg-secondary flex items-center pt-20">
           <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full justify-center"
              >
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">{t.global.subtitle}</span>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">{t.global.title}</h2>
                <p className="text-foreground/60 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                  {t.global.description}
                </p>

                {/* Stats Interactive Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {t.global.stats.map((stat: Stat, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveStat(i)}
                      className={`relative border-l-4 pl-6 py-4 transition-all text-left group ${
                        activeStat === i ? "border-primary bg-white shadow-xl translate-x-2" : "border-black/5 bg-white/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-baseline gap-1">
                        <div className={`text-4xl font-black mb-1 transition-colors ${activeStat === i ? "text-primary" : "text-black/30"}`}>{stat.value}</div>
                        <div className={`text-sm font-bold uppercase transition-colors ${activeStat === i ? "text-primary/60" : "text-black/20"}`}>{stat.suffix}</div>
                      </div>
                      <div className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeStat === i ? "text-foreground" : "text-black/30"}`}>{stat.label}</div>

                      {/* Active Indicator Pin */}
                      {activeStat === i && (
                        <motion.div
                          layoutId="stat-indicator"
                          className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rotate-45"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Carousel Content Underneath */}
                <div className="relative overflow-hidden bg-white/40 border border-border p-8 min-h-[200px]">
                  <motion.div
                    key={activeStat}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                       <div className="w-8 h-px bg-primary" />
                       {t.global.stats[activeStat].label}
                    </h3>
                    <ul className="space-y-3">
                      {t.global.stats[activeStat].details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground/70 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-square flex items-center justify-center lg:block hidden"
              >
                {/* Decorative Visual */}
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-10 border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl overflow-hidden border border-border relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03]" />
                   <Globe size={300} className="text-primary/5" />
                   {/* Decorative nodes */}
                   {mapNodes.map((node, i) => (
                     <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#ff6600] animate-pulse"
                        style={{
                          top: node.top,
                          left: node.left,
                          animationDelay: `${node.delay}s`
                        }}
                     />
                   ))}
                </div>
              </motion.div>
           </div>
        </section>

        {/* Section 3: Core Technology */}
        <section id="tech" className="snap-start h-screen w-full relative bg-white flex items-center">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                  {t.tech.subtitle}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
                >
                  {t.tech.title}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.tech.items.map((item: TechItem, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="group relative p-8 bg-secondary border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                       <Cpu className="text-primary" size={40} />
                    </div>
                    <div className="w-12 h-1 bg-primary mb-8 group-hover:w-full transition-all duration-500" />
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-foreground/50 leading-relaxed mb-8 font-medium">{item.description}</p>
                    <button className="flex items-center gap-2 text-foreground/40 text-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                      Learn More <ExternalLink size={14} />
                    </button>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* Section 4: ESG & Footer */}
        <section id="esg" className="snap-start h-screen w-full relative bg-secondary flex flex-col justify-between overflow-hidden">
           <div className="flex-grow flex items-center">
             <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                   >
                      <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">{t.esg.subtitle}</span>
                      <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">{t.esg.title}</h2>
                      <p className="text-foreground/60 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                        {t.esg.description}
                      </p>
                      <div className="space-y-6">
                         {t.esg.areas.map((area: ESGArea, i: number) => (
                           <div key={i} className="flex gap-6 items-start group">
                              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                 <Shield size={20} className="text-foreground group-hover:text-primary" />
                              </div>
                              <div>
                                 <h4 className="text-foreground font-bold text-xl mb-1">{area.title}</h4>
                                 <p className="text-foreground/40 text-sm">{area.description}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </motion.div>

                   <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="relative bg-primary/5 aspect-video border border-border p-1"
                   >
                      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary" />
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary" />
                      <div className="w-full h-full bg-white backdrop-blur-sm flex items-center justify-center relative group">
                         {/* Abstract Video Placeholder */}
                         <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/20">
                               <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1.5" />
                            </div>
                            <span className="text-foreground font-bold tracking-widest uppercase text-xs">Play Showreel</span>
                         </div>
                         <div className="absolute bottom-4 left-4 text-[10px] text-foreground/30 font-mono">
                            DATA_STREAM: ACTIVE // SYSTEM_STABLE: 100%
                         </div>
                      </div>
                   </motion.div>
                </div>
             </div>
           </div>

           {/* In-page Footer */}
           <div className="w-full border-t border-border bg-white pt-10 pb-6">
              <div className="container mx-auto px-6">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div>
                       <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center rotate-45">
                             <div className="w-4 h-4 bg-white rounded-full" />
                          </div>
                          <span className="font-bold text-lg tracking-wider text-foreground uppercase">Better Petroleum</span>
                       </div>
                       <p className="text-foreground/40 text-sm max-w-sm font-medium">
                          Innovation driving the future of energy. Leading the way in petroleum technology and sustainable solutions.
                       </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                       <div>
                          <h5 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4">Company</h5>
                          <ul className="space-y-2 text-foreground/40 text-xs font-bold">
                             <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                             <li><a href="#" className="hover:text-primary transition-colors">Career</a></li>
                             <li><a href="#" className="hover:text-primary transition-colors">ESG</a></li>
                          </ul>
                       </div>
                       <div>
                          <h5 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4">Support</h5>
                          <ul className="space-y-2 text-foreground/40 text-xs font-bold">
                             <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                             <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                             <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border text-[10px] text-foreground/30 font-mono tracking-widest">
                    <span>{t.footer.copyright}</span>
                    <span>{t.footer.icp}</span>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-black flex items-center justify-center text-accent font-mono">LOADING_SYSTEM...</div>}>
      <HomeContent />
    </Suspense>
  );
}
