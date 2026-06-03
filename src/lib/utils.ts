/* ──────────────────────────────────────────────────────────────
   Utility functions
   ────────────────────────────────────────────────────────────── */

/**
 * Merge CSS class names — filters falsy values and joins.
 * A lightweight alternative to clsx + tailwind-merge.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
