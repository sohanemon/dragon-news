import React from "react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {[...Array(3).keys()].map((el) => (
          <SwiperSlide key={el}>
            <img
              className='rounded-md'
              src='https://placeimg.com/640/480/tech'
              alt='ok'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
