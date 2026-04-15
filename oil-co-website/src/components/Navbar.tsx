"use client";

import Link from 'next/link';
import { Search, Globe, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavItem, NavItemParent } from '@/locales';
import { useTranslation } from '@/hooks/useTranslation';

interface NavbarProps {
  nav: NavItem[];
  navToggle: string;
  currentLang: 'en' | 'zh';
}

export default function Navbar({ nav, navToggle, currentLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredParent, setHoveredParent] = useState<NavItemParent | null>(null);
  const pathname = usePathname();
  const toggleLang = currentLang === 'en' ? 'zh' : 'en';

  const handleNavEnter = (name: string) => {
    setHoveredNav(name);
    setHoveredParent(null);
  };

  const handleNavLeave = () => {
    setHoveredNav(null);
    setHoveredParent(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/?lang=${currentLang}`} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-deep-blue rounded-sm flex items-center justify-center transform transition-transform group-hover:rotate-45">
                 <div className="w-5 h-5 bg-brand-orange rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-wider text-brand-deep-blue uppercase">Better Petroleum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {nav.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center px-4"
                onMouseEnter={() => handleNavEnter(item.name)}
                onMouseLeave={handleNavLeave}
              >
                <Link
                  href={`${item.href}?lang=${currentLang}`}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase"
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && hoveredNav === item.name && (
                  <div className="absolute top-full left-0 mt-0 pt-2 min-w-[240px]">
                    <div className="bg-brand-white border border-border shadow-lg overflow-hidden flex">
                      {/* Left Column (or single column) */}
                      <div className="flex-1 w-full min-w-[200px]">
                        {item.dropdown.map((parentItem) => {
                          const hasChildren = parentItem.children && parentItem.children.length > 0;
                          return (
                            <div
                              key={parentItem.parent}
                              className="relative group bg-gray-50 hover:bg-gray-50 text-foreground hover:text-brand-red"
                              onMouseEnter={() => setHoveredParent(parentItem)}
                            >
                              {parentItem.href ? (
                                <Link
                                  href={`${parentItem.href}?lang=${currentLang}`}
                                  className="block px-6 py-4 text-sm font-medium transition-colors"
                                >
                                  {parentItem.parent}
                                </Link>
                              ) : (
                                <div className="px-6 py-4 flex items-center justify-between font-medium cursor-default transition-colors">
                                  {parentItem.parent}
                                  {hasChildren && <ChevronRight className="size-4 shrink-0 text-gray-400 group-hover:text-brand-red transition-colors" />}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Right Column (for two-column dropdowns) */}
                      {item.dropdown.some(p => p.children) && (
                        <div className="w-[300px] border-l border-border bg-gray-50/50 p-4">
                           {hoveredParent && hoveredParent.children ? (
                             <div className="flex flex-col space-y-4">
                               {hoveredParent.children.map(child => (
                                 <Link
                                   key={child.name}
                                   href={`${child.href}?lang=${currentLang}`}
                                   className="group flex items-center gap-2 text-sm text-foreground/80 hover:text-brand-red transition-colors"
                                 >
                                   <ChevronRight className="size-4 shrink-0 text-gray-400 group-hover:text-brand-red transition-colors" />
                                   <span>{child.name}</span>
                                 </Link>
                               ))}
                             </div>
                           ) : (
                             <div className="text-sm text-gray-400 italic" />
                           )}
                        </div>
                      )}
                    </div>
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
              <span>{navToggle}</span>
            </Link>
            <button className="text-foreground/70 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
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
            className="lg:hidden absolute top-20 left-0 right-0 bg-brand-white/95 border-b border-border p-4 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="flex flex-col space-y-4">
              {nav.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={`${link.href}?lang=${currentLang}`}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/70 hover:text-primary transition-colors text-lg font-bold uppercase tracking-wider py-2"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 border-l-2 border-primary/20 flex flex-col space-y-2 mt-2">
                      {link.dropdown.map(parent => (
                        <div key={parent.parent}>
                          {parent.href ? (
                            <Link
                              href={`${parent.href}?lang=${currentLang}`}
                              onClick={() => setIsOpen(false)}
                              className="text-foreground/60 hover:text-primary text-sm py-1 block"
                            >
                              {parent.parent}
                            </Link>
                          ) : (
                            <div className="text-foreground/60 font-medium text-sm py-1">
                              {parent.parent}
                            </div>
                          )}
                          {parent.children && (
                            <div className="pl-4 flex flex-col mt-1 space-y-1">
                               {parent.children.map(child => (
                                 <Link
                                   key={child.name}
                                   href={`${child.href}?lang=${currentLang}`}
                                   onClick={() => setIsOpen(false)}
                                   className="text-foreground/50 hover:text-primary text-xs py-1 flex items-center"
                                 >
                                    <span className="mr-1 text-primary">•</span>
                                    {child.name}
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
                  <span>{navToggle}</span>
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
