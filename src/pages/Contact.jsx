// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="bg-white shadow-md p-6 rounded-xl space-y-4">
        <p><span className="font-semibold">📍 Address:</span> 123 Tech Park Avenue, Sector 4, Bangalore, Karnataka – 560103, India</p>
        <p><span className="font-semibold">📞 Phone:</span> +91 98765 43210</p>
        <p><span className="font-semibold">📧 Email:</span> support@inspectxpro.com</p>
        <p><span className="font-semibold">🕒 Business Hours:</span> Mon – Fri: 9:00 AM – 6:00 PM IST</p>
      </div>

      <form className="mt-8 grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your Name" className="border border-gray-300 px-4 py-2 rounded-lg" />
        <input type="email" placeholder="Your Email" className="border border-gray-300 px-4 py-2 rounded-lg" />
        <textarea placeholder="Your Message" rows="5" className="border border-gray-300 px-4 py-2 rounded-lg"></textarea>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
