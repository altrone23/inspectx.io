// src/pages/Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaBolt, FaWater } from 'react-icons/fa';
import { TbDrone, TbRotate360 } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

// Import slides
// RCM slides
import rcmSlide1 from '../assets/slides/RCM/1.png';
import rcmSlide2 from '../assets/slides/RCM/2.jpeg';
import rcmSlide3 from '../assets/slides/RCM/3.webp';
import rcmSlide4 from '../assets/slides/RCM/4.avif';
import rcmSlide5 from '../assets/slides/RCM/5.png';

// Track inspection slides
import trackSlide1 from '../assets/slides/TRACKS/1.jpg';
import trackSlide2 from '../assets/slides/TRACKS/2.jpg';
import trackSlide3 from '../assets/slides/TRACKS/3.webp';
import trackSlide4 from '../assets/slides/TRACKS/4.webp';
import trackSlide5 from '../assets/slides/TRACKS/5.webp';
import trackSlide6 from '../assets/slides/TRACKS/6.png';
import trackSlide7 from '../assets/slides/TRACKS/7.jpg';
import trackSlide8 from '../assets/slides/TRACKS/11.webp';

// Power line inspection slides
import powerSlide1 from '../assets/slides/Power line/1.jpg';
import powerSlide2 from '../assets/slides/Power line/2.webp';
import powerSlide3 from '../assets/slides/Power line/3.webp';
import powerSlide4 from '../assets/slides/Power line/4.jpg';
import powerSlide5 from '../assets/slides/Power line/6.jpg';

// Solar panel inspection slides
import solarSlide1 from '../assets/slides/solar/s1.jpg';
import solarSlide2 from '../assets/slides/solar/s2.jpg';
import solarSlide3 from '../assets/slides/solar/s3.jpg';
import solarSlide4 from '../assets/slides/solar/s4.jpeg';
import solarSlide5 from '../assets/slides/solar/s5.jpg';

// Water line inspection slides
import waterSlide1 from '../assets/slides/water/w1.jpg';
import waterSlide2 from '../assets/slides/water/w2.jpg';
import waterSlide3 from '../assets/slides/water/w3.jpg';
import waterSlide4 from '../assets/slides/water/w4.jpg';

// AI inspection slides
// import aiSlide1 from '../assets/slides/AI pics/AI pics/ai-generated-art-898.webp';
// import aiSlide2 from '../assets/slides/AI pics/AI pics/1706043993369.png';
// import aiSlide3 from '../assets/slides/AI pics/AI pics/istockphoto-1159763217-612x612.jpg';

const services = [
  {
    id: "visual-ai",
    icon: <TbRotate360 size={30} />,
    title: "Reliability Condition Monitoring (RCM)",
    description: "Advanced monitoring of rotating equipment like motors, pumps, turbines, and compressors to detect potential failures early and optimize maintenance.",
    slides: [rcmSlide1, rcmSlide2, rcmSlide3, rcmSlide4, rcmSlide5],
    features: [
      "Vibration analysis for early bearing failure detection",
      "Oil and lubricant quality assessment",
      "Thermal imaging to identify overheating components",
      "Electrical parameter monitoring for motors"
    ]
  },
  {
    id: "defect-detection",
    icon: <TbDrone size={30} />,
    title: "Railway Track Inspection",
    description: "Drone and AI-powered railway track inspection that ensures safety, reduces costs, and increases efficiency compared to traditional methods.",
    slides: [trackSlide1, trackSlide2, trackSlide3, trackSlide4, trackSlide5,trackSlide6,trackSlide7,trackSlide8],
    features: [
      "High-definition and thermal imaging of track components",
      "LiDAR mapping for precise track geometry analysis",
      "AI-powered detection of cracks, misalignments, and wear",
      "Real-time data transmission and analytics"
    ]
  },
  // {
  //   id: "custom-models",
  //   icon: <FaSearch size={30} />,
  //   title: "NDT Testing",
  //   description: "Non-Destructive Testing services for medium to large scale process industries with comprehensive reporting and analysis.",
  //   slides: [aiSlide1, aiSlide2, aiSlide3],
  //   features: [
  //     "Ultrasonic and radiographic testing",
  //     "Magnetic particle and dye penetrant inspection",
  //     "Automated defect classification using AI",
  //     "Digital reporting and compliance documentation"
  //   ]
  // },
  {
    id: "power-inspection",
    icon: <FaBolt size={30} />,
    title: "Power Line Inspection",
    description: "Drone-based power line inspections that enhance safety, efficiency, and cost-effectiveness with AI-powered defect detection.",
    slides: [powerSlide1, powerSlide2, powerSlide3, powerSlide4, powerSlide5],
    features: [
      "Visual and thermal inspection of power infrastructure",
      "LiDAR mapping for vegetation management",
      "AI detection of loose insulators, corrosion, and damage",
      "Predictive maintenance scheduling"
    ]
  },  {
    id: "thermal-imaging",
    icon: <FaCamera size={30} />,
    title: "Solar Panel Inspection",
    description: "Quick and accurate drone-based solar panel inspections that identify defects, hotspots, and performance issues.",
    slides: [solarSlide1, solarSlide2, solarSlide3, solarSlide4, solarSlide5],
    features: [
      "Thermal imaging to detect hotspots and cell failures",
      "Automated panel efficiency assessment",
      "Vegetation and shading impact analysis",
      "Post-storm damage assessment"
    ]
  },
  {
    id: "analytics",
    icon: <FaWater size={30} />,
    title: "Water Line Inspection",
    description: "Advanced inspection of underground and on-ground water pipelines using non-invasive technologies and AI analytics.",
    slides: [waterSlide1, waterSlide2, waterSlide3, waterSlide4],
    features: [
      "Leak detection and localization",
      "Ground penetrating radar for underground inspection",
      "Thermal and acoustic anomaly detection",
      "3D mapping of water infrastructure"
    ]
  }, 
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
    <section id="top" className="py-16 px-6 bg-white text-gray-800">
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
              id={service.id}
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
                </ul>                <Link to={`/services/${service.id === "visual-ai" ? "reliability-condition-monitoring" : 
                                service.id === "defect-detection" ? "railway-track-inspection" : 
                                service.id === "power-inspection" ? "power-line-inspection" : 
                                service.id === "thermal-imaging" ? "solar-panel-inspection" : 
                                service.id === "analytics" ? "water-line-inspection" : ""}`} 
                    className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
