import React from "react";
import { Link } from "react-router-dom";
import Collections from "./FeaturedCollection/Collections";
import Categories from "./CategoriesSection/Categories";
import Testimonials from "./TestimonialsSection/Testimonials";
import FeaturedProducts from "./FeaturedProducts";
import Offer from "./Offer";
import bgimage from "../../assets/home3.jpg"; // Import your background image

export const Home = () => {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            Let's Atomize Fashion
          </h1>
          <Link to="/explore">
            <button className="px-8 py-3 text-black text-lg font-semibold bg-white rounded-full hover:bg-gray-200 transition duration-300 animate-slide-up">
              EXPLORE
            </button>
          </Link>
        </div>
      </section>
      <FeaturedProducts />
      <Collections />
      <Offer />
      <Collections />
      <Categories />
    </>
  );
};