import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import icon from "../../assets/atom.png";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { AuthContext } from "../ContextProvider/AuthContext";

const links = [
  { name: "About Us", to: "/aboutus" },
  { name: "Privacy Policy", to: "/privacypolicy" },
  { name: "Join Us", to: "/joinus" },
];

const itemVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

const sideVariants = {
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, staggerDirection: 1 } },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  // const { logindata, setLoginData } = useContext(AuthContext);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black flex justify-between items-center px-8 sticky top-0 z-50 py-2 md:py-3"
    >
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="text-3xl cursor-pointer md:text-2xl text-white"
        onClick={cycleOpen}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
      <div className="flex items-center justify-center flex-grow">
        <Link to="/">
          <img src={icon} alt="Company Icon" className="h-14 w-auto" />
        </Link>
      </div>
      <div className="flex items-center text-white space-x-4">
        
          <Link to="/profile" className="relative button-link">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black"
            >
              <FaUser className="text-xl" />
            </motion.div>
          </Link>
       

        <Link to="/cart" className="relative button-link">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
          >
            <FaShoppingCart className="text-xl" />
          </motion.div>
        </Link>
      </div>
      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sideVariants}
        className={`bg-black text-white fixed w-full top-16 md:top-[5rem] left-0 overflow-y-auto bottom-0 py-6 pl-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map(({ name, to }) => (
          <motion.li
            key={name}
            variants={itemVariants}
            className="my-3"
            onClick={cycleOpen}
            whileHover={{ x: 10 }}
          >
            <Link to={to} className="text-xl uppercase">
              {name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
