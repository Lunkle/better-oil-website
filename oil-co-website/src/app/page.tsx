"use client";

import { Suspense } from "react";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { useTranslation } from "../hooks/useTranslation";

function HomeContent() {
  const { t, locale } = useTranslation();

  return (
    <main className="relative bg-background min-h-screen">
      <Navbar nav={t.nav} navToggle={t.navToggle} currentLang={locale} />

      <HeroVideo
        descriptionLines={t.hero.descriptionLines}
        companyName={t.hero.companyName}
        exploreText={t.hero.explore}
        videoText={t.hero.video}
        currentLang={locale}
      />

      <Carousel
        tabs={t.carouselTabs}
        item1Data={t.carouselItem1}
        item2Data={t.carouselItem2}
        item3Data={t.carouselItem3}
        item4Data={t.carouselItem4}
        autoSwitchInterval={5000}
      />

      <Footer t={t.footer} currentLang={locale} />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-black flex items-center justify-center text-primary font-mono font-bold text-xl tracking-widest">LOADING...</div>}>
      <HomeContent />
    </Suspense>
  );
}
