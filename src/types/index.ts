/* ──────────────────────────────────────────────────────────────
   Shared TypeScript interfaces for the Seven Miles website
   ────────────────────────────────────────────────────────────── */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "residential" | "commercial" | "land";
  image: string;
  isNew?: boolean;
}

export interface TrustBadge {
  title: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  href?: string;
}
