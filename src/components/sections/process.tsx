"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────────────────────────
   Process Section
   3-step horizontal timeline: Buy Land → Build Excellence → Sell Value
   With connecting lines between steps.
   ────────────────────────────────────────────────────────────── */

const iconMap: Record<string, ReactNode> = {
  MapPin: <MapPin size={24} />,
  Building2: <Building2 size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-white dark:bg-dark-800/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          subtitle="Turning land into luxury homes and great investments — a proven three-step approach."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 origin-left"
            />
          </div>

          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 mb-6">
                <div className="h-20 w-20 rounded-full
                  bg-gradient-to-br from-gold-400 to-gold-700
                  flex items-center justify-center
                  shadow-xl shadow-gold-500/30
                  text-white"
                >
                  {iconMap[step.icon]}
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 h-7 w-7 rounded-full
                  bg-dark-900 dark:bg-white
                  text-white dark:text-dark-900
                  flex items-center justify-center
                  text-xs font-bold border-2 border-gold-500"
                >
                  {step.step}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold mb-3
                text-dark-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-dark-500 dark:text-dark-400 max-w-xs">
                {step.description}
              </p>

              {/* Arrow connector (mobile only, except last) */}
              {step.step < 3 && (
                <div className="md:hidden mt-6 text-gold-500">
                  <ArrowRight size={20} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
