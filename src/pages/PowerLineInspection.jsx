// src/pages/PowerLineInspection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';
import ServiceDemoRequest from '../components/ServiceDemoRequest';

// Import power line inspection slides for the full gallery
import powerSlide1 from '../assets/slides/Power line/1.jpg';
import powerSlide2 from '../assets/slides/Power line/2.webp';
import powerSlide3 from '../assets/slides/Power line/3.webp';
import powerSlide4 from '../assets/slides/Power line/4.jpg';
import powerSlide5 from '../assets/slides/Power line/5.jpg';
import powerSlide6 from '../assets/slides/Power line/6.jpg';
import powerSlide7 from '../assets/slides/Power line/7.jpg';
import powerSlide8 from '../assets/slides/Power line/power-line-inspection-drone.webp';

const PowerLineInspection = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  const closeDemoForm = () => {
    setIsDemoFormOpen(false);
  };

  return (
    <section id="top" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Power Line Inspection</span>
        </div>

        {/* Service Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
            <FaBolt size={40} />
          </div>
          <h1 className="text-4xl font-bold">Power Line Inspection</h1>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src={powerSlide1} 
            alt="Power Line Inspection" 
            className="w-full h-auto max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Drone-based power line inspections that enhance safety, efficiency, and cost-effectiveness with AI-powered defect detection.
            Our solutions help utility companies identify problems before they cause outages or safety hazards.
          </p>

          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Visual and thermal inspection of power infrastructure</li>
            <li>LiDAR mapping for vegetation management</li>
            <li>AI detection of loose insulators, corrosion, and damage</li>
            <li>Predictive maintenance scheduling</li>
            <li>Detailed reports with GPS-tagged images</li>
            <li>Storm damage assessment capabilities</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Worker Safety</h3>
              <p>Eliminate the need for dangerous tower climbs and helicopter inspections</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Reduced Outages</h3>
              <p>Proactive detection of issues before they cause service disruptions</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Cost Savings</h3>
              <p>Up to 60% reduction in inspection costs compared to traditional methods</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[powerSlide1, powerSlide2, powerSlide3, powerSlide4, powerSlide5, powerSlide6, powerSlide7, powerSlide8].map((slide, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide} 
                  alt={`Power Line Inspection Gallery ${index + 1}`} 
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>          <ServiceDemoRequest
            serviceName="Power Line Inspection"
            serviceId="power-inspection"
            isDemoFormOpen={isDemoFormOpen}
            openDemoForm={openDemoForm}
            closeDemoForm={closeDemoForm}
          />
        </div>
      </div>
    </section>
  );
};

export default PowerLineInspection;
