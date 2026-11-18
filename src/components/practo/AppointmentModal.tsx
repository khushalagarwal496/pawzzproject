import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  X
} from 'lucide-react';
import { Provider, AppointmentFormData } from '../../types/practo';

interface AppointmentModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (bookingId: string) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  provider,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    providerId: provider?.id || '',
    petName: '',
    petType: 'Dog',
    petAge: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    serviceNeeded: '',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: '11:00 AM - 12:00 PM',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen || !provider) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.petName.trim()) errs.petName = 'Pet name is required';
    if (!formData.parentName.trim()) errs.parentName = 'Parent name is required';
    if (!formData.parentPhone.trim()) {
      errs.parentPhone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.parentPhone.replace(/[\s-]/g, ''))) {
      errs.parentPhone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.parentEmail.trim()) {
      errs.parentEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      errs.parentEmail = 'Please enter a valid email address';
    }
    if (!formData.serviceNeeded.trim()) {
      errs.serviceNeeded = 'Please specify or select the service required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `PAWZ-APT-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBookingId(generatedId);
      onSuccess(generatedId);
    }, 700);
  };

  const timeSlots = [
    '09:30 AM - 10:30 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '04:30 PM - 05:30 PM',
    '06:30 PM - 07:30 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-teal-50/50 flex items-start justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Appointment Booking
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {provider.name}
            </h3>
            <p className="text-xs text-slate-500">
              {provider.locality}, {provider.city} • Fee: {provider.consultationFeeRange}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedBookingId ? (
          /* Confirmation Success State */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-black text-slate-900">
                Slot Confirmed with Clinic!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your appointment request for <strong>{formData.petName}</strong> has been transmitted to the clinic front desk.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-slate-200/80">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-teal-700">{confirmedBookingId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/80">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="font-semibold text-slate-900">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/80">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-semibold text-slate-900">{formData.preferredTimeSlot}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900">{formData.serviceNeeded}</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              A confirmation SMS and calendar invite has been sent to {formData.parentPhone}.
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition-all"
            >
              Done & Return to Directory
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Pet Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pet's Name *
                </label>
                <input
                  type="text"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  placeholder="e.g. Bruno, Bella"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                    errors.petName ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.petName && <p className="text-[10px] text-rose-500 mt-1">{errors.petName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Species
                </label>
                <select
                  value={formData.petType}
                  onChange={(e) => setFormData({ ...formData, petType: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Stray Animal">Stray Rescue</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Required Service / Concern *
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                  errors.serviceNeeded ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                }`}
              >
                <option value="">Select a service...</option>
                {provider.services.map((s, i) => (
                  <option key={i} value={s.name}>
                    {s.name} ({s.estimatedFee || 'Standard OPD'})
                  </option>
                ))}
                <option value="General Checkup">General Health Checkup</option>
                <option value="Vaccination">Vaccination Shot</option>
                <option value="Second Opinion">Second Opinion / Surgery Consultation</option>
              </select>
              {errors.serviceNeeded && <p className="text-[10px] text-rose-500 mt-1">{errors.serviceNeeded}</p>}
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>
                      {ts}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Parent Info */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pet Parent Full Name *
                </label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.parentName ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.parentName && <p className="text-[10px] text-rose-500 mt-1">{errors.parentName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                      errors.parentPhone ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                    }`}
                  />
                  {errors.parentPhone && <p className="text-[10px] text-rose-500 mt-1">{errors.parentPhone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder="rahul@example.com"
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                      errors.parentEmail ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                    }`}
                  />
                  {errors.parentEmail && <p className="text-[10px] text-rose-500 mt-1">{errors.parentEmail}</p>}
                </div>
              </div>
            </div>

            {/* Symptoms notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Symptoms / Additional Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                placeholder="Mention any allergies, past surgeries, or urgent behaviors..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none resize-none"
              />
            </div>

            {/* Actions */}
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
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Confirm Booking</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
