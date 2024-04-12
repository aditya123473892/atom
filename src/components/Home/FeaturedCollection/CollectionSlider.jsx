import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { collectionData } from "../../constants/HomeCollectionData";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const CollectionSlider = () => {
  return (
    <div className="flex flex-col relative">
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="max-w-[90%] lg:max-w-[90%]"
      >
        {collectionData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex aspect-[3/4] gap-8 mb-20 justify-center  text-white overflow-hidden cursor-pointer group relative">
              <img
                className="h-full w-full ease-in-out duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.title}
              />

              <div className="absolute h-full w-full flex items-start justify-end">
                <div className="h-14 w-14 bg-white text-black m-2 rounded-full flex justify-center items-center rotate-[-45deg] hover:rotate-0 transition duratuion-75">
                  <FaArrowRight className="text-2xl" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-75 bg-black bg-opacity-20">
                <button className="px-6 py-2 text-white text-lg font-semibold bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition duration-75">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="realtive h-36 w-full bg-black flex items-center justify-center">
        <div className="font-heading text-white text-4xl flex">
          Follow us on
          <a href="https://www.google.com/" className="block h-12 w-12 bg-white flex items-center justify-center rounded-full transition duration-75 mx-8">
            <FaInstagram className="text-3xl text-black" />
          </a>
          <a href="https://www.google.com/" className="block h-12 w-12 bg-white flex items-center justify-center rounded-full transition duration-75">
            <FaLinkedinIn className="text-3xl text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
