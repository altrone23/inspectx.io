// src/pages/teams/TechnicalExperts.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const TechnicalExperts = () => {
  const experts = [
    {
      name: "Balavignesh A.U",
      role: "AI & Data Science Engineer | Full Stack Developer",
      image: require('../../assets/techteam/Bala.jpg'),
      specialties: [
        "Machine Learning",
        "Computer Vision",
        "Neural Networks",
        "Full Stack Development",
        "Data Analysis"
      ],
      experience:
        "I’m a passionate AI & Data Science engineer with a strong foundation in both software development and intelligent systems. I love building powerful, scalable applications that solve real-world problems — combining deep learning models, clean code, and smart design.\n\nTechnical Skills:\nLanguages & Frameworks: Python, JavaScript, React, Node.js, Express\nAI/ML Tools: TensorFlow, PyTorch, Scikit-learn\nData Handling: Pandas, NumPy, SQL\nFull Stack: REST APIs, MongoDB, Firebase, TailwindCSS\nTools: Git, VS Code, Postman",
      achievements: [
        "Built and deployed full-stack apps integrating AI features",
        "Worked on projects involving image recognition, NLP, and data pipelines",
        "Completed internships and freelance work that involved real-world AI problem-solving",
      ]
    },
    {
      name: "Kavirajan.E",
      role: "AI Engineer ,Developer & DevOps Engineer",
      image: require('../../assets/techteam/kavirajan.jpg'),
      specialties: ["Full-Stack Development", "Cloud Architecture", "DevOps","AI/ML Engineering"],
      experience: "I’m a passionate AI & Data Science engineer with a strong foundation in both software development and intelligent systems. I love building powerful, scalable applications that solve real-world problems — combining deep learning models, clean code, and smart design. Technical Skills: Languages & Frameworks: Python, JavaScript, React, Node.js, Express AI/ML Tools: TensorFlow, PyTorch, Scikit-learn Data Handling: Pandas, NumPy, SQL Full Stack: REST APIs, MongoDB, Firebase, TailwindCSS Tools: Git, VS Code, Postman",
      achievements: [
        "Built and deployed full-stack apps integrating AI features",
        "Worked on projects involving image recognition, NLP, and data pipelines",
        "Completed internships and freelance work that involved real-world AI problem-solving",
      ]
    },
    // {
    //   name: "Sarah Johnson",
    //   role: "Drone Systems Engineer",
    //   image: require('../../assets/techteam/sarah.jpg'),
    //   specialties: ["Drone Hardware", "Flight Control Systems", "Sensor Integration"],
    //   experience: "6+ years in drone technology",
    //   achievements: ["Certified drone pilot", "Hardware integration specialist", "Safety systems expert"]
    // },
    // {
    //   name: "Dr. Ahmed Hassan",
    //   role: "Computer Vision Specialist",
    //   image: require('../../assets/techteam/ahmed.jpg'),
    //   specialties: ["Image Processing", "Pattern Recognition", "3D Reconstruction"],
    //   experience: "12+ years in computer vision",
    //   achievements: ["PhD in Computer Vision", "20+ patents filed", "Industry recognition awards"]
    // }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "OpenCV", "React", "Node.js", "Python", "C++", 
    "AWS", "Docker", "Kubernetes", "ROS", "CUDA", "MongoDB", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 z-0"></div>
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
              Technical
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Experts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our technical team comprises world-class engineers and AI specialists who are pushing the boundaries of automated inspection technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experts.map((expert, index) => (
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                    <img src={expert.image} alt={expert.name} className="w-16 h-16 object-cover rounded-full border-2 border-white shadow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400">{expert.name}</h3>
                    <p className="text-blue-400">{expert.role}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{expert.experience}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Achievements</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {expert.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
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
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Innovation at Our Core
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our technical experts are constantly researching and developing new methods to improve inspection accuracy, 
              reduce false positives, and enhance automation capabilities. We're not just using existing technology – 
              we're creating the future of AI-powered industrial inspections.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalExperts;
