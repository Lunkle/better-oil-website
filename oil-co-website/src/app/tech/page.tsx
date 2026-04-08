"use client";

import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

function Content() {
  const { t, locale } = useTranslation();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar nav={t.nav} currentLang={locale} />
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 mt-20">
        <div className="space-y-8 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tighter">{t.nav.tech}</h1>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-foreground/40 font-mono text-sm tracking-widest">{t.placeholders.comingSoon}</p>
          <Link
            href={`/?lang=${locale}`}
            className="inline-flex items-center gap-2 text-primary border border-primary/20 px-6 py-3 hover:bg-primary hover:text-white transition-all font-bold"
          >
            <MoveLeft size={16} /> {t.placeholders.backHome}
          </Link>
        </div>
      </div>
      <Footer t={t.footer} currentLang={locale} />
    </div>
  );
}

export default function TechPage() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
