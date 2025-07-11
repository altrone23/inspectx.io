// src/pages/teams/SupportStaff.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHeadset, FaTools, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const SupportStaff = () => {
  const supportTeam = [
    {
      name: "Anna Williams",
      role: "Customer Success Manager",
      icon: <FaHandshake className="w-8 h-8" />,
      responsibilities: ["Client Relationship Management", "Project Coordination", "Success Strategy Planning"],
      experience: "7+ years in customer success",
      achievements: ["95% client retention rate", "Managed 50+ successful projects", "Customer satisfaction expert"]
    },
    {
      name: "David Kumar",
      role: "Technical Support Lead",
      icon: <FaHeadset className="w-8 h-8" />,
      responsibilities: ["24/7 Technical Support", "Issue Resolution", "Client Training"],
      experience: "5+ years in technical support",
      achievements: ["Average response time: <30 minutes", "99.5% issue resolution rate", "Expert troubleshooter"]
    },
    {
      name: "Maria Gonzalez",
      role: "Operations Coordinator",
      icon: <FaTools className="w-8 h-8" />,
      responsibilities: ["Project Scheduling", "Resource Management", "Quality Assurance"],
      experience: "6+ years in operations management",
      achievements: ["Streamlined operations efficiency by 40%", "Zero missed deadlines in 2024", "Process optimization specialist"]
    },
    {
      name: "Robert Chen",
      role: "Safety & Compliance Officer",
      icon: <FaShieldAlt className="w-8 h-8" />,
      responsibilities: ["Safety Protocol Development", "Regulatory Compliance", "Risk Management"],
      experience: "10+ years in industrial safety",
      achievements: ["Zero safety incidents", "100% regulatory compliance", "Certified safety professional"]
    }
  ];

  const services = [
    {
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your inspection needs",
      features: ["Instant chat support", "Phone support", "Email assistance", "Remote troubleshooting"]
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination and management",
      features: ["Timeline planning", "Resource allocation", "Progress tracking", "Quality assurance"]
    },
    {
      title: "Training & Onboarding",
      description: "Comprehensive training programs for your team",
      features: ["Custom training sessions", "Documentation", "Best practices guide", "Ongoing support"]
    },
    {
      title: "Maintenance & Updates",
      description: "Keep your systems running at peak performance",
      features: ["Regular maintenance", "Software updates", "Performance optimization", "Preventive care"]
    }
  ];

  const supportStats = [
    { metric: "<30min", label: "Average Response Time", icon: <FaHeadset className="w-6 h-6" /> },
    { metric: "99.5%", label: "Issue Resolution Rate", icon: <FaTools className="w-6 h-6" /> },
    { metric: "95%", label: "Client Retention", icon: <FaHandshake className="w-6 h-6" /> },
    { metric: "24/7", label: "Support Availability", icon: <FaShieldAlt className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 z-0"></div>
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
              Support
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our dedicated customer service and operations team ensures your success every step of the way, providing exceptional support and seamless experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4 text-purple-400">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-purple-400 mb-2">{stat.metric}</h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {supportTeam.map((member, index) => (
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">{member.name}</h3>
                    <p className="text-pink-400">{member.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Experience</h4>
                    <p className="text-gray-300 text-sm">{member.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Responsibilities</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {member.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Achievements</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-pink-400 mr-2">•</span>
                          {achievement}
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

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Support Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <span className="text-pink-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every member of our support team is dedicated to ensuring your success. We understand that exceptional technology 
              requires exceptional support, and we're committed to providing you with the best possible experience. From initial 
              consultation to ongoing maintenance, we're here to help you achieve your inspection goals efficiently and effectively.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportStaff;
