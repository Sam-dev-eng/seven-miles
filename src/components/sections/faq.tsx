"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-dark-50 dark:bg-dark-900/50 border-t border-dark-100 dark:border-dark-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Quick answers to common questions about our property acquisition, payment plans, and legal processes." 
        />

        <div className="space-y-4 mt-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-dark-150 dark:border-dark-800 bg-white dark:bg-dark-850 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors hover:text-gold-500 text-dark-900 dark:text-white"
                >
                  <span className="font-heading font-bold text-base sm:text-lg">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gold-500 flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Accordion Content Panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-dark-600 dark:text-dark-300 leading-relaxed border-t border-dark-100 dark:border-dark-800 pt-4">
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
