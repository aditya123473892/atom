import React from "react";
// import SocialIcons from "./SocialIcons";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <ItemsContainer />
      <div className="flex justify-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Appy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
