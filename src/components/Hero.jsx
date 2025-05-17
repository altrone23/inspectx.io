import React from 'react';
import videoSrc from '../assets/vid1.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Image background with overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={require('../assets/hero.jpg')}
        alt="Hero background"
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
