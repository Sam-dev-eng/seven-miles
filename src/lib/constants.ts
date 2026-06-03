/* ──────────────────────────────────────────────────────────────
   Central constants — single source of truth for company data,
   navigation links, social URLs, and mock content.
   ────────────────────────────────────────────────────────────── */

import type {
  NavLink,
  Service,
  ProcessStep,
  Property,
  TrustBadge,
  Stat,
  Testimonial,
} from "@/types";

/* ─── Company Information ──────────────────────────────────── */

export const COMPANY_NAME = "Seven Miles Ltd";
export const COMPANY_SHORT_NAME = "Seven Miles";
export const COMPANY_TAGLINE = "We Buy. We Build. We Sell.";
export const COMPANY_DESCRIPTION =
  "A real estate company focused on building quality homes and delivering smart property and investment opportunities.";
export const COMPANY_LONG_DESCRIPTION =
  "Seven Miles Ltd is an RC Registered Property Brand dedicated to transforming the Nigerian real estate landscape. We acquire prime and strategic land in high-value locations, design and build quality homes with attention to detail and modern living in mind, and sell premium homes that deliver luxury, comfort, and long-term value.";

/* ─── Social & Contact Links ───────────────────────────────── */

export const WHATSAPP_URL = "https://wa.me/message/A64BHCSFL2RIP1";
export const INSTAGRAM_URL = "https://instagram.com/sevenmilesproperties";
export const INSTAGRAM_HANDLE = "@sevenmilesproperties";
export const EMAIL_ADDRESS = "info@sevenmiles.com";
export const PHONE_NUMBER = "+234 916 492 2035";
export const OFFICE_ADDRESS = "Lagos, Nigeria";

/* ─── Navigation ───────────────────────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
];

/* ─── Services ─────────────────────────────────────────────── */

export const SERVICES: Service[] = [
  {
    id: "buy",
    title: "Buy",
    description:
      "Find your dream property from our curated selection of premium homes and investment opportunities across prime locations.",
    icon: "Home",
  },
  {
    id: "sell",
    title: "Sell",
    description:
      "List your property with us and reach qualified buyers. We handle marketing, inspections, and negotiations for you.",
    icon: "DollarSign",
  },
  {
    id: "build",
    title: "Build",
    description:
      "From architectural design to final finishes, we build quality homes with attention to detail and modern living in mind.",
    icon: "Hammer",
  },
  {
    id: "lease",
    title: "Lease",
    description:
      "Explore flexible leasing options for residential and commercial properties in high-demand areas.",
    icon: "Key",
  },
];

/* ─── Process Steps ────────────────────────────────────────── */

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "We Buy Land",
    description:
      "We acquire prime and strategic land in high value locations with verified documentation and clear titles.",
    icon: "MapPin",
  },
  {
    step: 2,
    title: "We Build Excellence",
    description:
      "We design and build quality homes with attention to detail and modern living in mind, using premium materials.",
    icon: "Building2",
  },
  {
    step: 3,
    title: "We Sell Value",
    description:
      "We sell premium homes that deliver luxury, comfort, and long-term value to discerning homeowners and investors.",
    icon: "TrendingUp",
  },
];

/* ─── Trust Badges ─────────────────────────────────────────── */

export const TRUST_BADGES: TrustBadge[] = [
  { title: "Trusted Experts", icon: "Shield" },
  { title: "Quality Assured", icon: "BadgeCheck" },
  { title: "Premium Homes", icon: "Crown" },
  { title: "Great Investments", icon: "TrendingUp" },
];

/* ─── Stats ────────────────────────────────────────────────── */

export const COMPANY_STATS: Stat[] = [
  { value: "500+", label: "Properties Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "50+", label: "Ongoing Projects" },
];

/* ─── Mock Properties ──────────────────────────────────────── */

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "Luxe Grandview Residence",
    location: "Lekki Phase 1, Lagos",
    price: "₦185,000,000",
    bedrooms: 5,
    bathrooms: 5,
    area: "450 sqm",
    type: "residential",
    image: "/images/property-1.webp",
    isNew: true,
  },
  {
    id: "prop-2",
    title: "The Crestline Duplex",
    location: "Banana Island, Lagos",
    price: "₦320,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "600 sqm",
    type: "residential",
    image: "/images/property-2.webp",
  },
  {
    id: "prop-3",
    title: "Ibeju-Lekki Smart Plot",
    location: "Ibeju-Lekki, Lagos",
    price: "₦15,000,000",
    bedrooms: 0,
    bathrooms: 0,
    area: "500 sqm",
    type: "land",
    image: "/images/property-3.webp",
    isNew: true,
  },
  {
    id: "prop-4",
    title: "Skyline Commercial Suite",
    location: "Victoria Island, Lagos",
    price: "₦95,000,000",
    bedrooms: 0,
    bathrooms: 2,
    area: "200 sqm",
    type: "commercial",
    image: "/images/property-4.webp",
  },
  {
    id: "prop-5",
    title: "The Amber Court Terrace",
    location: "Ajah, Lagos",
    price: "₦75,000,000",
    bedrooms: 4,
    bathrooms: 4,
    area: "350 sqm",
    type: "residential",
    image: "/images/property-5.webp",
  },
  {
    id: "prop-6",
    title: "Epe Waterfront Estate",
    location: "Epe, Lagos",
    price: "₦8,500,000",
    bedrooms: 0,
    bathrooms: 0,
    area: "1000 sqm",
    type: "land",
    image: "/images/property-6.webp",
  },
];

/* ─── Testimonials ─────────────────────────────────────────── */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Adebayo Johnson",
    role: "Homeowner",
    content:
      "Seven Miles delivered beyond our expectations. The quality of our home is exceptional, and the entire process was transparent and professional.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Chioma Okafor",
    role: "Property Investor",
    content:
      "I've invested in three properties through Seven Miles. Their market knowledge and honest advice have made every investment worthwhile.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Emeka Nwosu",
    role: "Homeowner",
    content:
      "From land acquisition to handing over the keys, Seven Miles was with us every step. Truly a trustworthy partner in real estate.",
    rating: 5,
  },
];
