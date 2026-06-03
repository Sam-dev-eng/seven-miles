"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE, 
  EMAIL_ADDRESS, 
  PHONE_NUMBER, 
  OFFICE_ADDRESS 
} from "@/lib/constants";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "buy",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, form submission would be handled here.
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* ─── Contact Info ─── */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 space-y-8"
      >
        <div>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Connect With Us
          </h3>
          <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
            Have questions about our properties, land sales, or building process? Reach out to us, and our team will get back to you promptly.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs text-dark-400 font-medium uppercase tracking-wider mb-1">Our Office</p>
              <p className="text-dark-800 dark:text-dark-200 font-semibold">{OFFICE_ADDRESS}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs text-dark-400 font-medium uppercase tracking-wider mb-1">Phone Number</p>
              <p className="text-dark-800 dark:text-dark-200 font-semibold">{PHONE_NUMBER}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-dark-400 font-medium uppercase tracking-wider mb-1">Email Address</p>
              <p className="text-dark-800 dark:text-dark-200 font-semibold">{EMAIL_ADDRESS}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="text-xs text-dark-400 font-medium uppercase tracking-wider mb-1">WhatsApp & Socials</p>
              <p className="text-dark-800 dark:text-dark-200 font-semibold flex flex-col gap-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                  Direct WhatsApp Chat
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-xs text-dark-400 font-medium uppercase tracking-wider mb-1">Business Hours</p>
              <p className="text-dark-800 dark:text-dark-200 font-semibold">Appointment Only</p>
              <p className="text-xs text-dark-500 dark:text-dark-400">Open 7 days a week for scheduled inspections</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Contact Form ─── */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 bg-white dark:bg-dark-800 rounded-2xl border border-dark-100 dark:border-dark-700 p-6 sm:p-8 shadow-xl dark:shadow-none"
      >
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="mx-auto h-16 w-16 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-dark-900 dark:text-white">
              Message Sent!
            </h3>
            <p className="text-dark-500 dark:text-dark-400 max-w-sm mx-auto">
              Thank you for contacting Seven Miles Ltd. We have received your inquiry and will reach out to you shortly.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="mt-4">
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="+234..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                  Inquiry Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 [&>option]:bg-white dark:[&>option]:bg-dark-800"
                >
                  <option value="buy">Buying Property</option>
                  <option value="build">Building & Development</option>
                  <option value="lease">Leasing Option</option>
                  <option value="inspection">Schedule Inspection</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                placeholder="Details about your inquiry..."
              />
            </div>

            <Button type="submit" className="w-full">
              <Send size={16} />
              Send Message
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
