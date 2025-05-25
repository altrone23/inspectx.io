// src/components/HomeSlideshow.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all home images
import home1 from '../assets/home/original.jpeg';
import home2 from '../assets/home/2.jpeg';
import home3 from '../assets/home/4.jpg';
import home4 from '../assets/home/7.jpg';
import home5 from '../assets/home/w3.jpg';
import home6 from '../assets/home/2.webp';

const homeImages = [home1, home2, home3, home4, home5, home6];

const HomeSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homeImages.length) % homeImages.length);
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={homeImages[currentSlide]}
          alt={`Home Image ${currentSlide + 1}`}
          className="w-full max-w-md h-full object-cover rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button 
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
      
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {homeImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlideshow;
