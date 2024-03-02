import React from "react";
// import SocialIcons from "./SocialIcons";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2024 Appy. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

