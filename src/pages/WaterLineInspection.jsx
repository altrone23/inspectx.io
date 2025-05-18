// src/pages/WaterLineInspection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWater } from 'react-icons/fa';

// Import water line inspection slides for the full gallery
import waterSlide1 from '../assets/slides/water/w1.jpg';
import waterSlide2 from '../assets/slides/water/w2.jpg';
import waterSlide3 from '../assets/slides/water/w3.jpg';
import waterSlide4 from '../assets/slides/water/w4.jpg';

const WaterLineInspection = () => {
  return (
    <section id="top" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Water Line Inspection</span>
        </div>

        {/* Service Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
            <FaWater size={40} />
          </div>
          <h1 className="text-4xl font-bold">Water Line Inspection</h1>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src={waterSlide1} 
            alt="Water Line Inspection" 
            className="w-full h-auto max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Advanced inspection of underground and on-ground water pipelines using non-invasive technologies and AI analytics.
            Our comprehensive solutions help utilities and municipalities identify leaks, structural issues, and potential failure points
            without excavation or service interruption.
          </p>

          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Leak detection and localization</li>
            <li>Ground penetrating radar for underground inspection</li>
            <li>Thermal and acoustic anomaly detection</li>
            <li>3D mapping of water infrastructure</li>
            <li>Predictive maintenance recommendations</li>
            <li>Resource conservation analysis</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Water Conservation</h3>
              <p>Detect and repair leaks quickly to reduce water loss and waste</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Cost Reduction</h3>
              <p>Avoid costly emergency repairs through early issue detection</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Non-disruptive</h3>
              <p>Inspect infrastructure without excavation or service interruption</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p className="text-gray-700">
            Our water line inspection services employ a multi-technology approach combining:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Acoustic leak detection systems</li>
            <li>Thermal imaging to identify temperature differences</li>
            <li>Ground penetrating radar for subsurface viewing</li>
            <li>AI-powered analysis to identify patterns and anomalies</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This comprehensive approach provides a complete picture of your water infrastructure's condition, 
            helping you prioritize maintenance and replacement projects based on actual conditions rather than age or assumptions.
          </p>

          <h2 className="text-2xl font-semibold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {[waterSlide1, waterSlide2, waterSlide3, waterSlide4].map((slide, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide} 
                  alt={`Water Line Inspection Gallery ${index + 1}`} 
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Schedule an Assessment</h2>
            <p className="mb-4">
              Our team can help you develop a comprehensive inspection program for your water infrastructure.
              Contact us to discuss your specific challenges and requirements.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterLineInspection;
