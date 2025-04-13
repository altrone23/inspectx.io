import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-9xl mx-auto px-5 py-4 flex justify-between items-center">
        <div className="max-w-7xl mx-auto px-5 py-3 contents justify-left items-left">
          <img src="/header.png" alt="Header" style={{ width: '200px', height: '60px' }} />
        </div>
        <div className="space-x-6 text-lg font-semibold text-gray-700">
          <Link to="/" className="hover:text-blue-500 px-4 py-2">Home</Link>
          <Link to="/about" className="hover:text-blue-500 px-4 py-2">About</Link>
          <Link to="/services" className="hover:text-blue-500 px-4 py-2">Services</Link>
          <Link to="/features" className="hover:text-blue-500 px-4 py-2">Features</Link>
          <Link to="/contact" className="hover:text-blue-500 px-4 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;