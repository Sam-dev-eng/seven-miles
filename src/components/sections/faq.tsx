"use client";

import { useRef } from "react";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-dark-50 dark:bg-dark-900 border-t border-dark-100 dark:border-dark-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Quick answers to common questions about our property acquisition, payment plans, and legal processes." 
            />
          </div>
          {/* Navigation Controls */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={scrollLeft}
              className="h-12 w-12 rounded-full border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white flex items-center justify-center hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white hover:border-gold-500 dark:hover:border-gold-500 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="h-12 w-12 rounded-full border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white flex items-center justify-center hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white hover:border-gold-500 dark:hover:border-gold-500 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Snap Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="w-[300px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-start snap-always rounded-2xl border border-dark-150 dark:border-dark-800 bg-white dark:bg-dark-850 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[320px] sm:min-h-[280px]"
            >
              <div className="space-y-4">
                {/* Icon & Question */}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-dark-900 dark:text-white text-base sm:text-lg leading-snug">
                    {item.question}
                  </h3>
                </div>
                {/* Subtle Divider */}
                <div className="h-px w-full bg-dark-100 dark:bg-dark-850" />
              </div>

              {/* Answer Text */}
              <p className="text-sm sm:text-base text-dark-600 dark:text-dark-300 leading-relaxed mt-4">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
