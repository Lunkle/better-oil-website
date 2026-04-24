import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { LocaleKey } from '@/locales';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang: LocaleKey;
  className?: string;
}

export default function Breadcrumb({ items, lang, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-500 font-medium ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400 shrink-0" />}
            {isLast || !item.href ? (
              <span className="text-brand-deep-blue">{item.label}</span>
            ) : (
              <Link
                href={`${item.href}?lang=${lang}`}
                className="hover:text-brand-orange transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
