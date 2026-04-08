'use client';

import { useSearchParams } from 'next/navigation';
import Placeholder from '../../placeholder-component';
import { en } from '../../../locales/en';
import { zh } from '../../../locales/zh';

export default function AboutSubPageClient({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = lang === 'en' ? en : zh;

  // Find the localized name by matching the slug to the href
  const targetHref = `/about/${slug}`;
  const matchedItem = t.nav.about.items.find((item) => item.href === targetHref);

  // Use the localized name if found, fallback to raw slug
  const title = matchedItem ? `${t.nav.about.name}: ${matchedItem.name}` : `About Us: ${slug}`;

  return <Placeholder title={title} />;
}
