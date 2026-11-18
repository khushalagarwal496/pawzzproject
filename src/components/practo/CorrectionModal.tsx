import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  X, 
  Send,
  Building2,
  FileEdit
} from 'lucide-react';
import { CorrectionFormData, Provider } from '../../types/practo';

interface CorrectionModalProps {
  provider: Provider | null;
  allProviders: Provider[];
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  provider,
  allProviders,
  isOpen,
  onClose,
  onSuccessToast
}) => {
  const [formData, setFormData] = useState<CorrectionFormData>({
    providerId: provider?.id || (allProviders[0]?.id || ''),
    providerName: provider?.name || (allProviders[0]?.name || ''),
    reporterName: '',
    reporterEmail: '',
    issueType: 'wrong_phone',
    correctInformation: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.reporterName.trim()) errs.reporterName = 'Your name is required';
    if (!formData.reporterEmail.trim()) {
      errs.reporterEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.reporterEmail)) {
      errs.reporterEmail = 'Enter a valid email address';
    }
    if (!formData.correctInformation.trim()) {
      errs.correctInformation = 'Please describe the updated or correct information';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    onSuccessToast('Correction report submitted. Our community moderation team will verify.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-amber-50/70 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <FileEdit className="w-3.5 h-3.5" />
              <span>Community Data Accuracy</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              Submit a Correction
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Help keep animal care contact information accurate and life-saving.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Correction Submitted!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for protecting pet parents from outdated numbers or changed hours. Our team will verify the details within 12 hours.
            </p>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Provider Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Facility to Update
              </label>
              <select
                value={formData.providerId}
                onChange={(e) => {
                  const sel = allProviders.find(p => p.id === e.target.value);
                  setFormData({
                    ...formData,
                    providerId: e.target.value,
                    providerName: sel?.name || ''
                  });
                }}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              >
                {allProviders.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.locality}, {p.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Issue Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                What needs to be corrected? *
              </label>
              <select
                value={formData.issueType}
                onChange={(e) => setFormData({ ...formData, issueType: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="wrong_phone">Incorrect Phone Number / Emergency Contact</option>
                <option value="closed_permanently">Facility Closed Permanently / Relocated</option>
                <option value="wrong_hours">Operating Hours Changed (Not 24/7 anymore)</option>
                <option value="wrong_location">Incorrect Address / Pin Location</option>
                <option value="services_updated">New Doctors / Updated Equipment</option>
                <option value="other">Other Information</option>
              </select>
            </div>

            {/* Correct Information Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Correct Details *
              </label>
              <textarea
                value={formData.correctInformation}
                onChange={(e) => setFormData({ ...formData, correctInformation: e.target.value })}
                rows={3}
                placeholder="e.g. Their emergency line has changed to +91 99000 12345. They also started in-house ultrasound."
                className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none resize-none ${
                  errors.correctInformation ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                }`}
              />
              {errors.correctInformation && <p className="text-[10px] text-rose-500 mt-1">{errors.correctInformation}</p>}
            </div>

            {/* Reporter Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.reporterName}
                  onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                  placeholder="e.g. Sneha Roy"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.reporterName ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.reporterName && <p className="text-[10px] text-rose-500 mt-1">{errors.reporterName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={formData.reporterEmail}
                  onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                  placeholder="sneha@example.com"
                  className={`w-full px-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                    errors.reporterEmail ? 'border-rose-400' : 'border-slate-200 focus:border-teal-500'
                  }`}
                />
                {errors.reporterEmail && <p className="text-[10px] text-rose-500 mt-1">{errors.reporterEmail}</p>}
              </div>
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
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Send Correction</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
