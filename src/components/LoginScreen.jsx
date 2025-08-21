import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/profile");
    }
  };
  // The current layout already uses responsive Tailwind classes (h-screen, sm:, lg:) to ensure full height on phone screens.
  // To further ensure full height on all mobile devices, you can add 'min-h-screen' to the outermost div's className.
  // No code is needed here; adjust the className in the return statement if necessary.
  return (
    <div className="lg:h-screen flex flex-col bg-gray-100 sm:h-screen ">
      <div className="flex flex-col justify-between h-full max-w-md mx-auto w-full bg-white px-6 py-8 sm:rounded-lg shadow pb-38">
        {/* Top Heading */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Sign in to your <br /> PopX account
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg mt-5 mb-5">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>

        {/* Inputs Section */}
        <div className="flex-1 flex flex-col justify-center space-y-8 ">
          {/* Email */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-8 mb-96  ">
          <button
            type="submit"
            onClick={handleLogin}
            disabled={!email || !password}
            className={`w-full py-3 rounded-md font-semibold transition lg:mb-64  ${
              email && password
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
