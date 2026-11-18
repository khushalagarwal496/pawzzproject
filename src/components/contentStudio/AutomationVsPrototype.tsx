import React from 'react';
import { CheckCircle2, Cloud, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export const AutomationVsPrototype: React.FC = () => {
  const implemented = [
    {
      title: 'Interactive 8-Stage Workflow Simulator',
      desc: 'Users can trigger the step-by-step pipeline runner with progress bar, active node highlights, and sample payload inspection.'
    },
    {
      title: 'Complete 7-Slide Graphic Carousel Preview',
      desc: 'High-contrast Instagram (4:5) and LinkedIn (1:1) slide renderer with typography hierarchies, badges, and layout modes.'
    },
    {
      title: 'Real-Time Founder Review & Slide Copy Editor',
      desc: 'Inline modal allows immediate editing of headlines, body text, bullet points, and visual directions with instant visual updates.'
    },
    {
      title: 'Theme & Aspect Ratio Customizer',
      desc: 'Instant switching between Emerald, Indigo, Amber, and Slate themes, plus responsive portrait and square aspect toggles.'
    },
    {
      title: 'Valid JSON Schema Exporter',
      desc: 'One-click client-side download of the complete structured deck JSON matching n8n/Make webhook specifications.'
    },
    {
      title: 'Caption & Hashtag Generator',
      desc: 'One-click clipboard copy of engagement-optimized platform captions and tags.'
    }
  ];

  const proposed = [
    {
      title: 'Live Anthropic Claude 3.5 Sonnet API Call',
      desc: 'Live backend execution requiring production API keys, rate-limiting queues, and token billing middleware.'
    },
    {
      title: 'Live Perplexity Sonar Search Endpoint',
      desc: 'Real-time live retrieval of veterinary journal links and PubMed indexing via paid API tokens.'
    },
    {
      title: 'Headless Satori / Puppeteer Image Generation Server',
      desc: 'Serverless Docker container rendering 1080x1350px PNGs and storing them in an AWS S3 or Supabase bucket.'
    },
    {
      title: 'Slack Interactive Block Approval Webhooks',
      desc: 'Automated notification ping to founder\'s team Slack with interactive "Approve" button that triggers social scheduler.'
    },
    {
      title: 'Buffer / Hootsuite / Instagram Graph API Dispatch',
      desc: 'Production OAuth integration publishing directly to verified social accounts at peak engagement times.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Product Development Integrity Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Implemented Functionality vs Proposed Production Integrations
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In accordance with high product management standards, this section provides an honest and transparent distinction between what is executed live in this client prototype versus what constitutes the proposed enterprise cloud backend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Implemented Live in Prototype */}
          <div className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  Ready & Interactive
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Implemented Frontend Functionality
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {implemented.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-200/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Proposed Cloud Automation Architecture */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center font-bold">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Production Cloud Architecture
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Proposed Production Integrations
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {proposed.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ›
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
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
