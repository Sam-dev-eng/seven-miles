"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Compass, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { COMPANY_LONG_DESCRIPTION, COMPANY_NAME, TRUST_BADGES } from "@/lib/constants";
import type { Metadata } from "next";

const values = [
  {
    title: "Premium Standards",
    description: "We don't just build structures; we design spaces that exude premium craft and style, using the finest materials.",
    icon: Award,
  },
  {
    title: "Unwavering Trust",
    description: "As an RC Registered Brand, transparency and integrity are at the core of all our transactions and deals.",
    icon: Shield,
  },
  {
    title: "Client Centricity",
    description: "We prioritize our clients' aspirations, ensuring comfort, long-term asset value, and support at every stage.",
    icon: Users,
  },
  {
    title: "Visionary Development",
    description: "We acquire prime land and execute designs tailored to the demands of modern living and smart investment.",
    icon: Compass,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ─── Hero Header ─── */}
      <section className="relative py-20 lg:py-24 bg-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('/images/about-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 block"
          >
            Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            About {COMPANY_NAME}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-16 bg-gold-500 mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Building quality homes and delivering smart property and investment opportunities in Nigeria.
          </motion.p>
        </div>
      </section>

      {/* ─── Our Story Section ─── */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white">
                Redefining Modern Living In Strategic Locations
              </h2>
              <p className="text-dark-500 dark:text-dark-400 leading-relaxed text-lg">
                {COMPANY_LONG_DESCRIPTION}
              </p>
              <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                With a focus on Nigeria's high-demand real estate zones, we pride ourselves on selecting premium locations that guarantee rapid capital appreciation for our investors and unparalleled quality of life for our residents.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                {TRUST_BADGES.map((badge) => (
                  <span 
                    key={badge.title} 
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500/10 text-gold-600 dark:text-gold-400 font-semibold text-sm"
                  >
                    <ChevronRight size={14} />
                    {badge.title}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/about-story.webp')" }}
                  role="img"
                  aria-label="Modern Luxury Villa built by Seven Miles"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <p className="font-heading font-semibold text-lg">Quality Assured Properties</p>
                  <p className="text-xs text-dark-200">Crafted with attention to detail and modern architecture.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Core Values Section ─── */}
      <section className="py-20 bg-dark-50 dark:bg-dark-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The fundamental principles that guide our everyday decisions and long-term project planning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((val, idx) => (
              <Card key={val.title} delay={idx * 0.1} className="p-6 sm:p-8 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                  <val.icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-dark-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                  {val.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
