// src/pages/ReliabilityConditionMonitoring.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbRotate360 } from 'react-icons/tb';

// Import RCM slides for the full gallery
import rcmSlide1 from '../assets/slides/RCM/1.png';
import rcmSlide2 from '../assets/slides/RCM/2.jpeg';
import rcmSlide3 from '../assets/slides/RCM/3.webp';
import rcmSlide4 from '../assets/slides/RCM/4.avif';
import rcmSlide5 from '../assets/slides/RCM/5.png';

const ReliabilityConditionMonitoring = () => {
  return (
    <section id="top" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Reliability Condition Monitoring</span>
        </div>

        {/* Service Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
            <TbRotate360 size={40} />
          </div>
          <h1 className="text-4xl font-bold">Reliability Condition Monitoring (RCM)</h1>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src={rcmSlide1} 
            alt="Reliability Condition Monitoring" 
            className="w-full h-auto max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">          <p className="text-lg text-gray-700">
            RCM is a predictive maintenance strategy focused on ensuring critical equipment — motors, pumps, compressors, turbines — operate with minimal unplanned downtime. Using AI, sensor data, and historical trends, it helps identify early signs of failure.
          </p>

          <h2 className="text-2xl font-semibold">What it includes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Vibration analysis for early bearing failure detection</li>
            <li>Oil and lubricant quality assessment</li>
            <li>Thermal imaging to identify overheating components</li>
            <li>Electrical parameter monitoring for motors</li>
            <li>Real-time data analytics and trend analysis</li>
            <li>Customized reporting dashboards for maintenance teams</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Reduce Downtime</h3>
              <p>Identify potential failures before they occur to minimize unexpected equipment downtime</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Optimize Maintenance</h3>
              <p>Schedule maintenance based on actual equipment condition rather than fixed intervals</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Extend Asset Life</h3>
              <p>Prolong equipment lifespan through early detection of wear patterns and issues</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[rcmSlide1, rcmSlide2, rcmSlide3, rcmSlide4, rcmSlide5].map((slide, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide} 
                  alt={`RCM Gallery ${index + 1}`} 
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Request a Consultation</h2>
            <p className="mb-4">
              Interested in learning how our Reliability Condition Monitoring services can benefit your business? 
              Contact us for a personalized assessment and demonstration.
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

export default ReliabilityConditionMonitoring;
