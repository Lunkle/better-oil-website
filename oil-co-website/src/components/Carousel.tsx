"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Item1 from "./carousel/Item1";
import Item2 from "./carousel/Item2";
import Item3 from "./carousel/Item3";
import Item4 from "./carousel/Item4";

interface CarouselProps {
  tabs: string[];
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
        <div className="relative flex justify-between items-center mb-12 border-b-2 border-slate-100">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative flex-1 py-4 text-center group"
            >
              <span
                className={`text-lg md:text-xl font-black transition-colors ${
                  activeIndex === idx ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                {tab}
              </span>

              {/* Active Indicator Sliding Rectangle */}
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-2px] left-0 right-0 h-1 bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
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
