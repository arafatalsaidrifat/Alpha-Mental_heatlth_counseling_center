import React, { useState } from 'react';

// Sample data for counselors
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
  // Add more counselors...
];

const CounselorBooking = () => {
  const [bookedSessions, setBookedSessions] = useState({}); // Object to store booked sessions
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleBooking = async (doctor, time) => {
    const sessionKey = `${doctor.id}-${time}`;

    // If the session is already booked, don't allow booking
    if (bookedSessions[sessionKey]) {
      alert("This session is already booked!");
      return;
    }

    setLoading(true); // Set loading to true during booking

    try {
      // Simulate API call to book the session
      await simulateApiBooking(doctor.id, time);

      // Mark the session as booked
      setBookedSessions((prevSessions) => ({
        ...prevSessions,
        [sessionKey]: true, // Session is now booked
      }));

      setSelectedCounselor(doctor);
      setSelectedTime(time);
      alert(`You have successfully booked ${doctor.name} for ${time}`);
    } catch (error) {
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  const handleCancelBooking = async (doctor, time) => {
    const sessionKey = `${doctor.id}-${time}`;

    setLoading(true); // Set loading to true during canceling

    try {
      // Simulate API call to cancel the booking
      await simulateApiCancelBooking(doctor.id, time);

      // Remove the booking from the state
      setBookedSessions((prevSessions) => {
        const updatedSessions = { ...prevSessions };
        delete updatedSessions[sessionKey]; // Remove the booking
        return updatedSessions;
      });

      setSelectedCounselor(null);
      setSelectedTime('');
      alert(`Your booking for ${doctor.name} at ${time} has been canceled.`);
    } catch (error) {
      alert("Cancelation failed. Please try again.");
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  // Simulate an API call to book the session
  const simulateApiBooking = (doctorId, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a success response from the server
        resolve(`Booked session for doctor ${doctorId} at ${time}`);
      }, 1000);
    });
  };

  // Simulate an API call to cancel the booking
  const simulateApiCancelBooking = (doctorId, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a success response from the server
        resolve(`Cancelled session for doctor ${doctorId} at ${time}`);
      }, 1000);
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Available bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counselor.map((doctor) => (
          <div
            key={doctor.id}
            className={`p-4 border rounded-lg shadow-lg mb-6 transition-transform transform ${
              selectedCounselor?.id === doctor.id ? 'bg-blue-100 scale-105' : 'bg-white'
            }`}
          >
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-gray-600">Specialization: {doctor.specialization}</p>
            <p className="text-gray-600">Experience: {doctor.experienceYears} years</p>
            <p className="text-yellow-500">Rating: {doctor.rating} ★</p>
            <h3 className="mt-4 font-bold">Services:</h3>
            <p>{doctor.services}</p>
            <h3 className="mt-4 font-bold">Available Times:</h3>
            <ul className="list-disc ml-5">
              {doctor.availableTimes.map((time, index) => {
                const sessionKey = `${doctor.id}-${time}`;
                const isBooked = bookedSessions[sessionKey];

                return (
                  <li key={index} className="flex justify-between items-center">
                    <span>{time}</span>
                    <div className="flex space-x-2">
                      {isBooked ? (
                        <button
                          onClick={() => handleCancelBooking(doctor, time)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transform transition-transform duration-200 hover:scale-105"
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transform transition-transform duration-200 hover:scale-105"
                          onClick={() => handleBooking(doctor, time)}
                          disabled={loading} // Disable button while loading
                        >
                          {loading ? "Booking..." : "Book"}
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
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
