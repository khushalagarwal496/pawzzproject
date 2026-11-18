export interface CourseModuleItem {
  week: number;
  title: string;
  subtitle: string;
  duration: string;
  topics: string[];
  handsOnProject: string;
  toolsUsed: string[];
}

export interface LearningOutcome {
  id: string;
  iconName: string;
  title: string;
  description: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  cohortPreference: string;
  learningGoal: string;
  acceptedTerms: boolean;
}

export interface RegistrationSuccessState {
  applicationId: string;
  timestamp: string;
  details: RegistrationFormData;
}
