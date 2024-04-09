// FeaturedProducts.jsx
import React from 'react';
import feature1 from "../../assets/asset1.jpg";
import feature2 from "../../assets/asset2.jpg";
import feature3 from "../../assets/asset3.jpg";
import feature4 from "../../assets/asset3.jpg";

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:flex md:flex-col">
          {/* Show feature1 image */}
          <div className="relative mb-8">
            <div className="h-full">
              <img
                src={feature1}
                alt="Seamless"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="px-6 py-2 text-white text-lg font-semibold bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-full border-2 border-white hover:bg-opacity-30 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
          {/* Show feature2 image */}
          <div className="relative mb-8">
            <div className="h-full">
              <img
                src={feature2}
                alt="French Terry Imprints"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="px-6 py-2 text-white text-lg font-semibold bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-full border-2 border-white hover:bg-opacity-30 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Show feature3 image */}
        <div className="relative">
          <img
            src={feature3}
            alt="Featured Product"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="px-6 py-2 text-white text-lg font-semibold bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-full border-2 border-white hover:bg-opacity-30 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
