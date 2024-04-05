import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Collections from "./FeaturedCollection/Collections";
import Categories from "./CategoriesSection/Categories";
import Testimonials from "./TestimonialsSection/Testimonials";

export const Home = () => {
  return (
    <>
      <Collections />
      <Categories />
    </>
  );
};
