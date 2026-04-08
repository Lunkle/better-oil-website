import Navbar from "../../../components/Navbar";
import { en } from "../../../locales/en";
import { zh } from "../../../locales/zh";
import Placeholder from "../../placeholder-component";

export function generateStaticParams() {
  const slugs = [
    "company-profile",
    "mission-vision",
    "development-history",
    "honors-qualifications"
  ];
  return slugs.map((slug) => ({ slug }));
}

import { Suspense } from 'react';

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
        {/* We use a client component wrapper in Placeholder for the Navbar to get search params */}
        <Placeholder title={`About Us: ${slug}`} />
      </Suspense>
    </main>
  );
}
