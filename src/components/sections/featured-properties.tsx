"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FEATURED_PROPERTIES } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function FeaturedProperties() {
  return (
    <section id="featured-properties" className="py-20 lg:py-28 bg-dark-50 dark:bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Properties"
          subtitle="Explore our handpicked selection of premium properties across Lagos's most sought-after locations."
        />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id} className="block group">
              <motion.div variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${property.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                    {property.isNew && <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold rounded-full bg-gold-500 text-white uppercase tracking-wider">New</span>}
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">{property.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-5 lg:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold mb-1.5 text-dark-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors line-clamp-1 sm:line-clamp-none">{property.title}</h3>
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-3 text-dark-500 dark:text-dark-400">
                    <MapPin size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" />
                    <span className="text-xs sm:text-sm truncate">{property.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-3 border-t border-dark-100 dark:border-dark-700">
                    {property.type !== "land" ? (
                      <>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400"><Bed size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" /><span>{property.bedrooms} Beds</span></div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400"><Bath size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" /><span>{property.bathrooms} Baths</span></div>
                      </>
                    ) : null}
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-dark-500 dark:text-dark-400"><Maximize size={12} className="text-gold-500 sm:w-3.5 sm:h-3.5" /><span>{property.area}</span></div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 text-center">
          <Button href="/properties" variant="secondary" size="lg">View All Properties <ArrowRight size={18} /></Button>
        </motion.div>
      </div>
    </section>
  );
}
