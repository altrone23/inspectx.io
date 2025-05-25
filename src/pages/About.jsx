// src/pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center justify-center py-16"
      style={{ background: 'linear-gradient(to left, rgb(40, 77, 196), rgb(68, 110, 223))' }}
    >
      {/* Scrollable text container with animation */}
      <div
        ref={cardRef}
        className={`relative w-full max-w-4xl mx-auto overflow-y-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg transform transition-transform duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-8 hover:text-blue-700 transition-colors duration-300">INSPECTX AI SOLUTIONS LLP</h1>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            INSPECTX is an AI-powered inspection services firm established in October 2024, revolutionizing 
            quality control with cutting-edge AI and vision technology.
          </p>
          
          <h2 className="text-2xl font-bold text-blue-800 mt-8 hover:text-blue-600 transition-colors duration-300">Our Mission</h2>
          <p className="text-lg leading-7 hover:text-blue-900 transition-colors duration-300">
            We deliver high-precision inspection services using AI and drone technology, helping 
            industries detect defects, prevent failures, and improve safety and efficiency.
          </p>

          <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed hover:text-blue-900 transition-colors duration-300">
            Revolutionizing industrial quality control with cutting-edge AI & drone technology. Established October 2024.
          </p>
          
          <h2 className="text-2xl font-bold text-blue-800 mt-8 hover:text-blue-600 transition-colors duration-300">Service Scope</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">AI Programmed Solar Inspection Services</li>
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">Condition Monitoring of Rotating Equipment</li>
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">Railway Track Inspection</li>
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">Power Line Inspection</li>
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">Underground and On-Ground Waterline Inspection</li>
            <li className="hover:text-blue-700 hover:translate-x-2 transition-all duration-300">NDT Testing for Medium-Large Scale Process Industries</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-blue-800 mt-8 hover:text-blue-600 transition-colors duration-300">Our AI Advantage</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Enhanced Detection</h3>
              <p>Our AI systems can detect minute errors and defects that human inspectors might miss, leading to higher product quality and reliability.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Improved Efficiency</h3>
              <p>AI can process large volumes of data and perform inspections quickly, reducing production cycle times and improving overall throughput.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Consistent Performance</h3>
              <p>AI systems are not prone to fatigue or distractions, ensuring consistent and reliable inspections, which is crucial in high-stakes industries.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold mb-2">Predictive Maintenance</h3>
              <p>AI can analyze data from sensors and machinery to predict potential failures, allowing for proactive maintenance and reducing downtime.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-blue-800 mt-8 hover:text-blue-600 transition-colors duration-300">Our Partnerships</h2>
          <p className="text-lg leading-7 hover:text-blue-900 transition-colors duration-300">
            Inspectx collaborates with Drone AI to extend our AI services globally. We also work 
            with AIVA for RCM services in the Indian and Middle East markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;