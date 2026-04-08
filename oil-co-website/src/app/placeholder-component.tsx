'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

export default function Placeholder({ title }: { title: string }) {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const locale = lang === 'en' ? 'en' : 'zh';
  const t = locale === 'en' ? en : zh;

  return (
    <>
    <Navbar nav={t.nav} currentLang={locale} />
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white p-12 rounded-lg shadow-sm text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-gray-500 mb-8">
          {t.placeholders.comingSoon}
        </p>
        <Link
          href={`/?lang=${lang}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-black transition-colors"
        >
          {t.placeholders.backHome}
        </Link>
      </div>
    </div>
    </>
  );
}
