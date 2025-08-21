import React from "react";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className="min-h-screen lg:h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* White Card */}
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-md 
                   p-6 flex flex-col justify-between 
                   h-screen sm:h-auto lg:h-screen"
      >
        {/* Bottom Content */}
        <div className="mt-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link to="/signup">
              <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition cursor-pointer">
                Create Account
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full py-3 bg-purple-200 text-black font-semibold rounded-md hover:bg-purple-300 transition cursor-pointer">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
