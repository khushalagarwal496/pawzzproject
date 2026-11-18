import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Terminal, 
  Wrench, 
  Calendar,
  Layers
} from 'lucide-react';
import { COURSE_MODULES } from '../../data/mockCourses';

export const CurriculumAccordion: React.FC = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <section id="course-curriculum-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Syllabus Breakdown</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Week-by-Week Technical Curriculum
          </h2>
          <p className="text-sm text-slate-600">
            A battle-tested progression from low-level token ergonomics to production autonomous agents. Click any module to inspect topics and capstones.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {COURSE_MODULES.map((mod) => {
            const isExpanded = expandedWeek === mod.week;

            return (
              <div
                key={mod.week}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-indigo-500 bg-slate-50/50 shadow-md ring-1 ring-indigo-500/20'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleWeek(mod.week)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                        isExpanded
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      W{mod.week}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                          Module {mod.week} • {mod.duration}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200/80 space-y-5 animate-in slide-in-from-top-2 duration-200">
                    {/* Topics covered */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Core Syllabus Topics
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {mod.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capstone project */}
                    <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/80">
                      <div className="flex items-start gap-2.5">
                        <Terminal className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 block">
                            Hands-On Week {mod.week} Capstone Project
                          </span>
                          <p className="text-xs text-indigo-950 font-medium mt-1">
                            {mod.handsOnProject}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tools used */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Toolchain & Frameworks Mastered</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.toolsUsed.map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-200/70 text-slate-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
