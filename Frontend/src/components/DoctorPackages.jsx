// DoctorPackages.jsx
import React from "react";

const DoctorPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Basic Consultation",
      price: "1000 BDT",
      description: "A single session with our expert doctors.",
      icon: "👨‍⚕️",
    },
    {
      id: 2,
      name: "Standard Package",
      price: "3000 BDT",
      description: "Includes 3 sessions with follow-up support.",
      icon: "💊",
    },
    {
      id: 3,
      name: "Premium Package",
      price: "5000 BDT",
      description: "5 sessions, mental health checkup, and full support.",
      icon: "🩺",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Doctor Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out"
          >
            <div className="text-6xl text-center mb-4">{pkg.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-indigo-600">{pkg.name}</h2>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <span className="text-xl font-semibold text-green-500">{pkg.price}</span>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => alert(`You selected ${pkg.name}`)}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPackages;
