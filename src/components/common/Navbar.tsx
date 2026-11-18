import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  GraduationCap, 
  Menu, 
  X, 
  PhoneCall, 
  Layers, 
  ChevronRight,
  Info
} from 'lucide-react';

export type ActiveModule = 'practo' | 'education' | 'content-studio';

interface NavbarProps {
  activeModule: ActiveModule;
  onSelectModule: (module: ActiveModule) => void;
  onOpenArchitectureModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeModule,
  onSelectModule,
  onOpenArchitectureModal,
  onOpenEmergencyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    {
      id: 'practo' as ActiveModule,
      name: 'Practo for Animals',
      badge: 'Care Discovery',
      icon: HeartHandshake,
      description: 'Vetted clinics, 24/7 ER, ambulances & boarding'
    },
    {
      id: 'education' as ActiveModule,
      name: 'AI Education',
      badge: 'Cohort 04',
      icon: GraduationCap,
      description: 'Practical GenAI & automation for builders'
    },
    {
      id: 'content-studio' as ActiveModule,
      name: 'AI Content Studio',
      badge: '8-Step Engine',
      icon: Sparkles,
      description: 'Idea to published visual carousel pipeline'
    }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Top Banner for Emergency / Value announcement */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="font-medium text-slate-200">
              Emergency Animal Ambulance & Trauma Helpline Active Across Metro Hubs
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenEmergencyModal}
              className="flex items-center gap-1.5 text-rose-300 hover:text-white font-semibold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>SOS Helpline: 1800-890-PAWZ</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenArchitectureModal}
              className="flex items-center gap-1 text-slate-300 hover:text-teal-300 font-medium transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Ecosystem Architecture</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onSelectModule('practo')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-black">🐾</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                    Pawzz
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">
                    Ecosystem
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Integrated Animal Care & AI Systems
                </p>
              </div>
            </button>
          </div>

          {/* Center Navigation Tabs (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => onSelectModule(m.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span>{m.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                      isActive
                        ? 'bg-teal-50 text-teal-700 border border-teal-200'
                        : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    {m.badge}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenArchitectureModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 rounded-xl transition-all"
              title="View Product Strategy & MVP Architecture"
            >
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              <span>Product Architecture</span>
            </button>

            {activeModule === 'practo' && (
              <button
                onClick={() => {
                  const el = document.getElementById('practo-search-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Find a Vet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}

            {activeModule === 'education' && (
              <button
                onClick={() => {
                  const el = document.getElementById('course-registration-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Apply for Cohort</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}

            {activeModule === 'content-studio' && (
              <button
                onClick={() => {
                  const el = document.getElementById('carousel-studio-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Launch Studio</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEmergencyModal}
              className="p-2 text-rose-600 bg-rose-50 border border-rose-200 rounded-lg"
              title="Emergency SOS"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
            Switch Module
          </div>
          <div className="space-y-1.5">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    onSelectModule(m.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-teal-50 border border-teal-200 text-teal-900 font-bold'
                      : 'hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{m.name}</div>
                      <div className="text-xs text-slate-500">{m.description}</div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    {m.badge}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenArchitectureModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
            >
              <Layers className="w-4 h-4 text-teal-600" />
              <span>Product Architecture & PM Spec</span>
            </button>
            <button
              onClick={() => {
                onOpenEmergencyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-rose-600 rounded-xl"
            >
              <PhoneCall className="w-4 h-4" />
              <span>24/7 Pet Emergency Ambulance SOS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
