import React from "react";
// import SocialIcons from "./SocialIcons";
import ItemsContainer from "./ItemsContainer";
import feature1 from "../../assets/footerfeature1.svg";
import feature2 from "../../assets/footerfeature2.svg";
import feature3 from "../../assets/footerfeature3.svg";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="h-96 w-full bg-black flex items-center justify-center">
        <div className="h-96 w-full flex justify-center py-8 flex-col">
          <img src={feature1} className="w-full h-32" />
          <h2 className="h-full w-full flex items-center justify-center font-base text-3xl">
            Shipping within 48 hours
          </h2>
          <p className="px-8 text-center font-base">
            Your order will be shipped within 48 hours from the
            time since order id placed
          </p>
        </div>
        <div className="h-96 w-full flex justify-center py-8 flex-col">
          <img src={feature2} className="w-full h-32" />
          <h2 className="h-full w-full flex items-center justify-center font-base text-3xl">
            Free Delivery
          </h2>
          <p className="px-8 text-center font-base">
            Free delivery on COD on orders above
            ₹ 1499
          </p>
        </div>
        <div className="h-96 w-full flex justify-center py-8 flex-col">
          <img src={feature3} className="w-full h-32" />
          <h2 className="h-full w-full flex items-center justify-center font-base text-3xl">
            Shipping within 48 hours
          </h2>
          <p className="px-8 text-center font-base">
            Your order will be shipped within 48 hours from the
            time since order id placed
          </p>
        </div>
      </div>
      <ItemsContainer />
      <div className="flex justify-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Appy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
