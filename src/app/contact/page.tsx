import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Seven Miles Ltd. Reach out to schedule property inspections, discuss project construction, land purchases, or general real estate investment inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* ─── Hero Header ─── */}
      <section className="relative py-20 lg:py-24 bg-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('/images/contact-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 block">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Contact Seven Miles
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Schedule an inspection or talk to our experts about buying, building, or leasing options.
          </p>
        </div>
      </section>

      {/* ─── Contact Form Section ─── */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
