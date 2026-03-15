import React from "react";
import { Link, Outlet } from "react-router";
import LogoHolder from "../pages/shared/LogoHolder";

const DashboardLayout = () => {

  const links = <>
  
   <li>
            <Link to="/dashboard" className="hover:bg-white/10">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-parcel" className="hover:bg-white/10">
              Add Parcel
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myparcels" className="hover:bg-white/10">
              My Parcels
            </Link>
          </li>

           <div className="divider divider-neutral"></div>
          
          {/* Standard Navigation */}
          <li>
            <Link to="/" className="hover:bg-white/10">
              Home
            </Link>
          </li>
  
  </>
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle Input */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col bg-slate-50 min-h-screen">
        
        {/* Mobile Navbar - Only visible on small screens */}
        <div className="navbar bg-white border-b lg:hidden w-full">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 font-bold text-xl text-[#003d32]">
            <LogoHolder></LogoHolder>
          </div>
        </div>

        {/* Page Content Starts Here */}
        <div className="p-4 lg:p-10">
          <Outlet /> {/* আপনার সব ড্যাশবোর্ড পেজ এখানে লোড হবে */}
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="drawer-side z-50">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        
        <ul className="menu bg-[#003d32] text-white min-h-full w-80 p-6 space-y-2">
          {/* Dashboard Sidebar Header */}
          <div className="mb-10 text-2xl font-bold px-4">
            Parcel Pro
          </div>

          {
            links
          }
          
         
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;