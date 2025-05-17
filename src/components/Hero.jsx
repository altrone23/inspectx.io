import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all home images for the slideshow background
import home1 from '../assets/home/original.jpeg';
import home2 from '../assets/home/2.jpeg';
import home3 from '../assets/home/4.jpg';
import home4 from '../assets/home/7.jpg';
import home5 from '../assets/home/w3.jpg';

const backgroundImages = [home1, home2, home3, home4, home5];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-advance the background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Image background with overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentBg}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={backgroundImages[currentBg]}
          alt="Hero background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      
      {/* Content */}
      <div className="z-10 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
          AI-Powered <span className="text-blue-300">Inspection</span> Solutions
        </h1><br />
        <br />
      </div>
    </section>
  );
};

export default Hero;
