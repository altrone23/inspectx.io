// src/components/Hero.jsx

import React from 'react';
import videoSrc from '../assets/vid1.mp4';

const Hero = () => {
  return (
    <><section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline />
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
    </section><section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Revolutionize Industrial <span className="text-yellow-400">Inspections</span><br />
              with <span className="text-blue-300">AI-Powered</span> Technology
            </h1>
            <p className="text-lg text-gray-200">
              INSPECTX Pro simplifies and accelerates inspections with real-time analytics,
              automation, and customizable workflows for all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition">
                🚀 Request a Demo
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
                <a href="/services">📄 Learn More </a>
              </button>
            </div>
          </div>

          {/* Image / Graphic */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={require('../assets/original.jpeg')}
              alt="AI Inspection Illustration"
              className="w-full max-w-md rounded-xl shadow-lg" />
          </div>
        </div>
      </section></>
  );
  
};

export default Hero;
