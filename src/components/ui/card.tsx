"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────────────────────────
   Card Component
   Reusable card with hover animation.
   Used for properties, services, and general content.
   ────────────────────────────────────────────────────────────── */

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({
  children,
  className,
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? { y: -8, transition: { duration: 0.3 } }
          : undefined
      }
      className={cn(
        "rounded-2xl overflow-hidden",
        "bg-white dark:bg-dark-800",
        "border border-dark-100 dark:border-dark-700",
        "shadow-sm hover:shadow-xl dark:shadow-none",
        "transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/* ─── Card sub-components for composition ──────────────────── */

interface CardImageProps {
  src: string;
  alt: string;
  overlay?: boolean;
  badge?: string;
}

export function CardImage({ src, alt, overlay = true, badge }: CardImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      )}
      {badge && (
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-gold-500 text-white uppercase tracking-wider">
          {badge}
        </span>
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("p-5 lg:p-6", className)}>
      {children}
    </div>
  );
}
