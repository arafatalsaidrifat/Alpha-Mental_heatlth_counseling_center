import React from 'react';

function MedicinePage() {
  const medicines = [
    { name: 'Paracetamol', use: 'Pain relief', dosage: '500mg', sideEffects: 'Nausea, rash' },
    { name: 'Ibuprofen', use: 'Anti-inflammatory', dosage: '400mg', sideEffects: 'Stomach upset' },
    // Add more medicines as needed
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-4 text-center">Available Medicines</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
            <th className="py-2 px-4">Medicine Name</th>
            <th className="py-2 px-4">Use</th>
            <th className="py-2 px-4">Dosage</th>
            <th className="py-2 px-4">Side Effects</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index} className="hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <td className="py-2 px-4 border-b">{medicine.name}</td>
              <td className="py-2 px-4 border-b">{medicine.use}</td>
              <td className="py-2 px-4 border-b">{medicine.dosage}</td>
              <td className="py-2 px-4 border-b">{medicine.sideEffects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicinePage;
