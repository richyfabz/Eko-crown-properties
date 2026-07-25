export type Currency = 'NGN';
export type PropertyPurpose = 'buy' | 'rent';
export type PropertyStatus = 'available' | 'reserved' | 'sold' | 'coming-soon';
export type VerificationStatus = 'verified' | 'reviewed' | 'sample';
export type Furnishing = 'furnished' | 'semi-furnished' | 'unfurnished';
export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc';

export interface PropertyImage {
  src: string;
  alt: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface PropertyLocation {
  slug: string;
  state: string;
  city: string;
  area: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  languages: string[];
  yearsExperience?: number;
  avatar?: string;
  bio: string;
  availability: string;
}

export interface Amenity {
  id: string;
  label: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  price: number;
  currency: Currency;
  purpose: PropertyPurpose;
  propertyType: string;
  status: PropertyStatus;
  verificationStatus: VerificationStatus;
  bedrooms?: number;
  bathrooms?: number;
  toilets?: number;
  parkingSpaces?: number;
  landArea?: string;
  buildingArea?: string;
  yearBuilt?: number;
  furnishing?: Furnishing;
  location: PropertyLocation;
  images: PropertyImage[];
  agentId: string;
  amenities: string[];
  features: string[];
  featured?: boolean;
  luxury?: boolean;
  available: boolean;
  createdAt: string;
  updatedAt: string;
  inspectionWindow: string;
  nearbySchools: string[];
  nearbyHospitals: string[];
  nearbyShopping: string[];
  mapLabel: string;
  floorPlanNote: string;
  virtualTourNote: string;
}

export interface SearchFilters {
  purpose?: PropertyPurpose;
  query?: string;
  state?: string;
  city?: string;
  area?: string;
  propertyType?: string;
  bedrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  verifiedOnly?: boolean;
  featuredOnly?: boolean;
  luxuryOnly?: boolean;
  sortBy?: SortOption;
}

export interface InspectionRequest {
  fullName: string;
  email: string;
  phone: string;
  propertySlug: string;
  preferredDate: string;
  preferredTime: string;
  purpose: PropertyPurpose;
  notes?: string;
}

export interface PropertyInquiry {
  fullName: string;
  email: string;
  phone: string;
  propertySlug?: string;
  message: string;
  consent: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  href: string;
}

export interface LocationProfile {
  slug: string;
  name: string;
  state: string;
  overview: string;
  lifestyle: string;
  landmarks: string[];
  schools: string[];
  transport: string[];
  hospitals: string[];
  shopping: string[];
  propertyTypes: string[];
  marketNote: string;
  image: string;
  featuredPropertySlugs: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface PropertyCategory {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ComparisonItem {
  propertyId: string;
  addedAt: string;
}

export interface RecentlyViewedItem {
  propertyId: string;
  viewedAt: string;
}

export interface Stat {
  label: string;
  value: string;
  note: string;
}

export interface StorySlide {
  id: string;
  title: string;
  description: string;
  state: string;
  image: string;
  label: string;
}
