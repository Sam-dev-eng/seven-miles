"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the first step in buying a property from Seven Miles?",
    answer: "The first step is selecting your preferred property from our catalog and scheduling an inspection (physical or virtual). Once you are satisfied, we will issue a formal Offer Letter and a Reservation Form detailing the cost and payment structure.",
  },
  {
    question: "Does Seven Miles offer flexible installment payment plans?",
    answer: "Yes, we understand investment flexibility. Most of our premium residential structures and land developments support installment structures spanning 3 to 12 months, starting with a specified minimum down payment.",
  },
  {
    question: "What legal titles and ownership documents come with your properties?",
    answer: "All our assets carry authentic, verified, and government-approved legal titles such as Certificates of Occupancy (C of O), Governor's Consent, or Approved Registered Surveys. We conduct thorough dual-diligence checks to ensure they are 100% free from government acquisitions or dispute claims.",
  },
  {
    question: "Can I inspect properties virtually if I am currently in the diaspora?",
    answer: "Absolutely! We regularly cater to international clients. We arrange high-definition live video walkthroughs via Zoom, Google Meet, or WhatsApp, and supply aerial drone videos along with digitized legal credentials for verification.",
  },
  {
    question: "Are there any hidden charges like developmental fees or documentation costs?",
    answer: "No. Transparency is one of our core values. Any auxiliary requirements such as survey fees, deeds of assignment, or estate developmental levies are clearly itemized and communicated upfront in the Offer Letter.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-dark-50 dark:bg-dark-900 border-t border-dark-100 dark:border-dark-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Quick answers to common questions about our property acquisition, payment plans, and legal processes." 
        />

        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-gold-500/30 bg-white dark:bg-dark-850 shadow-md ring-1 ring-gold-500/10" 
                    : "border-dark-150 dark:border-dark-800/80 bg-white/70 dark:bg-dark-850/50 hover:bg-white dark:hover:bg-dark-850 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-gold-500 text-white" : "bg-gold-500/10 text-gold-500"
                    }`}>
                      <HelpCircle size={20} />
                    </div>
                    <span className={`font-heading font-bold text-base sm:text-lg leading-snug transition-colors duration-300 ${
                      isOpen ? "text-gold-600 dark:text-gold-400" : "text-dark-900 dark:text-white"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-dark-400 dark:text-dark-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold-500 dark:text-gold-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-1 pl-6 sm:pl-20 border-t border-dark-100 dark:border-dark-800/50 text-sm sm:text-base text-dark-600 dark:text-dark-300 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
