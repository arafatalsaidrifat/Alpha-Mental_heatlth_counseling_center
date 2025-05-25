import React from "react";
import arafatImg from "../assets/arafat.jpg";

const teamMembers = [
  {
    name: "Arfata Al Said Rifat",
    Institution: "Northsouth University",
    role: "Full Stack Developer",
    email: "rifathxoyo@gmail.com",
    github: "https://github.com/arafatalsaidrifat",
    dept: "ECE major in CSE",
    img: arafatImg,
  },
];

// Pastel colors with transparency for subtle effect
const colors = [
  "bg-pink-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-teal-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-pink-100",
];

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-5 overflow-hidden">
      {/* Background: 7 narrow pastel vertical columns with gaps */}
      <div className="absolute inset-0 flex justify-center space-x-4 px-10">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className={`${color} rounded-xl`}
            style={{ flex: "1 1 0", maxWidth: "8%", minWidth: "8%", height: "100%" }}
          />
        ))}
      </div>

      {/* Content: team member cards */}
      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-700">Dept: {member.dept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
