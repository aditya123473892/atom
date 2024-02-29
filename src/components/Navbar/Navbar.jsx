import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black flex justify-between px-8 sticky top-0 z-50 py-2 md:py-0">
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
      <div
        className="text-3xl md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <ion-icon name={`${open ? "menu" : "menu"}`}></ion-icon>
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
