import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns z-50 bg-red-500">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev -1{" "}
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next -2
      </button>
    </div>
  );
};
