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

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
  <h1 className="text-3xl font-bold mb-5">About Us</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="bg-white p-5 rounded-lg shadow-lg flex items-center space-x-6"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-gray-600">Dept: {member.dept}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};
