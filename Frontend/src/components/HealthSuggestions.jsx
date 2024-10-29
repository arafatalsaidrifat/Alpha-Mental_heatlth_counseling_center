import React from 'react';

function HealthSuggestions() {
  return (
    <div className="mt-20 p-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Check Doctor and Health Suggestions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Doctor Recommendations */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Doctor Recommendations</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Get personalized doctor recommendations based on your symptoms and preferences.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-md">
            Find Doctors
          </button>
        </div>

        {/* Health Articles */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Health Articles</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Explore a collection of articles on mental health topics, coping strategies, and wellness tips.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md">
            Read Articles
          </button>
        </div>

        {/* Self-Assessment Tools */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Self-Assessment Tools</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Take interactive quizzes to evaluate your mental health and find the right resources.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md">
            Start Assessment
          </button>
        </div>

        {/* Telehealth Options */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Telehealth Options</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Schedule virtual consultations with available doctors for your convenience.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-md">
            Book Telehealth
          </button>
        </div>

        {/* Community Support */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Community Support</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Join support groups and forums to share experiences and seek advice.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-md">
            Join Community
          </button>
        </div>

        {/* Wellness Programs */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Wellness Programs</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Discover wellness programs focusing on mental health, mindfulness, and self-care.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-md">
            Explore Programs
          </button>
        </div>

        {/* Emergency Resources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Emergency Resources</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Quick access to crisis hotlines and mental health support.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-md">
            Get Help
          </button>
        </div>

        {/* Personalized Health Dashboard */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Personalized Health Dashboard</h2>
          <p className="text-gray-700 dark:text-gray-300">
            View insights based on your health data and previous interactions.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-md">
            Access Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthSuggestions;
