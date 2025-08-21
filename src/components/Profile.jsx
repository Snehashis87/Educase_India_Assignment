import React from "react";
import Img from "../assets/Ellipse 114.png";
import camera from "../assets/Group 1585.svg";
const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-gray-100 rounded-lg shadow h-screen py-6">
        <h1 className="text-3xl pl-6 font-semibold mb-8 bg-wh">
          Account Settings
        </h1>
        <div className="flex items-start mb-3 border-t p-4 bg-gray-100">
          <div className="relative mr-4">
            <img
              src={Img}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full shadow h-auto w-auto">
              <img src={camera} alt="Change profile" className="w-6 h-6 " />
            </button>
          </div>

          <div className="">
            <div className="font-semibold text-gray-800">Marry Doe</div>
            <div className="text-lg text-gray-500">Marry@gmail.com</div>
          </div>
        </div>
        <p className="text-md text-gray-600  px-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
