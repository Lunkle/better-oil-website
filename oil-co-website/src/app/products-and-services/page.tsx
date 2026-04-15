"use client";
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

function Content() {
  const { t, locale } = useTranslation();
  return (
    <main className="min-h-screen bg-brand-white pt-20">
      <Navbar nav={t.nav} navToggle={t.navToggle} currentLang={locale} />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-brand-deep-blue uppercase tracking-tighter">{t.nav.find((item) => item.href === "/products-and-services")?.name}</h1>
          <div className="h-1 w-20 bg-primary mx-auto mt-8 mb-8" />
          <p className="text-center text-brand-deep-blue/60 font-mono text-sm tracking-widest">{t.placeholders.comingSoon}</p>
        </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}
