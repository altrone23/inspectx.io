// src/pages/RailwayTrackInspection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbDrone } from 'react-icons/tb';
import ServiceDemoRequest from '../components/ServiceDemoRequest';

// Import track inspection slides for the full gallery
import trackSlide1 from '../assets/slides/TRACKS/1.jpg';
import trackSlide2 from '../assets/slides/TRACKS/2.jpg';
import trackSlide3 from '../assets/slides/TRACKS/3.webp';
import trackSlide4 from '../assets/slides/TRACKS/4.webp';
import trackSlide5 from '../assets/slides/TRACKS/5.webp';
import trackSlide6 from '../assets/slides/TRACKS/6.png';
import trackSlide7 from '../assets/slides/TRACKS/7.jpg';
import trackSlide8 from '../assets/slides/TRACKS/11.webp';

const RailwayTrackInspection = () => {
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
          <span className="text-gray-600">Railway Track Inspection</span>
        </div>

        {/* Service Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
            <TbDrone size={40} />
          </div>
          <h1 className="text-4xl font-bold">Railway Track Inspection</h1>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src={trackSlide1} 
            alt="Railway Track Inspection" 
            className="w-full h-auto max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
<h6 className="text-lg font-semibold text-gray-800">Overview</h6>
<p className="text-lg text-gray-700">
  This solution integrates drones, AI, and high-precision imaging tools to automate railway inspection tasks that are typically dangerous and time-consuming. It enhances both frequency and accuracy of inspections.
</p>

<h4 className="text-lg font-semibold text-gray-800">Key Capabilities:</h4>
<ul className="list-disc pl-6 text-gray-700 space-y-1">
  <li>HD and Thermal Cameras: Identify cracks, broken fasteners, ballast erosion, and overheating components.</li>
  <li>LiDAR Mapping: Generates 3D terrain models to assess track alignment and slope stability.</li>
  <li>AI Fault Detection: Machine learning models flag abnormalities like rail wear, gauge misalignment, and vegetation encroachment.</li>
  <li>Cloud Analytics: Data from the field is analyzed in real-time and made available through dashboards and alerts.</li>
</ul>

          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>High-definition and thermal imaging of track components</li>
            <li>LiDAR mapping for precise track geometry analysis</li>
            <li>AI-powered detection of cracks, misalignments, and wear</li>
            <li>Real-time data transmission and analytics</li>
            <li>Automatic detection of vegetation encroachment</li>
            <li>Comprehensive defect reports with GPS coordinates</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Enhanced Safety</h3>
              <p>Early detection of track defects significantly reduces derailment risks</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Cost Efficiency</h3>
              <p>Up to 80% reduction in inspection costs compared to manual methods</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Minimal Disruption</h3>
              <p>Inspection without traffic interruption on operational lines</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[trackSlide1, trackSlide2, trackSlide3, trackSlide4, trackSlide5, trackSlide6, trackSlide7, trackSlide8].map((slide, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide} 
                  alt={`Railway Track Inspection Gallery ${index + 1}`} 
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>          <ServiceDemoRequest
            serviceName="Railway Track Inspection"
            serviceId="defect-detection"
            isDemoFormOpen={isDemoFormOpen}
            openDemoForm={openDemoForm}
            closeDemoForm={closeDemoForm}
          />
        </div>
      </div>
    </section>
  );
};

export default RailwayTrackInspection;
