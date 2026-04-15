"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  t: {
    contactUs: string;
    address: string;
    phone: string;
    email: string;
    companyName: string;
    copyright: string;
    icp: string;
    links: {
      company: string;
      about: string;
      news: string;
      careers: string;
      resources: string;
      tech: string;
      solutions: string;
      support: string;
      contact: string;
      legal: string;
      privacy: string;
      terms: string;
    };
  };
  currentLang: "en" | "zh";
}

export default function Footer({ t, currentLang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white border-t border-brand-deep-blue/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href={`/?lang=${currentLang}`} className="inline-block">
              <Image
                src="/logo/logo-with-company-name.png"
                alt={t.companyName}
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6">{t.links.company}</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/about?lang=${currentLang}`} className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href={`/news?lang=${currentLang}`} className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.news}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6">{t.links.resources}</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/tech?lang=${currentLang}`} className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.tech}
                </Link>
              </li>
              <li>
                <Link href={`/solutions?lang=${currentLang}`} className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.solutions}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-brand-deep-blue/60 hover:text-brand-orange transition-colors text-sm font-medium">
                  {t.links.support}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6">{t.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                <span className="text-brand-deep-blue/60 text-sm font-medium leading-relaxed">
                  {t.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <span className="text-brand-deep-blue/60 text-sm font-medium">
                  {t.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span className="text-brand-deep-blue/60 text-sm font-medium">
                  {t.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-deep-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-brand-deep-blue/40 text-xs font-medium space-x-4">
            <span>{t.copyright.replace("{{year}}", currentYear.toString())}</span>
            <span className="hidden md:inline">|</span>
            <span className="block md:inline mt-2 md:mt-0">{t.icp}</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors text-xs font-medium uppercase tracking-wider">
              {t.links.privacy}
            </Link>
            <Link href="#" className="text-brand-deep-blue/40 hover:text-brand-orange transition-colors text-xs font-medium uppercase tracking-wider">
              {t.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
