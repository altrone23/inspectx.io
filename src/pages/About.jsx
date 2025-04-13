// src/pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import aboutImage from '../assets/drone.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Fixed image container */}
      <div
        className="bg-cover bg-center w-full h-full opacity-100"
        style={{ backgroundImage: `url(${aboutImage})`, position: 'fixed' }}
      ></div>

      {/* Scrollable text container with animation */}
      <div
        ref={cardRef}
        className={`relative w-3/4 h-2/4 overflow-y-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg transform transition-transform duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-6">About INSPECTX Pro</h1>
        <p className="text-lg text-gray-700 leading-7">
          INSPECTX Pro is a cutting-edge web-based solution that simplifies inspection management
          for industries like manufacturing, infrastructure, and logistics. Our platform enables
          organizations to streamline their inspection processes — from scheduling and tracking to
          reporting and compliance — all in one place.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-7">
          With tools like customizable checklists, cloud-based storage, automated alerts, and
          real-time dashboards, we help businesses stay audit-ready, efficient, and safe. Whether
          it's preventive maintenance, safety checks, or quality audits — INSPECTX Pro is built to
          handle it all with ease and intelligence.
        </p>
      </div>
    </section>
  );
};

export default About;
