import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  FileCheck, 
  ShieldCheck, 
  PlusCircle
} from 'lucide-react';
import { BusinessListingFormData, ServiceCategory } from '../../types/practo';
import { SERVICE_CATEGORIES, CITIES } from '../../data/mockProviders';

interface ListBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ListBusinessModal: React.FC<ListBusinessModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast
}) => {
  const [formData, setFormData] = useState<BusinessListingFormData>({
    clinicName: '',
    category: 'Veterinary Clinics',
    contactPerson: '',
    licenseNumber: '',
    city: 'Bengaluru',
    locality: '',
    phone: '',
    email: '',
    is24x7: false,
    hasAmbulance: false,
    hasHomeVisit: true,
    servicesOffered: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.clinicName.trim()) errs.clinicName = 'Business or clinic name is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person / medical director name is required';
    if (!formData.licenseNumber.trim()) errs.licenseNumber = 'AWBI / State Veterinary Council registration number is required';
    if (!formData.locality.trim()) errs.locality = 'Neighborhood or locality is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Official email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.servicesOffered.trim()) {
      errs.servicesOffered = 'Please list at least 2 primary services';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `VET-VERIFY-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(ref);
    setIsSubmitted(true);
    onSuccessToast(`Listing application for ${formData.clinicName} submitted for verification.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Provider Onboarding</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              List Your Animal Care Business on Pawzz
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Connect with 50,000+ verified pet parents, emergency dispatches & adopters.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
              <ShieldCheck className="w-9 h-9" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Application Under Verification
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for partnering with Pawzz! Our veterinary credentialing team will verify your license number (<strong>{formData.licenseNumber}</strong>) and schedule an on-site or tele-inspection within 24 to 48 hours.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Tracking Reference:</span>
                <span className="font-mono font-bold text-teal-700">{submittedRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Business Name:</span>
                <span className="font-semibold text-slate-900">{formData.clinicName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Category:</span>
                <span className="font-semibold text-slate-900">{formData.category}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full max-w-md py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl"
              >
                Close & Return to Ecosystem
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
            {/* Row 1: Clinic Name & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Facility / Business Name *
                </label>
                <input
                  type="text"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  placeholder="e.g. Apex Veterinary Clinic"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.clinicName ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.clinicName && <p className="text-[10px] text-rose-500 mt-1">{errors.clinicName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as ServiceCategory })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Doctor / Director & License */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Medical Lead / Contact Person *
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Dr. Ramesh Gupta"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.contactPerson ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.contactPerson && <p className="text-[10px] text-rose-500 mt-1">{errors.contactPerson}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registration / Council License # *
                </label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  placeholder="e.g. KVC-2016-8842"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.licenseNumber ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.licenseNumber && <p className="text-[10px] text-rose-500 mt-1">{errors.licenseNumber}</p>}
              </div>
            </div>

            {/* Row 3: City & Locality */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  {CITIES.filter(c => c !== 'All Cities').map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Neighborhood / Area *
                </label>
                <input
                  type="text"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  placeholder="e.g. Indiranagar 100ft Road"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.locality ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.locality && <p className="text-[10px] text-rose-500 mt-1">{errors.locality}</p>}
              </div>
            </div>

            {/* Row 4: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Phone / Emergency Line *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 80 4115 8888"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.phone ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="director@apexvet.com"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.email ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Checkboxes: 24/7, Ambulance, Home Visit */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-slate-600 block">
                Operational Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is24x7}
                    onChange={(e) => setFormData({ ...formData, is24x7: e.target.checked })}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>24/7 Trauma Care</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasAmbulance}
                    onChange={(e) => setFormData({ ...formData, hasAmbulance: e.target.checked })}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>Ambulance Unit</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasHomeVisit}
                    onChange={(e) => setFormData({ ...formData, hasHomeVisit: e.target.checked })}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>Home Visits</span>
                </label>
              </div>
            </div>

            {/* Services Offered */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                List Primary Services & Equipment *
              </label>
              <textarea
                value={formData.servicesOffered}
                onChange={(e) => setFormData({ ...formData, servicesOffered: e.target.value })}
                rows={2}
                placeholder="e.g. General OPD, Soft Tissue Surgery, Digital X-Ray, In-house Blood Bank"
                className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none resize-none ${
                  errors.servicesOffered ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                }`}
              />
              {errors.servicesOffered && <p className="text-[10px] text-rose-500 mt-1">{errors.servicesOffered}</p>}
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Submit for Verification</span>
                <FileCheck className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
