import { useSearchParams } from 'next/navigation';
import { dictionaries, LocaleKey } from '../locales';

export function useTranslation() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');

  const locale: LocaleKey = (langParam === 'zh') ? 'zh' : 'en';
  const t = dictionaries[locale];

  return { t, locale };
}
