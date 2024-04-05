import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import product1 from '../../../assets/croptop.jpg';
import product2 from '../../../assets/croptop.jpg';
import product3 from '../../../assets/croptop.jpg';
import product4 from '../../../assets/croptop.jpg';

const Home = () => {
  const products = [
    { id: 1, name: 'Crazy Gizmo', image: product1, category: 'Electronics' },
    { id: 2, name: 'Funky Gadget', image: product2, category: 'Accessories' },
    { id: 3, name: 'Bizarre Toy', image: product3, category: 'Toys' },
    { id: 4, name: 'Wacky Decor', image: product4, category: 'Home Decor' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Products</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;