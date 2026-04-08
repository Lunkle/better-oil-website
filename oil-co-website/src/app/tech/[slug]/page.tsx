import Navbar from "../../../components/Navbar";
import { en } from "../../../locales/en";
import { zh } from "../../../locales/zh";
import Placeholder from "../../placeholder-component";

export function generateStaticParams() {
  const slugs = [
    "drilling-speed",
    "ultra-difficult-well",
    "shale-oil-gas-1",
    "shale-oil-gas-2",
    "unconventional-1",
    "unconventional-2",
    "pipeline-anti-corrosion",
    "old-well-renovation"
  ];
  return slugs.map((slug) => ({ slug }));
}

import { Suspense } from 'react';

export default async function TechSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
        <Placeholder title={`Technology: ${slug}`} />
      </Suspense>
    </main>
  );
}
