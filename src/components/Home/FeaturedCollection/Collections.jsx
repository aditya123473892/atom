import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/home3.jpg';

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative text-white text-center">
        <motion.h1
          className="text-6xl font-bold mb-6 drop-shadow-lg"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          Lets Atomize fasion
        </motion.h1>
        <motion.p
          className="text-xl mb-12 max-w-lg mx-auto drop-shadow-md"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Discover the craziest collection of unique and mind-bending products that will leave you in awe!
        </motion.p>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link to="/products">
            <motion.button
              className="bg-white text-black py-4 px-8 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;