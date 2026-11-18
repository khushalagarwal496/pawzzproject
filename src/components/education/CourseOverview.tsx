import React from 'react';
import { Layers, Rocket, Users, Laptop, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CourseOverview: React.FC = () => {
  const pillars = [
    {
      title: '8 Weeks of Live Immersion',
      desc: '16 high-intensity live sessions blending cognitive theory, live architecture debugging, and interactive code labs.',
      stat: '16 Sessions'
    },
    {
      title: '4 Production Capstones',
      desc: 'You do not write "toy" apps. You deploy live, multi-agent systems with rate limiting, error handling, and public URLs.',
      stat: '4 Portfolio Apps'
    },
    {
      title: 'Real-World Toolchain',
      desc: 'Work with the tools top AI startups use: n8n, Claude 3.5, Langfuse, Pinecone, Satori, and Supabase.',
      stat: '12+ Industry Tools'
    },
    {
      title: '1:1 Technical & Career Review',
      desc: 'Weekly code reviews from senior AI engineers and resume/portfolio reviews tailored for internship & PM roles.',
      stat: 'Personal Mentors'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Programme Overview & Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Builders Who Refuse to Stay at the Prompt Level
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The market is already flooded with generic "prompt engineers". What companies, startups, and top teams desperately need are systems thinkers: individuals who can chain multimodal APIs, enforce schema reliability, handle async webhooks, and design intuitive human-in-the-loop interfaces.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider block mb-2">
                  {p.stat}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-indigo-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Curriculum Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
