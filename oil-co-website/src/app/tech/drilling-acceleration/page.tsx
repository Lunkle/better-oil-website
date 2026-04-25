"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

import { CheckCircle2, TrendingUp, Clock, Target, ShieldCheck } from "lucide-react";

function Content() {
  const { t, locale } = useTranslation();
  const content = t.drillingAcceleration;

  const breadcrumbItems = [
    { label: content.breadcrumb[0], href: '/' },
    { label: content.breadcrumb[1], href: '/tech' },
    { label: content.breadcrumb[2] }
  ];

  const kpiIcons = [TrendingUp, Clock, Target, ShieldCheck];

  return (
    <div className="min-h-screen bg-brand-white flex flex-col font-sans">
      <Navbar nav={t.nav} currentLang={locale} />

      {/* 1. Hero Section */}
      <section
        className="pt-24 pb-32 px-6 w-full bg-white bg-cover bg-center bg-no-repeat aspect-video flex items-start"
        style={{ backgroundImage: "url('/tech/drill/hero.webp')" }}
      >
        <div className="max-w-7xl mx-auto w-full pt-12 md:pt-20">
          <div className="max-w-2xl space-y-6">
            <Breadcrumb items={breadcrumbItems} lang={locale} className="mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep-blue leading-tight">
              {content.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. KPI Stats Grid */}
      <section className="bg-brand-white w-full bg-linear-to-r from-brand-red from-50% to-brand-orange to-50%">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {content.kpi.items.map((item, idx) => {
            const Icon = kpiIcons[idx];
            return (
              <div
                key={idx}
                className={`py-24 md:py-36 px-1 flex flex-col items-center justify-start text-center ${
                  idx % 2 === 0 ? "bg-brand-red text-white" : "bg-brand-orange text-white"
                }`}
              >
                <Icon className="size-16 mb-4 opacity-90" />
                <div className="text-5xl md:text-7xl font-black mb-4">{item.value}</div>
                <div className="text-base md:text-xl font-medium opacity-90 whitespace-pre-wrap">{item.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Problem vs. Solution */}
      <section className="py-20 md:py-36 px-6 w-full relative bg-gray-100 md:bg-linear-to-r from-gray-100 from-[50.5%] to-brand-white to-[50.5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10 gap-16 md:gap-0">
          <div className="flex flex-col justify-center pr-0 md:pr-12 relative z-20">
            <h3 className="text-3xl font-bold text-brand-deep-blue mb-8">{content.problemSolution.leftTitle}</h3>
            <ul className="space-y-6">
              {content.problemSolution.leftPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-brand-red font-medium text-lg">
                  <span className="w-3 h-3 bg-brand-red mt-2 shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            {/* The CSS Triangle pointing right */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full size-0 border-y-60 border-y-transparent border-l-60 border-l-gray-100 z-30"></div>
          </div>

          <div className="md:pl-28 md:pr-0 flex flex-col justify-start relative z-10">
            <h3 className="text-3xl font-bold text-brand-orange mb-6">{content.problemSolution.rightTitle}</h3>
            <p className="text-gray-600 text-xl leading-relaxed">{content.problemSolution.rightSummary}</p>
          </div>
        </div>
      </section>

      {/* 4. Technical Comparison Table */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto shadow-sm border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-brand-deep-blue">
                  <th className="p-6 font-bold border-b border-gray-200">{content.comparison.headers[0]}</th>
                  <th className="p-6 font-bold border-b border-gray-200">{content.comparison.headers[1]}</th>
                  <th className="p-6 font-bold border-b-2 border-brand-orange bg-blue-50/50 text-brand-orange">{content.comparison.headers[2]}</th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-800">{row.metric}</td>
                    <td className="p-6 text-gray-500 whitespace-pre-wrap">{row.trad}</td>
                    <td className="p-6 text-brand-deep-blue font-semibold bg-blue-50/50 border-l border-r border-brand-orange/20 relative">
                       <div className="flex items-center gap-2">
                         <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                         <span>{row.new}</span>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Drill Bit Feature */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square w-full bg-brand-white border-8 border-white shadow-2xl flex items-center justify-center overflow-visible">
            {/* 3D Drill Bit Image */}
            <img
              src="/tech/drill/drill_closeup.webp"
              alt="3D Drill Bit Render"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative rotating element */}
            <div className="absolute -inset-8 border-4 border-dashed border-brand-orange/50 animate-[spin_40s_linear_infinite] z-10 pointer-events-none"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue mb-6">
              {content.drillBit.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
              {content.drillBit.description}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Blueprint Diagram & 3 Rectangles */}
      <section className="py-20 bg-brand-deep-blue text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-left">
             {content.diagram.title}
          </h2>
          <div className="relative aspect-21/9 w-full max-w-5xl mx-auto bg-gray-800 overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center mb-16">
             <img
               src="/tech/drill/blueprint.webp"
               alt="Mechanical Tool Blueprint / Cutaway"
               className="w-full h-full object-contain"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.diagram.items.map((item, idx) => (
              <DecoratedRectangle key={idx} className="bg-brand-deep-blue space-y-2">
                 <h4 className="text-xl font-bold text-brand-orange">{item.title}</h4>
                 <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </DecoratedRectangle>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Circular Process Workflow */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue">
              {content.workflow.title}
            </h2>
          </div>
          <div className="relative max-w-5xl mx-auto flex flex-col items-center justify-center">
            {/* The circular SVG hub */}
            <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center mb-16 md:mb-0">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 {/* Decorative background orbits */}
                 <div className="w-full h-full border border-brand-deep-blue animate-[spin_40s_linear_infinite]"></div>
                 <div className="absolute w-[80%] h-[80%] border border-brand-orange animate-[spin_30s_linear_infinite_reverse]"></div>
               </div>

               <div className="relative z-10 w-48 h-48 border-4 border-brand-white shadow-2xl bg-brand-white p-2">
                 <img src="/tech/drill/drill_closeup.webp" alt="Drill Bit Core" className="w-full h-full object-cover" />
               </div>

               {/* Orbital segments wrapping the core */}
               {content.workflow.steps.map((step, idx) => {
                 const angle = (idx * 360) / 5 - 90;
                 const radiusX = 350; // Elliptical orbit X
                 const radiusY = 200; // Elliptical orbit Y
                 const x = Math.cos((angle * Math.PI) / 180) * radiusX;
                 const y = Math.sin((angle * Math.PI) / 180) * radiusY;

                 return (
                   <div
                     key={idx}
                     className="absolute z-20 w-64 hidden md:flex flex-col items-center justify-center"
                     style={{ transform: `translate(${x}px, ${y}px)` }}
                   >
                     <div className="bg-white shadow-xl border border-gray-100 p-5 relative">
                        <h4 className="text-xl font-bold text-brand-deep-blue mb-2">{step.label}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                     </div>
                   </div>
                 );
               })}
            </div>

            {/* Mobile View for workflow */}
            <div className="flex md:hidden flex-col gap-6 w-full">
              {content.workflow.steps.map((step, idx) => (
                 <div
                   key={idx}
                   className="bg-white shadow-md border border-gray-100 p-6 relative flex flex-col gap-2"
                 >
                   <h4 className="text-xl font-bold text-brand-deep-blue mb-2">{step.label}</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Business Scope Table */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue">
                 {content.businessScope.title}
               </h2>
            </div>
            <div className="bg-white border border-gray-200 overflow-x-auto shadow-sm">
               <table className="w-full text-left border-collapse min-w-[700px]">
                 <tbody>
                   {content.businessScope.subGroups.map((subGroup, groupIdx) => (
                     subGroup.items.map((item, itemIdx) => {
                       const isFirstItemInGroup = itemIdx === 0;
                       const isFirstOverall = groupIdx === 0 && itemIdx === 0;
                       const totalItems = content.businessScope.subGroups.reduce((acc, g) => acc + g.items.length, 0);

                       return (
                         <tr key={`${groupIdx}-${itemIdx}`} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                           {isFirstOverall && (
                             <td rowSpan={totalItems} className="p-6 font-bold text-xl text-white bg-brand-deep-blue w-48 text-center border-r border-brand-deep-blue/20 align-middle">
                               <div className="mx-auto">
                                 {content.businessScope.mainCategory}
                               </div>
                             </td>
                           )}
                           {isFirstItemInGroup && (
                             <td rowSpan={subGroup.items.length} className="p-6 font-bold text-brand-deep-blue bg-blue-50/30 border-r border-gray-100 w-56 align-middle">
                               {subGroup.name}
                             </td>
                           )}
                           <td className="p-6 font-semibold text-gray-800 border-r border-gray-100 w-64 align-middle">
                             {item.tech}
                           </td>
                           <td className="p-6 text-gray-600 align-middle">
                             {item.detail || <span className="text-gray-300">-</span>}
                           </td>
                         </tr>
                       );
                     })
                   ))}
                 </tbody>
               </table>
            </div>
         </div>
      </section>

       {/* 9. Validation & Social Proof */}
       <section className="py-20 px-6 bg-brand-deep-blue text-white">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
             {content.validation.title}
           </h2>
           <div className="flex flex-col md:flex-row gap-12 items-stretch">
              {/* Left Column: 60% */}
              <div className="basis-[60%] shrink-0 relative min-h-[300px] md:min-h-[400px]">
                 <Image
                    src="/tech/drill/certificate.jpg"
                    alt="Certification"
                    fill
                    className="object-contain"
                 />
              </div>

              {/* Right Column: 40% */}
              <div className="basis-[40%] shrink-0 flex flex-col gap-6">
                {content.validation.cards.map((card, idx) => (
                  <DecoratedRectangle key={idx} className="bg-brand-deep-blue">
                      <p className="text-lg font-medium leading-relaxed">{card}</p>
                  </DecoratedRectangle>
                ))}
              </div>
           </div>
        </div>
      </section>

      <Footer t={t.footer} currentLang={locale} />
    </div>
  );
}

function DecoratedRectangle({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className="relative flex-1 flex flex-col group">
        {/* White Rectangles Behind */}
        <div className="absolute -top-0.5 -left-0.5 size-10 group-hover:size-16 transition-all duration-300 bg-brand-white z-0"></div>
        <div className="absolute -bottom-0.5 -right-0.5 size-10 group-hover:size-16 transition-all duration-300 bg-brand-white z-0"></div>

        {/* Main Card */}
        <div className={`relative z-10 border border-brand-white/50 p-8 size-full shadow-lg ${className ?? ''}`}>
          {children}
        </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
