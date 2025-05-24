// src/pages/SolarPanelInspection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';
import ServiceDemoRequest from '../components/ServiceDemoRequest';

// Import solar panel inspection slides for the full gallery
import solarSlide1 from '../assets/slides/solar/s1.jpg';
import solarSlide2 from '../assets/slides/solar/s2.jpg';
import solarSlide3 from '../assets/slides/solar/s3.jpg';
import solarSlide4 from '../assets/slides/solar/s4.jpeg';
import solarSlide5 from '../assets/slides/solar/s5.jpg';

const SolarPanelInspection = () => {
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
          <span className="text-gray-600">Solar Panel Inspection</span>
        </div>

        {/* Service Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
            <FaCamera size={40} />
          </div>
          <h1 className="text-4xl font-bold">Solar Panel Inspection</h1>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src={solarSlide1} 
            alt="Solar Panel Inspection" 
            className="w-full h-auto max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Quick and accurate drone-based solar panel inspections that identify defects, hotspots, and performance issues.
            Our technology helps solar farm operators maximize energy production and extend panel life through early detection of issues.
          </p>

          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Thermal imaging to detect hotspots and cell failures</li>
            <li>Automated panel efficiency assessment</li>
            <li>Vegetation and shading impact analysis</li>
            <li>Post-storm damage assessment</li>
            <li>High-resolution visual inspection for physical damage</li>
            <li>AI-powered analysis of large solar farms</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Increased Yield</h3>
              <p>Identify and fix underperforming panels to maximize energy production</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Rapid Inspection</h3>
              <p>Cover large solar farms in a fraction of the time required by manual methods</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Better Maintenance</h3>
              <p>Prioritize repairs based on performance impact and severity assessment</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">Technology Behind Our Inspections</h2>
          <p className="text-gray-700">
            Our solar panel inspection service combines high-resolution thermal imaging with RGB cameras and advanced analytics. 
            The thermal cameras detect heat signatures that indicate failing cells, while our proprietary algorithms analyze the data to identify:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cell-level defects</li>
            <li>Junction box failures</li>
            <li>String or connection issues</li>
            <li>Diode failures</li>
            <li>PID effects (Potential Induced Degradation)</li>
          </ul>

          <h2 className="text-2xl font-semibold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[solarSlide1, solarSlide2, solarSlide3, solarSlide4, solarSlide5].map((slide, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide} 
                  alt={`Solar Panel Inspection Gallery ${index + 1}`} 
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>          <ServiceDemoRequest
            serviceName="Solar Panel Inspection"
            serviceId="thermal-imaging"
            isDemoFormOpen={isDemoFormOpen}
            openDemoForm={openDemoForm}
            closeDemoForm={closeDemoForm}
          />
        </div>
      </div>
    </section>
  );
};

export default SolarPanelInspection;
