// src/HealthRecord.jsx
import React, { useState } from 'react';

function HealthRecord() {
  const [healthInfo, setHealthInfo] = useState({
    bloodPressure: '',
    allergies: '',
    medications: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthInfo({ ...healthInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of health records
    console.log('Health Record Submitted:', healthInfo);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Update Your Health Record</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Blood Pressure:</label>
          <input
            type="text"
            name="bloodPressure"
            value={healthInfo.bloodPressure}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Allergies:</label>
          <input
            type="text"
            name="allergies"
            value={healthInfo.allergies}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Medications:</label>
          <input
            type="text"
            name="medications"
            value={healthInfo.medications}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Notes:</label>
          <textarea
            name="notes"
            value={healthInfo.notes}
            onChange={handleChange}
            className="border p-2 w-full"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Health Record
        </button>
      </form>
    </div>
  );
}

export default HealthRecord;
