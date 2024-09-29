import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Images
import carouselImg1 from "@/assets/homeCarousel/carousel-1.png";
import carouselImg2 from "@/assets/homeCarousel/carousel-2.jpg";
import carouselImg3 from "@/assets/homeCarousel/carousel-3.jpg";

function HomeCarousel() {
  return (
    <div className="wrapper">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselImg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselImg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselImg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
