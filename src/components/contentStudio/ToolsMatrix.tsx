import React from 'react';
import { Wrench, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { RECOMMENDED_TOOLS } from '../../data/mockCarousels';

export const ToolsMatrix: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Recommended Toolchain Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tool Selection Rationale & Alternatives
          </h2>
          <p className="text-sm text-slate-600">
            A breakdown of why each tool was chosen for the automated carousel creation pipeline, including alternative options evaluated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECOMMENDED_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {tool.category}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    {tool.tier}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {tool.name}
                </h3>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {tool.purpose}
                </p>

                <div className="pt-2 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  <strong className="text-slate-800 block mb-0.5">Why Chosen:</strong>
                  {tool.whyChosen}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold block mb-1">
                  Evaluated Alternatives:
                </span>
                <div className="flex flex-wrap gap-1">
                  {tool.alternatives.map((alt, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      {alt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
