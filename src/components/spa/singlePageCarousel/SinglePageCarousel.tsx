import React, { FC, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface SinglePagePropTypes {
  images: string[] | undefined;
}

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SinglePageCarousel: FC<SinglePagePropTypes> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((img, idx) => (
          <SwiperSlide key={idx} id="top-images-carousel">
            <Zoom>
              <img
                src={img}
                className="w-full h-[24rem!important] object-cover"
              />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        id="secondSwiper"
      >
        {images?.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="min-h-[auto!important] cursor-pointer"
          >
            <img src={img} className="object-contain h-[6.2rem!important]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SinglePageCarousel;
