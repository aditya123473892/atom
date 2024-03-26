import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import icon from '../../assets/atom.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black flex justify-between px-8 sticky top-0 z-50 py-2 md:py-0">
      <div className="flex items-center">
        {/* Company icon */}
        <a href='/'>
        <img src={icon} alt="Company Icon" className="h-26 w-20 mr-9" />
      </a>
      </div>


      <div className="flex items-center font-medium justify-center flex-grow">
        <ul className="md:flex hidden uppercase text-white items-center gap-10 font-[Poppins]">
          <NavLinks />
        </ul>
      </div>

      <div className="flex items-center text-white space-x-4">
        {/* Login Button with Link */}
        <Link to="/login" className="button-link"> {/* Added Link component */}
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </Link>
        {/* Sign Up Button with Link */}
        <Link to="/signup" className="button-link"> {/* Added Link component */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </Link>
      </div>

      <div
        className="text-3xl md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>

      {/* Mobile nav */}
      <ul
        className={`
        md:hidden bg-black text-white fixed w-full top-12 overflow-y-auto bottom-0 py-8 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
      >
        <NavLinks />
        {/* <div className="py-5">
            <Button />
          </div> */}
      </ul>
    </nav>
  );
};

export default Navbar;
