// src/pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverX, setHoverX] = useState(null);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    setHoverX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
  };  return (
    <div className="relative min-h-screen">
      {/* Background section with hover effect */}      
      <div 
        ref={sectionRef}
        className="absolute inset-0 overflow-hidden"
        style={{ 
          background: 'linear-gradient(to left, rgb(40, 77, 196), rgb(68, 110, 223))',
          zIndex: 0,
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Darker spot on hover with enhanced fluidity */}
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              hoverX !== null
                ? `radial-gradient(circle at ${hoverX}px 50%, 
                    rgba(15,23,42,0.7) 0%,
                    rgba(15,23,42,0.5) 150px,
                    rgba(15,23,42,0.3) 300px,
                    transparent 700px)`
                : 'transparent',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hoverX !== null ? 'scale(1.05)' : 'scale(1)',
            zIndex: 1,
          }}
        />
      </div>
      
      {/* Main content section */}      <section 
        id="top" 
        className="relative flex items-center justify-center py-16"
        style={{ position: 'relative', minHeight: 'calc(100vh - 100px)' }}
      >
        {/* Scrollable text container with animation */}
        <div
          ref={cardRef}
          className={`relative z-10 w-full max-w-4xl mx-auto overflow-y-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg transform transition-transform duration-1000 ${
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
            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-6 hover:text-blue-600 transition-colors duration-300">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founder 1 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img 
                src={require('../assets/founder/ajay.jpg')} 
                alt="Ajay" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ajay Kumar</h3>
                  <p className="text-lg font-semibold mb-2">Co-Founder & CEO</p>
                  <p className="text-sm opacity-90">
                    Leading INSPECTX's vision and strategy with over 10 years of experience in AI and industrial automation.
                    Specializes in developing cutting-edge inspection solutions for complex industrial applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img 
                src={require('../assets/founder/ashok.jpg')} 
                alt="Ashok" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ashok Kumar</h3>
                  <p className="text-lg font-semibold mb-2">Co-Founder & COO</p>
                  <p className="text-sm opacity-90">
                    Driving technological innovation at INSPECTX with expertise in computer vision and deep learning.
                    Leads the development of our AI-powered inspection platforms and automated solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mt-8 hover:text-blue-600 transition-colors duration-300">Our Partnerships</h2>
          <p className="text-lg leading-7 hover:text-blue-900 transition-colors duration-300">
            Inspectx collaborates with Drone AI to extend our AI services globally. We also work 
            with AIVA for RCM services in the Indian and Middle East markets.          </p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;