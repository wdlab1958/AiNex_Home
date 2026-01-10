// ========================================
// Navigation Types
// ========================================
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
  badge?: string;
}

export interface NavConfig {
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    products: NavItem[];
    resources: NavItem[];
    legal: NavItem[];
  };
}

// ========================================
// Content Types
// ========================================
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface Statistic {
  id: string;
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  industry: Industry;
  results: string[];
  image?: string;
  featured?: boolean;
}

// ========================================
// Platform Types
// ========================================
export type Platform = 'ainex' | 'agentforge';

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  capabilities: string[];
  platform: Platform;
}

export interface ConsultingStage {
  id: number;
  name: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
  icon: string;
}

export interface ISOStandard {
  id: string;
  code: string;
  name: string;
  description: string;
  coverage: string[];
}

// ========================================
// Service Types
// ========================================
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly?: number;
  };
  currency: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: {
    label: string;
    href: string;
  };
}

// ========================================
// Industry Types
// ========================================
export type Industry =
  | 'manufacturing'
  | 'finance'
  | 'healthcare'
  | 'retail'
  | 'public'
  | 'it_service'
  | 'other';

export interface IndustrySolution {
  id: string;
  industry: Industry;
  title: string;
  description: string;
  useCases: string[];
  benefits: string[];
  icon: string;
  href: string;
}

// ========================================
// Form Types
// ========================================
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  industry: Industry;
  message: string;
  consent: boolean;
}

export interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: Industry;
  companySize: string;
  interests: Platform[];
  preferredDate?: string;
  message?: string;
}

// ========================================
// API Types
// ========================================
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// ========================================
// SEO Types
// ========================================
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// ========================================
// Blog Types
// ========================================
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: number;
}

// ========================================
// Animation Types (for Framer Motion)
// ========================================
export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
}

// ========================================
// Three.js Types
// ========================================
export interface ParticleConfig {
  count: number;
  size: number;
  color: string;
  speed: number;
}

export interface SceneConfig {
  background: string;
  ambientLight: number;
  cameraPosition: [number, number, number];
}
