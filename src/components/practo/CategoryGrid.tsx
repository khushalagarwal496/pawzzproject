import React from 'react';
import { 
  Stethoscope, 
  Building2, 
  Home, 
  Activity, 
  Truck, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory } from '../../types/practo';

interface CategoryGridProps {
  selectedCategory: ServiceCategory | 'All Categories';
  onSelectCategory: (category: ServiceCategory | 'All Categories') => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const categories: {
    name: ServiceCategory;
    icon: React.ElementType;
    description: string;
    count: string;
    color: string;
    bgHover: string;
  }[] = [
    {
      name: 'Veterinary Clinics',
      icon: Stethoscope,
      description: 'General OPD, vaccinations, preventive care, and puppy pediatric exams',
      count: '420+ Clinics',
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      bgHover: 'hover:border-teal-400 group-hover:bg-teal-600 group-hover:text-white'
    },
    {
      name: 'Hospitals',
      icon: Building2,
      description: '24/7 Super-specialty ICU, orthopedics, surgical suites & emergency trauma',
      count: '95+ Multi-Specialties',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      bgHover: 'hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white'
    },
    {
      name: 'Boarding',
      icon: Home,
      description: 'Cage-free pet resorts, feline retreats, verified daycare & sensory parks',
      count: '160+ Facilities',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      bgHover: 'hover:border-amber-400 group-hover:bg-amber-600 group-hover:text-white'
    },
    {
      name: 'Diagnostics',
      icon: Activity,
      description: 'Digital X-rays, ultrasound, hematology, biochemistry & home sample pickup',
      count: '110+ Reference Labs',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      bgHover: 'hover:border-emerald-400 group-hover:bg-emerald-600 group-hover:text-white'
    },
    {
      name: 'Ambulances',
      icon: Truck,
      description: 'Oxygen-fitted critical pet ambulances, accident transit & on-board paravets',
      count: '65+ SOS Units',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      bgHover: 'hover:border-rose-400 group-hover:bg-rose-600 group-hover:text-white'
    },
    {
      name: 'NGOs',
      icon: HeartHandshake,
      description: 'Community stray rescue, animal birth control (ABC), cruelty aid & adoptions',
      count: '80+ Registered NGOs',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      bgHover: 'hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white'
    }
  ];

  return (
    <section id="categories-section" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
              <span>Categorized Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Animal Healthcare by Category
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select a specialized category to filter verified providers and services instantly.
            </p>
          </div>

          {selectedCategory !== 'All Categories' && (
            <button
              onClick={() => onSelectCategory('All Categories')}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors self-start sm:self-auto"
            >
              Clear Category Filter (Show All)
            </button>
          )}
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;

            return (
              <div
                key={cat.name}
                onClick={() => {
                  onSelectCategory(isSelected ? 'All Categories' : cat.name);
                  const anchor = document.getElementById('provider-directory-anchor');
                  anchor?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-teal-500 bg-teal-50/50 shadow-md ring-2 ring-teal-500/20'
                    : 'border-slate-200/90 bg-white hover:border-teal-300 hover:shadow-lg hover:shadow-slate-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${cat.color} ${cat.bgHover}`}
                    >
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                  <span>{isSelected ? 'Currently Selected' : 'View Directory'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
