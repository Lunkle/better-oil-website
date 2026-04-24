"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, Globe, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/locales';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  nav: {
    toggleLang: string;
    companyName: string;
    items: NavItem[];
  };
  currentLang: 'en' | 'zh';
}

export default function Navbar({ nav, currentLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleLang = currentLang === 'en' ? 'zh' : 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/?lang=${currentLang}`} className="flex items-center">
              <Image
                src="/logo/logo-with-company-name.png"
                alt={nav.companyName}
                width={200}
                height={50}
                priority
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation using shadcn NavigationMenu */}
          <div className="hidden lg:flex items-center h-full">
            <NavigationMenu>
              <NavigationMenuList className="h-full space-x-2">
                {nav.items.map((item) => (
                  <NavigationMenuItem key={item.name} className="h-full flex items-center">
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground/70 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase px-4 focus:bg-transparent shadow-none border-none hover:shadow-none hover:border-none focus:shadow-none focus:border-none ring-0 focus-visible:ring-0 outline-none">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="flex w-max min-w-[240px] bg-brand-white border-0 shadow-none overflow-visible rounded-none">
                            {/* Left Column */}
                            <div className="flex-1 w-full min-w-[200px]">
                              {item.dropdown.map((parentItem, idx) => {
                                const hasChildren = parentItem.children && parentItem.children.length > 0;
                                return (
                                  <div key={idx} className="relative group/nav-dropdown bg-gray-50 hover:bg-gray-100 text-foreground hover:text-brand-red transition-colors duration-200">
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
                                        {hasChildren && <ChevronRight className="size-4 shrink-0 text-gray-400 group-hover/nav-dropdown:text-brand-red transition-colors" />}
                                      </div>
                                    )}
                                    {/* Right Column content shows on hover of this item using CSS group-hover */}
                                    {hasChildren && (
                                      <div className="hidden group-hover/nav-dropdown:flex absolute left-full top-0 h-full min-h-[100%] w-[300px] border-l border-border bg-gray-100/80 p-4 flex-col space-y-4">
                                        {parentItem.children!.map((child) => (
                                          <Link
                                            key={child.name}
                                            href={`${child.href}?lang=${currentLang}`}
                                            className="group/child flex items-center gap-2 text-sm text-foreground/80 hover:text-brand-red transition-colors"
                                          >
                                            <ChevronRight className="size-4 shrink-0 text-gray-400 group-hover/child:text-brand-red transition-colors" />
                                            <span>{child.name}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            {/* Empty space reservation to ensure the NavigationMenuContent size allows for the absolute right column without clipping */}
                            {item.dropdown.some(p => p.children) && (
                              <div className="w-[300px] opacity-0 pointer-events-none" />
                            )}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={`${item.href}?lang=${currentLang}`} legacyBehavior passHref>
                        <NavigationMenuLink className="bg-transparent hover:bg-transparent text-foreground/70 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase px-4 focus:bg-transparent shadow-none border-none hover:shadow-none hover:border-none focus:shadow-none focus:border-none ring-0 focus-visible:ring-0 outline-none">
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-foreground/70 hover:text-primary font-bold text-xs"
              asChild
            >
              <Link href={`${pathname}?lang=${toggleLang}`}>
                <Globe className="h-3 w-3" />
                <span>{nav.toggleLang}</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${isOpen ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
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
              {nav.items.map((link) => (
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
                  <span>{nav.toggleLang}</span>
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
