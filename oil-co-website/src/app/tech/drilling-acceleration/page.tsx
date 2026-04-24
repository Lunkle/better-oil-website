"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";

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
      <section className="pt-32 pb-20 px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Breadcrumb items={breadcrumbItems} lang={locale} className="mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep-blue leading-tight">
            {content.hero.title}
          </h1>
        </div>
        <div
          className="relative aspect-video w-full overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center border border-gray-200"
        >
          {/* Placeholder for Isometric Rig */}
          <div className="text-brand-deep-blue/40 font-mono flex flex-col items-center">
            <span className="text-4xl mb-2">🏗️</span>
            Isometric Rig Illustration
          </div>
        </div>
        </div>
      </section>

      {/* 2. KPI Stats Grid */}
      <section className="bg-brand-white py-12 px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {content.kpi.items.map((item, idx) => {
            const Icon = kpiIcons[idx];
            return (
              <div
                key={idx}
                className={`p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-lg ${
                  idx % 2 === 0 ? "bg-brand-red text-white" : "bg-brand-orange text-white"
                }`}
              >
                <Icon className="w-10 h-10 mb-4 opacity-90" />
                <div className="text-5xl md:text-7xl font-black mb-4">{item.value}</div>
                <div className="text-base md:text-xl font-medium opacity-90 whitespace-pre-wrap">{item.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Problem vs. Solution */}
      <section className="py-20 px-6 w-full bg-white relative">
         {/* Background splits: left gray, right white */}
         <div className="absolute inset-0 flex">
           <div className="w-1/2 bg-gray-100"></div>
           <div className="w-1/2 bg-white"></div>
         </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10">

          <div className="flex flex-col justify-center pr-0 md:pr-12 py-12 relative z-20">
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
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-y-[60px] border-y-transparent border-l-[60px] border-l-gray-100 z-30"></div>
          </div>

          <div className="bg-white p-12 md:p-20 flex flex-col justify-center relative z-10 pl-12 md:pl-28">
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
          <div className="relative aspect-square w-full bg-gray-100 border-8 border-white shadow-2xl flex items-center justify-center">
            {/* Placeholder for 3D Drill Bit */}
            <div className="text-brand-orange font-mono flex flex-col items-center">
               <span className="text-4xl mb-2">🔄</span>
               3D Drill Bit Render
            </div>
            {/* Decorative arrow element */}
            <div className="absolute inset-0 border-4 border-dashed border-brand-orange/30 animate-[spin_20s_linear_infinite]"></div>
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
          <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto bg-gray-800 overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center mb-16">
             {/* Blueprint Placeholder */}
             <div className="text-gray-500 font-mono">Mechanical Tool Blueprint / Cutaway</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.diagram.items.map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 p-8 flex flex-col gap-4">
                 <h4 className="text-xl font-bold text-brand-orange">{item.title}</h4>
                 <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
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
            <div className="relative w-full aspect-square md:aspect-[16/9] flex items-center justify-center mb-16 md:mb-0">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 {/* Decorative background orbits */}
                 <div className="w-full h-full border-[1px] border-brand-deep-blue animate-[spin_40s_linear_infinite]"></div>
                 <div className="absolute w-[80%] h-[80%] border-[1px] border-brand-orange animate-[spin_30s_linear_infinite_reverse]"></div>
               </div>

               <div className="relative w-40 h-40 bg-brand-deep-blue shadow-2xl flex items-center justify-center z-10 border-4 border-white/10 text-white font-bold text-2xl text-center leading-tight">
                  NEW<br/>DRILL
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
              <div className="basis-[60%] shrink-0">
                 <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-gray-400 font-mono">Certificate Image Placeholder</span>
                 </div>
              </div>

              {/* Right Column: 40% */}
              <div className="basis-[40%] shrink-0 flex flex-col gap-6">
                {content.validation.cards.map((card, idx) => (
                  <div key={idx} className="relative flex-1 flex flex-col">
                     {/* White Rectangles Behind */}
                     <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-white z-0"></div>
                     <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-white z-0"></div>

                     {/* Main Card */}
                     <div className="relative z-10 bg-white/10 border border-white/20 p-8 flex-1 flex items-center shadow-lg">
                        <p className="text-lg font-medium leading-relaxed">{card}</p>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      <Footer t={t.footer} currentLang={locale} />
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
