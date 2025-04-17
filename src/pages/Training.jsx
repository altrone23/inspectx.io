import React, { useState } from 'react';
import { FaChalkboardTeacher, FaRobot, FaDrone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import slide1 from '../assets/training/1.png';
import slide2 from '../assets/training/2.png';
import slide3 from '../assets/training/3.png';

const trainingSections = [
  {
    id: 'ai-training',
    icon: <FaRobot size={30} />,
    title: 'AI for Industrial Inspections',
    description: 'Learn the fundamentals and applications of AI in industrial inspection, including computer vision, defect detection, and predictive analytics.',
    slides: [slide1, slide2, slide3],
    features: [
      'Introduction to AI and machine learning',
      'Computer vision for defect detection',
      'Data annotation and model training',
      'Deploying AI models in real-world scenarios'
    ]
  },
  {
    id: 'drone-training',
    icon: <FaDrone size={30} />,
    title: 'Drone Operations & Safety',
    description: 'Master drone piloting, safety protocols, and data collection techniques for aerial inspections in various industries.',
    slides: [slide2, slide3, slide1],
    features: [
      'Drone hardware overview',
      'Flight planning and regulations',
      'Aerial data capture best practices',
      'Safety and compliance procedures'
    ]
  },
  {
    id: 'instructor-certification',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'Instructor Certification Program',
    description: 'Become a certified instructor to deliver AI and drone inspection training, with a focus on curriculum design and hands-on teaching.',
    slides: [slide3, slide1, slide2],
    features: [
      'Training delivery techniques',
      'Curriculum development',
      'Assessment and certification standards',
      'Hands-on teaching practice'
    ]
  }
];

const TrainingSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
        <button onClick={prevSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">&#10094;</button>
        <button onClick={nextSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">&#10095;</button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Training = () => (
  <section id="top" className="py-16 px-6 bg-white text-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Training Programs</h2>
        <p className="mb-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Upskill your team with hands-on AI and drone inspection training, led by industry experts.
        </p>
      </div>
      <div className="space-y-24">
        {trainingSections.map((section, index) => (
          <div
            id={section.id}
            key={section.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <TrainingSlider slides={section.slides} />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-blue-600 p-3 bg-blue-50 rounded-full">{section.icon}</div>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{section.description}</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {section.features.map((feature, i) => (
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

export default Training;