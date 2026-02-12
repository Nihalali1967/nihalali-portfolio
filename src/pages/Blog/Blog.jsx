import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.12 AM (1).jpeg";
import img2 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.13 AM (1).jpeg";
import img3 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.14 AM (1).jpeg";
import img4 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.14 AM (2).jpeg";
import img5 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.14 AM.jpeg";
import img6 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.15 AM (1).jpeg";
import img7 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.15 AM.jpeg";
import img8 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.16 AM (1).jpeg";
import img9 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.16 AM (3).jpeg";
import img10 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.44.16 AM.jpeg";
import img11 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.50.20 AM (1).jpeg";
import img12 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.50.21 AM (1).jpeg";
import img13 from "@/assets/images/blog/WhatsApp Image 2026-02-08 at 11.50.22 AM.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
];

export default function Blog() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [displayImages, setDisplayImages] = useState(images.slice(0, 12)); // Show first 12 initially

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayImages(prev => {
        const currentIndex = images.indexOf(prev[0]);
        const nextIndex = (currentIndex + 1) % 2; // Cycle between 0 and 1 for 13 images showing 12 at a time
        return images.slice(nextIndex, nextIndex + 12);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="pt-20 lg:pt-28 bg-[#04081A] text-white min-h-screen pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Blog & Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments from my journey, work, and experiences
          </p>
        </div>

        <div className="relative">
          <motion.div 
            className="columns-3 md:columns-4 lg:columns-5 gap-2 space-y-2"
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {displayImages.map((src, index) => {
              const actualIndex = images.indexOf(src);
              return (
              <motion.div
                key={`${src}-${index}`}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group max-w-[200px] mx-auto"
                initial={{ opacity: 0, y: 20, rotateY: Math.random() * 10 - 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  x: [0, Math.sin(index * 0.5) * 3, 0],
                  y: [0, Math.cos(index * 0.5) * 2, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  x: {
                    duration: 4 + (index % 3) * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 3 + (index % 2) * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 2 + (index % 4),
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: Math.random() * 4 - 2,
                  zIndex: 10
                }}
                onClick={() => openLightbox(actualIndex)}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-lg"
                  animate={{
                    rotate: [0, Math.sin(index * 0.3) * 2, 0]
                  }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    animate={{
                      opacity: [0, 0.1, 0]
                    }}
                    transition={{
                      duration: 3 + index % 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      View
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Auto-rotation indicator */}
        <motion.div 
          className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm flex items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🔄
          </motion.div>
          Auto-rotating images
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={goPrev}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={goNext}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 text-white/60 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
