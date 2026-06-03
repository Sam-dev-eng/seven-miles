"use client";

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

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <motion.div key={property.id} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${property.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.isNew && <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gold-500 text-white uppercase tracking-wider">New</span>}
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">{property.type}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-2xl font-heading font-bold text-white">{property.price}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3 className="text-lg font-heading font-bold mb-2 text-dark-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{property.title}</h3>
                <div className="flex items-center gap-1.5 mb-4 text-dark-500 dark:text-dark-400">
                  <MapPin size={14} className="text-gold-500" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-dark-100 dark:border-dark-700">
                  {property.type !== "land" ? (
                    <>
                      <div className="flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400"><Bed size={14} className="text-gold-500" /><span>{property.bedrooms} Beds</span></div>
                      <div className="flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400"><Bath size={14} className="text-gold-500" /><span>{property.bathrooms} Baths</span></div>
                    </>
                  ) : null}
                  <div className="flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400"><Maximize size={14} className="text-gold-500" /><span>{property.area}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 text-center">
          <Button href="/properties" variant="secondary" size="lg">View All Properties <ArrowRight size={18} /></Button>
        </motion.div>
      </div>
    </section>
  );
}
