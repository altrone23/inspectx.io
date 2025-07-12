// src/pages/About.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaPlane, FaGlobe, FaIndustry } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const navigate = useNavigate();
  const stats = [
    { icon: <FaGlobe className="w-8 h-8" />, number: "3+", label: "Countries Served" },
    { icon: <FaIndustry className="w-8 h-8" />, number: "60+", label: "Inspections Completed" },
    { icon: <FaUsers className="w-8 h-8" />, number: "50+", label: "Team Members" },
    { icon: <FaPlane className="w-8 h-8" />, number: "6+", label: "Active Drones" }
  ];
  // const partnerships =[
  //   {name: "Drone AI", description: "Leading provider of drone technology solutions"},
  //   {name: "Blue hat middle east", description: "Innovative AI solutions for industrial applications"},
  // ];
  const milestones = [
    { year: "2024", title: "Foundation", description: "INSPECTX was established with a vision to revolutionize industrial inspections" },
    { year: "2024", title: "Strategic Partnerships", description: "Formed key partnerships with Drone AI and AIVA" },
    { year: "2024", title: "Market Expansion", description: "Extended services to international markets" },
    { year: "2025", title: "Future Growth", description: "Planning expansion into new sectors and technologies" }
  ];

  const team = [
    { name: "Leadership Team", description: "Experienced professionals from inspection and AI industries" },
    { name: "Technical Experts", description: "Tech team and AI specialists" },
    { name: "Pilots", description: "Innovators developing next-gen inspection solutions" },
    { name: "Support Staff", description: "Dedicated customer service and operations team" }
  ];

  const handleTeamClick = (teamName) => {
    // Navigate to team detail page with team name as parameter
    const teamRoutes = {
      "Leadership Team": "/teams/leadership",
      "Technical Experts": "/teams/technical",
      "Pilots": "/teams/pilots",
      "Support Staff": "/teams/support"
    };
    navigate(teamRoutes[teamName]);
  };

  const services = [
    'AI Programmed Solar Inspection',
    'Condition Monitoring',
    'Railway Track Inspection',
    'Power Line Inspection',
    'Waterline Inspection',
    'NDT Testing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Pioneering the Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Inspection</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in October 2024, INSPECTX is revolutionizing industrial quality control through 
              cutting-edge AI and drone technology. We're not just inspecting – we're innovating.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About INSPECTX
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  We deliver high-precision inspection services using AI and drone technology, helping 
                  industries detect defects, prevent failures, and improve safety and efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Service Scope</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ...Partnerships section removed... */}
        
      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-8 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24 text-blue-400 font-bold">
                  {milestone.year}
                </div>
                <div className="flex-grow pl-8 border-l-2 border-blue-400">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 border border-transparent hover:border-blue-500/30"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => handleTeamClick(member.name)}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{member.description}</p>
                <div className="text-blue-400 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                  Click to learn more →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Inspection Process?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn how INSPECTX can revolutionize your industrial inspections with AI and drone technology.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
