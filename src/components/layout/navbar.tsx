"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_LINKS, COMPANY_SHORT_NAME, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────
   Navbar Component
   Sticky responsive navigation with:
   - Transparent → solid background on scroll
   - Desktop nav links with active indicator
   - Mobile hamburger drawer
   - Theme toggle + WhatsApp CTA
   ────────────────────────────────────────────────────────────── */

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /* ─── Scroll detection ──────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ─── Lock body scroll when mobile menu is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-dark-900/90 glass shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* ─── Logo ─────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Actual cropped 7M logo image */}
              <div className="relative h-10 w-10 rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-gold-500/20 bg-white dark:bg-white/95">
                <img 
                  src="/images/logo.png" 
                  alt="Seven Miles Ltd Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-dark-900 dark:text-white leading-tight">
                  {COMPANY_SHORT_NAME}
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-gold-600 dark:text-gold-400 font-semibold">
                  Real Estate
                </span>
              </div>
            </Link>

            {/* ─── Desktop Navigation ──────────────────────── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActivePath(link.href)
                      ? "text-gold-600 dark:text-gold-400"
                      : "text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActivePath(link.href) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ─── Right Actions ───────────────────────────── */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* WhatsApp CTA — desktop only */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  bg-gradient-to-r from-gold-500 to-gold-700
                  hover:from-gold-400 hover:to-gold-600
                  text-white text-sm font-semibold
                  shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40
                  transition-all duration-300"
              >
                <MessageCircle size={16} />
                Chat with Us
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden h-10 w-10 rounded-lg flex items-center justify-center
                  bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700
                  text-dark-600 dark:text-dark-300 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ─── Mobile Menu Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw]
                bg-white dark:bg-dark-900 shadow-2xl lg:hidden
                flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-dark-100 dark:border-dark-800">
                <span className="font-heading text-lg font-bold text-dark-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-10 w-10 rounded-lg flex items-center justify-center
                    bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700
                    text-dark-600 dark:text-dark-300 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-4 py-6 space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActivePath(link.href)
                          ? "bg-gold-500/10 text-gold-600 dark:text-gold-400"
                          : "text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="px-6 py-6 border-t border-dark-100 dark:border-dark-800">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg
                    bg-gradient-to-r from-gold-500 to-gold-700
                    text-white font-semibold
                    shadow-lg shadow-gold-500/25"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
