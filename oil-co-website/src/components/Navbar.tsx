"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavItem, NavItemParent } from '@/locales';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface NavbarProps {
  nav: {
    toggleLang: string;
    companyName: string;
    items: NavItem[];
  };
  currentLang: 'en' | 'zh';
}

/** Desktop dropdown nav item that opens/closes on hover. */
const DROPDOWN_CLOSE_DELAY_MS = 150;

function NavDropdownItem({ item, currentLang }: { item: NavItem & { dropdown: NavItemParent[] }; currentLang: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), DROPDOWN_CLOSE_DELAY_MS);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        className={cn(navigationMenuTriggerStyle, "h-20 gap-1")}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {item.name}
        <ChevronDown className={cn("size-3 transition-transform duration-300", open && "rotate-180")} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="p-1 min-w-[220px]"
        sideOffset={0}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {item.dropdown.map((parentItem) =>
          parentItem.children && parentItem.children.length > 0 ? (
            <DropdownMenuSub key={parentItem.parent}>
              <DropdownMenuSubTrigger className="text-sm font-medium text-foreground/70 data-[state=open]:text-brand-red data-[state=open]:bg-accent px-4 py-3">
                {parentItem.parent}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-1 min-w-[220px]">
                {parentItem.children.map((child) => (
                  <DropdownMenuItem key={child.name} asChild className="text-sm text-foreground/70 focus:text-brand-red focus:bg-accent px-4 py-2.5 cursor-pointer">
                    <Link href={`${child.href}?lang=${currentLang}`}>
                      {child.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem key={parentItem.parent} asChild className="text-sm font-medium text-foreground/70 focus:text-brand-red focus:bg-accent px-4 py-3 cursor-pointer">
              <Link href={`${parentItem.href ?? item.href}?lang=${currentLang}`}>
                {parentItem.parent}
              </Link>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {nav.items.map((item) => item.dropdown ? (
              <NavDropdownItem key={item.name} item={item as NavItem & { dropdown: NavItemParent[] }} currentLang={currentLang} />
            ) : (
              <Link
                key={item.name}
                href={`${item.href}?lang=${currentLang}`}
                className={cn(navigationMenuTriggerStyle, "h-20")}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href={`${pathname}?lang=${toggleLang}`}
              className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors border border-border px-3 py-1 text-xs font-bold"
            >
              <Globe className="h-3 w-3" />
              <span>{nav.toggleLang}</span>
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
