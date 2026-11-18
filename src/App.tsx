import React, { useState, useMemo } from 'react';
import { Navbar, ActiveModule } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer, ToastMessage } from './components/common/Toast';
import { ArchitectureModal } from './components/common/ArchitectureModal';
import { EmergencyDispatchModal } from './components/common/EmergencyDispatchModal';

// Module 1 Components
import { PractoHero } from './components/practo/PractoHero';
import { CategoryGrid } from './components/practo/CategoryGrid';
import { FilterBar } from './components/practo/FilterBar';
import { ProviderCard } from './components/practo/ProviderCard';
import { ProviderDetailModal } from './components/practo/ProviderDetailModal';
import { AppointmentModal } from './components/practo/AppointmentModal';
import { ListBusinessModal } from './components/practo/ListBusinessModal';
import { CorrectionModal } from './components/practo/CorrectionModal';
import { EmergencyBanner } from './components/practo/EmergencyBanner';
import { TrustSection } from './components/practo/TrustSection';

// Module 2 Components
import { CourseHero } from './components/education/CourseHero';
import { CourseOverview } from './components/education/CourseOverview';
import { LearningOutcomes } from './components/education/LearningOutcomes';
import { CurriculumAccordion } from './components/education/CurriculumAccordion';
import { TargetAudience } from './components/education/TargetAudience';
import { BenefitsComparison } from './components/education/BenefitsComparison';
import { Testimonials } from './components/education/Testimonials';
import { RegistrationForm } from './components/education/RegistrationForm';

// Module 3 Components
import { WorkflowVisualizer } from './components/contentStudio/WorkflowVisualizer';
import { CarouselInteractiveStudio } from './components/contentStudio/CarouselInteractiveStudio';
import { AutomationDiagram } from './components/contentStudio/AutomationDiagram';
import { ToolsMatrix } from './components/contentStudio/ToolsMatrix';
import { AutomationVsPrototype } from './components/contentStudio/AutomationVsPrototype';

// Mock Data & Types
import { MOCK_PROVIDERS } from './data/mockProviders';
import { Provider, ServiceCategory, AvailabilityOption } from './types/practo';
import { RotateCcw, Search, Sparkles, HeartHandshake, GraduationCap } from 'lucide-react';

