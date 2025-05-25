// src/components/CTA.jsx
import React, { useState } from 'react';
import RequestDemoForm from './RequestDemoForm';

const CTA = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Revolutionize Your Inspections?
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Let INSPECTX bring intelligence and automation into your quality control process.
        </p>
        <button
          onClick={openDemoForm}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 font-semibold rounded-lg transition"
        >
          Request a Free Demo
        </button>
        
        <RequestDemoForm 
          isOpen={isDemoFormOpen} 
          onClose={closeDemoForm}
        />
      </div>
    </section>
  );
};

export default CTA;