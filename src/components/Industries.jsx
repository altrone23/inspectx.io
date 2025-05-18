// src/components/Industries.jsx
import React from 'react';

const industries = [
  "Manufacturing",
  "Energy & Utilities",
  "RTA ",
  "Metro & Railways",
];

const Industries = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
        <p className="mb-10 text-gray-600">Custom AI inspection solutions for diverse industrial domains.</p>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {industries.map((industry, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition">
              <h3 className="text-xl font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;