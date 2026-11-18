import React from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  Download, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { RegistrationSuccessState } from '../../types/course';

interface ConfirmationCardProps {
  successState: RegistrationSuccessState;
  onReset: () => void;
}

export const ConfirmationCard: React.FC<ConfirmationCardProps> = ({
  successState,
  onReset
}) => {
  const { applicationId, details } = successState;

  const handleDownloadReceipt = () => {
    const textData = `PAWZZ AI ACADEMY - APPLICATION CONFIRMATION
=====================================================
Application ID: ${applicationId}
Timestamp: ${successState.timestamp}
Candidate: ${details.fullName}
Email: ${details.email}
Phone: ${details.phone}
Role: ${details.currentRole}
Experience Level: ${details.experienceLevel}
Cohort Preference: ${details.cohortPreference}
Learning Goal: "${details.learningGoal}"
=====================================================
Next Steps:
1. Check email for Pre-Cohort Python & Prompt Toolkit
2. 15-minute alignment fit call with academic advisor
3. Private Discord community access token
Status: UNDER ADVISOR REVIEW
`;
    const blob = new Blob([textData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${applicationId}-confirmation.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-300 shadow-2xl max-w-2xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-300">
      {/* Icon */}
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-xl shadow-teal-500/30">
        <Sparkles className="w-10 h-10 animate-bounce" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Application Received • Cohort 04
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Welcome to Pawzz AI Academy, {details.fullName.split(' ')[0]}!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Your candidate dossier has been submitted. Our admissions committee reviews applications on a rolling 24-hour cycle.
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
        <div className="flex justify-between items-center py-1 border-b border-slate-200">
          <span className="text-slate-500">Application Reference ID:</span>
          <span className="font-mono font-bold text-teal-700 text-sm">{applicationId}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-200">
          <span className="text-slate-500">Selected Cohort:</span>
          <span className="font-semibold text-slate-900">{details.cohortPreference}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-200">
          <span className="text-slate-500">Candidate Role:</span>
          <span className="font-semibold text-slate-900">{details.currentRole}</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-slate-500">Confirmation Sent To:</span>
          <span className="font-semibold text-slate-900">{details.email}</span>
        </div>
      </div>

      {/* 3 Next Steps Checklist */}
      <div className="text-left max-w-md mx-auto space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          What Happens Next (Admissions Roadmap):
        </h4>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-teal-50/50 border border-teal-100">
          <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
            1
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">Check Your Inbox in 5 Minutes</span>
            <span className="text-[11px] text-slate-500">We sent the "Module 0: Setup & API Keys Preparation Guide".</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
            2
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">15-Minute Technical Fit Call</span>
            <span className="text-[11px] text-slate-500">Choose a time slot to align on your intended capstone project idea.</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
            3
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">Private Discord & GitHub Invitation</span>
            <span className="text-[11px] text-slate-500">Meet your cohort peers and teaching assistants.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
        <button
          onClick={handleDownloadReceipt}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <Download className="w-4 h-4" />
          <span>Download Admission Dossier (.txt)</span>
        </button>

        <button
          onClick={onReset}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Submit Another Application</span>
        </button>
      </div>
    </div>
  );
};
