"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, BadgeCheck, Crown, TrendingUp, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TRUST_BADGES, COMPANY_STATS, TESTIMONIALS } from "@/lib/constants";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Shield: <Shield size={24} />,
  BadgeCheck: <BadgeCheck size={24} />,
  Crown: <Crown size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) { setDisplay(value); return; }
    const target = parseInt(numericMatch[0].replace(/,/g, ""), 10);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) { current = target; clearInterval(timer); }
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95
  })
};

export function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = ((page % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length;
  const currentTestimonial = TESTIMONIALS[activeIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_BADGES.map((badge, i) => (
            <motion.div key={badge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-dark-100 dark:border-dark-700 bg-dark-50 dark:bg-dark-800">
              <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-3">
                {iconMap[badge.icon]}
              </div>
              <span className="text-sm font-semibold text-dark-900 dark:text-white">{badge.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mb-20">
          <SectionHeading title="Our Impact" subtitle="Numbers that reflect our commitment to excellence in real estate." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COMPANY_STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gold-500/5 to-gold-700/10 border border-gold-500/20">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-gradient-gold mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-sm text-dark-500 dark:text-dark-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews Testimonials Slider */}
        <div className="pt-8 border-t border-dark-100 dark:border-dark-800">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Read real stories from individuals and families who trusted us with their real estate goals." 
          />

          <div className="relative max-w-3xl mx-auto mt-12 px-4 sm:px-12">
            {/* Carousel Container */}
            <div className="relative overflow-hidden min-h-[300px] sm:min-h-[260px] md:min-h-[220px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="w-full cursor-grab active:cursor-grabbing select-none"
                >
                  <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-dark-50 dark:bg-dark-850 border border-dark-100 dark:border-dark-750 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gold-500/15 dark:text-gold-500/10">
                      <Quote size={40} className="transform rotate-180 sm:w-12 sm:h-12" />
                    </div>

                    <div className="space-y-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-gold-500">
                        {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                          <Star key={idx} size={16} fill="currentColor" className="sm:w-4.5 sm:h-4.5" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-dark-700 dark:text-dark-200 italic text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
                        "{currentTestimonial.content}"
                      </p>
                    </div>

                    {/* Profile Meta */}
                    <div className="flex items-center gap-4 mt-6 sm:mt-8 pt-4 border-t border-dark-100 dark:border-dark-700">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                        {currentTestimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark-900 dark:text-white text-sm sm:text-base">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-dark-500 dark:text-dark-400 font-medium">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:left-0 z-20">
              <button
                onClick={() => paginate(-1)}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white flex items-center justify-center hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white hover:border-gold-500 dark:hover:border-gold-500 transition-all cursor-pointer shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-0 z-20">
              <button
                onClick={() => paginate(1)}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white flex items-center justify-center hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white hover:border-gold-500 dark:hover:border-gold-500 transition-all cursor-pointer shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const diff = idx - activeIndex;
                    if (diff !== 0) {
                      paginate(diff);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex 
                      ? "w-6 bg-gold-500" 
                      : "w-2 bg-dark-200 dark:bg-dark-700 hover:bg-dark-300 dark:hover:bg-dark-600"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
