import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Bookmark, 
  Share2, 
  Clock, 
  ShieldCheck,
  Quote,
  Eye,
  Heart
} from 'lucide-react';
import { CarouselSlide } from '../../types/contentStudio';

interface SlideCardProps {
  slide: CarouselSlide;
  totalSlides: number;
  theme: 'emerald' | 'indigo' | 'amber' | 'slate';
  aspectRatio: '4:5' | '1:1';
  onEditClick?: () => void;
}

export const SlideCard: React.FC<SlideCardProps> = ({
  slide,
  totalSlides,
  theme,
  aspectRatio,
  onEditClick
}) => {
  // Theme styles
  const themeStyles = {
    emerald: {
      bg: 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-emerald-500/30',
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
      highlight: 'text-emerald-400',
      accentGlow: 'bg-emerald-500/20',
      bulletIcon: 'text-emerald-400',
      footerBorder: 'border-slate-800'
    },
    indigo: {
      bg: 'bg-gradient-to-b from-slate-950 via-indigo-950/80 to-slate-950 text-white border-indigo-500/30',
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
      highlight: 'text-indigo-400',
      accentGlow: 'bg-indigo-500/20',
      bulletIcon: 'text-indigo-400',
      footerBorder: 'border-slate-800'
    },
    amber: {
      bg: 'bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 text-white border-amber-500/30',
      badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
      highlight: 'text-amber-400',
      accentGlow: 'bg-amber-500/20',
      bulletIcon: 'text-amber-400',
      footerBorder: 'border-neutral-800'
    },
    slate: {
      bg: 'bg-slate-900 text-white border-slate-700',
      badge: 'bg-slate-800 text-slate-300 border-slate-600',
      highlight: 'text-teal-400',
      accentGlow: 'bg-teal-500/10',
      bulletIcon: 'text-teal-400',
      footerBorder: 'border-slate-800'
    }
  }[theme];

  const aspectClass = aspectRatio === '4:5' ? 'aspect-[4/5] min-h-[480px] sm:min-h-[540px]' : 'aspect-square min-h-[440px]';

  return (
    <div
      id={`carousel-slide-${slide.slideNumber}`}
      className={`relative w-full max-w-md mx-auto rounded-3xl p-6 sm:p-8 border shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 select-none ${themeStyles.bg} ${aspectClass}`}
    >
      {/* Background ambient radial glow */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${themeStyles.accentGlow}`} />

      {/* Slide Top Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold text-xs">
            🐾
          </div>
          <span className="text-xs font-extrabold tracking-wider text-slate-300 uppercase">
            Pawzz Care Guide
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${themeStyles.badge}`}>
            {slide.badge}
          </span>
          <span className="text-xs font-mono font-bold text-slate-400 bg-black/40 px-2 py-0.5 rounded-md border border-slate-800">
            {slide.slideNumber}/{totalSlides}
          </span>
        </div>
      </div>

      {/* Slide Center Body (Layout Adaptive) */}
      <div className="relative z-10 my-auto py-4 space-y-4">
        {/* Slide 1 Hook / Centered */}
        {slide.visualDirection.layout === 'centered' && (
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {slide.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
              {slide.body}
            </p>
          </div>
        )}

        {/* Split Stat Layout */}
        {slide.visualDirection.layout === 'split_stat' && (
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {slide.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {slide.body}
            </p>
            {slide.bulletPoints && (
              <div className="space-y-2 pt-2">
                {slide.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start gap-2 bg-black/30 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span className="text-xs text-slate-200">{bp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Framework Grid Layout */}
        {slide.visualDirection.layout === 'framework_grid' && (
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {slide.headline}
            </h3>
            <p className="text-xs text-slate-300">
              {slide.body}
            </p>
            {slide.bulletPoints && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {slide.bulletPoints.map((pt, i) => (
                  <div key={i} className="bg-black/40 p-2.5 rounded-xl border border-teal-500/20">
                    <span className="text-[11px] font-bold text-teal-300 block mb-0.5">
                      {pt.split(':')[0]}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {pt.split(':')[1] || pt}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Checklist / Standard Layout */}
        {slide.visualDirection.layout === 'checklist' && (
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {slide.headline}
            </h3>
            <p className="text-xs text-slate-300">
              {slide.body}
            </p>
            {slide.bulletPoints && (
              <div className="space-y-2 pt-1">
                {slide.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-black/30 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${themeStyles.bulletIcon}`} />
                    <span className="text-xs text-slate-200">{bp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Case Study / Quote Layout */}
        {slide.visualDirection.layout === 'quote_focus' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-indigo-400">
              <Quote className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Clinical Case Timeline</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {slide.headline}
            </h3>
            <p className="text-xs text-slate-300 italic">
              {slide.body}
            </p>
            {slide.bulletPoints && (
              <div className="space-y-1.5 pt-1">
                {slide.bulletPoints.map((bp, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-black/40 p-2 rounded-lg border border-slate-800">
                    <span className="text-indigo-400 font-bold">›</span>
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* High-Impact CTA Layout */}
        {slide.visualDirection.layout === 'high_impact_cta' && (
          <div className="text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center mx-auto">
              <Bookmark className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">
              {slide.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto">
              {slide.body}
            </p>
            {slide.bulletPoints && (
              <div className="space-y-1.5 max-w-xs mx-auto text-left">
                {slide.bulletPoints.map((bp, i) => (
                  <div key={i} className="text-xs text-slate-200 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Slide Bottom Bar / Swipe Indicator */}
      <div className={`relative z-10 pt-3 border-t ${themeStyles.footerBorder} flex items-center justify-between text-[11px] text-slate-400`}>
        <div className="flex items-center gap-1.5">
          <Heart className="w-3 h-3 text-rose-500" />
          <span>Save & Share for Animal Safety</span>
        </div>

        {slide.slideNumber < totalSlides ? (
          <div className="flex items-center gap-1 font-bold text-teal-400 animate-pulse">
            <span>Swipe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        ) : (
          <div className="flex items-center gap-1 font-bold text-teal-400">
            <span>Pawzz.care</span>
          </div>
        )}
      </div>

      {/* Visual Direction Inspector Pill (Subtle on-card badge for product evaluators) */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity z-20">
        <span className="text-[10px] bg-slate-900/90 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700 shadow-sm flex items-center gap-1">
          <Eye className="w-3 h-3 text-teal-400" />
          <span>Layout: {slide.visualDirection.layout}</span>
        </span>
      </div>
    </div>
  );
};
