"use client";

import Link from 'next/link';
import { Search, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  nav: {
    home: string;
    about: string;
    tech: string;
    solutions: string;
    news: string;
    contact: string;
    lang: string;
  };
  currentLang: 'en' | 'zh';
}

export default function Navbar({ nav, currentLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLang = currentLang === 'en' ? 'zh' : 'en';

  const navLinks = [
    { name: nav.home, href: `/?lang=${currentLang}` },
    { name: nav.about, href: `/about?lang=${currentLang}` },
    { name: nav.tech, href: `/tech?lang=${currentLang}` },
    { name: nav.solutions, href: `/solutions?lang=${currentLang}` },
    { name: nav.news, href: `/news?lang=${currentLang}` },
    { name: nav.contact, href: `/contact?lang=${currentLang}` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/?lang=${currentLang}`} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center transform transition-transform group-hover:rotate-45">
                 <div className="w-5 h-5 bg-black rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white uppercase">Better Petroleum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href={`/?lang=${toggleLang}`}
              className="flex items-center space-x-2 text-white/70 hover:text-accent transition-colors border border-white/20 rounded-full px-3 py-1 text-xs"
            >
              <Globe className="h-3 w-3" />
              <span>{nav.lang}</span>
            </Link>
            <button className="text-white/70 hover:text-accent transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-accent text-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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
            className="lg:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-white/10 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-accent transition-colors text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <Link
                  href={`/?lang=${toggleLang}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-accent"
                >
                  <Globe className="h-5 w-5" />
                  <span>{nav.lang}</span>
                </Link>
                <Search className="h-5 w-5 text-white/70" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
