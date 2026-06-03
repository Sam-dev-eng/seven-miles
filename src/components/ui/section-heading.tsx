"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────
   Section Heading Component
   Consistent section titles with gold accent underline,
   optional subtitle, and scroll-triggered animation.
   ────────────────────────────────────────────────────────────── */

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Decorative label */}
      <span
        className={cn(
          "inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4",
          light ? "text-gold-300" : "text-gold-500 dark:text-gold-400"
        )}
      >
        ● {title} ●
      </span>

      {/* Main heading */}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
          light
            ? "text-white"
            : "text-dark-900 dark:text-white"
        )}
      >
        {title}
      </h2>

      {/* Gold underline accent */}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-400 to-gold-600",
          align === "center" && "mx-auto"
        )}
      />

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            light
              ? "text-dark-300"
              : "text-dark-500 dark:text-dark-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
