import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full  object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full  object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full  object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
