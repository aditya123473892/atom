import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { collectionData } from "../../constants/HomeCollectionData";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";

const CollectionSlider = () => {
  // const [modal, setModal] = useState(false);
  // const [modalData, setModalData] = useState({
  //   title: "",
  //   image: "",
  //   description: "",
  //   price: "",
  // });
  // const toggleModal = (item) => {
  //   setModal(true);
  //   setModalData({
  //     title: item.title,
  //     image: item.image,
  //     description: item.description,
  //     price: item.price,
  //   });
  // };
  return (
    <div className="flex py-4 relative">
      {/* {modal && (
        <div onClick={()=>setModal(!modal)} className="flex w-72 sm:w-96 gap-4 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-black p-2 sm:p-3 z-50  left-50 rounded">
          <div className="w-44 h-44">
            <img
              className="h-full w-full"
              src={modalData.image}
              alt=""
            />
          </div>
          <div className="flex gap-2  flex-col" >
            <h3 className="text-2xl font-medium text-white">{modalData.title}</h3>
            <p className="font-normal text-lg text-white">{modalData.description}</p>
            <p className="font-medium text-lg text-amber-700">Rs. {modalData.price}</p>
          </div>
        </div>
      )} */}
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
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[90%]"
      >
        {collectionData.map((item) => (
          <SwiperSlide onClick={(e) => toggleModal(item)} key={item.title}>
            <div className="flex w-full h-96 gap-8 mb-20 justify-center shadow-lg text-white rounded overflow-hidden cursor-pointer group relative ">
              <img
                className="h-full w-full ease-in-out duration-500 group-hover:scale-110"
                src={item.image}
                alt=""
              />

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
