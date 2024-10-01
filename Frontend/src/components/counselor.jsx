import React, { useState } from 'react';

// Updated sample data for counselors with names from your table
const counselor = [
  {
    id: 1,
    name: "Dr. Farhana Islam",
    specialization: "Psychiatrist",
    experienceYears: 8,
    services: "Individual Therapy, Group Counseling",
    availableTimes: ["9:00 AM", "10:30 AM", "1:00 PM"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dr. Tahsin Rahman",
    specialization: "Psychologist",
    experienceYears: 5,
    services: "Cognitive Behavioral Therapy",
    availableTimes: ["11:00 AM", "2:00 PM", "3:30 PM"],
    rating: 4.6,
  },
  {
    id: 3,
    name: "Ms. Nazia Ahmed",
    specialization: "Counselor",
    experienceYears: 6,
    services: "Family Therapy, Online Counseling",
    availableTimes: ["9:30 AM", "12:00 PM", "4:00 PM"],
    rating: 4.9,
  },
  {
    id: 4,
    name: "Dr. Imran Hossain",
    specialization: "Psychiatrist",
    experienceYears: 10,
    services: "Cognitive Behavioral Therapy, Individual Therapy",
    availableTimes: ["10:00 AM", "1:30 PM", "3:00 PM"],
    rating: 4.5,
  },
  {
    id: 5,
    name: "Dr. Sabrina Chowdhury",
    specialization: "Psychologist",
    experienceYears: 7,
    services: "Psychotherapy, Couples Therapy",
    availableTimes: ["9:00 AM", "11:30 AM", "2:00 PM"],
    rating: 4.7,
  },
  {
    id: 6,
    name: "Mr. Rafiq Hasan",
    specialization: "Counselor",
    experienceYears: 4,
    services: "Mindfulness-Based Therapy",
    availableTimes: ["10:30 AM", "1:00 PM", "4:30 PM"],
    rating: 4.4,
  },
  {
    id: 7,
    name: "Dr. Sadia Sultana",
    specialization: "Psychiatrist",
    experienceYears: 9,
    services: "Trauma-Informed Care, Grief Counseling",
    availableTimes: ["11:00 AM", "2:30 PM", "3:30 PM"],
    rating: 4.8,
  },
  {
    id: 8,
    name: "Ms. Tania Rahim",
    specialization: "Psychologist",
    experienceYears: 5,
    services: "Stress Management, Online Counseling",
    availableTimes: ["9:00 AM", "12:30 PM", "5:00 PM"],
    rating: 4.6,
  },
  {
    id: 9,
    name: "Dr. Mahbub Alam",
    specialization: "Counselor",
    experienceYears: 6,
    services: "Addiction Counseling, Family Therapy",
    availableTimes: ["10:00 AM", "2:00 PM", "4:00 PM"],
    rating: 4.5,
  },
  {
    id: 10,
    name: "Ms. Nusrat Jahan",
    specialization: "Psychologist",
    experienceYears: 3,
    services: "Supportive Counseling, Cognitive Behavioral Therapy",
    availableTimes: ["9:30 AM", "11:00 AM", "3:00 PM"],
    rating: 4.9,
  },
];

const CounselorBooking = () => {
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [hoveredCounselor, setHoveredCounselor] = useState(null);

  const handleBooking = (doctor, time) => {
    setSelectedCounselor(doctor);
    setSelectedTime(time);
    alert(`You have booked ${doctor.name} for ${time}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Available Counselors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counselor.map((doctor) => (
          <div
            key={doctor.id}
            className={`p-4 border rounded-lg shadow-lg mb-6 transition-transform transform ${
              hoveredCounselor === doctor.id ? 'bg-blue-100 scale-105' : 'bg-white'
            }`}
            onMouseEnter={() => setHoveredCounselor(doctor.id)}
            onMouseLeave={() => setHoveredCounselor(null)}
          >
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-gray-600">Specialization: {doctor.specialization}</p>
            <p className="text-gray-600">Experience: {doctor.experienceYears} years</p>
            <p className="text-yellow-500">Rating: {doctor.rating} ★</p>
            <h3 className="mt-4 font-bold">Services:</h3>
            <p>{doctor.services}</p>
            <h3 className="mt-4 font-bold">Available Times:</h3>
            <ul className="list-disc ml-5">
              {doctor.availableTimes.map((time, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{time}</span>
                  <button
                    className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transform transition-transform duration-200 hover:scale-105"
                    onClick={() => handleBooking(doctor, time)}
                  >
                    Book
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedCounselor && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Booking Details</h2>
          <p>Counselor: {selectedCounselor.name}</p>
          <p>Time: {selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default CounselorBooking;
