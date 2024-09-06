import React, { useContext } from "react";
import logo from "../../../src/assets/icon.png";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navItems = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Products</NavLink>
      <NavLink>Category</NavLink>
      <NavLink>Custom</NavLink>
      <NavLink>Blog</NavLink>
      <p>{user.email}</p>
    </>
  );
  return (
    <nav className="navbar bg-base-100 px-10 border-b border-[#F1F1F1] h-9">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <h1 className="text-2xl font-bold">
            Furni<span className="text-[#1E99F5]">Flex</span>
          </h1>
        </div>
      </div>
      {/* middle */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <IoCartOutline className="text-3xl font-bold text-[#323232]" />
        <div className="ml-5">
          {user ? (
            <div className="flex gap-2">
              <p>{user.email}</p>
              <button className="ml-3 rounded-full py-1 px-3 border border-[#1E99F5] bg-[#1E99F5] text-white">Logout</button>
            </div>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink
                to="/signUp"
                className="ml-3 rounded-full p-2 border border-[#1E99F5] bg-[#1E99F5] text-white"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
