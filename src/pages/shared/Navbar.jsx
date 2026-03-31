import React from "react";
import { NavLink } from "react-router";
import LogoHolder from "../shared/LogoHolder";
import { FiArrowUpRight } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const navItems = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/sendParcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/berider">Be a Rider</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  //Logout handler
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="pt-6">
      <div className="navbar max-w-7xl bg-white mx-auto rounded-xl mb-10 px-6 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <LogoHolder></LogoHolder>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-gray-600">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-brand rounded-xl mr-2">Be a rider</a>
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn mr-4 rounded-xl">
                Sign Out
              </button>{" "}
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </>
          ) : (
            <>
              <a href="/login" className="btn mr-4 rounded-xl">
                Sign in
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
