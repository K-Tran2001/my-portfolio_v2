import React from "react";
import "./style.css";

const AutoSlider = () => {
  return (
    <div>
      <div
        className="slider"
        style={{
          "--width": "100px",
          "--height": "50px",
          "--quantity": 10,
        }}
      >
        <div className="list">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="item" style={{ "--position": i + 1 }} key={i}>
              <img src={`autosliderimages/slider1_${i + 1}.png`} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="slider"
        reverse="true"
        style={{
          "--width": "200px",
          "--height": "200px",
          "--quantity": 9,
        }}
      >
        <div className="list">
          {Array.from({ length: 9 }, (_, i) => (
            <div className="item" style={{ "--position": i + 1 }} key={i}>
              <img src={`autosliderimages/slider2_${i + 1}.png`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
