import React from 'react';
import { 
  X, 
  Layers, 
  Target, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Rocket, 
  HeartHandshake,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-900 text-white flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
                Product Development, Design & AI Systems Specification
              </span>
            </div>
            <h3 className="text-2xl font-black tracking-tight">
              Pawzz Ecosystem Product Architecture & PM Decisions
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Authored from the lens of Senior PM, Lead UI/UX Designer & Full-Stack Architect.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-xs sm:text-sm text-slate-700">
          {/* Executive Thesis */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              <span>1. Executive Thesis: Why One Integrated Digital Ecosystem?</span>
            </h4>
            <p className="leading-relaxed">
              Modern digital ecosystems succeed by solving an authentic real-world problem (Module 1: Fragmented, opaque animal healthcare discovery) while simultaneously providing the high-leverage workforce education (Module 2: Applied Generative AI & Automation) and production workflow tooling (Module 3: AI Carousel Studio) necessary to scale that mission sustainably.
            </p>
          </div>

          {/* Module 1 Breakdown */}
          <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                🐾
              </div>
              <h5 className="text-sm font-bold text-slate-900">
                Module 1: Practo for Animals – Product Strategy
              </h5>
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>Core Problem:</strong> In critical animal emergencies (GDV, hit-and-runs, parvovirus), pet parents waste 45+ minutes calling closed clinics or dealing with obsolete Google Maps numbers. Stray rescues lack structured ambulance dispatch.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>PM Decision & CTA Hierarchy:</strong> The primary CTA ("Find a Vet" & "24/7 ER Dispatch") addresses acute emergencies first. Secondary community CTAs ("List Your Business" and "Submit a Correction") establish zero-cost crowdsourced verification loops that continuously validate phone numbers, hours, and medical licenses.
            </p>
          </div>

          {/* Module 2 Breakdown */}
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-700" />
              <h5 className="text-sm font-bold text-slate-900">
                Module 2: AI Education – Conversion & Curriculum Strategy
              </h5>
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>Core Problem:</strong> 95% of AI tutorials remain trapped in naive chat prompt copy-pasting. Students and young professionals fail technical AI interviews because they lack production agent architectures, webhook fluency, and grounded RAG implementations.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>UX & Conversion Decision:</strong> We structure the landing page with immediate social proof, an interactive week-by-week accordion with explicit capstone projects, an unapologetic "Who Is This NOT For" section to increase perceived value and filter commitment, and a multi-stage validation registration form with celebratory confirmation.
            </p>
          </div>

          {/* Module 3 Breakdown */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <h5 className="text-sm font-bold text-slate-900">
                Module 3: AI-Powered Content Creation – Workflow Architecture
              </h5>
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>Core Problem:</strong> Creating high-converting educational carousels on LinkedIn and Instagram requires 4-6 hours per post across research, copy, visual layouts, and rendering.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              <strong>Architecture Decision:</strong> We modeled the exact 8-step cognitive pipeline (Idea → Research → Hook → Copy → Direction → Design → Founder Review → Export). The interactive studio enables instant client-side editing, theme customization, and validated JSON schema export matching n8n/Make webhook specifications.
            </p>
          </div>

          {/* Tech Stack & Design Standards */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-teal-600" />
              <span>4. Technical Stack & Implementation Integrity</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Frontend:</span>
                <strong className="text-slate-900">React 18 + TypeScript</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Styling:</span>
                <strong className="text-slate-900">Tailwind CSS 3.4</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Icons:</span>
                <strong className="text-slate-900">Lucide React</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Build Tool:</span>
                <strong className="text-slate-900">Vite 6 Fast Bundler</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Pawzz Ecosystem • Product & System Design Evaluation
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};
