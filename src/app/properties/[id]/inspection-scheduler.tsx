"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageSquare, BadgeCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

interface InspectionSchedulerProps {
  propertyTitle: string;
}

export function InspectionScheduler({ propertyTitle }: InspectionSchedulerProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "Morning (10:00 AM - 12:00 PM)",
    type: "physical",
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsBooked(true);
  };

  const getWhatsAppBookingLink = () => {
    const message = `Hello Seven Miles, I would like to schedule a ${
      formData.type === "physical" ? "Physical" : "Virtual"
    } Inspection for "${propertyTitle}".\n\n` +
      `📅 Date: ${formData.date}\n` +
      `🕒 Preferred Time: ${formData.timeSlot}\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}`;

    return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="rounded-2xl border border-dark-150 dark:border-dark-800 bg-white dark:bg-dark-850 p-6 shadow-md">
      {!isBooked ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-bold text-dark-900 dark:text-white">
              Schedule Inspection
            </h3>
            <p className="text-sm text-dark-500 dark:text-dark-400">
              Book a private tour with our property expert (Physical or Virtual).
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-dark-600 dark:text-dark-300 uppercase tracking-wider block">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Samuel Som"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-dark-600 dark:text-dark-300 uppercase tracking-wider block">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g., +234 916 492 2035"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Inspection Date */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-dark-600 dark:text-dark-300 uppercase tracking-wider block">
              Preferred Date *
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 dark:[color-scheme:dark]"
              />
            </div>
          </div>

          {/* Preferred Time Slot */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-dark-600 dark:text-dark-300 uppercase tracking-wider block">
              Preferred Time Slot
            </label>
            <div className="relative">
              <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-dark-200 dark:border-dark-700 bg-transparent text-dark-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 dark:[&>option]:bg-dark-850"
              >
                <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM - 12:00 PM)</option>
                <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM - 03:00 PM)</option>
                <option value="Late Afternoon (03:30 PM - 05:30 PM)">Late Afternoon (03:30 PM - 05:30 PM)</option>
              </select>
            </div>
          </div>

          {/* Inspection Type */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: "physical" })}
              className={`py-2 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-all text-center ${
                formData.type === "physical"
                  ? "border-gold-500 bg-gold-50 text-gold-700 dark:bg-gold-500/10 dark:text-gold-400"
                  : "border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-50 dark:hover:bg-dark-800"
              }`}
            >
              Physical Visit
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: "virtual" })}
              className={`py-2 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-all text-center ${
                formData.type === "virtual"
                  ? "border-gold-500 bg-gold-50 text-gold-700 dark:bg-gold-500/10 dark:text-gold-400"
                  : "border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-50 dark:hover:bg-dark-800"
              }`}
            >
              Virtual Video Tour
            </button>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full py-2.5 mt-2 text-sm justify-center">
            <Send size={16} /> Confirm Booking
          </Button>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 space-y-6"
        >
          <div className="h-16 w-16 bg-gold-500/10 text-gold-500 rounded-full flex items-center justify-center mx-auto border border-gold-500/20">
            <BadgeCheck size={36} />
          </div>
          <div className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-dark-900 dark:text-white">
              Inspection Requested!
            </h4>
            <p className="text-sm text-dark-500 dark:text-dark-400 max-w-xs mx-auto">
              Your details have been registered. To finalize the scheduling immediately, send it directly to our agent's WhatsApp.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Button
              href={getWhatsAppBookingLink()}
              className="w-full justify-center bg-[#25D366] hover:bg-[#20ba56] text-white border-transparent py-2.5"
            >
              <MessageSquare size={16} /> Send via WhatsApp
            </Button>
            <button
              onClick={() => {
                setIsBooked(false);
                setFormData({
                  name: "",
                  phone: "",
                  date: "",
                  timeSlot: "Morning (10:00 AM - 12:00 PM)",
                  type: "physical",
                });
              }}
              className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline cursor-pointer"
            >
              Book another inspection
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
