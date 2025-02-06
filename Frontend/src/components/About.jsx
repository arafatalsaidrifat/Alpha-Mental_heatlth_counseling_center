import React from "react";
import farjanaImg from "../assets/farjana.jpg";
import mudassirImg from "../assets/mudassir.jpg";

const teamMembers = [
  {
    name: "Farjana Amran",
    dept: "CSE",
    img: farjanaImg,
  },
  {
    name: "Mudassir",
    dept: "CSE",
    img: mudassirImg,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
            <p className="text-gray-600">Dept: {member.dept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
