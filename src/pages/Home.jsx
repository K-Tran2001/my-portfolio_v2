import React, { useEffect, useRef } from "react";
import cvFile from "../assets/TranVanKhoa - Frontend Developer.pdf";
import CrazyImg3DSlider from "../components/CrazyImg3DSlider/CrazyImg3DSlider";
import Backdrop from "../components/Backdrop";
import { AutoSlider } from "../components";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "TranVanKhoa - Frontend Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-gradient-to-tr from-emerald-200/60 via-sky-500/60 to-orange-500/60 dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className=" flex flex-col-reverse  items-center justify-center md:flex-row  md:items-start py-8 md:py-12 px-6 md:px-32 h-full gap-8">
        {/* Left content */}
        <div className="flex flex-col justify-center text-center md:text-left  h-full m-auto z-0">
          <div className="italic font-semibold dark:text-white/[0.9]">
            I'm Van Khoa - an aspiring
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2 flex-wrap">
            <div className="text-3xl md:text-6xl font-bold text-[var(--third-color)]">
              Mobile
            </div>
            <div className="text-3xl md:text-6xl font-bold dark:text-white/[0.9]">
              Developer
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-2 flex-wrap bg-white px-4 py-2 mt-2 rounded-tr-2xl rounded-br-2xl">
            <div className="text-3xl md:text-6xl font-bold text-[var(--text-color-third)]">
              FullStack
            </div>
            <div className="text-3xl md:text-6xl font-bold">Developer</div>
          </div>

          {/* Download button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg transition dark:border-dark-mode "
            >
              Download my CV
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="animate-up-down md:animate-left-right">
          <div className="flex-1 flex justify-end   -rotate-[10deg]">
            <img
              src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg"
              alt="Profile"
              className=" shadow-lg  w-[250px] h-[250px] rounded-full md:w-[360px] md:h-[480px] md:rounded-2xl dark:bg-black dark:text-white 
                   border border-transparent
                   dark:border-dark-mode"
            />
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className=" flex ">
        <div className="z-0 h-full w-full px-6 space-y-16 md:px-32 py-12 bg-[url('https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148452447.jpg')] dark:bg-[url('https://t4.ftcdn.net/jpg/05/21/95/85/360_F_521958580_kNDeJSIB0VUVqJ0n9fUwwubwHTRkn2VS.jpg')] bg-cover bg-center">
          <h2 className="text-center md:text-left text-2xl font-bold text-white dark:text-white/[0.9]">
            Getting started
          </h2>
          <h4 className="mt-4 text-white text-center md:text-left text-base md:text-lg leading-relaxed dark:text-white/[0.9]">
            "As a Frontend Developer with 2 year experience, I specialize in
            crafting smooth, high-performance, and user-friendly web interfaces
            using React and modern technologies."
          </h4>
        </div>
      </div>
      <CrazyImg3DSlider />
      {/* <AutoSlider /> */}
    </div>
  );
};

export default Home;