export function App() {
  // Current active module
  const [activeModule, setActiveModule] = useState<ActiveModule>('practo');

  // Modals
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [selectedProviderForDetail, setSelectedProviderForDetail] = useState<Provider | null>(null);
  const [selectedProviderForAppointment, setSelectedProviderForAppointment] = useState<Provider | null>(null);
  const [listBusinessModalOpen, setListBusinessModalOpen] = useState(false);
  const [correctionModalOpen, setCorrectionModalOpen] = useState(false);
  const [correctionTargetProvider, setCorrectionTargetProvider] = useState<Provider | null>(null);

  // Toast Notification System
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Module 1: Filters & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'All Categories'>('All Categories');
  const [availability, setAvailability] = useState<AvailabilityOption>('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'distance' | 'reviews'>('recommended');

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCity('All Cities');
    setSelectedCategory('All Categories');
    setAvailability('all');
    setVerifiedOnly(false);
    setSortBy('recommended');
  };

  // Filtered and Sorted Providers
  const filteredProviders = useMemo(() => {
    return MOCK_PROVIDERS.filter((provider) => {
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesLocality = provider.locality.toLowerCase().includes(q);
        const matchesCity = provider.city.toLowerCase().includes(q);
        const matchesTagline = provider.tagline.toLowerCase().includes(q);
        const matchesCategory = provider.category.toLowerCase().includes(q);
        const matchesSpeciality = provider.keySpecialities.some((s) => s.toLowerCase().includes(q));
        const matchesService = provider.services.some((s) => s.name.toLowerCase().includes(q));
        const matchesEmergency = q.includes('24/7') || q.includes('emergency') ? provider.is24x7Emergency : false;
        const matchesAmbulance = q.includes('ambulance') ? provider.category === 'Ambulances' || provider.is24x7Emergency : false;

        if (!matchesName && !matchesLocality && !matchesCity && !matchesTagline && !matchesCategory && !matchesSpeciality && !matchesService && !matchesEmergency && !matchesAmbulance) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'All Cities' && provider.city !== selectedCity) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All Categories' && provider.category !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (availability === 'open_now' && !provider.isOpenNow) {
        return false;
      }
      if (availability === 'emergency_24_7' && !provider.is24x7Emergency) {
        return false;
      }
      if (availability === 'home_visit' && !provider.hasHomeVisit) {
        return false;
      }

      // Verified filter
      if (verifiedOnly && !provider.isVerified) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0; // default order
    });
  }, [searchQuery, selectedCity, selectedCategory, availability, verifiedOnly, sortBy]);

  // Handle module navigation switch with auto-scroll to top
  const handleSelectModule = (mod: ActiveModule) => {
    setActiveModule(mod);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEmergencyCall = (phone: string, name: string) => {
    addToast(`Calling 24/7 Helpline: ${phone}`, `Initiating connection with ${name}...`, 'info');
    setEmergencyModalOpen(true);
  };

  const handleOpenCorrection = (provider?: Provider) => {
    setCorrectionTargetProvider(provider || null);
    setCorrectionModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Sticky Global Ecosystem Navigation */}
      <Navbar
        activeModule={activeModule}
        onSelectModule={handleSelectModule}
        onOpenArchitectureModal={() => setArchitectureModalOpen(true)}
        onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ========================================================= */}
        {/* MODULE 1: PRACTO FOR ANIMALS (Care Discovery Platform)   */}
        {/* ========================================================= */}
        {activeModule === 'practo' && (
          <div className="animate-in fade-in duration-300">
            {/* Hero Section */}
            <PractoHero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onListBusinessClick={() => setListBusinessModalOpen(true)}
              onCorrectionClick={() => handleOpenCorrection()}
              onExploreServicesClick={() => {
                const el = document.getElementById('categories-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 6 Core Categories Grid */}
            <CategoryGrid
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* 24/7 Emergency Ambulance Banner */}
            <EmergencyBanner
              onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
              onFilterEmergency={() => {
                setAvailability('emergency_24_7');
                const anchor = document.getElementById('provider-directory-anchor');
                anchor?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Comprehensive Filters Bar */}
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              availability={availability}
              onAvailabilityChange={setAvailability}
              verifiedOnly={verifiedOnly}
              onVerifiedOnlyToggle={() => setVerifiedOnly(!verifiedOnly)}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onResetFilters={handleResetFilters}
              totalResults={filteredProviders.length}
            />

            {/* Provider Directory Results Grid */}
            <section className="py-12 bg-slate-50/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredProviders.length === 0 ? (
                  /* Empty state */
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900">
                        No facilities match your exact filter criteria
                      </h4>
                      <p className="text-xs text-slate-500">
                        Try resetting your city, opening status, or expanding your search keyword.
                      </p>
                    </div>
                    <button
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset All Filters</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProviders.map((provider) => (
                      <ProviderCard
                        key={provider.id}
                        provider={provider}
                        onViewDetails={(p) => setSelectedProviderForDetail(p)}
                        onBookAppointment={(p) => setSelectedProviderForAppointment(p)}
                        onEmergencyCall={handleOpenEmergencyCall}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Trust and Integrity Standards */}
            <TrustSection />
          </div>
        )}

        {/* ========================================================= */}
        {/* MODULE 2: AI EDUCATION (Course Landing Page)              */}
        {/* ========================================================= */}
        {activeModule === 'education' && (
          <div className="animate-in fade-in duration-300">
            <CourseHero
              onApplyClick={() => {
                const el = document.getElementById('course-registration-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onDownloadSyllabus={() => {
                addToast('Curriculum Syllabus PDF spec ready for offline review.', 'Downloaded syllabus outline.', 'info');
              }}
              onCurriculumClick={() => {
                const el = document.getElementById('course-curriculum-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <CourseOverview />

            <LearningOutcomes />

            <CurriculumAccordion />

            <TargetAudience />

            <BenefitsComparison />

            <Testimonials />

            <RegistrationForm
              onSuccessToast={(msg) => addToast(msg, 'Admissions team notified.', 'success')}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* MODULE 3: AI CONTENT CREATION SYSTEM (Carousel Engine)   */}
        {/* ========================================================= */}
        {activeModule === 'content-studio' && (
          <div className="animate-in fade-in duration-300">
            {/* Visual 8-Step Interactive Pipeline Runner */}
            <WorkflowVisualizer />

            {/* Interactive Carousel Studio & 7-Slide Graphic Deliverable */}
            <CarouselInteractiveStudio
              onSuccessToast={(msg) => addToast(msg, undefined, 'success')}
            />

            {/* Make / n8n Automation Architecture Blueprint */}
            <AutomationDiagram />

            {/* Recommended Tools Matrix & Selection Rationale */}
            <ToolsMatrix />

            {/* Implemented Prototype vs Proposed Production Automation */}
            <AutomationVsPrototype />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <ProviderDetailModal
        provider={selectedProviderForDetail}
        isOpen={!!selectedProviderForDetail}
        onClose={() => setSelectedProviderForDetail(null)}
        onBookAppointment={(p) => setSelectedProviderForAppointment(p)}
        onEmergencyCall={handleOpenEmergencyCall}
        onReportCorrection={(p) => handleOpenCorrection(p)}
      />

      <AppointmentModal
        provider={selectedProviderForAppointment}
        isOpen={!!selectedProviderForAppointment}
        onClose={() => setSelectedProviderForAppointment(null)}
        onSuccess={(id) => {
          addToast(`Slot confirmed! Ref: ${id}`, 'Clinic dispatch updated.', 'success');
        }}
      />

      <ListBusinessModal
        isOpen={listBusinessModalOpen}
        onClose={() => setListBusinessModalOpen(false)}
        onSuccessToast={(msg) => addToast(msg, 'Verification queue updated.', 'success')}
      />

      <CorrectionModal
        provider={correctionTargetProvider}
        allProviders={MOCK_PROVIDERS}
        isOpen={correctionModalOpen}
        onClose={() => {
          setCorrectionModalOpen(false);
          setCorrectionTargetProvider(null);
        }}
        onSuccessToast={(msg) => addToast(msg, 'Moderation queue notified.', 'success')}
      />

      <EmergencyDispatchModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        onSuccessToast={(msg) => addToast(msg, 'Unit tracking link sent to mobile.', 'success')}
      />

      <ArchitectureModal
        isOpen={architectureModalOpen}
        onClose={() => setArchitectureModalOpen(false)}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Global Ecosystem Footer */}
      <Footer
        onSelectModule={handleSelectModule}
        onOpenArchitectureModal={() => setArchitectureModalOpen(true)}
      />
    </div>
  );
}

export default App;
