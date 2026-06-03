"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, BadgeCheck, Crown, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TRUST_BADGES, COMPANY_STATS } from "@/lib/constants";
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-dark-800/50">
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
    </section>
  );
}
