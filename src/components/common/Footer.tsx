import React from 'react';
import { Heart, Sparkles, GraduationCap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ActiveModule } from './Navbar';

interface FooterProps {
  onSelectModule: (module: ActiveModule) => void;
  onOpenArchitectureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectModule,
  onOpenArchitectureModal
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Pawzz
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-900/80 text-teal-300 border border-teal-700/50">
                Integrated Ecosystem
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An integrated product ecosystem uniting verified companion animal healthcare discovery, modern applied AI education, and repeatable automated content creation systems.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Created for Product Development, Design & AI Systems Assignment</span>
            </div>
          </div>

          {/* Module 1 Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <span className="text-teal-400">●</span> Module 01: Care Discovery
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectModule('practo')} 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Find Veterinary Clinics</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('practo')} 
                  className="hover:text-white transition-colors"
                >
                  24/7 Trauma Hospitals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('practo')} 
                  className="hover:text-white transition-colors"
                >
                  Cage-Free Boarding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('practo')} 
                  className="hover:text-white transition-colors"
                >
                  Critical Pet Ambulances
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('practo')} 
                  className="hover:text-white transition-colors"
                >
                  NGO Stray Rescues
                </button>
              </li>
            </ul>
          </div>

          {/* Module 2 Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" /> Module 02: AI Academy
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectModule('education')} 
                  className="hover:text-white transition-colors"
                >
                  Cohort 04 Curriculum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('education')} 
                  className="hover:text-white transition-colors"
                >
                  Applied LLM Engineering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('education')} 
                  className="hover:text-white transition-colors"
                >
                  Autonomous n8n Workflows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('education')} 
                  className="hover:text-white transition-colors"
                >
                  RAG & Knowledge Bases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('education')} 
                  className="hover:text-white transition-colors"
                >
                  Cohort Registration Form
                </button>
              </li>
            </ul>
          </div>

          {/* Module 3 Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Module 03: AI Content
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectModule('content-studio')} 
                  className="hover:text-white transition-colors"
                >
                  8-Stage Pipeline Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('content-studio')} 
                  className="hover:text-white transition-colors"
                >
                  Sample Instagram Carousel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('content-studio')} 
                  className="hover:text-white transition-colors"
                >
                  Interactive Workflow Visualizer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectModule('content-studio')} 
                  className="hover:text-white transition-colors"
                >
                  Make / n8n Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenArchitectureModal} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-teal-400 font-medium"
                >
                  <span>PM Decision Matrix</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Pawzz Ecosystem. All three modules integrated for Product & AI Systems Evaluation.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for pets & builders
            </span>
            <span>•</span>
            <span className="text-slate-400">Client-Side Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
