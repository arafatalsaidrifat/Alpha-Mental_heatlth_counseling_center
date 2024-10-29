import React from 'react';

function TestsPage() {
  const tests = [
    { name: 'Blood Test', description: 'Check for various blood conditions.', cost: '$50' },
    { name: 'X-Ray', description: 'Imaging test to view inside the body.', cost: '$100' },
    // Add more tests as needed
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-4 text-center">Available Tests</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-green-400 to-green-600 text-white">
            <th className="py-2 px-4">Test Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Cost</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={index} className="hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <td className="py-2 px-4 border-b">{test.name}</td>
              <td className="py-2 px-4 border-b">{test.description}</td>
              <td className="py-2 px-4 border-b">{test.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestsPage;
