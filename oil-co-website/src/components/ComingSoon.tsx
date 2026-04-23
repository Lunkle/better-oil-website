"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { NavItem, LocaleKey } from "@/locales";
import { dictionaries } from "@/locales";

type DictionaryType = typeof dictionaries.en;

interface ComingSoonProps {
  t: DictionaryType;
  locale: LocaleKey;
  currentPath: string;
}

export default function ComingSoon({ t, locale, currentPath }: ComingSoonProps) {
  // Try to find the name of the current path from the nav items
  let pageName = "Coming Soon";
  if (locale === "zh") {
    pageName = "敬请期待";
  }

  let foundName = "";

  const findName = (items: NavItem[]) => {
    for (const item of items) {
      if (item.href === currentPath) {
        foundName = item.name;
        return;
      }
      if (item.dropdown) {
        for (const parent of item.dropdown) {
          if (parent.href === currentPath) {
            foundName = parent.parent; // the name for parent items is stored in `parent`
            return;
          }
          if (parent.children) {
            for (const child of parent.children) {
              if (child.href === currentPath) {
                foundName = child.name;
                return;
              }
            }
          }
        }
      }
    }
  };

  findName(t.nav.items);

  if (foundName) {
    pageName = foundName;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar nav={t.nav} currentLang={locale} />
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 mt-20">
        <div className="space-y-8 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tighter">
            {pageName}
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="text-foreground/40 font-mono text-sm tracking-widest">
            {t.placeholders.comingSoon}
          </p>
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
