import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoverX, setHoverX] = React.useState(null);

  const handleMouseMove = (e) => {
    const nav = e.currentTarget;
    const rect = nav.getBoundingClientRect();
    setHoverX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
  };

  return (
    <nav
      className="shadow-md sticky top-0 z-40"
      style={{
        background: 'linear-gradient(to left, rgb(40, 77, 196),rgb(68, 110, 223))', // even darker blue
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Darker spot on hover */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            hoverX !== null
              ? `radial-gradient(circle at ${hoverX}px 50%, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.45) 180px, transparent 400px)`
              : 'transparent',
          transition: 'background 0.45s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 1,
        }}
      />
      <div className="max-w-9xl mx-auto px-5 py-4 flex justify-between items-center" style={{ position: 'relative', zIndex: 2 }}>
        <div className="max-w-7xl mx-auto px-5 py-3 contents justify-left items-left">
          <img src="/logo.jpg" alt="Header" style={{ width: '200px', height: '60px' }} />
        </div>
        <div className="space-x-6 text-lg font-semibold text-gray-200">
          <Link to="/" className="hover:text-blue-100 px-4 py-2 text-white">Home</Link>
          <Link to="/about" className="hover:text-blue-100 px-4 py-2 text-white">About</Link>
          <Link to="/services" className="hover:text-blue-100 px-4 py-2 text-white">Services</Link>
          <Link to="/training" className="hover:text-blue-100 px-4 py-2 text-white">Training</Link>
          <Link to="/features" className="hover:text-blue-100 px-4 py-2 text-white">Features</Link>
          <Link to="/contact" className="hover:text-blue-100 px-4 py-2 text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;