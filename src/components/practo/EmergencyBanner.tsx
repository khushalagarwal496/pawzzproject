import React from 'react';
import { PhoneCall, AlertTriangle, ShieldAlert, ArrowRight, Ambulance } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenEmergencyModal: () => void;
  onFilterEmergency: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  onOpenEmergencyModal,
  onFilterEmergency
}) => {
  return (
    <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-slate-900 text-white py-6 border-y border-rose-700/50 relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
        <Ambulance className="w-64 h-64 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-rose-600/90 border border-rose-400 flex items-center justify-center shrink-0 shadow-lg shadow-rose-900/40 animate-pulse hidden sm:flex">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
              <span>Critical Golden Hour Animal Rescue Protocol</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Facing an Acute Veterinary Emergency or Hit-and-Run?
            </h3>
            <p className="text-xs sm:text-sm text-rose-200/90 max-w-2xl">
              Connect with nearest oxygen-fitted pet ambulances, active blood banks, and 24/7 surgical trauma facilities with zero delay.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onFilterEmergency}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all backdrop-blur-xs"
          >
            Show Only 24/7 ER Facilities
          </button>

          <button
            onClick={onOpenEmergencyModal}
            className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-rose-950/50 hover:scale-105 transition-all"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            <span>Launch SOS Dispatcher</span>
          </button>
        </div>
      </div>
    </div>
  );
};
