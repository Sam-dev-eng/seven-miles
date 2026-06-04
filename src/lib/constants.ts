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
    images: [
      "/images/property-1.webp",
      "/images/property-2.webp",
      "/images/property-5.webp",
      "/images/cta-bg.webp",
    ],
    description: "An exquisite 5-bedroom fully detached luxury residence situated in the heart of Lekki Phase 1. Designed with elegance, modern convenience, and premium finishes, this property offers spacious living spaces, a fully fitted automation-ready kitchen, and gorgeous panoramic views of Lekki's skyline. Ideal for families seeking a premium lifestyle in one of Lagos's most vibrant residential zones.",
    features: [
      "24/7 Power Supply & Backup Generator",
      "Fully Fitted Gourmet Kitchen",
      "Swimming Pool & Automated Deck",
      "Smart Security Systems & CCTV",
      "Fitted Walk-in Closets",
      "Self-contained Boys Quarters",
      "Secure Automated Gate Access",
    ],
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
    images: [
      "/images/property-2.webp",
      "/images/property-1.webp",
      "/images/property-5.webp",
      "/images/about-hero.webp",
    ],
    description: "Located in Nigeria's most exclusive residential neighborhood, Banana Island, this premium 6-bedroom architectural masterpiece features high ceilings, floor-to-ceiling double-glazed windows, and a private glass elevator. Offering unparalleled security, luxury finishes, and top-tier amenities, this property is the ultimate statement of luxury living.",
    features: [
      "Private Glass Elevator",
      "Full Home Automation (Lighting, Audio, Climate)",
      "Dedicated Private Cinema Room",
      "Olympic-size Communal Swimming Pool",
      "Water Treatment & Reverse Osmosis Plant",
      "24/7 Armed Security & Concierge Service",
      "Rooftop Terrace with Lagoon View",
    ],
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
    images: [
      "/images/property-3.webp",
      "/images/property-6.webp",
      "/images/properties-hero.webp",
    ],
    description: "An investment-grade 500 sqm parcel of dry land located within a rapidly developing gated community in Ibeju-Lekki. Positioned near the Lekki Free Trade Zone, deep seaport, and Dangote Refinery, this land promises high capital appreciation and is perfect for immediate residential development or long-term land-banking.",
    features: [
      "100% Dry Land (No Sand-filling Required)",
      "Secure Gated Estate with Patrol Teams",
      "Done Perimeter Fencing & Gatehouse",
      "Cleared Paved Road Access",
      "Excellent Storm Water Drainage System",
      "Registered Survey & Certificate of Occupancy (C of O)",
    ],
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
    images: [
      "/images/property-4.webp",
      "/images/about-story.webp",
      "/images/contact-hero.webp",
    ],
    description: "A state-of-the-art commercial space offering 200 sqm of open-plan layout in Victoria Island. Perfectly suited for corporate offices, co-working spaces, or premium retail outlets. Features high-speed fiber internet infrastructure, central cooling, and dedicated power backups to keep operations running smoothly.",
    features: [
      "Open-Plan Flexible Configuration",
      "Central HVAC Climate Control System",
      "24/7 Power with Dedicated Substation",
      "High-speed Fiber Optic Connectivity",
      "Ample Multi-level Parking",
      "Integrated Fire Suppression System",
      "Professional 24/7 Facility Management",
    ],
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
    images: [
      "/images/property-5.webp",
      "/images/property-1.webp",
      "/images/property-2.webp",
    ],
    description: "A contemporary 4-bedroom terrace house designed for family living in Ajah, Lagos. Boasting clean lines, well-ventilated rooms, and a child-friendly environment. Fully equipped with kitchen appliances, security systems, and high-quality sanitary wares.",
    features: [
      "Children's Secure Playground",
      "Fully Fitted Kitchen Cabinets & Microwave",
      "24/7 Electricity with Pre-paid Meter",
      "Central Sewage Treatment System",
      "Interlocked Estate Road Access",
      "Dedicated Substation & Electric Security Fence",
    ],
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
    images: [
      "/images/property-6.webp",
      "/images/property-3.webp",
      "/images/properties-hero.webp",
    ],
    description: "Acquire prime waterfront land in the serene town of Epe, Lagos. This 1000 sqm parcel offers scenic water views, peaceful surroundings, and is an ideal location for a luxury resort home or a high-yield land-banking investment. Fully free from government acquisition.",
    features: [
      "Scenic Lagoon Waterfront View",
      "Ideal for Land Banking or Resort Building",
      "100% Dry Level Ground with Sandy Soil",
      "Registered Survey & Deed of Assignment",
      "Direct Connection to Public Electricity Grid",
      "Recreational Boat Jetty & Clubhouse Access",
    ],
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
