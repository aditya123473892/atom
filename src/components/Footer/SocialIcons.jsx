import React from "react";
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-black text-center sm:text-justify lg:text-justify">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:hover:text-amber-700
        duration-300  "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;