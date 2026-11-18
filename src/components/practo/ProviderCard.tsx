import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  Calendar, 
  ArrowUpRight,
  Home,
  HeartHandshake
} from 'lucide-react';
import { Provider } from '../../types/practo';

interface ProviderCardProps {
  provider: Provider;
  onViewDetails: (provider: Provider) => void;
  onBookAppointment: (provider: Provider) => void;
  onEmergencyCall: (phone: string, providerName: string) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  onViewDetails,
  onBookAppointment,
  onEmergencyCall
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Header Media & Badges */}
        <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
              {provider.category}
            </span>
            {provider.isVerified && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-500 text-white flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified</span>
              </span>
            )}
            {provider.isNGO && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-600 text-white flex items-center gap-1 shadow-sm">
                <HeartHandshake className="w-3 h-3" />
                <span>NGO / Shelter</span>
              </span>
            )}
          </div>

          {/* Emergency / Open Status Top-Right */}
          <div className="absolute top-3 right-3">
            {provider.is24x7Emergency ? (
              <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-rose-600 text-white flex items-center gap-1 shadow-md animate-pulse">
                <AlertCircle className="w-3 h-3" />
                <span>24/7 ER Active</span>
              </span>
            ) : provider.isOpenNow ? (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-600/95 text-white flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Open Now</span>
              </span>
            ) : (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-200">
                Closed Now
              </span>
            )}
          </div>

          {/* Bottom Overlay Info (Rating & Fee) */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">{provider.rating}</span>
              <span className="text-slate-300 text-[10px]">({provider.reviewCount})</span>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded-lg font-semibold text-teal-300">
              {provider.consultationFeeRange}
            </div>
          </div>
        </div>

        {/* Card Main Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3 
              onClick={() => onViewDetails(provider)}
              className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer line-clamp-1"
            >
              {provider.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-medium">
              {provider.tagline}
            </p>
          </div>

          {/* Location & Distance */}
          <div className="flex items-start gap-1.5 text-xs text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
            <span className="line-clamp-1">
              <strong className="text-slate-800">{provider.locality}</strong>, {provider.city} • <span className="text-teal-700 font-semibold">{provider.distanceKm} km away</span>
            </span>
          </div>

          {/* Operating hours */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{provider.openingHours}</span>
          </div>

          {/* Key Services & Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {provider.keySpecialities.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
              >
                {spec}
              </span>
            ))}
            {provider.hasHomeVisit && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center gap-1">
                <Home className="w-3 h-3" />
                <span>Home Visit</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(provider)}
          className="flex-1 py-2 px-3 text-xs font-bold text-slate-700 hover:text-teal-800 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {provider.is24x7Emergency ? (
          <button
            onClick={() => onEmergencyCall(provider.emergencyPhone || provider.phone, provider.name)}
            className="flex-1 py-2 px-3 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
          >
            <Phone className="w-3 h-3" />
            <span>Call 24/7 ER</span>
          </button>
        ) : (
          <button
            onClick={() => onBookAppointment(provider)}
            className="flex-1 py-2 px-3 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm shadow-teal-600/10"
          >
            <Calendar className="w-3 h-3" />
            <span>Book Slot</span>
          </button>
        )}
      </div>
    </div>
  );
};
