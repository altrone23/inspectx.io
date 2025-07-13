// src/pages/Home.jsx
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import CTA from '../components/CTA';
import HomeSlideshow from '../components/HomeSlideshow';
import RequestDemoForm from '../components/RequestDemoForm';

const Home = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  const closeDemoForm = () => {
    setIsDemoFormOpen(false);
  };

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
              INSPECTX simplifies and accelerates inspections with real-time analytics,
              automation, and customizable workflows for all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition"
                onClick={openDemoForm}
              >
                🚀 Request a Demo
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
                <a href="/services">📄 Learn More </a>
              </button>
            </div>
          </div>
          {/* Slideshow Component */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="w-full max-w-md h-80">
              <HomeSlideshow />
            </div>
          </div>
        </div>
        
        {/* Demo Request Form */}
        <RequestDemoForm isOpen={isDemoFormOpen} onClose={closeDemoForm} />
        
        {/* Service tags added here */}
        
      </section>
      {/* Partnerships Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Partnerships
          </h2>
          {/* Horizontal row of partner logos */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 py-4">
            <img src={require('../assets/partners/bluehat.jpg')} alt="Blue Hat Middle East" className="h-20 w-auto rounded shadow-lg mx-4" />
            <img src={require('../assets/partners/drone ai.jpg')} alt="Drone AI" className="h-20 w-auto rounded shadow-lg mx-4" />
            {/* Add more logos as needed */}
            {/* Example: <img src={require('../assets/partners/anotherlogo.jpg')} alt="Partner Name" className="h-20 w-auto rounded shadow-lg mx-4" /> */}
          </div>
          {/* Optionally add partner names/descriptions below if needed */}
        </div>
      </section>
      {/* Founder Note Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl italic font-semibold text-black-300 max-w-3xl mx-auto mb-4">
            “At InspectX, we don't just optimize inspections — we reimagine them through technology, precision, and purpose.”
          </blockquote>
          <div className="text-black-400 font-bold text-lg">— Ashook Yarlagadda, Co-Founder</div>
        </div>
      </section>
      <Industries />
      <CTA />
    </>
  );
};

export default Home;
