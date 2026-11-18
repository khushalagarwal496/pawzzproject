import React from 'react';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  PlusCircle, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { CITIES } from '../../data/mockProviders';
import { ServiceCategory } from '../../types/practo';

interface PractoHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedCategory: ServiceCategory | 'All Categories';
  onCategoryChange: (cat: ServiceCategory | 'All Categories') => void;
  onListBusinessClick: () => void;
  onCorrectionClick: () => void;
  onExploreServicesClick: () => void;
}

export const PractoHero: React.FC<PractoHeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  onListBusinessClick,
  onCorrectionClick,
  onExploreServicesClick
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50 to-white pt-10 pb-16 border-b border-slate-200/70">
      {/* Background Glows & Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-teal-200/20 via-emerald-100/30 to-amber-100/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal-200 shadow-sm text-xs font-semibold text-teal-800">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>Practo for Animals • 1,200+ Verified Clinics & Ambulances</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-normal">Sample Prototype</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onListBusinessClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-lg shadow-2xs transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>List Your Business</span>
            </button>
            <button
              onClick={onCorrectionClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-amber-700 bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-lg shadow-2xs transition-all"
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Submit a Correction</span>
            </button>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="max-w-3xl space-y-4 mb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Verified Care, 24/7 Emergency & Healing for <span className="text-teal-600 underline decoration-teal-300/80 decoration-wavy decoration-2">Every Animal</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find certified veterinary surgeons, trauma hospitals, oxygen-fitted ambulances, cage-free boarding, and rescue NGOs near you. Zero sponsored bias, 100% verified pet parents.
          </p>
        </div>

        {/* Integrated Search Console */}
        <div id="practo-search-section" className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-slate-200/70 border border-slate-200 max-w-4xl transition-all">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* City Selector */}
            <div className="sm:col-span-4 relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Location / City
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-teal-600 absolute left-3 pointer-events-none" />
                <select
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm font-semibold text-slate-800 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all appearance-none cursor-pointer"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 pointer-events-none text-slate-400 text-xs">▼</div>
              </div>
            </div>

            {/* Keyword / Service Search */}
            <div className="sm:col-span-5 relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Search Clinic, Doctor or Service
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="e.g. Cessna, Orthopedic, Blood test, Ambulance..."
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm font-medium text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
                />
              </div>
            </div>

            {/* Search CTA */}
            <div className="sm:col-span-3 pt-4 sm:pt-4">
              <button
                onClick={() => {
                  const target = document.getElementById('provider-directory-anchor');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Search Care</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-slate-400">Popular:</span>
              <button
                onClick={() => onSearchChange('24/7')}
                className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 transition-colors"
              >
                🚨 24/7 Emergency
              </button>
              <button
                onClick={() => onSearchChange('Ambulance')}
                className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 transition-colors"
              >
                🚑 Oxygen Ambulance
              </button>
              <button
                onClick={() => onSearchChange('Cat')}
                className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 transition-colors"
              >
                🐱 Cat-Friendly Clinic
              </button>
              <button
                onClick={() => onSearchChange('Surgery')}
                className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 transition-colors"
              >
                🏥 Ortho Surgery
              </button>
            </div>

            <button
              onClick={onExploreServicesClick}
              className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Explore All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
          <div className="flex items-start gap-3 p-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/80">
            <div className="p-2 rounded-lg bg-teal-100 text-teal-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">100% Vetted Facilities</h4>
              <p className="text-xs text-slate-500 mt-0.5">Physical inspections and verified veterinary degree licenses.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/80">
            <div className="p-2 rounded-lg bg-rose-100 text-rose-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">24/7 Golden Hour SOS</h4>
              <p className="text-xs text-slate-500 mt-0.5">Instant dispatch for oxygen ambulances & acute trauma care.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/80">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Transparent Pricing</h4>
              <p className="text-xs text-slate-500 mt-0.5">Clear consultation fee ranges and upfront diagnostic estimates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
