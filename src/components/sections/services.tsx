"use client";

import { motion } from "framer-motion";
import { Home, DollarSign, Hammer, Key } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/constants";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────────────────────────
   Services Section
   4-column grid showcasing Buy, Sell, Build, Lease services.
   Each card has an icon, title, description, and hover animation.
   ────────────────────────────────────────────────────────────── */

const iconMap: Record<string, ReactNode> = {
  Home: <Home size={28} />,
  DollarSign: <DollarSign size={28} />,
  Hammer: <Hammer size={28} />,
  Key: <Key size={28} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-dark-50 dark:bg-dark-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From land acquisition to property sales, we provide end-to-end real estate solutions with excellence at every step."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl
                bg-white dark:bg-dark-800
                border border-dark-100 dark:border-dark-700
                hover:border-gold-500/30 dark:hover:border-gold-500/30
                shadow-sm hover:shadow-xl
                transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="mb-6 h-14 w-14 rounded-xl
                bg-gold-500/10 dark:bg-gold-500/10
                flex items-center justify-center
                text-gold-600 dark:text-gold-400
                group-hover:bg-gold-500 group-hover:text-white
                transition-all duration-300"
              >
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold mb-3
                text-dark-900 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-dark-500 dark:text-dark-400">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5
                bg-gradient-to-r from-gold-400 to-gold-600
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 origin-left rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
