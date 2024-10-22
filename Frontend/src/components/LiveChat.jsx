// src/LiveChat.jsx
import React, { useState } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user", name: "You" },
      ]);
      setInputValue("");

      // Simulate a bot response
      setTimeout(() => {
        const botResponses = [
          "Hello Asslamualaikum! How can I assist you today?",
          "Thank you for reaching out!",
          "I'm here to help you with any questions you have.",
          "Your mental health is important to us.",
        ];
        const randomResponse =
          botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomResponse, sender: "bot", name: "Support Bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gradient-to-br from-purple-500 to-blue-500">
      <h2 className="text-3xl font-bold text-white mb-4">Live Chat</h2>
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4 overflow-hidden">
        <div className="h-80 overflow-y-auto p-2">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`text-sm font-semibold ${msg.sender === "user" ? "text-blue-600" : "text-gray-700"}`}>
                {msg.name}
              </span>
              <div className={`mt-1 inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 ml-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
