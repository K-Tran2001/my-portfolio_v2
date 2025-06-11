import React, { useEffect, useRef } from "react";
import "./style2.css";

const CrazyImg3DSlider = () => {
  const containerRef = useRef(null);
  const tX = useRef(0);
  const tY = useRef(10);
  const desX = useRef(0);
  const desY = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    var radius = 240; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 120; // width of images (unit: px)
    var imgHeight = 170; // height of images (unit: px)

    // Link of background music - set 'null' if you dont want to play background music
    var bgMusicURL =
      "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    var bgMusicControls = true; // Show UI music control

    /*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

    // ===================== start =======================
    // animation start after 1000 miliseconds
    setTimeout(init, 1000);

    var odrag = document.getElementById("drag-container");
    var ospin = document.getElementById("spin-container");
    var aImg = ospin.getElementsByTagName("img");
    var aVid = ospin.getElementsByTagName("video");
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    const container = containerRef.current;

    const applyTransform = (obj) => {
      obj.style.transform = `rotateX(${-tY.current}deg) rotateY(${
        tX.current
      }deg)`;
    };

    const playSpin = (isAuto) => {
      // logic quay tự động nếu cần (bỏ trống nếu không dùng)
      ospin.style.animationPlayState = isAuto ? "running" : "paused";
    };

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      var animationStr = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;

      ospin.style.animation = animationStr;
    }

    const handlePointerDown = (e) => {
      if (e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {
        return;
      }
      clearInterval(timer.current);
      let sX = e.clientX;
      let sY = e.clientY;

      const handlePointerMove = (e) => {
        const nX = e.clientX;
        const nY = e.clientY;

        desX.current = nX - sX;
        desY.current = nY - sY;

        tX.current += desX.current * 0.1;
        tY.current += desY.current * 0.1;

        applyTransform(odrag);

        sX = nX;
        sY = nY;
      };

      const handlePointerUp = () => {
        timer.current = setInterval(() => {
          desX.current *= 0.95;
          desY.current *= 0.95;
          tX.current += desX.current * 0.1;
          tY.current += desY.current * 0.1;
          applyTransform(odrag);
          playSpin(false);
          if (Math.abs(desX.current) < 0.5 && Math.abs(desY.current) < 0.5) {
            clearInterval(timer.current);
            playSpin(true);
          }
        }, 17);

        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    };

    if (container) {
      container.addEventListener("pointerdown", handlePointerDown);
    }

    //Zoom in - out khi lăn chuột
    // document.onmousewheel = function (e) {
    //   e = e || window.event;
    //   var d = e.wheelDelta / 20 || -e.detail;
    //   radius += d;
    //   init(1);
    // };

    return () => {
      if (container) {
        container.removeEventListener("pointerdown", handlePointerDown);
      }
    };
  }, []);

  return (
    <div
      id="root_container"
      ref={containerRef}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div id="drag-container">
        <div id="spin-container">
          <img src="homeimages/slider1_1.jpg" alt="image1" srcSet="" />
          <img src="homeimages/slider1_2.jpg" alt="image2" srcSet="" />
          <img src="homeimages/slider1_3.jpg" alt="image3" srcSet="" />
          <img src="homeimages/slider1_4.jpg" alt="image4" srcSet="" />
          <img src="homeimages/slider1_5.jpg" alt="image5" srcSet="" />

          {/* <!-- Example image with link --> */}
          {/* <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
        <img
          src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""/>
      </a>  */}

          {/* <!-- Example add video  --> */}
          {/* <video controls autoplay="autoplay" loop>
        <source
          src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761"
          type="video/mp4">
      </video>  */}

          <p className="text-2xl text-[var(--text-color-third)] font-bold">
            Khoa Tran Van
          </p>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default CrazyImg3DSlider;
