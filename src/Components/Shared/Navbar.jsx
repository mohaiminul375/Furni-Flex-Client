import { useContext } from "react";
import logo from "../../../src/assets/icon.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navItems = (
    <>
      <NavLink to='/' className={({isActive})=>(
        isActive? 'text-base bg-[#F8F8F8] p-1 rounded-md':'text-base'
      )}>Home</NavLink>
      <NavLink className={({isActive})=>(
        isActive? 'text-base bg-[#F8F8F8] p-1 rounded-md':'text-base'
      )} to='/products'>Products</NavLink>
      <NavLink to='/category' className={({isActive})=>(
        isActive? 'text-base bg-[#F8F8F8] p-1 rounded-md':'text-base'
      )}>Category</NavLink>
      <NavLink to='/custom' className={({isActive})=>(
        isActive? 'text-base bg-[#F8F8F8] p-1 rounded-md':'text-base'
      )}>Custom</NavLink>
      <NavLink to='/blog' className={({isActive})=>(
        isActive? 'text-base bg-[#F8F8F8] p-1 rounded-md':'text-base'
      )}>Blog</NavLink>
      
    </>
  );
  return (
    <nav className="navbar bg-base-100 md:px-10 border-b border-[#F1F1F1] h-9">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <IoMdMenu className="text-xl" />
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
          <img src={logo} alt="logo" className="w-7"/>
          <h1 className="md:text-2xl font-bold">
            Furni<span className="text-[#1E99F5]">Flex</span>
          </h1>
        </div>
      </div>
      {/* middle */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 items-center">{navItems}</ul>
      </div>
      <div className="navbar-end">
       <NavLink to='/cart'>
        <FaCartPlus className="text-xl md:text-3xl font-bold text-[#323232]" />
        </NavLink> 
        <div className="ml-5">
          {user ? (
            <div className="flex gap-2">
              <p className="hidden md:flex">{user?.email}</p>
              <button
                onClick={logOut}
                className="ml-3 rounded-full py-1 px-3 border border-[#1E99F5] bg-[#1E99F5] text-white"
              >
                Logout
              </button>
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
