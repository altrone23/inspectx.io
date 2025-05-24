import React from 'react';
import RequestDemoForm from './RequestDemoForm';

const ServiceDemoRequest = ({ 
  serviceName, 
  serviceId, 
  isDemoFormOpen, 
  openDemoForm, 
  closeDemoForm 
}) => {
  return (
    <div className="mt-10 bg-gray-100 p-6 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Request a Demonstration</h2>
      <p className="mb-4">
        See how our {serviceName} technology can revolutionize your operations.
        Fill out our form to schedule a demonstration or discuss your specific requirements.
      </p>
      <button 
        onClick={openDemoForm}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Request a Demo
      </button>
      
      <RequestDemoForm 
        isOpen={isDemoFormOpen} 
        onClose={closeDemoForm} 
        preselectedService={serviceId}
      />
    </div>
  );
};

export default ServiceDemoRequest;
