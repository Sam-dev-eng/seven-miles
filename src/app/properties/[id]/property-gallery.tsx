"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* ─── Main Image Viewer ─── */}
      <div 
        className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-dark-100 dark:bg-dark-900 shadow-lg border border-dark-100 dark:border-dark-800 group cursor-zoom-in"
        onClick={() => setIsLightboxOpen(true)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
            {currentIndex + 1} / {images.length}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-gold-500 hover:text-white transition-colors cursor-pointer"
            aria-label="View Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/45 backdrop-blur-md text-white hover:bg-gold-500 hover:text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-md hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/45 backdrop-blur-md text-white hover:bg-gold-500 hover:text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-md hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* ─── Thumbnails Strip ─── */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-[3/2] w-20 sm:w-24 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-350 border-2 ${
                currentIndex === index
                  ? "border-gold-500 ring-2 ring-gold-500/20 scale-95"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img 
                src={image} 
                alt={`${title} Thumbnail ${index + 1}`}
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      )}

      {/* ─── Fullscreen Lightbox Overlay ─── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 md:p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center text-white">
              <span className="font-heading font-medium text-lg text-dark-100">
                {title}
              </span>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Viewer */}
            <div className="relative flex-1 flex items-center justify-center max-h-[80vh] my-auto">
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-10 h-12 w-12 rounded-full bg-white/15 hover:bg-gold-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft size={28} />
              </button>

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - Lightbox ${currentIndex + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>

              <button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-10 h-12 w-12 rounded-full bg-white/15 hover:bg-gold-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Footer Thumbnails */}
            <div className="flex gap-2 justify-center overflow-x-auto py-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative aspect-[3/2] w-14 sm:w-16 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transition-all border-2 ${
                    currentIndex === index ? "border-gold-500 scale-105" : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
