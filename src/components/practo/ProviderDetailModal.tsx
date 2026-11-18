import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle, 
  Calendar, 
  User, 
  HeartHandshake, 
  Share2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Provider } from '../../types/practo';

interface ProviderDetailModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (provider: Provider) => void;
  onEmergencyCall: (phone: string, providerName: string) => void;
  onReportCorrection: (provider: Provider) => void;
}

export const ProviderDetailModal: React.FC<ProviderDetailModalProps> = ({
  provider,
  isOpen,
  onClose,
  onBookAppointment,
  onEmergencyCall,
  onReportCorrection
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'doctors' | 'reviews' | 'location'>('overview');
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen || !provider) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Header Hero Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 shrink-0">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

          {/* Close & Share buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
              title="Share Provider"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500 text-white">
                {provider.category}
              </span>
              {provider.isVerified && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-teal-200 border border-teal-300/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                  <span>Pawzz Verified Facility</span>
                </span>
              )}
              {provider.is24x7Emergency && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-600 text-white flex items-center gap-1 animate-pulse">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>24/7 Trauma Emergency Unit</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {provider.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
              {provider.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-200">
              <div className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white text-sm">{provider.rating}</span>
                <span className="text-slate-300">({provider.reviewCount} verified reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{provider.locality}, {provider.city} ({provider.distanceKm} km away)</span>
              </div>
              <div className="font-semibold text-teal-300">
                Consultation: {provider.consultationFeeRange}
              </div>
            </div>
          </div>

          {copiedNotification && (
            <div className="absolute top-16 right-4 bg-emerald-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg border border-emerald-500">
              Link copied to clipboard!
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 px-6 bg-slate-50 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview & Services
          </button>
          <button
            onClick={() => setActiveTab('doctors')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'doctors'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Veterinary Team</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
              {provider.doctors.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'reviews'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Pet Parent Reviews</span>
            <span className="px-1.5 py-0.2 rounded-full bg-teal-100 text-teal-800 text-[10px]">
              {provider.reviews.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'location'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Location & Hours
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* About description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  About the Facility
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {provider.about}
                </p>
                <div className="text-xs text-slate-400 mt-2">
                  Established in {provider.establishedYear} • Registration verified by Animal Welfare Board of India (AWBI) norms.
                </div>
              </div>

              {/* Services & Pricing breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Services & Estimated Charges
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {provider.services.map((svc, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">{svc.name}</span>
                      </div>
                      {svc.estimatedFee && (
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60 shrink-0">
                          {svc.estimatedFee}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities & Infrastructure */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Facilities & In-House Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {provider.facilities.map((fac, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      <span>{fac}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOCTORS */}
          {activeTab === 'doctors' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-2">
                Certified veterinarians and medical directors at {provider.name}:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {provider.doctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-teal-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{doc.name}</h4>
                          <p className="text-xs text-teal-700 font-medium">{doc.specialization}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{doc.qualification}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                        <span>Clinical Experience:</span>
                        <strong className="text-slate-800">{doc.experienceYears} Years</strong>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <span className="text-[11px] text-slate-500 block mb-1">Available OPD Days:</span>
                      <div className="flex flex-wrap gap-1">
                        {doc.availableDays.map((day) => (
                          <span
                            key={day}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-teal-50/60 p-4 rounded-2xl border border-teal-200/80">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Parent Trust Score
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-3xl font-black text-slate-900">{provider.rating}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">Based on {provider.reviewCount} verified visits</span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500 hidden sm:block">
                  Verified Animal Care Community Guarantee
                </div>
              </div>

              <div className="space-y-3">
                {provider.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
                          {rev.author[0]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <span>{rev.author}</span>
                            {rev.verifiedOwner && (
                              <span className="text-[10px] text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded font-semibold border border-teal-200">
                                Verified Pet Parent
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Pet: {rev.petType} • {rev.date}
                          </div>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LOCATION & HOURS */}
          {activeTab === 'location' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Physical Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {provider.address}
                    </p>
                    <p className="text-xs text-teal-700 font-semibold mt-1">
                      Landmark: Domlur / Koramangala Link Road ({provider.distanceKm} km from central hub)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Operating Schedule</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {provider.openingHours}
                    </p>
                    {provider.is24x7Emergency && (
                      <p className="text-xs text-rose-600 font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Emergency triage is open continuously through nights, weekends, and holidays.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Mock Map View */}
              <div className="h-44 rounded-2xl bg-slate-200 border border-slate-300 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial from-teal-500/10 via-slate-200 to-slate-300 opacity-60" />
                <div className="z-10 text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md text-xs font-bold text-slate-800">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>{provider.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Interactive Map Mockup • GPS: 12.9611° N, 77.6387° E</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-4 text-xs text-slate-600 w-full sm:w-auto">
            <button
              onClick={() => onReportCorrection(provider)}
              className="text-amber-700 hover:text-amber-900 font-medium underline inline-flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Report Outdated Info</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="font-semibold text-slate-800">
              Direct: {provider.phone}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {provider.is24x7Emergency && (
              <button
                onClick={() => onEmergencyCall(provider.emergencyPhone || provider.phone, provider.name)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 24/7 Helpline</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onBookAppointment(provider);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-teal-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment Slot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
