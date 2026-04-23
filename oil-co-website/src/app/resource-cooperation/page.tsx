"use client";

import { Suspense } from "react";
import ComingSoon from "../../components/ComingSoon";
import { useTranslation } from "../../hooks/useTranslation";

function Content() {
  const { t, locale } = useTranslation();
  return <ComingSoon t={t} locale={locale} currentPath="/resource-cooperation" />;
}

export default function ResourceCooperationPage() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
