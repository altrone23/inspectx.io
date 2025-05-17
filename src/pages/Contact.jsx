// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // In a real app, you would send the data to a server here
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="top" className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="bg-white shadow-md p-6 rounded-xl space-y-4">
        <p><span className="font-semibold">📍 Address:</span> Plot No. 8, 12, 13, Flat No. 106, Gayatrisai Nilayam, Nizampet, Hyderabad, Qutubullapur, Telangana, India – 500090</p>
        <p><span className="font-semibold">📞 Phone:</span> +91 98765 43210</p>
        <p><span className="font-semibold">📧 Email:</span> support@inspectxpro.com</p>
        <p><span className="font-semibold">🕒 Business Hours:</span> Mon – Fri: 9:00 AM – 6:00 PM IST</p>
      </div>

      {formStatus.submitted ? (
        <div className="mt-8 p-4 bg-green-100 text-green-700 rounded-lg">
          {formStatus.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          {formStatus.error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg">
              {formStatus.message}
            </div>
          )}
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="border border-gray-300 px-4 py-2 rounded-lg" 
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="border border-gray-300 px-4 py-2 rounded-lg" 
          />
          <textarea 
            placeholder="Your Message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5" 
            className="border border-gray-300 px-4 py-2 rounded-lg"
          ></textarea>
          <button 
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
