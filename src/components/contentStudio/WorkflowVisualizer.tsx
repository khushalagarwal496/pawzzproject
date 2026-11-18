import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Layers, 
  Terminal, 
  Wrench, 
  RotateCcw,
  Code
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../../data/mockCarousels';
import { WorkflowStage } from '../../types/contentStudio';

interface WorkflowVisualizerProps {
  onStageSelect?: (stage: WorkflowStage) => void;
}

export const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = () => {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(WORKFLOW_STAGES[0]);
  const [activeSimulationIndex, setActiveSimulationIndex] = useState<number>(7);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveSimulationIndex(0);
    setSelectedStage(WORKFLOW_STAGES[0]);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < WORKFLOW_STAGES.length) {
        setActiveSimulationIndex(current);
        setSelectedStage(WORKFLOW_STAGES[current]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>8-Stage Repeatable Carousel Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Interactive AI Content Creation Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              From raw founder thesis to scheduled social carousel in 90 seconds. Click any node to inspect schemas and prompt parameters.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Simulating Pipeline...' : 'Run Pipeline Simulation'}</span>
            </button>
          </div>
        </div>

        {/* 8-Stage Step Chain (Horizontal Scrollable / Responsive) */}
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 text-white shadow-xl overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-2 pb-2">
            {WORKFLOW_STAGES.map((st, idx) => {
              const isCurrent = selectedStage.id === st.id;
              const isPassed = idx <= activeSimulationIndex;

              return (
                <React.Fragment key={st.id}>
                  <button
                    onClick={() => setSelectedStage(st)}
                    className={`flex-1 p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-lg ring-2 ring-emerald-500/30'
                        : isPassed
                        ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-900/60 border-slate-800 text-slate-500 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-700 text-[10px] font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>

                    <div className="text-xs font-bold truncate">
                      {st.label.split('. ')[1]}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5 font-medium">
                      {st.recommendedTool.split(' / ')[0]}
                    </div>
                  </button>

                  {idx < WORKFLOW_STAGES.length - 1 && (
                    <div className="text-slate-600 px-1 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${((activeSimulationIndex + 1) / WORKFLOW_STAGES.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Selected Node Deep Dive Inspector */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Node #{selectedStage.order}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedStage.label}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {selectedStage.detailedProcess}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-teal-600" />
                <span>Tool: <strong>{selectedStage.recommendedTool}</strong></span>
              </span>
            </div>
          </div>

          {/* Input vs Output Payload Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  <span>Input Ingestion Payload</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Raw Input</span>
              </div>
              <div className="p-3 bg-slate-900 text-emerald-300 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed">
                {selectedStage.sampleInput}
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-teal-600" />
                  <span>Structured Output / State Update</span>
                </span>
                <span className="text-[10px] text-emerald-600 font-bold">Validated Schema</span>
              </div>
              <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed">
                {selectedStage.sampleOutput}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
