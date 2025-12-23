"use client";

import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FocusAreas from '../components/FocusAreas';
import Solutions from '../components/Solutions';
import Footer from '../components/Footer';
import CompanyProfile from '../components/CompanyProfile';
import { useTranslation } from '../hooks/useTranslation';

function HomeContent() {
  const { t, locale } = useTranslation();

  return (
    <main className="min-h-screen bg-white">
      <Navbar nav={t.nav} currentLang={locale} />
      <Hero
        title={t.hero.title}
        description={t.hero.description}
        learnMoreText={t.hero.learnMore}
        watchVideoText={t.hero.watchVideo}
      />
      <CompanyProfile
        label={t.company.label}
        title={t.company.title}
        description={t.company.description}
      />
      <Solutions
        title={t.products.title}
        description={t.products.description}
      />
      <FocusAreas
        title={t.news.title}
        readMore={t.news.readMore}
        items={t.news.items}
      />
      <Footer
        contactUs={t.footer.contactUs}
        addressLabel={t.footer.addressLabel}
        phoneLabel={t.footer.phoneLabel}
        websiteLabel={t.footer.websiteLabel}
        address={t.footer.address}
        phone={t.footer.phone}
        website={t.footer.website}
        copyright={t.footer.copyright}
        icp={t.footer.icp}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
