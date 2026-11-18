import React, { useState } from 'react';
import { X, Check, FileEdit, Eye, Sparkles } from 'lucide-react';
import { CarouselSlide } from '../../types/contentStudio';

interface SlideEditorModalProps {
  slide: CarouselSlide | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedSlide: CarouselSlide) => void;
}

export const SlideEditorModal: React.FC<SlideEditorModalProps> = ({
  slide,
  isOpen,
  onClose,
  onSave
}) => {
  if (!isOpen || !slide) return null;

  const [headline, setHeadline] = useState(slide.headline);
  const [badge, setBadge] = useState(slide.badge);
  const [body, setBody] = useState(slide.body);
  const [layout, setLayout] = useState(slide.visualDirection.layout);
  const [bulletText, setBulletText] = useState(slide.bulletPoints ? slide.bulletPoints.join('\n') : '');
  const [focalElement, setFocalElement] = useState(slide.visualDirection.focalElement);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: CarouselSlide = {
      ...slide,
      headline,
      badge,
      body,
      bulletPoints: bulletText.trim() ? bulletText.split('\n').filter(s => s.trim().length > 0) : undefined,
      visualDirection: {
        ...slide.visualDirection,
        layout,
        focalElement
      }
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
              <FileEdit className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Edit Slide #{slide.slideNumber} Copy & Layout
              </h3>
              <p className="text-[11px] text-slate-500">Live adjustments update the carousel instantly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Slide Category / Badge
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Headline
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none font-semibold text-slate-900"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Body Copy
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Bullet Points (One per line)
            </label>
            <textarea
              value={bulletText}
              onChange={(e) => setBulletText(e.target.value)}
              rows={3}
              placeholder="Point 1&#10;Point 2&#10;Point 3"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Visual Layout Mode
              </label>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="centered">Centered Hook</option>
                <option value="split_stat">Split Statistic</option>
                <option value="checklist">Checklist / Points</option>
                <option value="framework_grid">Framework 4-Grid</option>
                <option value="quote_focus">Case Study Timeline</option>
                <option value="high_impact_cta">High-Impact CTA</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Focal Visual Cue
              </label>
              <input
                type="text"
                value={focalElement}
                onChange={(e) => setFocalElement(e.target.value)}
                placeholder="e.g. Coral alert icon, timeline curve"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
