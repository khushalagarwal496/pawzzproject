import { Provider } from '../types/practo';

export const CITIES = ['All Cities', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune'];

export const SERVICE_CATEGORIES = [
  'Veterinary Clinics',
  'Hospitals',
  'Boarding',
  'Diagnostics',
  'Ambulances',
  'NGOs',
] as const;

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 'prov-01',
    name: 'Cessna Lifeline Veterinary Hospital',
    tagline: 'Super-Specialty Veterinary Care & 24/7 Trauma Center',
    category: 'Hospitals',
    rating: 4.8,
    reviewCount: 524,
    city: 'Bengaluru',
    locality: 'Domlur / Indiranagar',
    distanceKm: 2.1,
    address: '148, HBCS Layout, Amarjyoti Layout, Domlur, Bengaluru, Karnataka 560071',
    phone: '+91 80 4115 8888',
    emergencyPhone: '+91 99000 88888',
    email: 'care@cessnalifeline.com',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: 'Open 24 Hours • 7 Days a Week',
    consultationFeeRange: '₹800 - ₹1,200',
    keySpecialities: ['Orthopedic Surgery', 'Cardiac ICU', 'Oncology', 'Emergency Trauma'],
    facilities: ['24/7 Intensive Care Unit', 'Digital CT & Ultrasound', 'Dedicated Feline Ward', 'Emergency Blood Bank', 'Oxygen Life Support Cages'],
    establishedYear: 2008,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    about: 'Cessna Lifeline is one of south India’s premier veterinary multi-specialty centers, equipped with state-of-the-art diagnostic imaging, surgical suites, and round-the-clock emergency veterinary surgeons.',
    services: [
      { name: 'Emergency Trauma & Resuscitation', estimatedFee: '₹1,500' },
      { name: 'Advanced Orthopedic & Spinal Surgery', estimatedFee: '₹18,000 - ₹35,000' },
      { name: 'General Outpatient Consultation', estimatedFee: '₹850' },
      { name: 'Preventive Vaccinations (DHPPi, Anti-Rabies)', estimatedFee: '₹950' },
      { name: 'Pet Ambulance Emergency Transit', estimatedFee: '₹1,200 base' }
    ],
    doctors: [
      {
        id: 'doc-1',
        name: 'Dr. Vivek Sharma',
        qualification: 'MVSc (Surgery & Radiology)',
        specialization: 'Senior Orthopedic Surgeon',
        experienceYears: 16,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      {
        id: 'doc-2',
        name: 'Dr. Shruti Nair',
        qualification: 'BVSc & AH, PG Dip Companion Animal Practice',
        specialization: 'Feline Internal Medicine & Critical Care',
        experienceYears: 9,
        availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sun']
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Arjun Kulkarni',
        petType: 'Golden Retriever (Bruno)',
        rating: 5,
        date: '2 days ago',
        comment: 'Brought Bruno at 2 AM after acute bloat suspicion. The emergency team acted within 4 minutes. Transparent billing and compassionate doctors.',
        verifiedOwner: true
      },
      {
        id: 'rev-2',
        author: 'Meera Sengupta',
        petType: 'Indie Cat (Milo)',
        rating: 5,
        date: '1 week ago',
        comment: 'Great feline-friendly practice. The separate cat waiting corner minimized Milo’s stress during his dental cleanup.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-02',
    name: 'Pet Sanctuary & Healing Clinic',
    tagline: 'Gentle Veterinary Family Practice & Preventive Wellness',
    category: 'Veterinary Clinics',
    rating: 4.9,
    reviewCount: 318,
    city: 'Bengaluru',
    locality: 'Koramangala 4th Block',
    distanceKm: 3.4,
    address: '84, 12th Main Rd, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    phone: '+91 80 2552 1940',
    emergencyPhone: '+91 98450 12390',
    email: 'hello@petsanctuary.in',
    isOpenNow: true,
    is24x7Emergency: false,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM | Sun: 10:00 AM - 2:00 PM',
    consultationFeeRange: '₹500 - ₹700',
    keySpecialities: ['Preventive Medicine', 'Pediatric Puppy Care', 'Dermatology & Allergy Management', 'Geriatric Pet Wellness'],
    facilities: ['Fear-Free Examination Rooms', 'Microchip Implantation', 'Dental Scaler', 'In-House Pharmacy'],
    establishedYear: 2015,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    about: 'A low-stress community veterinary clinic specializing in gentle handling, early diagnosis, and long-term nutrition planning for companion animals.',
    services: [
      { name: 'Wellness Check & Physical Exam', estimatedFee: '₹600' },
      { name: 'Home Visit Consultation (within 7km)', estimatedFee: '₹1,000' },
      { name: 'Skin Scraping & Allergy Triage', estimatedFee: '₹750' },
      { name: 'Ultrasonic Dental Prophylaxis', estimatedFee: '₹3,200' },
      { name: 'Puppy First-Year Vaccination Package', estimatedFee: '₹3,800' }
    ],
    doctors: [
      {
        id: 'doc-3',
        name: 'Dr. Radhika Rao',
        qualification: 'MVSc (Veterinary Medicine)',
        specialization: 'Companion Animal Physician',
        experienceYears: 12,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Priya Narayanan',
        petType: 'Beagle (Toffee)',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Dr. Radhika is an angel. She took 35 minutes explaining Toffee’s chronic ear infection and provided a clear diet roadmap.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-03',
    name: 'Wagville Pet Resort & Cage-Free Boarding',
    tagline: 'Ethical Luxury Boarding, Splash Pool & Behavioural Daycare',
    category: 'Boarding',
    rating: 4.7,
    reviewCount: 198,
    city: 'Bengaluru',
    locality: 'Sarjapur Road / Carmelaram',
    distanceKm: 6.8,
    address: 'Sy No 56/1, Kodathi Village, Off Sarjapur Road, Bengaluru, Karnataka 560035',
    phone: '+91 98860 99442',
    email: 'bookings@wagville.in',
    isOpenNow: true,
    is24x7Emergency: false,
    hasHomeVisit: false,
    isVerified: true,
    isNGO: false,
    openingHours: 'Check-in: 8:00 AM - 7:00 PM (Caretakers 24/7 on-site)',
    consultationFeeRange: '₹900 - ₹1,400 / day',
    keySpecialities: ['Cage-Free Social Boarding', 'Individual Suite Lodging', 'Sensory Sniff Park', 'Agility & Hydrotherapy'],
    facilities: ['1.5 Acre Fenced Green Playgrounds', 'Filtered Bone-Shaped Swimming Pool', 'CCTV Live Parent Stream', 'Vet On-Call 24/7', 'Climate Controlled Suites'],
    establishedYear: 2017,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    about: 'Wagville provides safe, high-enrichment cage-free boarding where dogs socialize by temperament under trained canine behaviorists.',
    services: [
      { name: 'Daycare Pass (8 AM to 7 PM)', estimatedFee: '₹600 / day' },
      { name: 'Standard Boarding (Meals Included)', estimatedFee: '₹1,000 / day' },
      { name: 'Executive Suite with 24/7 Camera Access', estimatedFee: '₹1,400 / day' },
      { name: 'Hydrotherapy & Splash Session', estimatedFee: '₹800 / session' }
    ],
    doctors: [
      {
        id: 'doc-4',
        name: 'Capt. Rakesh Mohan (Retd)',
        qualification: 'Certified Canine Behaviorist (UK-KPA)',
        specialization: 'Canine Temperament & Boarding Lead',
        experienceYears: 14,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Devika & Rohit',
        petType: 'Labrador (Cooper)',
        rating: 5,
        date: '5 days ago',
        comment: 'We traveled abroad for 10 days and received twice-daily WhatsApp video updates. Cooper returned happy, fit, and well-groomed.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-04',
    name: 'VetScan Precision Diagnostics & Imaging',
    tagline: 'ISO-Certified Veterinary Pathology, Digital X-Ray & Ultrasound',
    category: 'Diagnostics',
    rating: 4.9,
    reviewCount: 164,
    city: 'Bengaluru',
    locality: 'Jayanagar 5th Block',
    distanceKm: 4.2,
    address: '32/B, 11th Main, 36th Cross Rd, 5th Block, Jayanagar, Bengaluru 560041',
    phone: '+91 80 4120 7711',
    emergencyPhone: '+91 97410 77112',
    email: 'reports@vetscanlabs.in',
    isOpenNow: true,
    is24x7Emergency: false,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: 'Mon - Sat: 7:30 AM - 8:00 PM | Sun: 8:00 AM - 1:00 PM',
    consultationFeeRange: '₹400 - ₹4,500 (Test specific)',
    keySpecialities: ['Automated Hematology', 'Digital Color Doppler Echo', 'Fine Needle Aspiration (FNAC)', 'Tick-Borne PCR Panels'],
    facilities: ['Same-Day Digital Reporting', 'Home Sample Collection Van', 'High-Frequency 500mA X-Ray', 'Hormonal Assay Analyzer'],
    establishedYear: 2019,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    about: 'Dedicated reference laboratory for veterinary diagnostics, assisting clinicians across the city with rapid, accurate biochemical and histological analyses.',
    services: [
      { name: 'Complete Blood Count (CBC) with Platelet Count', estimatedFee: '₹650' },
      { name: 'Comprehensive Kidney & Liver Function Panel', estimatedFee: '₹1,400' },
      { name: 'Abdominal High-Res Ultrasound Scan', estimatedFee: '₹2,200' },
      { name: 'Two-View Digital Radiography (X-Ray)', estimatedFee: '₹1,500' },
      { name: 'Home Sample Collection Fee', estimatedFee: '₹350' }
    ],
    doctors: [
      {
        id: 'doc-5',
        name: 'Dr. Praveen Shenoy',
        qualification: 'MVSc (Veterinary Pathology)',
        specialization: 'Consultant Clinical Pathologist',
        experienceYears: 15,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Sandeep Varma',
        petType: 'Cocker Spaniel (Leo)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Received complete biochemistry and ultrasound reports within 3 hours. Enabled our vet to start pancreatitis treatment without delay.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-05',
    name: 'RapidPaws Critical Pet Ambulance & Rescue Transit',
    tagline: 'Oxygen-Fitted Intensive Emergency Pet Ambulance Fleet',
    category: 'Ambulances',
    rating: 4.9,
    reviewCount: 412,
    city: 'Bengaluru',
    locality: 'City-wide (Base: Indiranagar & HSR)',
    distanceKm: 1.2,
    address: 'Central Dispatch Hub, 100 Feet Rd, Indiranagar, Bengaluru 560038',
    phone: '+91 80 8888 7297',
    emergencyPhone: '+91 80 8888 7297',
    email: 'dispatch@rapidpaws.org',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: '24/7 Dedicated Emergency Dispatch (Average 18 min response)',
    consultationFeeRange: '₹1,200 - ₹2,500 (distance dependent)',
    keySpecialities: ['Oxygen-Equipped Critical Transit', 'Stretcher & Spinal Board Evacuation', 'Trained Paravet On-Board', 'Hospital Inter-Transfer'],
    facilities: ['Dual Oxygen Cylinders & Regulators', 'Suction Machine', 'Cardiac Defibrillator for Pets', 'Sanitized Isolation Compartments'],
    establishedYear: 2020,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    about: 'Bengaluru’s highest-rated private animal ambulance service. Our ambulances are mobile triage units staffed by certified veterinary technicians.',
    services: [
      { name: 'Emergency Accident Response & Hospital Transfer', estimatedFee: '₹1,500 base' },
      { name: 'Critical Patient Transport with Continuous Oxygen', estimatedFee: '₹2,200' },
      { name: 'Planned Hospital Transfer for Non-Ambulatory Dogs', estimatedFee: '₹1,200' },
      { name: 'Stray Rescue Subsidized Transit', estimatedFee: '₹600' }
    ],
    doctors: [
      {
        id: 'doc-6',
        name: 'Paramedic Anand Kumar',
        qualification: 'Diploma in Animal Health & Emergency Care',
        specialization: 'Emergency Field Triage Officer',
        experienceYears: 8,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Kavita Chawla',
        petType: 'German Shepherd (Simba)',
        rating: 5,
        date: '3 days ago',
        comment: 'When Simba suffered heat exhaustion, RapidPaws arrived in 14 minutes with cooling packs and supplemental oxygen. Literally saved his life.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-06',
    name: 'Voice for Voiceless – Animal Rescue & Sanctuary',
    tagline: 'Compassionate Street Animal Rescue, ABC Programs & Adoption',
    category: 'NGOs',
    rating: 4.8,
    reviewCount: 689,
    city: 'Bengaluru',
    locality: 'Yelahanka North',
    distanceKm: 11.5,
    address: 'Survey 22/4, Doddaballapur Main Rd, Marasandra, Yelahanka, Bengaluru 560064',
    phone: '+91 97425 43211',
    emergencyPhone: '+91 97425 43211',
    email: 'helpline@voiceforvoiceless.org',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: false,
    isVerified: true,
    isNGO: true,
    openingHours: 'Shelter Visits: 10:00 AM - 5:00 PM | Helpline: 24/7',
    consultationFeeRange: 'Free / Community Donations Welcomed',
    keySpecialities: ['Stray Trauma Rehabilitation', 'Animal Birth Control (ABC)', 'Puppy & Kitten Adoption', 'Cruelty Intervention'],
    facilities: ['350+ Animal Capacity Shelter', 'Paralyzed Dog Cart Sanctuary', 'Sterilization Surgical Wing', 'Anti-Rabies Mobile Vaccine Van'],
    establishedYear: 2014,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    about: 'A registered non-profit organization dedicated to rescuing injured stray dogs, cats, and cattle. We provide long-term sanctuary for non-releasable special needs animals.',
    services: [
      { name: 'Stray Rescue & Wound Dressing', estimatedFee: 'Free (Donation suggested)' },
      { name: 'Community Dog Sterilization (ABC)', estimatedFee: 'Free for strays' },
      { name: 'Indie Dog / Kitten Adoption Process', estimatedFee: 'Free (Home check required)' },
      { name: 'Sponsor a Disabled Pet Monthly', estimatedFee: '₹1,500 / month' }
    ],
    doctors: [
      {
        id: 'doc-7',
        name: 'Dr. Chethan Gowda',
        qualification: 'BVSc & AH',
        specialization: 'Shelter & Wildlife Medicine',
        experienceYears: 10,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Sumanth Bharadwaj',
        petType: 'Rescued Indie (Lassie)',
        rating: 5,
        date: '1 month ago',
        comment: 'Reported an injured puppy with a broken femur near Hebbal. Their rescue vehicle picked her up, operated, and she is now happily adopted!',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-07',
    name: 'Crown Vet Multi-Speciality Clinic',
    tagline: 'Modern Clinical Diagnostics & Minimally Invasive Surgery',
    category: 'Veterinary Clinics',
    rating: 4.7,
    reviewCount: 382,
    city: 'Mumbai',
    locality: 'Bandra West & Worli',
    distanceKm: 5.1,
    address: 'Arch 29, Below Mahalaxmi Bridge, Dr E Moses Rd, Worli, Mumbai 400018',
    phone: '+91 22 6600 4400',
    emergencyPhone: '+91 99200 44000',
    email: 'mumbai@crownvet.com',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: false,
    isVerified: true,
    isNGO: false,
    openingHours: 'Open 24 Hours • 365 Days',
    consultationFeeRange: '₹1,000 - ₹1,500',
    keySpecialities: ['Laparoscopic Surgery', 'Cardiology & ECG', 'Endoscopy', 'Exotic Animal Care'],
    facilities: ['Dedicated Ortho Surgical Theatre', 'HEPA-Filtered Air Handling', 'In-house Lab & Blood Gas Analyzer', 'Private Waiting Pods'],
    establishedYear: 2016,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    about: 'Crown Vet brings European veterinary healthcare standards to urban India, with cutting-edge surgical infrastructure and transparent medical protocols.',
    services: [
      { name: 'Senior Pet Wellness & Cardio Screening', estimatedFee: '₹2,500' },
      { name: 'Minimally Invasive Spay/Neuter (Keyhole)', estimatedFee: '₹14,000' },
      { name: 'Digital Endoscopy Foreign Body Retrieval', estimatedFee: '₹9,500' }
    ],
    doctors: [
      {
        id: 'doc-8',
        name: 'Dr. Zeeshan Merchant',
        qualification: 'MVSc, MRCVS',
        specialization: 'Soft Tissue & Endosurgeon',
        experienceYears: 13,
        availableDays: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-8',
        author: 'Rhea Kapoor',
        petType: 'French Bulldog (Ollie)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Frenchies are notoriously tricky with anaesthesia. Crown Vet handled Ollie’s airway surgery with utmost care and zero complications.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-08',
    name: 'Max Vets Super-Speciality Hospital',
    tagline: 'North India’s Foremost Veterinary Referral Hospital',
    category: 'Hospitals',
    rating: 4.8,
    reviewCount: 890,
    city: 'Delhi NCR',
    locality: 'Greater Kailash 1',
    distanceKm: 3.8,
    address: 'R-22, Greater Kailash 1, Near M-Block Market, New Delhi 110048',
    phone: '+91 11 4165 5555',
    emergencyPhone: '+91 98100 55555',
    email: 'delhi@maxvets.com',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: '24/7 Inpatient & Emergency Care',
    consultationFeeRange: '₹900 - ₹1,400',
    keySpecialities: ['Neurology & Spine', 'Ophthalmology Surgery', 'Dialysis for Pets', 'Critical Trauma'],
    facilities: ['Pet Dialysis Unit', '16-Slice CT Scanner', '24/7 ICU & Neonatal Incubators', 'Pharmacy & Blood Bank'],
    establishedYear: 2002,
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    about: 'Max Vets has delivered specialized veterinary healthcare for over 22 years, featuring northern India’s first dedicated small-animal hemodialysis wing.',
    services: [
      { name: 'Ophthalmic Cataract Phacoemulsification', estimatedFee: '₹22,000' },
      { name: 'Peritoneal / Hemo Dialysis Session', estimatedFee: '₹8,500' },
      { name: 'Whole Body Diagnostic CT Scan', estimatedFee: '₹12,000' }
    ],
    doctors: [
      {
        id: 'doc-9',
        name: 'Dr. Kunal Dev Sharma',
        qualification: 'MVSc Surgery, Dip Vet Ophthalmology',
        specialization: 'Director of Surgery & Ophthalmology',
        experienceYears: 24,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      }
    ],
    reviews: [
      {
        id: 'rev-9',
        author: 'Aditya Mathur',
        petType: 'Pug (Tyson)',
        rating: 5,
        date: '4 days ago',
        comment: 'Saved Tyson when both his kidneys were struggling after a toxic ingestion. Cleanest hospital facilities I have seen in Delhi.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-09',
    name: 'The Cat Care Clinic & Feline Boarding Lounge',
    tagline: 'Exclusive Cat-Only Practice – Zero Barking, Zero Dogs',
    category: 'Boarding',
    rating: 4.9,
    reviewCount: 241,
    city: 'Bengaluru',
    locality: 'Whitefield',
    distanceKm: 8.5,
    address: '42, ITPL Main Road, Hope Farm Junction, Whitefield, Bengaluru 560066',
    phone: '+91 80 4955 3322',
    email: 'purr@catcarelounge.in',
    isOpenNow: true,
    is24x7Emergency: false,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: 'Tue - Sun: 10:00 AM - 7:30 PM (Mondays Closed)',
    consultationFeeRange: '₹750 - ₹1,100',
    keySpecialities: ['Cat-Only Stress-Free Boarding', 'Feline Kidney Disease Management', 'Gentle Grooming', 'Cat Nutrition'],
    facilities: ['Vertical Cat Climbing Trees', 'Pheromone Diffused Rooms (Feliway)', 'Soundproof Feline Suites', 'Scratching Posts & Toys'],
    establishedYear: 2021,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    about: 'A peaceful sanctuary designed purely for cats. By eliminating dog scents and sounds, cats experience almost zero stress during health checkups and stays.',
    services: [
      { name: 'Luxury Feline Suite Boarding', estimatedFee: '₹850 / day' },
      { name: 'Feline Comprehensive Blood & Renal Screen', estimatedFee: '₹1,800' },
      { name: 'Stress-Free Lion Cut Grooming', estimatedFee: '₹2,200' }
    ],
    doctors: [
      {
        id: 'doc-10',
        name: 'Dr. Tanvi Joshi',
        qualification: 'BVSc & AH, ISFM Advanced Cat Care Cert',
        specialization: 'Feline Medicine Specialist',
        experienceYears: 10,
        availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    reviews: [
      {
        id: 'rev-10',
        author: 'Ananya Roy',
        petType: 'Persian Cat (Snowy)',
        rating: 5,
        date: '1 week ago',
        comment: 'Finally a place where my cat doesn’t tremble! The ambient calm and pheromone diffusers make an immense difference.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-10',
    name: 'Apollo Animals 24/7 Emergency Ambulance Transit',
    tagline: 'GPS-Tracked Fast Response Animal Ambulance & Mobile Vet Unit',
    category: 'Ambulances',
    rating: 4.7,
    reviewCount: 310,
    city: 'Mumbai',
    locality: 'South Mumbai & Western Suburbs',
    distanceKm: 3.9,
    address: 'Near Bandra Reclamation Bus Depot, Bandra West, Mumbai 400050',
    phone: '+91 22 2640 9999',
    emergencyPhone: '+91 22 2640 9999',
    email: 'sos@apolloanimals.in',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: '24 Hours Emergency Dispatch',
    consultationFeeRange: '₹1,500 - ₹3,000',
    keySpecialities: ['Mobile IV Fluid Therapy', 'Accident Triage & Splinting', 'Stretcher Evacuation from Apartments', 'Critical Hospital Handoff'],
    facilities: ['Hydraulic Stretcher Lift', 'Active Air Conditioning', 'On-Board Oxygen & Suction', 'Direct Link to Referral Hospitals'],
    establishedYear: 2018,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    about: 'Dedicated high-speed mobile trauma service for pets and stray animals across Mumbai and Thane, bridging the critical golden hour.',
    services: [
      { name: 'Priority Rapid Emergency Ambulance Transit', estimatedFee: '₹1,800' },
      { name: 'Home Oxygen Stabilization Visit', estimatedFee: '₹2,500' },
      { name: 'Airport Pet Cargo Transit (AC Van)', estimatedFee: '₹3,500' }
    ],
    doctors: [
      {
        id: 'doc-11',
        name: 'Dr. Nikhil Salve',
        qualification: 'MVSc Emergency Medicine',
        specialization: 'Emergency Medical Officer',
        experienceYears: 7,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    reviews: [
      {
        id: 'rev-11',
        author: 'Farhan Dsouza',
        petType: 'Boxer (Rocky)',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Rocky collapsed on a Sunday afternoon. Apollo arrived within 20 mins, put him on oxygen and got us to the hospital safely. Phenomenal service.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-11',
    name: 'Sanjay Gandhi Animal Care Centre (SGACC)',
    tagline: 'India’s Oldest & Largest All-Animal Shelter & Hospital',
    category: 'NGOs',
    rating: 4.6,
    reviewCount: 1420,
    city: 'Delhi NCR',
    locality: 'Raja Garden, New Delhi',
    distanceKm: 9.2,
    address: 'Near Shivaji College, Raja Garden, New Delhi 110027',
    phone: '+91 11 2544 8062',
    emergencyPhone: '+91 11 2544 7751',
    email: 'info@sgacc.org',
    isOpenNow: true,
    is24x7Emergency: true,
    hasHomeVisit: false,
    isVerified: true,
    isNGO: true,
    openingHours: 'Shelter Hours: 9:00 AM - 5:00 PM | Emergency Casualty: 24 Hours',
    consultationFeeRange: 'Subsidized / Free for Community Animals',
    keySpecialities: ['Stray Care & Casualty Treatment', 'Equine & Cattle Rescue', 'Free Rabies Vaccination Drives', 'Wildlife Handoff to Forest Dept'],
    facilities: ['Operation Theatres', 'Spacious Cattle Shaded Pens', 'Avian Recovery Aviary', 'Burial & Cremation Facility'],
    establishedYear: 1980,
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80',
    about: 'SGACC is home to over 3,000 sick, injured and abandoned animals including dogs, cats, monkeys, birds, and cows. We treat over 200 cases daily.',
    services: [
      { name: 'Stray Emergency Casualty Admission', estimatedFee: 'Free' },
      { name: 'Subsidized Outpatient OPD for Low-Income Pet Parents', estimatedFee: '₹150' },
      { name: 'Animal Birth Control & Rabies Shot', estimatedFee: 'Free' }
    ],
    doctors: [
      {
        id: 'doc-12',
        name: 'Dr. R.K. Pathak',
        qualification: 'Senior Veterinary Officer, BVSc & AH',
        specialization: 'Shelter Chief Surgeon',
        experienceYears: 28,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-12',
        author: 'Pooja Bhattacharya',
        petType: 'Stray Puppy Rescue',
        rating: 5,
        date: '2 months ago',
        comment: 'Brought a hit-and-run indie pup. The casualty doctors bandaged the open fracture immediately. True champions for voiceless souls.',
        verifiedOwner: true
      }
    ]
  },
  {
    id: 'prov-12',
    name: 'PetPath Advanced Veterinary Diagnostics',
    tagline: 'Automated Reference Pathology, Hormones & Genetics',
    category: 'Diagnostics',
    rating: 4.8,
    reviewCount: 205,
    city: 'Hyderabad',
    locality: 'Banjara Hills / Jubilee Hills',
    distanceKm: 4.7,
    address: 'Plot 418, Road No. 10, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 40 2335 8899',
    emergencyPhone: '+91 91000 33899',
    email: 'hyderabad@petpath.in',
    isOpenNow: true,
    is24x7Emergency: false,
    hasHomeVisit: true,
    isVerified: true,
    isNGO: false,
    openingHours: 'Mon - Sat: 8:00 AM - 8:30 PM | Sun: 9:00 AM - 2:00 PM',
    consultationFeeRange: '₹500 - ₹3,800',
    keySpecialities: ['Digital Cytology & Biopsy', 'Endocrine & Thyroid Profiles', 'Infectious PCR Panels (Parvo/Distemper)', 'Electrolyte & Blood Gas'],
    facilities: ['Roche Automated Biochemistry', 'Dry Chemistry Analyzers', 'Home Phlebotomy Technicians', 'Cloud Online Report Portal'],
    establishedYear: 2020,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    about: 'PetPath delivers rapid, reference-grade lab diagnostics to clinics throughout Hyderabad, featuring AI-assisted digital cytology for urgent surgical cases.',
    services: [
      { name: 'Urgent Parvovirus Antigen PCR Screen', estimatedFee: '₹1,200' },
      { name: 'Canine Thyroid Profile (Total T4 + TSH)', estimatedFee: '₹1,600' },
      { name: 'Full Senior Pet Health Panel (CBC + 24 Biochem)', estimatedFee: '₹2,400' }
    ],
    doctors: [
      {
        id: 'doc-13',
        name: 'Dr. Lavanya Reddy',
        qualification: 'MVSc (Veterinary Pathology)',
        specialization: 'Director of Clinical Diagnostics',
        experienceYears: 11,
        availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    ],
    reviews: [
      {
        id: 'rev-13',
        author: 'Vikram Teja',
        petType: 'Shih Tzu (Coco)',
        rating: 5,
        date: '1 week ago',
        comment: 'Their phlebotomist was so gentle with Coco during the home blood collection. Reports arrived via SMS in 4 hours.',
        verifiedOwner: true
      }
    ]
  }
];
