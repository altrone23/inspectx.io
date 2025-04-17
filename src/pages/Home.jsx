// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <div id="top">
        <Hero />
      </div>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 px-6">
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
              className="w-full max-w-md rounded-xl" />
          </div>
        </div>
        
        {/* Service tags added here */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            <span>Railway Inspections</span>
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            <span>Solar Panel Analysis</span>
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            <span>Equipment Monitoring</span>
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            <span>Power Line Inspection</span>
          </button>
        </div>
      </section>
      <Industries />
      <CTA />
    </>
  );
};

export default Home;
