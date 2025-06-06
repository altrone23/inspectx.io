import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RequestDemoForm from './RequestDemoForm';

const Hero = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Image background with overlay */}      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="https://media.istockphoto.com/id/2040734115/video/drone-flying-above-solar-panels-surveying-at-solar-power-station-at-sunset.mp4?s=mp4-640x640-is&k=20&c=fF7SWojx3M_2R44uj3KhI9nAHV9remyJQ662jpYvQOE=" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="z-10 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          AI-Powered <span className="text-blue-300">Inspection</span> Solutions
        </h1>
        <motion.button
          onClick={openDemoForm}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </motion.button>
        <RequestDemoForm 
          isOpen={isDemoFormOpen} 
          onClose={closeDemoForm}
        />
      </div>
    </section>
  );
};

export default Hero;
