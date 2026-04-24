"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { MoveRight, CheckCircle2 } from "lucide-react";

function Content() {
  const { t, locale } = useTranslation();
  const content = t.drillingAcceleration;

  return (
    <div className="min-h-screen bg-brand-white flex flex-col font-sans">
      <Navbar nav={t.nav} currentLang={locale} />

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep-blue leading-tight">
            {content.hero.title}
          </h1>
        </div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative aspect-video w-full overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center border border-gray-200"
        >
          {/* Placeholder for Isometric Rig */}
          <div className="text-brand-deep-blue/40 font-mono flex flex-col items-center">
            <span className="text-4xl mb-2">🏗️</span>
            Isometric Rig Illustration
          </div>
        </motion.div>
      </section>

      {/* 2. KPI Stats Grid */}
      <section className="bg-brand-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.kpi.items.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 ${
                idx % 2 === 0 ? "bg-brand-red text-white" : "bg-brand-orange text-white"
              }`}
            >
              <div className="text-4xl md:text-5xl font-black mb-2">{item.value}</div>
              <div className="text-sm md:text-base font-medium opacity-90">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Problem vs. Solution */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch overflow-hidden shadow-xl border border-gray-100">
          <div className="bg-gray-100 p-12 md:w-5/12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-brand-deep-blue mb-6">{content.problemSolution.leftTitle}</h3>
            <ul className="space-y-4">
              {content.problemSolution.leftPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-red font-medium text-lg">
                  <span className="w-2 h-2 bg-brand-red"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-deep-blue text-white flex items-center justify-center p-4 md:w-16 z-10 relative">
             <MoveRight className="w-8 h-8 md:rotate-0 rotate-90" />
          </div>

          <div className="bg-white p-12 md:w-7/12 flex flex-col justify-center relative">
            <h3 className="text-2xl font-bold text-brand-orange mb-4">{content.problemSolution.rightTitle}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{content.problemSolution.rightSummary}</p>
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
                    <td className="p-6 text-gray-500">{row.trad}</td>
                    <td className="p-6 text-brand-deep-blue font-semibold bg-blue-50/50 border-l border-r border-brand-orange/20 relative">
                       <div className="flex items-center gap-2">
                         <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                         {row.new}
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
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.drillBit.description}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Interactive Cutaway Diagram */}
      <section className="py-20 bg-brand-deep-blue text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto bg-gray-800 overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center">
             {/* Blueprint Placeholder */}
             <div className="text-gray-500 font-mono">Mechanical Tool Blueprint / Cutaway</div>

             {/* Hotspots */}
             <div className="absolute top-1/2 left-1/4 -translate-y-1/2 group">
                <div className="w-6 h-6 bg-brand-orange animate-pulse absolute -left-3 -top-3"></div>
                <div className="w-3 h-3 bg-white relative z-10"></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-deep-blue px-3 py-1 shadow-lg text-sm font-bold">
                  {content.diagram.labels[0]}
                </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-y-1/2 group">
                <div className="w-6 h-6 bg-brand-orange animate-pulse absolute -left-3 -top-3"></div>
                <div className="w-3 h-3 bg-white relative z-10"></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-deep-blue px-3 py-1 shadow-lg text-sm font-bold">
                  {content.diagram.labels[1]}
                </div>
             </div>

             <div className="absolute top-1/2 left-3/4 -translate-y-1/2 group">
                <div className="w-6 h-6 bg-brand-orange animate-pulse absolute -left-3 -top-3"></div>
                <div className="w-3 h-3 bg-white relative z-10"></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-deep-blue px-3 py-1 shadow-lg text-sm font-bold">
                  {content.diagram.labels[2]}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Circular Process Workflow */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, x: x * 0.5, y: y * 0.5, scale: 0.8 }}
                     whileInView={{ opacity: 1, x: x, y: y, scale: 1 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ delay: idx * 0.15, type: "spring", stiffness: 50, damping: 15 }}
                     className="absolute z-20 w-64 hidden md:flex flex-col items-center justify-center"
                   >
                     <div className="bg-white shadow-xl border border-gray-100 p-5 relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-orange text-white flex items-center justify-center font-bold shadow-lg border-2 border-white">
                          {step.number}
                        </div>
                        <h4 className="text-xl font-bold text-brand-deep-blue mb-2 ml-4">{step.label}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                     </div>
                   </motion.div>
                 );
               })}
            </div>

            {/* Mobile View for workflow */}
            <div className="flex md:hidden flex-col gap-6 w-full">
              {content.workflow.steps.map((step, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white shadow-md border border-gray-100 p-6 relative flex gap-4"
                 >
                   <div className="w-12 h-12 shrink-0 bg-brand-orange text-white flex items-center justify-center font-bold shadow-lg text-lg">
                      {step.number}
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-deep-blue mb-2">{step.label}</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Business Scope Table */}
      <section className="py-20 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
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
                             <td rowSpan={totalItems} className="p-6 font-bold text-xl text-white bg-brand-deep-blue w-48 text-center border-r border-brand-deep-blue/20">
                               <div className="mx-auto flex flex-col items-center justify-center gap-2 text-2xl tracking-widest">
                                 {content.businessScope.mainCategory.split('').map((char: string, i: number) => <span key={i}>{char}</span>)}
                               </div>
                             </td>
                           )}
                           {isFirstItemInGroup && (
                             <td rowSpan={subGroup.items.length} className="p-6 font-bold text-brand-deep-blue bg-blue-50/30 border-r border-gray-100 w-56">
                               {subGroup.name}
                             </td>
                           )}
                           <td className="p-6 font-semibold text-gray-800 border-r border-gray-100 w-64">
                             {item.tech}
                           </td>
                           <td className="p-6 text-gray-600">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="aspect-[4/3] bg-white/10 border border-white/20 p-2 flex items-center justify-center relative overflow-hidden">
             {/* Award Certificate Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent"></div>
             <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <div className="font-bold text-xl text-brand-orange">一等奖</div>
                <div className="text-sm opacity-60 font-mono mt-2">First Prize Award Certificate</div>
             </div>
           </div>

           <div className="space-y-4">
              {content.validation.cards.map((card, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm flex items-center gap-4 hover:bg-white/10 transition-colors">
                   <div className="w-12 h-12 bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xl shrink-0">
                     0{idx + 1}
                   </div>
                   <div className="text-xl font-medium">{card}</div>
                </div>
              ))}
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
