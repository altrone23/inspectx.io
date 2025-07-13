// src/pages/teams/LeadershipTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Ajay Kumar",
      role: "CEO & Founder",
      image: "src/assets/founder/ajay.jpg",
      bio: "Visionary leader with 15+ years in industrial inspection and AI technologies.",
      expertise: ["Strategic Planning", "Business Development", "Industry Relations"],
      linkedin: "#",
      email: "ajay@inspectx.io"
    },
    {
      name: "Ashook Yarlagadda",
      role: "Chief Operating Officer (COO) & Co-Founder",
      image: "src/assets/founder/ashok.png",
      bio: `ASHOOK YARLAGADDA
Chief Operating Officer (COO) & Co-Founder
InspectX AI Solutions LLP

Ashok Yarlagadda is the Chief Operating Officer and Co-Founder of InspectX AI Solutions LLP, where he leads operational strategy, organizational development, and business execution. With a strong background in scaling technology-driven service businesses, Ashok plays a critical role in aligning innovation with operational excellence to ensure sustainable growth and client satisfaction.

As a co-founder, he has been instrumental in shaping InspectX’s mission to deliver intelligent inspection solutions through advanced AI, drone technologies, and data-driven analytics — particularly in infrastructure diagnostics and utility assessments.

Ashok brings a hands-on leadership style to cross-functional operations, overseeing project execution, finance, talent development, and enterprise partnerships. His vision ensures InspectX operates with agility, scalability, and client-centric precision.`,
      expertise: [
        "Operational Strategy",
        "Organizational Development",
        "Business Execution",
        "Scaling Tech Services",
        "Project Management",
        "Finance",
        "Talent Development",
        "Enterprise Partnerships"
      ],
      linkedin: "#",
      email: "ashok@inspectx.io"
    },
    {
      name: "Balu",
      role: "Manger Services",
      image: "src/assets/founder/balu.jpg",
      bio: `Results-driven Mechanical Professional with 14 years of extensive experience in project execution, equipment maintenance, and specialized expertise in the theme park and amusement sector. Proven ability to manage and deliver complex projects under high-pressure environments with excellence. Adept in manpower management, client coordination, and cross-functional team leadership. Committed to delivering unmatched service quality and ensuring optimal operational efficiency.
Vision: To exceed expectations by delivering unmatched quality and reliability in every project and service.`,
      expertise: [
        "Project Execution & Maintenance Expertise",
        "High-Pressure Environment Adaptability",
        "Skilled in Theme Park & Amusement Equipment",
        "Strong Manpower & Resource Management",
        "Effective Client Relationship Handling",
        "Safety-First & Service-Oriented Mindset"
      ],
      linkedin: "#",
      email: "balu@inspectx.io"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0"></div>
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
              Leadership
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Meet the visionary leaders driving INSPECTX's mission to revolutionize industrial inspections through cutting-edge AI and drone technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 p-1 flex items-center justify-center">
                    <img
                      src={require(`../../assets/founder/${leader.name === 'Ajay Kumar' ? 'ajay.jpg' : leader.name === 'Ashook Yarlagadda' ? 'ashok.png' : 'balu.jpg'}`)}
                      alt={leader.name}
                      className="w-32 h-50 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{leader.name}</h3>
                  <p className="text-purple-400 font-semibold">{leader.role}</p>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={leader.linkedin}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Leadership Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our leadership team combines decades of experience in industrial inspection, AI technology, and business development. 
              We're committed to pushing the boundaries of what's possible in automated inspection, ensuring our clients stay ahead 
              of the curve in an increasingly competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;
