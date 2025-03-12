import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Error !!!</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! Something went wrong. Please try again later.</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;