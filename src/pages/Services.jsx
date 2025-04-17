// src/pages/Services.jsx
import React, { useState } from 'react';
import { FaCamera, FaFire, FaSearch, FaRobot, FaChartLine, FaTrain, FaBolt, FaWater } from 'react-icons/fa';
import { TbDrone, TbRotate360 } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

// Import slides
import slide1 from '../assets/slides/1.png';
import slide2 from '../assets/slides/2.png';
import slide3 from '../assets/slides/3.png';
// Note: You'll need to add slide4.png and slide5.png to your assets folder

const services = [
  {
    icon: <TbRotate360 size={30} />,
    title: "Reliability Condition Monitoring (RCM)",
    description: "Advanced monitoring of rotating equipment like motors, pumps, turbines, and compressors to detect potential failures early and optimize maintenance.",
    slides: [slide1, slide2, slide3],
    features: [
      "Vibration analysis for early bearing failure detection",
      "Oil and lubricant quality assessment",
      "Thermal imaging to identify overheating components",
      "Electrical parameter monitoring for motors"
    ]
  },
  {
    icon: <TbDrone size={30} />,
    title: "Railway Track Inspection",
    description: "Drone and AI-powered railway track inspection that ensures safety, reduces costs, and increases efficiency compared to traditional methods.",
    slides: [slide2, slide3, slide1],
    features: [
      "High-definition and thermal imaging of track components",
      "LiDAR mapping for precise track geometry analysis",
      "AI-powered detection of cracks, misalignments, and wear",
      "Real-time data transmission and analytics"
    ]
  },
  {
    icon: <FaSearch size={30} />,
    title: "NDT Testing",
    description: "Non-Destructive Testing services for medium to large scale process industries with comprehensive reporting and analysis.",
    slides: [slide3, slide1, slide2],
    features: [
      "Ultrasonic and radiographic testing",
      "Magnetic particle and dye penetrant inspection",
      "Automated defect classification using AI",
      "Digital reporting and compliance documentation"
    ]
  },
  {
    icon: <FaBolt size={30} />,
    title: "Power Line Inspection",
    description: "Drone-based power line inspections that enhance safety, efficiency, and cost-effectiveness with AI-powered defect detection.",
    slides: [slide1, slide3, slide2],
    features: [
      "Visual and thermal inspection of power infrastructure",
      "LiDAR mapping for vegetation management",
      "AI detection of loose insulators, corrosion, and damage",
      "Predictive maintenance scheduling"
    ]
  },
  {
    icon: <FaCamera size={30} />,
    title: "Solar Panel Inspection",
    description: "Quick and accurate drone-based solar panel inspections that identify defects, hotspots, and performance issues.",
    slides: [slide2, slide1, slide3],
    features: [
      "Thermal imaging to detect hotspots and cell failures",
      "Automated panel efficiency assessment",
      "Vegetation and shading impact analysis",
      "Post-storm damage assessment"
    ]
  },
  {
    icon: <FaWater size={30} />,
    title: "Water Line Inspection",
    description: "Advanced inspection of underground and on-ground water pipelines using non-invasive technologies and AI analytics.",
    slides: [slide3, slide2, slide1],
    features: [
      "Leak detection and localization",
      "Ground penetrating radar for underground inspection",
      "Thermal and acoustic anomaly detection",
      "3D mapping of water infrastructure"
    ]
  },
  {
    icon: <FaWater size={30} />,
    title: "Water Line Inspection",
    description: "Advanced inspection of underground and on-ground water pipelines using non-invasive technologies and AI analytics.",
    slides: [slide3, slide2, slide1],
    features: [
      "Leak detection and localization",
      "Ground penetrating radar for underground inspection",
      "Thermal and acoustic anomaly detection",
      "3D mapping of water infrastructure"
    ]
  }
];

const ServiceSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button 
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#10095;
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="mb-6 text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered inspection solutions for industries that demand precision, reliability, and safety
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <ServiceSlider slides={service.slides} />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
