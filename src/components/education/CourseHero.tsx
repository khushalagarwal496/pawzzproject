import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Download, 
  Star,
  Award,
  Terminal,
  Code
} from 'lucide-react';
import { COHORTS } from '../../data/mockCourses';

interface CourseHeroProps {
  onApplyClick: () => void;
  onDownloadSyllabus: () => void;
  onCurriculumClick: () => void;
}

export const CourseHero: React.FC<CourseHeroProps> = ({
  onApplyClick,
  onDownloadSyllabus,
  onCurriculumClick
}) => {
  const currentCohort = COHORTS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white pt-16 pb-24 border-b border-indigo-900/50">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Cohort Announcement Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-500/40 text-xs font-semibold text-indigo-200 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Cohort 04 Admissions Open • Starts {currentCohort.startDate}</span>
            <span className="text-indigo-400">|</span>
            <span className="text-amber-300 font-bold">Only {currentCohort.seatsLeft} Seats Remaining</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Practical AI Internship & Builder Track</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Stop Prompting. <br />
              <span className="bg-gradient-to-r from-teal-300 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                Build Autonomous AI Systems
              </span> That Actually Ship.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              An intensive 8-week engineering & product accelerator for ambitious students and young professionals. Master production prompt architectures, autonomous n8n workflows, enterprise RAG, and multimodal creative engines.
            </p>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-800 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">4.9/5</div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>850+ Alumni</span>
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">4 Capstones</div>
                <div className="text-xs text-slate-400 mt-0.5">Live GitHub repos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">92%</div>
                <div className="text-xs text-slate-400 mt-0.5">Career advancement</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onApplyClick}
                className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-102 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for Cohort 04</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCurriculumClick}
                className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-700/90 text-white font-bold text-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 8-Week Syllabus</span>
              </button>

              <button
                onClick={onDownloadSyllabus}
                className="px-4 py-3.5 text-slate-400 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                title="Download Syllabus PDF Spec"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Curriculum PDF</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> No generic theory slides
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> 1:1 Technical mentorship
              </span>
            </div>
          </div>

          {/* Right Hero Interactive Terminal / Code Snippet */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-indigo-800/60 bg-slate-950/90 shadow-2xl p-4 sm:p-5 font-mono text-xs text-slate-300 relative backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-400">autonomous_agent_pipeline.ts</span>
                </div>
                <span className="text-teal-400 font-bold">Week 2 Capstone</span>
              </div>

              <div className="space-y-1.5 text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                <p><span className="text-purple-400">import</span> &#123; createAgent &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@pawzz/autonomous-sdk'</span>;</p>
                <p><span className="text-purple-400">import</span> &#123; z &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'zod'</span>;</p>
                <p className="text-slate-600">// Strict JSON Output Schema Guarantee</p>
                <p><span className="text-blue-400">const</span> TriageVerdict = z.object(&#123;</p>
                <p className="pl-4">urgencyLevel: z.enum([<span className="text-emerald-300">'CRITICAL'</span>, <span className="text-emerald-300">'ELEVATED'</span>, <span className="text-emerald-300">'ROUTINE'</span>]),</p>
                <p className="pl-4">vitalChecks: z.array(z.string()),</p>
                <p className="pl-4">dispatchAmbulance: z.boolean(),</p>
                <p>&#125;);</p>
                <p className="pt-1"><span className="text-blue-400">export async function</span> <span className="text-amber-300">executeTriage</span>(symptoms) &#123;</p>
                <p className="pl-4 text-teal-300">const agent = await createAgent(&#123;</p>
                <p className="pl-8">model: <span className="text-emerald-300">'claude-3-5-sonnet'</span>,</p>
                <p className="pl-8">schema: TriageVerdict,</p>
                <p className="pl-8">tools: [PerplexityCitations, GeoAmbulanceFinder]</p>
                <p className="pl-4 text-teal-300">&#125;);</p>
                <p className="pl-4"><span className="text-purple-400">return</span> agent.evaluate(symptoms);</p>
                <p>&#125;</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" /> Output: Type-safe JSON verified
                </span>
                <span className="text-emerald-400 font-bold">100% Deterministic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
