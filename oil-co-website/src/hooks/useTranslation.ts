import { useSearchParams } from 'next/navigation';
import { locales, Locale, Translation } from '../locales';

export function useTranslation() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');

  const locale: Locale = (langParam === 'zh') ? 'zh' : 'en';
  const t: Translation = locales[locale];

  return { t, locale };
}
