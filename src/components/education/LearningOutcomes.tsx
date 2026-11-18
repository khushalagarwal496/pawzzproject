import React from 'react';
import { 
  Workflow, 
  CodeXml, 
  Sparkles, 
  Database, 
  Cpu, 
  Award,
  CheckCircle
} from 'lucide-react';
import { LEARNING_OUTCOMES } from '../../data/mockCourses';

export const LearningOutcomes: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Workflow,
    CodeXml,
    Sparkles,
    Database,
    Cpu,
    Award
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <span>Concrete Learning Outcomes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What You Will Be Able to Build Upon Graduation
          </h2>
          <p className="text-sm text-slate-600">
            Every outcome is tied to demonstrable GitHub code repositories, live production deployments, and verifiable metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_OUTCOMES.map((out) => {
            const Icon = iconMap[out.iconName] || Workflow;
            return (
              <div
                key={out.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {out.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {out.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Benchmark:</span>
                  </span>
                  <span className="bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                    {out.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
