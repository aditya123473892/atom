import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import NavLinks from "./NavLinks";
import icon from '../../assets/atom.png';
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black flex justify-between px-8 sticky top-0 z-50 py-2 md:py-0"
    >
      <div className="flex items-center">
        <Link to='/'>
          <img src={icon} alt="Company Icon" className="h-10 w-auto mr-9" />
        </Link>
      </div>
      <div className="flex items-center font-medium justify-center flex-grow">
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:flex hidden uppercase text-white items-center gap-10 font-[Poppins]"
        >
          <NavLinks />
        </motion.ul>
      </div>
      <div className="hidden md:flex items-center text-white space-x-4">
        <Link to="/profile" className="relative button-link">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
          >
            <FaUser className="text-xl" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
          >
            Profile
          </motion.span>
        </Link>
        <Link to="/cart" className="relative button-link">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
          >
            <FaShoppingCart className="text-xl" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
          >
            Cart
          </motion.span>
        </Link>
      </div>
      <div className="text-3xl md:hidden text-white" onClick={() => setOpen(!open)}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </motion.div>
      </div>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black text-white fixed w-full top-20 left-0 overflow-y-auto bottom-0 py-8 pl-4"
        >
          <NavLinks />
          <div className="mt-4">
            <Link to="/login" className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              <FaUser className="mr-2" />
              Profile
            </Link>
            <Link to="/cart" className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;