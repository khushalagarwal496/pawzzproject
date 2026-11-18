import React from 'react';
import { 
  Filter, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Home, 
  RotateCcw,
  ArrowUpDown
} from 'lucide-react';
import { AvailabilityOption, ServiceCategory } from '../../types/practo';
import { CITIES, SERVICE_CATEGORIES } from '../../data/mockProviders';

interface FilterBarProps {
  selectedCategory: ServiceCategory | 'All Categories';
  onCategoryChange: (category: ServiceCategory | 'All Categories') => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  availability: AvailabilityOption;
  onAvailabilityChange: (avail: AvailabilityOption) => void;
  verifiedOnly: boolean;
  onVerifiedOnlyToggle: () => void;
  sortBy: 'recommended' | 'rating' | 'distance' | 'reviews';
  onSortChange: (sort: 'recommended' | 'rating' | 'distance' | 'reviews') => void;
  onResetFilters: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedCity,
  onCityChange,
  availability,
  onAvailabilityChange,
  verifiedOnly,
  onVerifiedOnlyToggle,
  sortBy,
  onSortChange,
  onResetFilters,
  totalResults
}) => {
  const isFiltered = 
    selectedCategory !== 'All Categories' || 
    selectedCity !== 'All Cities' || 
    availability !== 'all' || 
    verifiedOnly;

  return (
    <div id="provider-directory-anchor" className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Top Filter Bar Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-teal-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Filter Verified Care Providers
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
              {totalResults} {totalResults === 1 ? 'provider' : 'providers'} found
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-medium text-slate-500">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="recommended">Best Match / Recommended</option>
                <option value="rating">Highest Rated (★)</option>
                <option value="distance">Nearest Distance (km)</option>
                <option value="reviews">Most Reviewed</option>
              </select>
            </div>

            {/* Reset Button */}
            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100/70 px-2.5 py-1.5 rounded-xl border border-rose-200 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            onClick={() => onCategoryChange('All Categories')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              selectedCategory === 'All Categories'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-sm shadow-teal-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Second Row: City, Availability Pills, Verified Toggle */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {/* City select */}
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <select
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value)}
              className="bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c === 'All Cities' ? 'All Locations' : c}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Pills */}
          <button
            onClick={() => onAvailabilityChange(availability === 'open_now' ? 'all' : 'open_now')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              availability === 'open_now'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open Now</span>
          </button>

          <button
            onClick={() => onAvailabilityChange(availability === 'emergency_24_7' ? 'all' : 'emergency_24_7')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              availability === 'emergency_24_7'
                ? 'bg-rose-50 text-rose-800 border-rose-300 font-bold'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>24/7 Emergency</span>
          </button>

          <button
            onClick={() => onAvailabilityChange(availability === 'home_visit' ? 'all' : 'home_visit')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              availability === 'home_visit'
                ? 'bg-blue-50 text-blue-800 border-blue-300 font-bold'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-blue-600" />
            <span>Home Visit Available</span>
          </button>

          {/* Verified Only Checkbox Toggle */}
          <button
            onClick={onVerifiedOnlyToggle}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              verifiedOnly
                ? 'bg-teal-50 text-teal-800 border-teal-300 font-bold'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${verifiedOnly ? 'text-teal-600' : 'text-slate-400'}`} />
            <span>Verified Clinics Only</span>
          </button>
        </div>
      </div>
    </div>
  );
};
