// src/pages/teams/Pilots.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlane, FaCertificate, FaMapMarkedAlt, FaTrophy } from 'react-icons/fa';

const Pilots = () => {
  const pilots = [
    {
      name: "Captain Mike Rodriguez",
      role: "Chief Pilot & Flight Operations Manager",
      icon: <FaPlane className="w-8 h-8" />,
      certifications: ["Part 107 Remote Pilot", "Advanced Operations", "Night Flight Certified"],
      experience: "12+ years commercial aviation, 5+ years drone operations",
      flightHours: "2,500+",
      specialties: ["Complex Infrastructure Inspections", "Emergency Response", "Training & Safety"]
    },
    {
      name: "Emma Chen",
      role: "Senior Inspection Pilot",
      icon: <FaCertificate className="w-8 h-8" />,
      certifications: ["Part 107 Remote Pilot", "Visual Observer Certified", "Industrial Inspection Specialist"],
      experience: "6+ years drone inspection operations",
      flightHours: "1,800+",
      specialties: ["Solar Panel Inspections", "Power Line Surveys", "Precision Maneuvers"]
    },
    {
      name: "James Thompson",
      role: "Railway Inspection Specialist",
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      certifications: ["Part 107 Remote Pilot", "Railway Safety Certified", "Beyond Visual Line of Sight"],
      experience: "4+ years railway inspection focus",
      flightHours: "1,200+",
      specialties: ["Railway Track Inspection", "Long-Distance Surveys", "Terrain Navigation"]
    },
    {
      name: "Dr. Lisa Park",
      role: "R&D Flight Test Pilot",
      icon: <FaTrophy className="w-8 h-8" />,
      certifications: ["Part 107 Remote Pilot", "Experimental Aircraft", "Research Operations"],
      experience: "8+ years aerospace research, 3+ years drone testing",
      flightHours: "1,500+",
      specialties: ["Prototype Testing", "Advanced AI Integration", "Flight Pattern Optimization"]
    }
  ];

  const equipment = [
    { name: "DJI Matrice 300 RTK", purpose: "Heavy-duty industrial inspections" },
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
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4">
                    {pilot.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{pilot.name}</h3>
                    <p className="text-red-400">{pilot.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Flight Hours</h4>
                    <p className="text-2xl font-bold text-white">{pilot.flightHours}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Experience</h4>
                    <p className="text-gray-300 text-sm">{pilot.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {pilot.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
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
