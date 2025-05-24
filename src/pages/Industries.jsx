import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  {
    name: "Manufacturing",
    description: "AI-powered visual inspection and quality control solutions for manufacturing, enhancing precision and reducing defects.",
    icon: "🏭",
    capabilities: [
      "Automated defect detection in production lines",
      "Component quality assessment and grading",
      "Real-time production monitoring and analytics"
    ],
    subIndustries: ["Automotive", "Electronics", "Pharmaceutical", "Food & Beverage"]
  },
  {
    name: "Energy & Utilities",
    description: "Advanced inspection technologies for energy infrastructure, ensuring reliability and safety in power generation and distribution.",
    icon: "⚡",
    capabilities: [
      "Power line and grid infrastructure inspection",
      "Solar panel efficiency monitoring",
      "Wind turbine blade inspection and maintenance planning"
    ],
    subIndustries: ["Solar", "Wind", "Hydroelectric", "Traditional Power", "Smart Grid"]
  },
  {
    name: "Metro & Railways",
    description: "Comprehensive track and infrastructure inspection solutions, enhancing safety and reducing maintenance costs.",
    icon: "🚆",
    capabilities: [
      "Rail track defect identification and classification",
      "Overhead line equipment (OLE) inspection",
      "Tunnel and bridge structural analysis"
    ],
    subIndustries: ["High-Speed Rail", "Urban Transit", "Freight Railways", "Metro Systems"]
  },
  {
    name: "Oil & Gas",
    description: "Inspection solutions for critical infrastructure in upstream, midstream, and downstream operations.",
    icon: "🛢️",
    capabilities: [
      "Pipeline integrity assessment",
      "Storage tank inspection",
      "Leak detection and environmental monitoring"
    ],
    subIndustries: ["Extraction", "Refining", "Pipeline Transportation", "Distribution"]
  },
  {
    name: "Water Management",
    description: "Monitoring and inspection systems for water infrastructure, ensuring quality and detecting issues early.",
    icon: "💧",
    capabilities: [
      "Water line and pipe inspection",
      "Treatment facility monitoring",
      "Leak detection in distribution networks"
    ],
    subIndustries: ["Municipal Water", "Wastewater", "Irrigation", "Desalination"]
  },
  {
    name: "Construction & Infrastructure",
    description: "Structural integrity monitoring and analysis for buildings, bridges, and critical infrastructure.",
    icon: "🏗️",
    capabilities: [
      "Building facade inspection",
      "Structural health monitoring",
      "Construction site progress tracking"
    ],
    subIndustries: ["Commercial Buildings", "Bridges & Tunnels", "Roads & Highways", "Dams"]
  }
];

const Industries = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Industries We Serve</h1>
          <p className="mb-8 text-gray-600 text-lg max-w-3xl mx-auto">
            INSPECTX delivers tailored AI inspection solutions across diverse industrial sectors, 
            optimizing operational efficiency and enhancing safety standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white p-5 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{industry.name}</h3>
                <span className="text-4xl">{industry.icon}</span>
              </div>

              <div className="p-6">
                <p className="mb-6 text-gray-600 leading-relaxed">
                  {industry.description}
                </p>

                <h4 className="font-bold text-lg mb-3 text-gray-800">Core Capabilities:</h4>
                <ul className="mb-6 space-y-2 text-gray-700">
                  {industry.capabilities.map((capability, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Sub-Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.subIndustries.map((sub, k) => (
                      <span key={k} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Don't see your industry?</h2>
          <p className="mb-8 text-gray-600">
            Our AI inspection technology can be customized to meet unique requirements across various sectors.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
            Contact Us for a Custom Solution
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;