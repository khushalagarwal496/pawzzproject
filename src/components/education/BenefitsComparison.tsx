import React from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const BenefitsComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Core Learning Methodology',
      generic: 'Passive video recordings on YouTube or Coursera',
      pawzz: 'Live interactive coding labs & system debugging sessions'
    },
    {
      feature: 'Prompt Engineering Depth',
      generic: 'Generic text prompts ("Act as a copywriter...")',
      pawzz: 'Few-shot calibration, KV-cache dynamics, and token budget tuning'
    },
    {
      feature: 'Output Reliability',
      generic: 'Unpredictable raw text that breaks in code',
      pawzz: 'Strict JSON schema guarantees & Zod type validation'
    },
    {
      feature: 'Automation & Orchestration',
      generic: 'No integrations; manual copy-pasting',
      pawzz: 'Production n8n/Make workflows with error handling & retries'
    },
    {
      feature: 'Capstone Deliverable',
      generic: 'Multiple-choice quiz certificate (ignored by recruiters)',
      pawzz: '4 Public GitHub repositories with live deployed URLs'
    },
    {
      feature: 'Mentorship & Review',
      generic: 'Community forum with zero instructor replies',
      pawzz: 'Weekly 1:1 code review & resume portfolio positioning'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Competitive Differentiators</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Pawzz AI Academy Compares
          </h2>
          <p className="text-sm text-slate-600">
            Why our graduates ship working software in their first week while others are still watching videos.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-100">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold items-center">
            <div className="col-span-4 sm:col-span-4 text-slate-300">Dimension</div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Generic Online Courses</div>
            <div className="col-span-4 sm:col-span-4 text-teal-300 font-extrabold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Pawzz AI Academy</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-5 items-center gap-2 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                }`}
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-900 text-xs">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-1.5 text-xs">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{row.generic}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-900 font-semibold flex items-start gap-1.5 text-xs">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
                  <span className="text-slate-900">{row.pawzz}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
