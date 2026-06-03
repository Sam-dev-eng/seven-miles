"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, COMPANY_SHORT_NAME } from "@/lib/constants";

/* ──────────────────────────────────────────────────────────────
   CTA Section Component
   Premium banner with visual links to WhatsApp and inspections.
   ────────────────────────────────────────────────────────────── */

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/cta-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/80 to-gold-900/60 dark:from-dark-950 dark:via-dark-900/95 dark:to-gold-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400">
            Own Your Dream Space
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to Invest or Build Your Next Premium Property?
          </h2>
          
          <p className="text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Connect directly with {COMPANY_SHORT_NAME} today. Whether you want to buy land, build a custom home, or lease in prime locations, our team is ready to guide you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              href={WHATSAPP_URL} 
              className="w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
            <Button 
              href="/contact" 
              variant="secondary"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-dark-900 dark:border-white/80"
            >
              <Calendar size={18} />
              Schedule Inspection
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
