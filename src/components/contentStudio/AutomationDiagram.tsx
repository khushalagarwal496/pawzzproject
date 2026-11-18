import React from 'react';
import { 
  GitBranch, 
  Workflow, 
  Database, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  Code
} from 'lucide-react';
import { AUTOMATION_WORKFLOW_EXPLANATION } from '../../data/mockCarousels';

export const AutomationDiagram: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-wider border border-indigo-200">
            <Workflow className="w-3.5 h-3.5 text-indigo-600" />
            <span>Make & n8n Enterprise Automation Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How This Workflow Executes in Production via n8n / Make
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {AUTOMATION_WORKFLOW_EXPLANATION.overview}
          </p>
        </div>

        {/* Visual Node Diagram (Blueprint) */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                Production n8n Workflow Graph Blueprint
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800">
              Webhook Latency: ~1,850ms
            </span>
          </div>

          {/* Node Grid Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTOMATION_WORKFLOW_EXPLANATION.n8nNodeStructure.map((node, i) => (
              <div
                key={i}
                className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-teal-500/50 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-teal-400 font-bold">
                      {node.step}
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {node.service}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {node.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>Execution: Auto Retry 3x</span>
                  <span className="text-emerald-400 font-bold">● Active Node</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sample JSON Contract Payload Box */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-teal-400" />
                <span>Standardized JSON Inter-Node Schema Contract</span>
              </span>
              <span className="text-[10px] text-slate-500">Zod / JSON Schema Spec</span>
            </div>
            <pre className="bg-slate-900 p-4 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto border border-slate-800">
              {AUTOMATION_WORKFLOW_EXPLANATION.schemaContractSample}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
