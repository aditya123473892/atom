import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Feature from "../../assets/asset1.jpg"

const OfferCarousel = () => {
  const offerImages = [
    'https://static.vecteezy.com/system/resources/previews/000/178/364/original/super-sale-offer-and-discount-banner-template-for-marketing-and-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/002/822/446/large_2x/sale-banner-template-design-big-sale-special-offer-promotion-discount-banner-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/000/177/098/original/vector-mega-sale-offer-and-discount-banner-design-in-bright-yellow-colo.jpg',
    // Add more offer images as needed
  ];

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
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