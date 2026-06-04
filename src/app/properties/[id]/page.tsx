import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Bed, Bath, Maximize, ChevronRight, Phone, Mail, Award, CheckCircle2 } from "lucide-react";
import { FEATURED_PROPERTIES, PHONE_NUMBER, EMAIL_ADDRESS } from "@/lib/constants";
import { PropertyGallery } from "./property-gallery";
import { InspectionScheduler } from "./inspection-scheduler";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = FEATURED_PROPERTIES.find((p) => p.id === id);
  if (!property) {
    return {
      title: "Property Not Found",
    };
  }
  return {
    title: `${property.title} | Seven Miles Ltd`,
    description: property.description.substring(0, 160),
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = FEATURED_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Get related properties (same type first, or just other properties)
  const relatedProperties = FEATURED_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.type === property.type || p.type !== "land")
  ).slice(0, 3);

  return (
    <div className="pt-24 pb-16 bg-dark-50 dark:bg-dark-900/40 min-h-screen">
      {/* ─── Breadcrumbs & Navigation ─── */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-dark-500 dark:text-dark-400">
          <li>
            <Link href="/" className="hover:text-gold-500 hover:underline transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight size={14} className="text-dark-300 dark:text-dark-600" />
          <li>
            <Link href="/properties" className="hover:text-gold-500 hover:underline transition-colors">
              Properties
            </Link>
          </li>
          <ChevronRight size={14} className="text-dark-300 dark:text-dark-600" />
          <li className="text-dark-800 dark:text-dark-200 font-medium truncate max-w-[200px] sm:max-w-xs">
            {property.title}
          </li>
        </ol>
      </nav>

      {/* ─── Main Details Section ─── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Image Gallery, Specs, Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Title & Price Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-dark-850 border border-dark-100 dark:border-dark-800">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 uppercase tracking-wider">
                  {property.type} For Sale
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white leading-tight">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 text-dark-500 dark:text-dark-400 text-sm">
                  <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-medium text-dark-550 dark:text-dark-400 uppercase tracking-widest">
                  Asking Price
                </p>
                <p className="text-3xl font-heading font-black text-gold-500 mt-1">
                  {property.price}
                </p>
              </div>
            </div>

            {/* Specs Strip */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-white dark:bg-dark-850 border border-dark-100 dark:border-dark-800 text-center">
              {property.type !== "land" ? (
                <>
                  <div className="space-y-1 py-1">
                    <Bed className="mx-auto text-gold-500 mb-1" size={20} />
                    <p className="text-xs text-dark-400 dark:text-dark-550 uppercase font-semibold">Bedrooms</p>
                    <p className="font-heading text-lg font-bold text-dark-800 dark:text-white">{property.bedrooms} Beds</p>
                  </div>
                  <div className="space-y-1 py-1 border-x border-dark-100 dark:border-dark-800">
                    <Bath className="mx-auto text-gold-500 mb-1" size={20} />
                    <p className="text-xs text-dark-400 dark:text-dark-550 uppercase font-semibold">Bathrooms</p>
                    <p className="font-heading text-lg font-bold text-dark-800 dark:text-white">{property.bathrooms} Baths</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-1 py-1">
                    <Award className="mx-auto text-gold-500 mb-1" size={20} />
                    <p className="text-xs text-dark-400 dark:text-dark-550 uppercase font-semibold">Zoning</p>
                    <p className="font-heading text-lg font-bold text-dark-800 dark:text-white capitalize">{property.type}</p>
                  </div>
                  <div className="space-y-1 py-1 border-x border-dark-100 dark:border-dark-800">
                    <CheckCircle2 className="mx-auto text-gold-500 mb-1" size={20} />
                    <p className="text-xs text-dark-400 dark:text-dark-550 uppercase font-semibold">Status</p>
                    <p className="font-heading text-lg font-bold text-gold-500">Verified</p>
                  </div>
                </>
              )}
              <div className="space-y-1 py-1">
                <Maximize className="mx-auto text-gold-500 mb-1" size={20} />
                <p className="text-xs text-dark-400 dark:text-dark-550 uppercase font-semibold">Total Area</p>
                <p className="font-heading text-lg font-bold text-dark-800 dark:text-white">{property.area}</p>
              </div>
            </div>

            {/* Description Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-850 border border-dark-100 dark:border-dark-800 space-y-4">
              <h2 className="font-heading text-xl font-bold text-dark-900 dark:text-white">
                Property Overview
              </h2>
              <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-850 border border-dark-100 dark:border-dark-800 space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading text-xl font-bold text-dark-900 dark:text-white">
                  Features & Amenities
                </h2>
                <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-dark-700 dark:text-dark-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scheduler Widget, Contact Block */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <InspectionScheduler propertyTitle={property.title} />

            {/* Premium Broker Card */}
            <div className="rounded-2xl bg-dark-950 text-white p-6 border border-white/5 shadow-md relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-36 w-36 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-base">7M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Seven Miles Ltd</h4>
                    <p className="text-xs text-dark-400">RC Registered Property Brand</p>
                  </div>
                </div>

                <p className="text-xs text-dark-300 leading-relaxed">
                  Have quick questions about this property or want to discuss pricing, title documents, or custom layouts? Let's connect.
                </p>

                <div className="pt-2 space-y-2 border-t border-white/10 text-xs">
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`} 
                    className="flex items-center gap-2.5 text-dark-200 hover:text-gold-400 transition-colors"
                  >
                    <Phone size={14} className="text-gold-500" />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                  <a 
                    href={`mailto:${EMAIL_ADDRESS}`} 
                    className="flex items-center gap-2.5 text-dark-200 hover:text-gold-400 transition-colors"
                  >
                    <Mail size={14} className="text-gold-500" />
                    <span>{EMAIL_ADDRESS}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Properties ─── */}
      {relatedProperties.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-dark-150 dark:border-dark-800">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold text-dark-900 dark:text-white">
                Similar Properties You May Like
              </h2>
              <p className="text-sm text-dark-500 dark:text-dark-400">
                Explore these other highly rated properties currently listed in our catalog.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProperties.map((prop) => (
                <Link href={`/properties/${prop.id}`} key={prop.id} className="block group">
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: `url(${prop.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">
                          {prop.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-xl font-heading font-bold text-white">{prop.price}</p>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-heading font-bold text-dark-900 dark:text-white group-hover:text-gold-500 transition-colors text-base">
                          {prop.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1 text-dark-550 dark:text-dark-400 text-xs">
                          <MapPin size={12} className="text-gold-500" />
                          <span>{prop.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-dark-100 dark:border-dark-700 text-xs text-dark-500 dark:text-dark-450">
                        {prop.type !== "land" ? (
                          <span>{prop.bedrooms} Beds • {prop.bathrooms} Baths</span>
                        ) : (
                          <span>Zoned Land Plot</span>
                        )}
                        <span>{prop.area}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
