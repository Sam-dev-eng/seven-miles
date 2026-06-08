"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FEATURED_PROPERTIES, WHATSAPP_URL } from "@/lib/constants";
import type { Property } from "@/types";

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "residential" | "commercial" | "land">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const locations = Array.from(
    new Set(FEATURED_PROPERTIES.map((p) => p.location.split(",")[0].trim()))
  );

  const filteredProperties = FEATURED_PROPERTIES.filter((property) => {
    const matchesTab = activeTab === "all" || property.type === activeTab;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || property.location.includes(selectedLocation);
    return matchesTab && matchesSearch && matchesLocation;
  });

  const getInquiryLink = (propTitle: string) => {
    return `${WHATSAPP_URL}?text=Hello%20Seven%20Miles,%20I%20am%20interested%20in%20"${encodeURIComponent(propTitle)}"`;
  };

  return (
    <div className="pt-20">
      {/* ─── Hero Header ─── */}
      <section className="relative py-20 lg:py-24 bg-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('/images/properties-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 block">
            Our Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Premium Properties
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Browse our verified inventory of high-value land and luxury structures built for long-term comfort and appreciation.
          </p>
        </div>
      </section>

      {/* ─── Filter & Search Bar ─── */}
      <section className="py-8 bg-dark-50 dark:bg-dark-900/50 border-y border-dark-100 dark:border-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-dark-100 dark:bg-dark-850 w-full lg:w-auto">
              {(["all", "residential", "commercial", "land"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all capitalize cursor-pointer ${
                    activeTab === tab
                      ? "bg-white dark:bg-dark-800 text-gold-600 dark:text-gold-400 shadow-sm"
                      : "text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search & Location Select inputs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-1 lg:max-w-xl">
              {/* Keyword Search */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
                <input
                  type="text"
                  placeholder="Search properties or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              {/* Location Selector */}
              <div className="relative sm:max-w-[200px] w-full">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 [&>option]:bg-white dark:[&>option]:bg-dark-800"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Properties Grid ─── */}
      <section className="py-16 bg-white dark:bg-dark-900 min-h-[400px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <SlidersHorizontal size={48} className="mx-auto text-dark-300 dark:text-dark-600" />
              <h3 className="font-heading text-xl font-bold text-dark-900 dark:text-white">
                No Properties Found
              </h3>
              <p className="text-dark-500 dark:text-dark-400 max-w-md mx-auto">
                No listings match your selection. Try clearing filters or resetting search terms.
              </p>
              <Button 
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                  setSelectedLocation("");
                }}
                variant="secondary"
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProperties.map((property) => (
                  <Link href={`/properties/${property.id}`} key={property.id} className="block group h-full">
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="flex flex-col bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                    >
                      {/* Image Area */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                          style={{ backgroundImage: `url(${property.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                          {property.isNew && (
                            <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold rounded-full bg-gold-500 text-white uppercase tracking-wider">
                              New
                            </span>
                          )}
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">
                            {property.type}
                          </span>
                        </div>
                      </div>
 
                      {/* Description Area */}
                      <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold text-dark-900 dark:text-white group-hover:text-gold-500 transition-colors line-clamp-1 sm:line-clamp-none">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-1 sm:gap-1.5 text-dark-500 dark:text-dark-400">
                            <MapPin size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" />
                            <span className="text-xs sm:text-sm truncate">{property.location}</span>
                          </div>
                        </div>
 
                        <div className="space-y-3 sm:space-y-4">
                          {/* Specs */}
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-3 border-t border-dark-100 dark:border-dark-700">
                            {property.type !== "land" ? (
                              <>
                                <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400">
                                  <Bed size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" />
                                  <span>{property.bedrooms} Beds</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400">
                                  <Bath size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" />
                                  <span>{property.bathrooms} Baths</span>
                                </div>
                              </>
                            ) : null}
                            <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400">
                              <Maximize size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" />
                              <span>{property.area}</span>
                            </div>
                          </div>
 
                          {/* View Details Button */}
                          <div className="w-full text-xs sm:text-sm py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl font-semibold bg-dark-900 text-white dark:bg-white dark:text-dark-900 group-hover:bg-gold-500 dark:group-hover:bg-gold-500 group-hover:text-white dark:group-hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2">
                            <span>View Details</span>
                            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
