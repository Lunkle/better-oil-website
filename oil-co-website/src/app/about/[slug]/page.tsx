import { Suspense } from 'react';
import AboutSubPageClient from './about-subpage-client';

export function generateStaticParams() {
  const slugs = [
    "company-profile",
    "mission-vision",
    "development-history",
    "honors-qualifications"
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
        <AboutSubPageClient slug={slug} />
      </Suspense>
    </main>
  );
}
