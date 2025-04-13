// src/pages/Services.jsx
import React, { useState } from 'react';
import { FaCamera, FaFire, FaSearch, FaRobot, FaChartLine } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import slides
import slide1 from '../assets/slides/1.png';
import slide2 from '../assets/slides/2.png';
import slide3 from '../assets/slides/3.png';
// Note: You'll need to add slide4.png and slide5.png to your assets folder

const services = [
  {
    icon: <FaCamera size={30} />,
    title: "Visual AI Inspection",
    description: "Automated visual checks using AI models to detect defects with high precision.",
    slides: [slide1, slide2, slide3, slide1, slide2], // Reusing slides for demo
  },
  {
    icon: <FaFire size={30} />,
    title: "Thermal Imaging",
    description: "Detect heat-based anomalies in equipment and infrastructure to prevent failures and improve safety.",
    slides: [slide2, slide3, slide1, slide2, slide3], // Reusing slides for demo
  },
  {
    icon: <FaSearch size={30} />,
    title: "Defect Detection",
    description: "Real-time defect classification using edge or cloud AI with comprehensive reporting and analysis.",
    slides: [slide3, slide1, slide2, slide3, slide1], // Reusing slides for demo
  },
  {
    icon: <FaRobot size={30} />,
    title: "Custom AI Models",
    description: "Train custom models for specific inspection workflows tailored to your industry requirements.",
    slides: [slide1, slide3, slide2, slide1, slide3], // Reusing slides for demo
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Performance Analytics",
    description: "Comprehensive analysis and reporting on inspection results with actionable insights.",
    slides: [slide2, slide1, slide3, slide2, slide1], // Reusing slides for demo
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
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="mb-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Smart inspection tools powered by cutting-edge AI for industries that demand precision and reliability
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
                  <li>Feature 1 for {service.title}</li>
                  <li>Feature 2 for {service.title}</li>
                  <li>Feature 3 for {service.title}</li>
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
