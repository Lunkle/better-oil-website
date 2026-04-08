"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Item1 from "./carousel/Item1";
import Item2 from "./carousel/Item2";
import Item3 from "./carousel/Item3";
import Item4 from "./carousel/Item4";

interface TabInfo {
  value: string;
  suffix: string;
  label: string;
}

interface CarouselProps {
  tabs: TabInfo[];
  item1Data: any;
  item2Data: any;
  item3Data: any;
  item4Data: any;
  autoSwitchInterval?: number; // in milliseconds
}

export default function Carousel({
  tabs,
  item1Data,
  item2Data,
  item3Data,
  item4Data,
  autoSwitchInterval = 5000,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabs.length);
    }, autoSwitchInterval);
    return () => clearInterval(timer);
  }, [tabs.length, autoSwitchInterval]);

  // Render active item based on index
  const renderItem = () => {
    switch (activeIndex) {
      case 0:
        return <Item1 data={item1Data} />;
      case 1:
        return <Item2 data={item2Data} />;
      case 2:
        return <Item3 data={item3Data} />;
      case 3:
        return <Item4 data={item4Data} />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">

        {/* Tab Headers */}
        <div className="relative flex justify-between items-center mb-16 border-b-2 border-slate-200">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative flex-1 py-8 text-center group overflow-visible"
            >
              {/* Active Indicator Sliding Background */}
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary -top-4 -bottom-4 z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="relative z-10 flex items-baseline justify-center gap-2">
                <span
                  className={`text-7xl font-black transition-colors ${
                    activeIndex === idx ? "text-white" : "text-slate-800 group-hover:text-primary"
                  }`}
                >
                  {tab.value}
                </span>
                <span
                  className={`text-2xl font-bold transition-colors ${
                    activeIndex === idx ? "text-white/90" : "text-slate-500 group-hover:text-primary/80"
                  }`}
                >
                  {tab.suffix}
                </span>
                <span
                  className={`text-2xl font-bold ml-2 transition-colors ${
                    activeIndex === idx ? "text-white" : "text-slate-800 group-hover:text-primary"
                  }`}
                >
                  {tab.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Carousel Body */}
        <div className="relative w-full">
           <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
           >
              {renderItem()}
           </motion.div>
        </div>

      </div>
    </section>
  );
}
