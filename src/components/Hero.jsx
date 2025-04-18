import React from 'react';
import videoSrc from '../assets/vid1.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Content */}
      <div className="z-10 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
          AI-Powered <span className="text-blue-300">Inspection</span> Solutions
        </h1><br />
        <br />
        
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
