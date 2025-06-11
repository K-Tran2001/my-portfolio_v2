import React, { useEffect, useRef } from "react";
import "./styles.css";
import { A11y, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/autosliderimages/slider2_1.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit...`,
  },
  {
    image: "/autosliderimages/slider2_2.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit...`,
  },
  {
    image: "/autosliderimages/slider2_3.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit...`,
  },
  {
    image: "/autosliderimages/slider2_4.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit...`,
  },
];

export default function SliderProject_Card() {
  const swiperRef = useRef(null);

  useEffect(() => {}, [swiperRef]);
  const SwiperButton = ({ isNext }) => {
    return (
      <button
        className={`${
          isNext ? "rounded-r-full" : "rounded-l-full"
        } px-8 py-2 bg-black text-white`}
        onClick={() => {
          const swiper = swiperRef.current;
          if (!swiper) return;

          isNext ? swiper.slideNext() : swiper.slidePrev();
        }}
      >
        {isNext ? "Next" : "Prev"}
      </button>
    );
  };

  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="fade"
        modules={[EffectFade, A11y, Navigation]}
        direction="horizontal"
        spaceBetween={30}
        slidesPerView={1}
        //loop={true}
      >
        {/* Các SwiperSlide giữ nguyên */}
        <SwiperSlide>
          <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
            <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-6 py-8 gap-8 overflow-visible ">
              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20 z-10 mx-auto lg:mx-0 ">
                <img
                  src="autosliderimages/slider2_1.png"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-[20px] opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left">
                <span className="text-gray-500 font-medium block mb-2">
                  26 December 2019
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  View Detail
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
            <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-6 py-8 gap-8 overflow-visible ">
              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20 z-10 mx-auto lg:mx-0 ">
                <img
                  src="autosliderimages/slider2_2.png"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-[20px] opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left">
                <span className="text-gray-500 font-medium block mb-2">
                  26 December 2019
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  View Detail
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
            <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-6 py-8 gap-8 overflow-visible ">
              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20 z-10 mx-auto lg:mx-0 ">
                <img
                  src="autosliderimages/slider2_3.png"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-[20px] opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left">
                <span className="text-gray-500 font-medium block mb-2">
                  26 December 2019
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  View Detail
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
            <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-6 py-8 gap-8 overflow-visible ">
              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20 z-10 mx-auto lg:mx-0 ">
                <img
                  src="autosliderimages/slider2_4.png"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-[20px] opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left">
                <span className="text-gray-500 font-medium block mb-2">
                  26 December 2019
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  View Detail
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
            <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-6 py-8 gap-8 overflow-visible ">
              {/* Image */}
              <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20 z-10 mx-auto lg:mx-0 ">
                <img
                  src="autosliderimages/slider2_5.png"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-[20px] opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left">
                <span className="text-gray-500 font-medium block mb-2">
                  26 December 2019
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  View Detail
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-full shadow-md font-medium hover:scale-105 transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="  w-full flex justify-center gap-4 mb-8">
        <SwiperButton isNext={false} />
        <SwiperButton isNext={true} />
      </div>
    </div>
  );
}
