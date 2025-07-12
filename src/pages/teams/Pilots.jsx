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
        "Creative visual artist turned aviation technology specialist. 12+ years commercial aviation, 5+ years drone operations. Extensive flight hours in commercial and industrial applications: infrastructure inspections, land surveys, environmental monitoring, and construction documentation.",

      specialties: [
        "Mission Design & Execution: Detailed flight plans, regulatory compliance",
        "Operational Leadership: Training, mentoring, safety, and data quality",
        "Data Acquisition & Analysis: High-res imagery, sensor data, actionable insights",
        "Client Engagement: Project scoping, technical and visual solution delivery",
        "Merging artistry with precision engineering for visually stunning, accurate aerial content",
        "Continuous learning and innovation in drone technology and airspace regulations"
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
              Mr. Kalyan Reddy is a creative visual artist turned aviation technology specialist, currently leading operations as the Lead Remote Pilot at InspectX. With roots in photography and visual storytelling, he developed a keen eye for composition and technical finesse — qualities that laid the foundation for his transition into unmanned aerial systems (UAS).
              <br /><br />
              Motivated by a desire to capture the world from new heights, he earned his Remote Pilot Certificate (RPC) and quickly advanced, combining artistic background with aviation technology, safety protocols, and remote sensing. He has accumulated extensive flight hours across commercial and industrial applications — including infrastructure inspections, land surveys, environmental monitoring, and construction documentation.
              <br /><br />
              At InspectX, Mr. Reddy leads a team of drone pilots, overseeing mission planning, flight execution, risk assessment, and data analysis. He is responsible for:
            </p>
            <ul className="text-gray-700 text-sm mb-4 list-disc list-inside text-left">
              <li><b>Mission Design & Execution:</b> Creating detailed flight plans and ensuring regulatory compliance.</li>
              <li><b>Operational Leadership:</b> Training and mentoring new pilots, upholding safety and data quality.</li>
              <li><b>Data Acquisition & Analysis:</b> Capturing high-res imagery and collaborating for actionable insights.</li>
              <li><b>Client Engagement:</b> Understanding project goals and delivering technical and visual solutions.</li>
            </ul>
            <p className="text-gray-700 text-sm mb-2 text-center">
              What sets him apart is the ability to merge artistry with precision engineering — crafting visually stunning and technically accurate aerial content that supports real-world decision-making. His background in photography enhances every flight, adding immense value to aerial inspections.
              <br /><br />
              Always at the forefront of drone technology and airspace regulations, Mr. Reddy is committed to continuous learning and innovation, pushing the boundaries of aerial data capture and visual inspection.
            </p>
          </div>
        </div>
      )
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
