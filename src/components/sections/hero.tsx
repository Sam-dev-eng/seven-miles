"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ChevronDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_TAGLINE, COMPANY_DESCRIPTION, WHATSAPP_URL } from "@/lib/constants";

/* ──────────────────────────────────────────────────────────────
   Hero Section
   Full-viewport hero with:
   - Gradient overlay on background
   - Animated headline with staggered text
   - Stylized property search bar (visual placeholder)
   - CTA buttons
   - Scroll-down indicator
   ────────────────────────────────────────────────────────────── */

const heroWords = ["We Buy.", "We Build.", "We Sell."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background Layers ──────────────────────────── */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Gold accent gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent dark:from-dark-900" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:hidden" />

        {/* Decorative dot pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(212, 160, 23, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ─── Content ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20
            text-gold-300 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            RC Registered Property Brand
          </span>
        </motion.div>

        {/* Animated Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            {heroWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={
                  index === 0
                    ? "text-white block sm:inline"
                    : index === 1
                    ? "text-gradient-gold block sm:inline"
                    : "text-white block sm:inline"
                }
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={1.0}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-lg sm:text-xl text-dark-300 leading-relaxed mb-10"
        >
          {COMPANY_DESCRIPTION}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.3}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="/properties" size="lg">
            Explore Properties
          </Button>
          <Button href={WHATSAPP_URL} variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Schedule Inspection
          </Button>
        </motion.div>

        {/* ─── Property Search Bar (Visual Placeholder) ─── */}
        <motion.div
          custom={1.6}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-2 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {/* Location */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                <MapPin size={18} className="text-gold-400 shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-dark-400 font-medium">Location</p>
                  <p className="text-sm text-white">Lagos, Nigeria</p>
                </div>
                <ChevronDown size={14} className="text-dark-400 ml-auto" />
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                <Home size={18} className="text-gold-400 shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-dark-400 font-medium">Type</p>
                  <p className="text-sm text-white">Residential</p>
                </div>
                <ChevronDown size={14} className="text-dark-400 ml-auto" />
              </div>

              {/* Price Range */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                <DollarSign size={18} className="text-gold-400 shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-dark-400 font-medium">Budget</p>
                  <p className="text-sm text-white">Any Price</p>
                </div>
                <ChevronDown size={14} className="text-dark-400 ml-auto" />
              </div>

              {/* Search Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-r from-gold-500 to-gold-700
                hover:from-gold-400 hover:to-gold-600
                text-white font-semibold text-sm
                shadow-lg shadow-gold-500/30 cursor-pointer
                transition-all duration-300">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Scroll Down Indicator ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-dark-400"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
