import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaChalkboardTeacher, FaTools, FaQuestionCircle } from 'react-icons/fa';

// Import training images
import trainingImage1 from '../assets/training/1.png';
import trainingImage2 from '../assets/training/2.png';
import trainingImage3 from '../assets/training/3.png';

// Fallback component for missing images
const FallbackImage = ({ alt }) => (
  <div className="flex items-center justify-center bg-gray-200 text-gray-400 rounded-xl w-full h-64 md:h-80 lg:h-96">
    <span className="text-2xl">No Image</span>
  </div>
);

const trainingSections = [
  {
    id: 'cat1',
    icon: <FaBook size={30} />,
    title: 'CAT1: Vibration Analysis',
    description: 'Foundational training for vibration analysis, covering the basics of vibration, data collection, and fault diagnosis.',
    image: trainingImage1,
    features: [
      'Introduction to vibration principles',
      'Vibration data collection techniques',
      'Basic fault diagnosis',
      'Hands-on practice with vibration tools'
    ]
  },
  {
    id: 'cat2',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'CAT2: Advanced Vibration Analysis',
    description: 'Intermediate to advanced concepts in vibration analysis, including signal processing, advanced diagnostics, and case studies.',
    image: trainingImage2,
    features: [
      'Signal processing fundamentals',
      'Advanced fault diagnostics',
      'Case studies and real-world examples',
      'Reporting and communication of findings'
    ]
  },
  {
    id: 'cat3',
    icon: <FaTools size={30} />,
    title: 'CAT3: Reliability & Asset Management',
    description: 'Comprehensive training on reliability engineering, asset management, and predictive maintenance strategies.',
    image: trainingImage3,
    features: [
      'Reliability-centered maintenance (RCM)',
      'Asset management best practices',
      'Predictive maintenance planning',
      'Performance analytics and KPIs'
    ]
  },
  {
    id: 'other-courses',
    icon: <FaQuestionCircle size={30} />,
    title: 'Other Courses',
    description: 'Explore additional training programs including infrared thermography, field lubrication, turbomachinery, and more.',
    image: null,
    features: [
      'Infrared Thermography Basics',
      'Field Lubrication Techniques',
      'Turbomachinery Fundamentals',
      'Asset Reliability Practitioner (ARP)'
    ]
  }
];

const Training = () => (
  <section id="top" className="py-16 px-6 bg-white text-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Training Programs</h2>
        <p className="mb-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Upskill your team with hands-on reliability, vibration, and asset management training, led by industry experts.
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
              {section.image ? (
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="rounded-xl w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              ) : (
                <FallbackImage alt={section.title} />
              )}
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
              <Link 
                to={`/training/${section.id}`} 
                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Training;