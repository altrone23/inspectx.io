import React from 'react';
import { motion } from 'framer-motion';

// Import AI image for background
import aiBackground from '../assets/ai.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Image background with overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <motion.img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={aiBackground}
        alt="AI technology background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
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
