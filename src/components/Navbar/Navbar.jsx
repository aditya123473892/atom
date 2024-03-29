import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import icon from '../../assets/atom.png';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black flex justify-between px-8 sticky top-0 z-50 py-2 md:py-0">
      <div className="flex items-center">
        <Link to='/'>
          <img src={icon} alt="Company Icon" className="h-26 w-20 mr-9" />
        </Link>
      </div>
      <div className="flex items-center font-medium justify-center flex-grow">
        <ul className="md:flex hidden uppercase text-white items-center gap-10 font-[Poppins]">
          <NavLinks />
        </ul>
      </div>
      <div className="hidden md:flex items-center text-white space-x-4">
        <Link to="/login" className="button-link">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </Link>
        <Link to="/signup" className="button-link">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="text-3xl md:hidden text-white" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
      {open && (
        <ul className="md:hidden bg-black text-white fixed w-full top-20 left-0 overflow-y-auto bottom-0 py-8 pl-4">
          <NavLinks />
          <div className="mt-4">
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              Login
            </Link>
            <Link to="/signup" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              Sign Up
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;