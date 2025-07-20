// src/pages/teams/Pilots.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlane, FaCertificate, FaMapMarkedAlt, FaTrophy } from 'react-icons/fa';
import KalyanImg from '../../assets/pilot/kalyan.jpg';
import { useState } from 'react';

const Pilots = () => {
  const [selectedPilot, setSelectedPilot] = useState(null);

  const pilots = [
    {
      name: "Kalyan Reddy",
      role: "Chief Pilot & Flight Operations Manager",
      icon: (
        <button
          onClick={() => setSelectedPilot(0)}
          className="focus:outline-none"
          aria-label="View Kalyan Reddy Profile"
        >
          <img
            src={KalyanImg}
            alt="Kalyan Reddy"
            className="w-12 h-12 rounded-full object-cover hover:scale-105 transition-transform"
          />
        </button>
      ),
      image: KalyanImg,
      experience:
        "A passionate visual storyteller turned aviation specialist, Mr. Kalyan Reddy began his creative journey as a photo artist, capturing compelling perspectives through the lens. Driven by a fascination for aerial imagery and innovative technology, he transitioned into the world of unmanned aviation, becoming a certified Remote Pilot (RPC). Today, Mr. Reddy serves as the Lead Remote Pilot at InspectX, where he combines his artistic eye with technical precision to lead complex drone inspection missions across diverse industries. With a strong foundation in photography and years of hands-on flight experience, Mr. Reddy brings a unique blend of creativity, safety-first mindset, and operational excellence to every project. Skilled in mission planning, data capture, and post-processing analytics, he is instrumental in delivering high-quality aerial insights that empower clients to make informed decisions. Whether inspecting infrastructure, conducting surveys, or capturing high-resolution imagery, Mr. Reddy continues to elevate the standards of drone operations through innovation and leadership.",
      specialties: [
        "Mission Planning & Execution: Creative flight plans, regulatory compliance",
        "Operational Leadership: Safety-first mindset, mentoring, and data quality",
        "Data Capture & Analytics: High-res imagery, post-processing, actionable insights",
        "Client Engagement: Project scoping, technical and visual solution delivery",
        "Blending artistry with precision engineering for impactful aerial content",
        "Continuous innovation in drone technology and inspection methodologies"
      ],
      profile: (
        <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto p-8 text-gray-900">
          <div className="flex flex-col items-center">
            <img
              src={KalyanImg}
              alt="Kalyan Reddy"
              className="w-40 h-40 rounded-full object-cover mb-6 hover:scale-105 transition-transform"
            />
            <h2 className="text-2xl font-bold text-orange-500 mb-1">Kalyan Reddy</h2>
            <p className="text-sm text-red-500 mb-4">Chief Pilot & Flight Operations Manager</p>
            <p className="text-gray-700 text-sm mb-4 text-center">
              A passionate visual storyteller turned aviation specialist, Mr. Kalyan Reddy began his creative journey as a photo artist, capturing compelling perspectives through the lens. Driven by a fascination for aerial imagery and innovative technology, he transitioned into the world of unmanned aviation, becoming a certified Remote Pilot (RPC).
              <br /><br />
              Today, Mr. Reddy serves as the Lead Remote Pilot at InspectX, where he combines his artistic eye with technical precision to lead complex drone inspection missions across diverse industries. With a strong foundation in photography and years of hands-on flight experience, Mr. Reddy brings a unique blend of creativity, safety-first mindset, and operational excellence to every project.
              <br /><br />
              Skilled in mission planning, data capture, and post-processing analytics, he is instrumental in delivering high-quality aerial insights that empower clients to make informed decisions. Whether inspecting infrastructure, conducting surveys, or capturing high-resolution imagery, Mr. Reddy continues to elevate the standards of drone operations through innovation and leadership.
            </p>
            <ul className="text-gray-700 text-sm mb-4 list-disc list-inside text-left">
              <li><b>Mission Planning & Execution:</b> Creative flight plans and regulatory compliance.</li>
              <li><b>Operational Leadership:</b> Safety-first mindset, mentoring, and data quality.</li>
              <li><b>Data Capture & Analytics:</b> High-res imagery, post-processing, actionable insights.</li>
              <li><b>Client Engagement:</b> Project scoping, technical and visual solution delivery.</li>
            </ul>
            <p className="text-gray-700 text-sm mb-2 text-center">
              Blending artistry with precision engineering for impactful aerial content. Always at the forefront of drone technology and inspection methodologies, Mr. Reddy is committed to continuous innovation, pushing the boundaries of aerial data capture and visual inspection.
            </p>
          </div>
        </div>
      )
    },
    // Additional pilots can be added here
  ];

  // Profile card modal for Kalyan Reddy
  const ProfileModal = ({ pilot, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
          aria-label="Close Profile"
        >
          &times;
        </button>
        {pilot.profile}
      </div>
    </div>
  );
  // End modal

  const equipment = [
    { name: "DJI Matrice 350 RTK", purpose: "Heavy-duty industrial inspections" },
    { name: "DJI Mavic 3 Enterprise", purpose: "Precision detail work" },
    { name: "Custom AI-Powered Drones", purpose: "Specialized inspection tasks" },
    { name: "Thermal Imaging Systems", purpose: "Heat signature analysis" },
    { name: "LiDAR Sensors", purpose: "3D mapping and measurement" },
    { name: "High-Resolution Cameras", purpose: "Detailed visual inspection" }
  ];

  const safetyStats = [
    { metric: "Zero", label: "Accidents in 2024", icon: <FaTrophy className="w-6 h-6" /> },
    { metric: "100%", label: "Safety Compliance", icon: <FaCertificate className="w-6 h-6" /> },
    { metric: "500+", label: "Safe Flight Hours", icon: <FaPlane className="w-6 h-6" /> },
    { metric: "24/7", label: "Emergency Response", icon: <FaMapMarkedAlt className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to About
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Elite
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Pilots</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our certified pilots are the innovators behind next-generation inspection solutions, combining aviation expertise with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {safetyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4 text-orange-400">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-orange-400 mb-2">{stat.metric}</h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilots Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pilots.map((pilot, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <button
                  onClick={() => setSelectedPilot(index)}
                  className="focus:outline-none"
                  aria-label={`View ${pilot.name} Profile`}
                >
                  <img
                    src={pilot.image}
                    alt={pilot.name}
                    className="w-40 h-40 rounded-full object-cover mb-6 hover:scale-105 transition-transform"
                  />
                </button>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">{pilot.name}</h3>
                  <p className="text-red-400">{pilot.role}</p>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Experience</h4>
                    <p className="text-gray-300 text-sm">{pilot.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Specialties</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {pilot.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedPilot !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedPilot(null)}
                    className="absolute top-2 right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
                    aria-label="Close Profile"
                  >
                    &times;
                  </button>
                  {pilots[selectedPilot].profile}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Advanced Equipment Fleet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm">{item.purpose}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Pioneering Flight Operations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our pilots don't just operate drones – they're innovators developing the next generation of inspection solutions. 
              With perfect safety records and thousands of flight hours, they're pushing the boundaries of what's possible in 
              automated aerial inspections, constantly refining techniques and developing new methodologies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pilots;
