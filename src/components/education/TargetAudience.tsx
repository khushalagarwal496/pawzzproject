import React from 'react';
import { Check, X, UserCheck, UserX, Target } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const whoFor = [
    {
      role: 'Ambitious CS & Engineering Students',
      reason: 'Who want to bypass entry-level grunt work and showcase live production agent pipelines in job interviews.'
    },
    {
      role: 'Product Managers & Tech Marketers',
      reason: 'Who need to automate user research synthesis, marketing copy generation, and data scraping without relying on engineering backlogs.'
    },
    {
      role: 'Early-Stage Founders & Solopreneurs',
      reason: 'Who want to operate with the leverage of a 10-person team using n8n, Claude 3.5, and automated visual asset pipelines.'
    },
    {
      role: 'UX & Visual Designers',
      reason: 'Transitioning into AI design systems, canvas generation engines (Satori, Figma API), and Human-in-the-Loop workflows.'
    }
  ];

  const whoNotFor = [
    {
      role: 'Prompt Tourists',
      reason: 'Looking for a magic list of "50 ChatGPT prompts to make \$10k". We teach software architecture, not generic tricks.'
    },
    {
      role: 'Pure Theory Academics',
      reason: 'Who do not want to write code, configure webhooks, or test API payloads in real terminals.'
    },
    {
      role: 'Passive Video Watchers',
      reason: 'The cohort requires weekly capstone code submissions and interactive peer reviews.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-indigo-600" />
            <span>Target Persona Clarity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Is This Programme the Right Fit For You?
          </h2>
          <p className="text-sm text-slate-600">
            We value high cohort density. We deliberately keep batches small (25 seats max) to ensure rigorous 1:1 attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Who It Is For */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Who Thrives in This Cohort</h3>
                <p className="text-xs text-emerald-700 font-medium">Clear indicators of high-impact alignment</p>
              </div>
            </div>

            <div className="space-y-4">
              {whoFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.role}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who It Is NOT For */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-rose-100">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <UserX className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Who Should NOT Apply</h3>
                <p className="text-xs text-rose-600 font-medium">Please do not enroll if you match these</p>
              </div>
            </div>

            <div className="space-y-4">
              {whoNotFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.role}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
