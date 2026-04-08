"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Item1 from "./carousel/Item1";
import Item2 from "./carousel/Item2";
import Item3 from "./carousel/Item3";
import Item4 from "./carousel/Item4";

interface TabInfo {
  value: string;
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-switch logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabs.length);
    }, autoSwitchInterval);
    return () => clearInterval(timer);
  }, [tabs.length, autoSwitchInterval, activeIndex]);

  useEffect(() => {
    // Scroll active tab into view for mobile
    if (scrollContainerRef.current) {
      const activeTabElement = scrollContainerRef.current.children[activeIndex] as HTMLElement;
      if (activeTabElement) {
        activeTabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + tabs.length) % tabs.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % tabs.length);
  };

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

        {/* Tab Headers with Mobile Controls */}
        <div role="tablist" className="relative mb-8 md:mb-16 border-b-2 border-slate-200 flex items-center">

          {/* Mobile Prev Button */}
          <button
            onClick={handlePrev}
            className="md:hidden p-2 text-slate-500 hover:text-primary z-10"
            aria-label="Previous tab"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:justify-between items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative min-w-[80%] sm:min-w-[50%] md:min-w-0 flex-1 py-4 md:py-8 text-center group overflow-visible snap-center shrink-0"
              >
                {/* Active Indicator Sliding Background */}
                {activeIndex === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary -top-2 -bottom-2 md:-top-4 md:-bottom-4 z-0"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-baseline justify-center gap-1 md:gap-2 px-2">
                  <span
                    className={`text-4xl md:text-7xl font-black transition-colors ${
                      activeIndex === idx ? "text-white" : "text-slate-800 group-hover:text-primary"
                    }`}
                  >
                    {tab.value}
                  </span>
                  <span
                    className={`text-sm md:text-2xl font-bold md:ml-2 transition-colors whitespace-normal ${
                      activeIndex === idx ? "text-white" : "text-slate-800 group-hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={handleNext}
            className="md:hidden p-2 text-slate-500 hover:text-primary z-10"
            aria-label="Next tab"
          >
            <ChevronRight size={24} />
          </button>
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
