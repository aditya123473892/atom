import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Offer1 from "../../assets/offers.jpg"
import Offer2 from "../../assets/offers2.jpg"

const OfferCarousel = () => {
  const offerImages = [
    Offer1,
    Offer2
  ];

  return (
    <div className="aspect-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {offerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={image}
                alt={`Offer ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCarousel;