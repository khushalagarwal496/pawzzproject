import React, { useState } from 'react';
import { 
  X, 
  PhoneCall, 
  Ambulance, 
  AlertTriangle, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldAlert
} from 'lucide-react';
import { CITIES } from '../../data/mockProviders';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const EmergencyDispatchModal: React.FC<EmergencyDispatchModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast
}) => {
  const [city, setCity] = useState('Bengaluru');
  const [locationText, setLocationText] = useState('');
  const [animalType, setAnimalType] = useState('Dog / Puppy');
  const [urgency, setUrgency] = useState('Critical Trauma / Hit-and-Run');
  const [contactNumber, setContactNumber] = useState('');
  const [isDispatched, setIsDispatched] = useState(false);
  const [eta, setEta] = useState('14-18 Minutes');

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactNumber.trim()) return;

    setIsDispatched(true);
    onSuccessToast('🚨 Priority Pet Ambulance dispatched! Keep your phone line free.');
  };

  const handleReset = () => {
    setIsDispatched(false);
    setLocationText('');
    setContactNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-rose-200 overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-rose-100 bg-rose-600 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-200">
                <span>24/7 Golden Hour Triage</span>
              </div>
              <h3 className="text-xl font-black">
                Animal Emergency & Ambulance SOS
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-rose-200 hover:text-white rounded-lg hover:bg-rose-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDispatched ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Ambulance className="w-8 h-8 animate-bounce" />
            </div>

            <h4 className="text-xl font-black text-slate-900">
              Ambulance En Route!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Nearest rapid response unit (Unit #KA-04-ER) has accepted the dispatch for <strong>{animalType}</strong> in <strong>{city}</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left max-w-sm mx-auto space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans">Estimated Arrival:</span>
                <span className="text-rose-600 font-bold font-sans">{eta}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans">Triage Paramedic:</span>
                <span className="text-slate-800 font-sans">Paramedic Anand (On-Board)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans">Equipped:</span>
                <span className="text-teal-700 font-sans">Oxygen + Stretcher + First Aid</span>
              </div>
            </div>

            {/* Immediate First Aid Tips */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-left text-[11px] text-amber-900 space-y-1">
              <strong>Crucial First Aid While Waiting:</strong>
              <p>• Do not feed food or water if animal is in shock or unconscious.</p>
              <p>• Keep neck straight to maintain airway. Wrap in warm blanket.</p>
              <p>• If bleeding, apply gentle direct pressure with clean cloth.</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleDispatch} className="p-6 space-y-4 text-xs">
            {/* Quick Helpline Hotline Dial */}
            <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                  Direct Immediate Voice Hotline:
                </span>
                <span className="text-base font-black text-rose-950 font-mono">
                  1800-890-PAWZ (Free)
                </span>
              </div>
              <a
                href="tel:18008907299"
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl flex items-center gap-1 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  City *
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  {CITIES.filter(c => c !== 'All Cities').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Animal *
                </label>
                <select
                  value={animalType}
                  onChange={(e) => setAnimalType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  <option value="Dog / Puppy">Dog / Puppy</option>
                  <option value="Cat / Kitten">Cat / Kitten</option>
                  <option value="Community Stray">Community Stray Animal</option>
                  <option value="Cattle / Horse">Cattle / Large Animal</option>
                  <option value="Bird / Other">Avian / Wild Rescue</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Emergency Situation / Condition *
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="Critical Trauma / Hit-and-Run">Road Accident / Hit-and-Run Trauma</option>
                <option value="Gastric Bloat / Breathing Distress">Severe Breathing Distress / Gastric Bloat</option>
                <option value="Poisoning / Seizure">Suspected Poisoning / Active Seizures</option>
                <option value="Heatstroke / Collapse">Heatstroke / Sudden Collapse</option>
                <option value="Difficult Labor">Dystocia / Severe Delivery Distress</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Current Location / Nearest Landmark *
              </label>
              <input
                type="text"
                value={locationText}
                onChange={(e) => setLocationText(e.target.value)}
                placeholder="e.g. Near Indiranagar Metro Station Pillar 42"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Your Contact Phone (for Driver) *
              </label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md flex items-center gap-1.5"
              >
                <Ambulance className="w-4 h-4" />
                <span>Dispatch Ambulance Unit</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
