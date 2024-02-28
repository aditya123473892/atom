import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { collectionData } from "../../constants/HomeCollectionData";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {Mousewheel, FreeMode, Pagination } from "swiper/modules";

const CollectionSlider = () => {
  return (
    <div className="flex py-4">
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
        pagination={{
          clickable: true,
        }}
       
        modules={[FreeMode, Mousewheel,Pagination]}
        className="max-w-[90%] lg:max-w-[90%]"
      >
        {collectionData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex w-full h-96 gap-8 mb-20 justify-center shadow-lg text-white rounded overflow-hidden cursor-pointer group relative ">
              
              <img className="h-full w-full ease-in-out duration-500 group-hover:scale-110" src={item.url} alt="" />

              {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionSlider;
