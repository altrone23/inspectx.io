import React from 'react';
import videoSrc from '../assets/vid1.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          AI-Powered Railway Inspections
        </h1>
        <p className="max-w-xl mx-auto mb-6 text-lg drop-shadow-sm">
          Revolutionizing quality control with cutting-edge AI & vision technology.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;
