import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const RequestDemoForm = ({ isOpen, onClose, preselectedService = null }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedServices: preselectedService ? [preselectedService] : [],
    message: '',
  });
    // Services available for selection
  const availableServices = [
    { id: "visual-ai", name: "Reliability Condition Monitoring (RCM)" },
    { id: "defect-detection", name: "Railway Track Inspection" },
    { id: "power-inspection", name: "Power Line Inspection" },
    { id: "thermal-imaging", name: "Solar Panel Inspection" },
    { id: "analytics", name: "Water Line Inspection" }
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your interest! We will contact you shortly about your demo request.');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      selectedServices: [],
      message: '',
    });
    
    onClose();
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Service selection handler
  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const currentSelections = [...prev.selectedServices];
      
      if (currentSelections.includes(serviceId)) {
        return {
          ...prev,
          selectedServices: currentSelections.filter(id => id !== serviceId)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...currentSelections, serviceId]
        };
      }
    });
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Request a Demo</h2>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 transition"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Phone field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Company field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Services field */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Services Interested In * (Select at least one)
            </span>
            <div className="space-y-2">
              {availableServices.map(service => (
                <div key={service.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${service.id}`}
                    checked={formData.selectedServices.includes(service.id)}
                    onChange={() => handleServiceToggle(service.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label 
                    htmlFor={`service-${service.id}`} 
                    className="ml-3 block text-sm text-gray-700"
                  >
                    {service.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Submit button */}
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formData.selectedServices.length === 0}
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                formData.selectedServices.length === 0
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoForm;
