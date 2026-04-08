"use client";

import Link from 'next/link';
import { Search, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

interface NavSection {
  name: string;
  href: string;
  items?: NavItem[];
}

interface NavbarProps {
  nav: {
    about: NavSection;
    tech: NavSection;
    productsServices: { name: string; href: string };
    cases: { name: string; href: string };
    news: { name: string; href: string };
    cooperation: { name: string; href: string };
    lang: string;
  };
  currentLang: 'en' | 'zh';
}

export default function Navbar({ nav, currentLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTechItem, setActiveTechItem] = useState<NavItem | null>(null);
  const pathname = usePathname();
  const toggleLang = currentLang === 'en' ? 'zh' : 'en';

  const navLinks = [
    { ...nav.tech, key: 'tech', hasDropdown: true, type: 'double' as const },
    { ...nav.about, key: 'about', hasDropdown: true, type: 'single' as const },
    { ...nav.productsServices, key: 'productsServices', hasDropdown: false, type: 'none' as const },
    { ...nav.cases, key: 'cases', hasDropdown: false, type: 'none' as const },
    { ...nav.news, key: 'news', hasDropdown: false, type: 'none' as const },
    { ...nav.cooperation, key: 'cooperation', hasDropdown: false, type: 'none' as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/?lang=${currentLang}`} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center transform transition-transform group-hover:rotate-45">
                 <div className="w-5 h-5 bg-white rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-wider text-foreground uppercase">Better Petroleum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navLinks.map((link) => (
              <div key={link.key} className="relative group h-full flex items-center">
                <Link
                  href={`${link.href}?lang=${currentLang}`}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase py-8"
                >
                  {link.name}
                </Link>

                {/* Dropdowns */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-max bg-white shadow-lg border border-border/50 text-sm font-medium z-50">
                    {link.type === 'single' && link.items && (
                      <div className="py-2 min-w-[200px]">
                        {link.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={`${item.href}?lang=${currentLang}`}
                            className="block px-6 py-3 text-foreground/80 hover:bg-gray-100 hover:text-primary transition-colors whitespace-nowrap"
                          >
                            <span className="mr-2">&gt;</span> {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {link.type === 'double' && link.items && (
                      <div className="flex bg-white min-h-[300px]" onMouseLeave={() => setActiveTechItem(null)}>
                        {/* Left Column */}
                        <div className="w-[280px] bg-gray-100/50 py-2 border-r border-border/50">
                          {link.items.map((item, idx) => (
                            <div
                              key={idx}
                              onMouseEnter={() => setActiveTechItem(item)}
                              className={`px-6 py-3 cursor-pointer transition-colors whitespace-nowrap ${
                                activeTechItem === item
                                  ? 'bg-white text-primary font-bold'
                                  : 'text-foreground/80 hover:bg-gray-200/50 hover:text-primary'
                              }`}
                            >
                              <span className="mr-2">&gt;</span> {item.name}
                            </div>
                          ))}
                        </div>

                        {/* Right Column */}
                        <div className="w-[320px] bg-white py-2">
                          {activeTechItem && activeTechItem.subItems && activeTechItem.subItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={`${subItem.href}?lang=${currentLang}`}
                              className="block px-6 py-3 text-foreground/80 hover:text-primary transition-colors whitespace-nowrap hover:bg-gray-50"
                            >
                              <span className="mr-2">&gt;</span> {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href={`${pathname}?lang=${toggleLang}`}
              className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors border border-border rounded-full px-3 py-1 text-xs font-bold"
            >
              <Globe className="h-3 w-3" />
              <span>{nav.lang}</span>
            </Link>
            <button className="text-foreground/70 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-primary text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${isOpen ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 border-b border-border p-4 shadow-xl overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.key} className="flex flex-col">
                  <Link
                    href={`${link.href}?lang=${currentLang}`}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                    className="text-foreground/70 hover:text-primary transition-colors text-lg font-bold uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                  {/* Simplistic mobile sub-menus */}
                  {link.hasDropdown && 'items' in link && link.items && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-border/50">
                      {link.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          {item.href ? (
                            <Link
                              href={`${item.href}?lang=${currentLang}`}
                              onClick={() => setIsOpen(false)}
                              className="text-foreground/60 text-sm hover:text-primary py-1"
                            >
                              <span className="mr-2">&gt;</span> {item.name}
                            </Link>
                          ) : (
                            <span className="text-foreground/80 font-medium text-sm py-1">
                              {item.name}
                            </span>
                          )}
                          {item.subItems && (
                            <div className="pl-4 mt-1 space-y-1">
                              {item.subItems.map((sub, sidx) => (
                                <Link
                                  key={sidx}
                                  href={`${sub.href}?lang=${currentLang}`}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-foreground/50 text-xs hover:text-primary py-1"
                                >
                                  <span className="mr-1">-</span> {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border flex justify-between items-center">
                <Link
                  href={`${pathname}?lang=${toggleLang}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-primary font-bold"
                >
                  <Globe className="h-5 w-5" />
                  <span>{nav.lang}</span>
                </Link>
                <Search className="h-5 w-5 text-foreground/70" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
