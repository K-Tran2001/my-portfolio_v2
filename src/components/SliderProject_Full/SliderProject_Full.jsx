import React, { useEffect, useRef } from "react";
import "./styles.css";
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

export default function SliderProject_Full() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const timeRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const timeoutRef = useRef(null);
  const autoNextRef = useRef(null);

  useEffect(() => {
    // Start auto slide
    // autoNextRef.current = setTimeout(() => {
    //   handleSlide("next");
    // }, timeAutoNext);

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(autoNextRef.current);
    };
  }, []);

  const handleSlide = (direction) => {
    const listNode = listRef.current;
    const items = listNode.querySelectorAll(".item");

    if (direction === "next") {
      listNode.appendChild(items[0]);
      carouselRef.current.classList.add("next");
    } else {
      listNode.prepend(items[items.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    // autoNextRef.current = setTimeout(() => {
    //   handleSlide("next");
    // }, timeAutoNext);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img className="" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="content">
              <div className="author">{"Web App"}</div>
              <div className="topic">{"Winlab"}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={() => handleSlide("prev")}>prev</button>
        <button onClick={() => handleSlide("next")}>next</button>
      </div>

      <div className="time" ref={timeRef}></div>
    </div>
  );
}
