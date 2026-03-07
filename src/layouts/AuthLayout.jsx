import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import LogoHolder from "../pages/shared/LogoHolder";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left */}
        <div className="flex-1 flex flex-col">

          <div className="p-8 lg:p-12">
            <LogoHolder />
          </div>

          <div className="flex-1 flex justify-center items-center px-6">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="flex-1 bg-green-50 flex justify-center items-center p-10">
          <img src={authImage} className="max-w-md w-full" alt="auth" />
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;