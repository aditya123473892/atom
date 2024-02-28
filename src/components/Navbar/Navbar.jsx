import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black flex justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="font-medium text-white">
          ATOM CREATIONS
        </Link>
      </div>

      <div className="flex items-center font-medium justify-center flex-grow">
        <ul className="md:flex hidden uppercase text-white items-center gap-10 font-[Poppins]">
          <NavLinks />
        </ul>
      </div>

      {/* Mobile nav */}
      <ul
        className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
        <NavLinks />
        {/* <div className="py-5">
            <Button />
          </div> */}
      </ul>
    </nav>
  );
};

export default Navbar;
