import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Edit3, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  Share2, 
  Sliders, 
  Maximize2, 
  Send,
  Layers,
  FileJson,
  RotateCcw
} from 'lucide-react';
import { CarouselDeck, CarouselSlide } from '../../types/contentStudio';
import { SAMPLE_CAROUSEL_DECK, ALTERNATIVE_PRESETS } from '../../data/mockCarousels';
import { SlideCard } from './SlideCard';
import { SlideEditorModal } from './SlideEditorModal';

interface CarouselInteractiveStudioProps {
  onSuccessToast: (msg: string) => void;
}

export const CarouselInteractiveStudio: React.FC<CarouselInteractiveStudioProps> = ({
  onSuccessToast
}) => {
  const [deck, setDeck] = useState<CarouselDeck>(SAMPLE_CAROUSEL_DECK);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<'4:5' | '1:1'>('4:5');
  const [theme, setTheme] = useState<'emerald' | 'indigo' | 'amber' | 'slate'>('emerald');
  const [editingSlide, setEditingSlide] = useState<CarouselSlide | null>(null);
  const [isCopiedCaption, setIsCopiedCaption] = useState(false);
  const [customIdeaInput, setCustomIdeaInput] = useState('');
  const [isGeneratingCustom, setIsGeneratingCustom] = useState(false);

  const currentSlide = deck.slides[currentSlideIndex] || deck.slides[0];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < deck.slides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : deck.slides.length - 1));
  };

  const handleSelectPreset = (presetId: string) => {
    const found = ALTERNATIVE_PRESETS.find(p => p.id === presetId);
    if (found) {
      setDeck(JSON.parse(JSON.stringify(found.defaultDeck)));
      setCurrentSlideIndex(0);
      setTheme(found.defaultDeck.theme);
      onSuccessToast(`Loaded preset: ${found.title}`);
    }
  };

  const handleCustomIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIdeaInput.trim()) return;

    setIsGeneratingCustom(true);
    setTimeout(() => {
      setIsGeneratingCustom(false);
      const generatedDeck: CarouselDeck = {
        ...SAMPLE_CAROUSEL_DECK,
        id: `custom-deck-${Date.now()}`,
        title: customIdeaInput,
        caption: `🚀 ${customIdeaInput}\n\nSwipe to explore the actionable step-by-step breakdown generated via Pawzz AI Studio.\n\n#AIProduct #PawzzEcosystem #Innovation`,
        slides: [
          {
            slideNumber: 1,
            type: 'hook',
            badge: 'AI Generated Hook',
            headline: customIdeaInput,
            body: '(The complete actionable framework synthesized from verified data.)',
            visualDirection: {
              layout: 'centered',
              focalElement: 'High-contrast typography',
              suggestedGraphic: 'Modern emblem',
              accentColor: '#10b981'
            }
          },
          ...SAMPLE_CAROUSEL_DECK.slides.slice(1)
        ]
      };
      setDeck(generatedDeck);
      setCurrentSlideIndex(0);
      onSuccessToast('New custom carousel synthesized from your prompt!');
      setCustomIdeaInput('');
    }, 800);
  };

  const handleSaveSlide = (updatedSlide: CarouselSlide) => {
    const updatedSlides = [...deck.slides];
    const idx = updatedSlides.findIndex(s => s.slideNumber === updatedSlide.slideNumber);
    if (idx !== -1) {
      updatedSlides[idx] = updatedSlide;
      setDeck({ ...deck, slides: updatedSlides });
      onSuccessToast(`Slide #${updatedSlide.slideNumber} updated successfully.`);
    }
  };

  const handleCopyCaption = () => {
    navigator.clipboard?.writeText(deck.caption);
    setIsCopiedCaption(true);
    onSuccessToast('Instagram & LinkedIn caption copied to clipboard!');
    setTimeout(() => setIsCopiedCaption(false), 2000);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(deck, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${deck.id}-schema.json`;
    a.click();
    URL.revokeObjectURL(url);
    onSuccessToast('JSON schema exported (Make/n8n webhook ready).');
  };

  const handleSimulateWebhook = () => {
    onSuccessToast(`🚀 Webhook pushed to n8n endpoint: 200 OK (${deck.slides.length} slides queued for publishing).`);
  };

  return (
    <section id="carousel-studio-section" className="py-16 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Studio Top Info Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Carousel Studio & Review Gate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Live Deliverable: 7-Slide Sample Instagram / LinkedIn Carousel
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Currently previewing: <strong className="text-slate-800">{deck.title}</strong> ({deck.aspectRatio} Aspect Ratio)
            </p>
          </div>

          {/* Quick Presets Dropdown / Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Preset:</span>
            {ALTERNATIVE_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  deck.id === p.defaultDeck.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {p.title.split(' ')[0]}...
              </button>
            ))}
          </div>
        </div>

        {/* Custom Founder Idea Ingestion Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
          <form onSubmit={handleCustomIdeaSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 w-full relative">
              <input
                type="text"
                value={customIdeaInput}
                onChange={(e) => setCustomIdeaInput(e.target.value)}
                placeholder="Try entering your own raw idea (e.g. 3 Reasons Dogs Eat Grass & When to Worry)..."
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-teal-500 font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={isGeneratingCustom || !customIdeaInput.trim()}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isGeneratingCustom ? 'Synthesizing...' : 'Synthesize Deck'}</span>
            </button>
          </form>
        </div>

        {/* Main Studio Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLS: The Live Slide Preview + Controls */}
          <div className="lg:col-span-7 space-y-5">
            {/* Aspect & Theme Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
              {/* Aspect Ratio Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setAspectRatio('4:5')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    aspectRatio === '4:5'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Instagram 4:5
                </button>
                <button
                  onClick={() => setAspectRatio('1:1')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    aspectRatio === '1:1'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  LinkedIn 1:1
                </button>
              </div>

              {/* Theme Picker */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">Theme:</span>
                {(['emerald', 'indigo', 'amber', 'slate'] as const).map((th) => (
                  <button
                    key={th}
                    onClick={() => setTheme(th)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      th === 'emerald'
                        ? 'bg-emerald-500'
                        : th === 'indigo'
                        ? 'bg-indigo-600'
                        : th === 'amber'
                        ? 'bg-amber-500'
                        : 'bg-slate-800'
                    } ${theme === th ? 'scale-115 border-white shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    title={`Theme: ${th}`}
                  />
                ))}
              </div>

              {/* Edit Current Slide Button */}
              <button
                onClick={() => setEditingSlide(currentSlide)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Slide #{currentSlide.slideNumber}</span>
              </button>
            </div>

            {/* Slide Stage with Next/Prev Arrows */}
            <div className="relative flex items-center justify-center py-2">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-5 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-teal-600 hover:scale-105 flex items-center justify-center transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full">
                <SlideCard
                  slide={currentSlide}
                  totalSlides={deck.slides.length}
                  theme={theme}
                  aspectRatio={aspectRatio}
                  onEditClick={() => setEditingSlide(currentSlide)}
                />
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 sm:-right-5 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-teal-600 hover:scale-105 flex items-center justify-center transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails Navigation Row */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1">
              {deck.slides.map((s, idx) => (
                <button
                  key={s.slideNumber}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all ${
                    currentSlideIndex === idx
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30 scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {s.slideNumber}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT 5 COLS: Founder Review & Multi-Channel Export Console */}
          <div className="lg:col-span-5 space-y-5">
            {/* Visual Direction Details for the Active Slide */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Slide #{currentSlide.slideNumber} Metadata & Visual Specs
                </span>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  {currentSlide.type.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block">Layout Archetype:</span>
                  <span className="font-bold text-slate-800 capitalize">{currentSlide.visualDirection.layout.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Focal Element Direction:</span>
                  <p className="text-slate-700 mt-0.5">{currentSlide.visualDirection.focalElement}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Graphic Cue (for Recraft/Midjourney):</span>
                  <p className="text-slate-700 mt-0.5 font-mono text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-200">
                    {currentSlide.visualDirection.suggestedGraphic}
                  </p>
                </div>
                {currentSlide.keyTakeaway && (
                  <div>
                    <span className="text-slate-400 font-semibold block">Strategic Takeaway:</span>
                    <p className="text-teal-800 font-medium mt-0.5">{currentSlide.keyTakeaway}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Generated Caption & Hashtags Box */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Platform Caption & Hashtags
                </span>
                <button
                  onClick={handleCopyCaption}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 transition-colors"
                >
                  {isCopiedCaption ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopiedCaption ? 'Copied!' : 'Copy Caption'}</span>
                </button>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 max-h-36 overflow-y-auto text-[11px] font-mono text-slate-700 leading-relaxed whitespace-pre-line">
                {deck.caption}
              </div>
            </div>

            {/* Export Actions Panel */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Deliverable Export Pipeline
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleExportJSON}
                  className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <FileJson className="w-4 h-4 text-teal-400" />
                  <span>Export JSON Schema</span>
                </button>

                <button
                  onClick={handleSimulateWebhook}
                  className="py-2.5 px-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Push to n8n Webhook</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                JSON schema matches n8n and Make HTTP Request nodes natively.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Editor Modal */}
      <SlideEditorModal
        slide={editingSlide}
        isOpen={!!editingSlide}
        onClose={() => setEditingSlide(null)}
        onSave={handleSaveSlide}
      />
    </section>
  );
};
