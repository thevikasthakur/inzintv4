// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href?: string;
  submenu?: NavSubmenu;
}

export interface NavSubmenu {
  type: 'tabs' | 'columns' | 'grid';
  tabs?: TabItem[];
  columns?: ColumnItem[];
  items?: MenuItem[];
  cta?: CTAItem;
}

export interface TabItem {
  id: string;
  label: string;
  content: TabContent;
}

export interface TabContent {
  title?: string;
  items: MenuItem[];
  featuredSection?: FeaturedSection;
}

export interface ColumnItem {
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
  submenu?: MenuItem[];
}

export interface CTAItem {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
}

export interface FeaturedSection {
  title: string;
  items: FeaturedItem[];
}

export interface FeaturedItem {
  id: string;
  title: string;
  image: string;
  href: string;
  date?: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  client: string;
  logo: string;
  title: string;
  description: string;
  results: ResultMetric[];
  image: string;
  href: string;
}

export interface ResultMetric {
  label: string;
  value: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  video?: string;
  image: string;
  rating?: number;
}

// Technology Types
export interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  href: string;
}

// Award Types
export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Office Location Types
export interface OfficeLocation {
  id: string;
  country: string;
  city: string;
  address: string;
  flag: string;
}