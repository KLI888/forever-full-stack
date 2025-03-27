import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  "https://assets.vogue.com/photos/5f74f7d208fdcc6598c7bb75/16:9/w_4095,h_2303,c_limit/_CIK0894.jpg",
  "https://www.shutterstock.com/image-photo/young-customer-shopping-bags-modern-600nw-2513137345.jpg",
  "https://sketchup.cgtips.org/wp-content/uploads/2020/07/3450-Interior-Fashion-Shop-Scene-Sketchup-Model-By-Xuan-Khanh-Free-Download-11-1024x576.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative w-full h-full flex">
        <AnimatePresence>
          {bannerImages.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
            )
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Trendiest Fashion, Best Deals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          Explore the latest collections and shop your favorite styles now!
        </motion.p>
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          href="/shop"
          className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg rounded-full shadow-xl transition transform hover:scale-110"
        >
          Shop Now
        </motion.a>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
