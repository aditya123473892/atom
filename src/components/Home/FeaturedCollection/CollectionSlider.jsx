import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { collectionData } from "../../constants/HomeCollectionData";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";

const CollectionSlider = () => {
  return (
    <div className="flex py-4 relative">
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
            <div className="flex w-full h-96 gap-8 mb-20 justify-center shadow-lg text-white rounded overflow-hidden cursor-pointer group relative">
              <img
                className="h-full w-full ease-in-out duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                <button className="px-6 py-2 text-white text-lg font-semibold bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionSlider;
