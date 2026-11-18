import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, CheckCircle, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Integrity & Accessibility Standard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Pet Parents & Rescuers Trust Pawzz
          </h2>
          <p className="text-sm text-slate-600">
            Unlike commercial listing engines, we never sell top-search slots to low-quality clinics. Our mission is pure companion animal welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Zero Paid Ranking Bias</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every search result is strictly ordered by proximity, verified parent ratings, and clinical capabilities. A veterinary clinic cannot pay to rank ahead of a closer or better-rated practice.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Veterinary License Auditing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We cross-reference every listing against State Veterinary Council rosters and AWBI guidelines to prevent unqualified or fraudulent practices from treating your companions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Dedicated Stray & NGO Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We treat community strays as equals. NGOs, animal shelters, and free vaccination camps are permanently listed free-of-cost with prominent emergency dispatch capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
