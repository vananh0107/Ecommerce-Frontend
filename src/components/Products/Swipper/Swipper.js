import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './swipperStyle.css';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function SwiperWrap(props) {
  const children = props.children;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={
          props?.next
            ? {
                nextEl: props?.next,
                prevEl: props?.prev,
              }
            : false
        }
        autoplay={props.delay ? { delay: props.delay } : false}
        pagination={
          props.pagination
            ? {
                clickable: true,
              }
            : false
        }
        slidesPerView={props.slidesPerView || 4}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
