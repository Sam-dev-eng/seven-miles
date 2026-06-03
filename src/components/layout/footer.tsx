import Link from "next/link";
import { MessageCircle, MapPin, Clock, Mail, Phone } from "lucide-react";
import {
  COMPANY_SHORT_NAME,
  COMPANY_DESCRIPTION,
  NAV_LINKS,
  SERVICES,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  OFFICE_ADDRESS,
} from "@/lib/constants";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   Footer Component
   Premium multi-column footer with:
   - Company info + social icons
   - Quick links
   - Services
   - Contact info
   - Copyright bar
   ────────────────────────────────────────────────────────────── */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 text-dark-300">
      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Main Footer Grid ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 lg:py-20">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center shadow-lg shadow-gold-500/30">
                <span className="text-white font-heading font-bold text-lg">
                  7M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white leading-tight">
                  {COMPANY_SHORT_NAME}
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-gold-400 font-semibold">
                  Real Estate
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-dark-400 mb-6 max-w-xs">
              {COMPANY_DESCRIPTION}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-dark-800 hover:bg-gold-500 flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-dark-800 hover:bg-gold-500 flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-400 hover:text-gold-400 transition-colors"
                >
                  Book Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <span className="text-sm text-dark-400 hover:text-gold-400 transition-colors cursor-default">
                    {service.title}
                  </span>
                </li>
              ))}
              <li>
                <span className="text-sm text-dark-400 hover:text-gold-400 transition-colors cursor-default">
                  Property Inspections
                </span>
              </li>
              <li>
                <span className="text-sm text-dark-400 hover:text-gold-400 transition-colors cursor-default">
                  Investment Advisory
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-dark-400">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-dark-400">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-dark-400">{EMAIL_ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <InstagramIcon size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-400 hover:text-gold-400 transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-dark-400">
                  Appointment Only
                  <br />
                  <span className="text-dark-500">Open 7 days a week</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ───────────────────────────────── */}
        <div className="border-t border-dark-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            © {currentYear} {COMPANY_SHORT_NAME}. All rights reserved. RC Registered.
          </p>
          <p className="text-xs text-dark-600">
            Premium Real Estate & Property Investment
          </p>
        </div>
      </div>
    </footer>
  );
}
