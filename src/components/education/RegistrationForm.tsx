import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Lightbulb, 
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { RegistrationFormData, RegistrationSuccessState } from '../../types/course';
import { COHORTS } from '../../data/mockCourses';
import { ConfirmationCard } from './ConfirmationCard';

interface RegistrationFormProps {
  onSuccessToast: (msg: string) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    currentRole: 'Undergraduate / Graduate Student',
    experienceLevel: 'beginner',
    cohortPreference: COHORTS[0].name,
    learningGoal: '',
    acceptedTerms: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successState, setSuccessState] = useState<RegistrationSuccessState | null>(null);

  const roles = [
    'Undergraduate / Graduate Student',
    'Software Engineer / Developer',
    'Product Manager / Associate PM',
    'UI/UX & Product Designer',
    'Growth Marketer / Creator',
    'Startup Founder / Solopreneur',
    'Other Industry Professional'
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name is required (at least 3 characters)';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Mobile phone number is required';
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (!formData.learningGoal.trim() || formData.learningGoal.trim().length < 15) {
      errs.learningGoal = 'Please share what you hope to build in at least 15 characters';
    }

    if (!formData.acceptedTerms) {
      errs.acceptedTerms = 'You must accept the cohort commitment terms';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Fallback gracefully if canvas-confetti is not loaded
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const appRef = `PWZ-AI-${Math.floor(1000 + Math.random() * 9000)}`;
      const success: RegistrationSuccessState = {
        applicationId: appRef,
        timestamp: new Date().toLocaleString(),
        details: { ...formData }
      };
      setSuccessState(success);
      triggerConfetti();
      onSuccessToast(`Application ${appRef} received! Welcome to Pawzz AI Academy.`);
    }, 600);
  };

  const handleReset = () => {
    setSuccessState(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentRole: 'Undergraduate / Graduate Student',
      experienceLevel: 'beginner',
      cohortPreference: COHORTS[0].name,
      learningGoal: '',
      acceptedTerms: true
    });
    setErrors({});
  };

  return (
    <section id="course-registration-section" className="py-20 bg-gradient-to-b from-white via-indigo-50/40 to-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {successState ? (
          <ConfirmationCard
            successState={successState}
            onReset={handleReset}
          />
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Application • Spring Cohort 04</span>
              </div>
              <div className="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                ⚠️ Demo Programme Enrollment (No Real Payment Charged)
              </div>
            </div>

            <div className="mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Apply for the 8-Week Applied AI Cohort
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill in your candidate details below. Applications are reviewed within 24 hours for project alignment and technical readiness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priyanshu Mehta"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.fullName ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priyanshu@university.edu"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.email ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone & Current Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Phone Number (with WhatsApp) *</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.phone ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Current Role / Background</span>
                  </label>
                  <select
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Experience Level & Cohort Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Prior Experience with AI & Programming
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setFormData({ ...formData, experienceLevel: lvl })}
                        className={`py-2 px-2 text-[11px] font-bold rounded-xl border capitalize transition-all ${
                          formData.experienceLevel === lvl
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Cohort Batch Preference</span>
                  </label>
                  <select
                    value={formData.cohortPreference}
                    onChange={(e) => setFormData({ ...formData, cohortPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    {COHORTS.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.schedule})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Learning Goal */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>What is the dream autonomous product or system you want to ship? *</span>
                </label>
                <textarea
                  value={formData.learningGoal}
                  onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                  rows={3}
                  placeholder="e.g. I want to build a self-operating veterinary emergency triage bot that monitors WhatsApp groups and dispatches ambulances automatically..."
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none resize-none transition-all ${
                    errors.learningGoal ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200 focus:border-indigo-500'
                  }`}
                />
                {errors.learningGoal && <p className="text-[10px] text-rose-500 mt-1">{errors.learningGoal}</p>}
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>
                    I commit to allocating 6-8 hours weekly for live technical sessions and capstone build assignments. (No credit card charged in demo mode.)
                  </span>
                </label>
                {errors.acceptedTerms && <p className="text-[10px] text-rose-500 mt-1">{errors.acceptedTerms}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>24-Hour Rolling Admissions • 100% Verified Syllabus</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application for Cohort 04</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
