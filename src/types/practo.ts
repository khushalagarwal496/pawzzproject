export type ServiceCategory = 
  | 'Veterinary Clinics'
  | 'Hospitals'
  | 'Boarding'
  | 'Diagnostics'
  | 'Ambulances'
  | 'NGOs';

export type AvailabilityOption = 
  | 'all'
  | 'open_now'
  | 'emergency_24_7'
  | 'weekend_available'
  | 'home_visit';

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experienceYears: number;
  availableDays: string[];
}

export interface Review {
  id: string;
  author: string;
  petType: string;
  rating: number;
  date: string;
  comment: string;
  verifiedOwner: boolean;
}

export interface ProviderService {
  name: string;
  description?: string;
  estimatedFee?: string;
}

export interface Provider {
  id: string;
  name: string;
  tagline: string;
  category: ServiceCategory;
  rating: number;
  reviewCount: number;
  city: string;
  locality: string;
  distanceKm: number;
  address: string;
  phone: string;
  emergencyPhone?: string;
  email: string;
  isOpenNow: boolean;
  is24x7Emergency: boolean;
  hasHomeVisit: boolean;
  isVerified: boolean;
  isNGO: boolean;
  openingHours: string;
  consultationFeeRange: string;
  services: ProviderService[];
  keySpecialities: string[];
  facilities: string[];
  doctors: Doctor[];
  reviews: Review[];
  about: string;
  establishedYear: number;
  image: string;
}

export interface ProviderFilterState {
  searchQuery: string;
  category: ServiceCategory | 'All Categories';
  city: string;
  availability: AvailabilityOption;
  verifiedOnly: boolean;
  sortBy: 'recommended' | 'rating' | 'distance' | 'reviews';
}

export interface AppointmentFormData {
  providerId: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Bird' | 'Stray Animal' | 'Other';
  petAge: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
}

export interface BusinessListingFormData {
  clinicName: string;
  category: ServiceCategory;
  contactPerson: string;
  licenseNumber: string;
  city: string;
  locality: string;
  phone: string;
  email: string;
  is24x7: boolean;
  hasAmbulance: boolean;
  hasHomeVisit: boolean;
  servicesOffered: string;
  additionalDetails?: string;
}

export interface CorrectionFormData {
  providerId: string;
  providerName: string;
  reporterName: string;
  reporterEmail: string;
  issueType: 'wrong_phone' | 'closed_permanently' | 'wrong_hours' | 'wrong_location' | 'services_updated' | 'other';
  correctInformation: string;
}
