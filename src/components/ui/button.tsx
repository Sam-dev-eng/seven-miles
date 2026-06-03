"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

/* ──────────────────────────────────────────────────────────────
   Button Component
   Variants: primary (gold), secondary (outline), ghost
   Sizes: sm, md, lg
   ────────────────────────────────────────────────────────────── */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-500 to-gold-700 text-white hover:from-gold-400 hover:to-gold-600 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40",
  secondary:
    "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white dark:border-gold-400 dark:text-gold-400 dark:hover:bg-gold-400 dark:hover:text-dark-900",
  ghost:
    "text-dark-600 hover:text-gold-500 dark:text-dark-300 dark:hover:text-gold-400 hover:bg-dark-100 dark:hover:bg-dark-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
    "dark:focus:ring-offset-dark-900",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
