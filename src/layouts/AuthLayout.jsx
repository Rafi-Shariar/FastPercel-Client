import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import LogoHolder from "../pages/shared/LogoHolder";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">

      <div className="flex">

        <div className="flex-1">
           
           <div className="p-12">
             <LogoHolder />
           </div>
           
           <div className="max-w-3xl mx-auto">
              <Outlet />
           </div>
        </div>

        <div className="bg-green-50 flex-1 min-h-screen flex justify-center items-center">
          <img src={authImage} className="" />
        </div>
        
      </div>
    </div>
  );
};

export default AuthLayout;
