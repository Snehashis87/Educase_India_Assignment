import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agency, setAgency] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    return regex.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      name &&
      phone &&
      isValidEmail(email) &&
      password &&
      companyName &&
      agency
    ) {
      navigate("/profile");
    }
  };

  const isFormValid =
    name && phone && isValidEmail(email) && password && companyName && agency;

  return (
    <div className="lg:h-screen sm:h-screen h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col justify-center lg:h-full sm:h-full h-full max-w-md mx-auto w-full bg-white px-6 pb-6 sm:rounded-lg shadow">
        {/* Top Heading */}

        {/* Inputs Section */}
        <div className="flex-1 flex flex-col justify-start pt-10 gap-5">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-900 pb-10 ">
            Create your <br /> PopX account
          </h1>
          {/* Full Name */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Phone Number
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@email.com"
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
              required
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Company Name */}
          <div className="relative w-full">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Agency Radio Buttons */}
          <div className="w-full">
            <p className="text-sm font-medium text-purple-600 mb-2 ">
              Are you an Agency?
            </p>
            <div className="flex space-x-6 mb-10">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={(e) => setAgency(e.target.value)}
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === "no"}
                  onChange={(e) => setAgency(e.target.value)}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-20">
          <button
            type="submit"
            onClick={handleSignup}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-md font-semibold transition  ${
              isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
