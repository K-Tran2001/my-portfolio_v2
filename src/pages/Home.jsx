import React, { useEffect, useRef } from "react";
import cvFile from "../assets/TranVanKhoa - Frontend Developer.pdf";

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
    <div className="relative min-h-[calc(100vh-80px)] z-1000000">
      <div className="bg-yellow-300 flex flex-col-reverse  items-center justify-center md:flex-row  md:items-start py-8 md:py-12 px-6 md:px-32 h-full gap-8">
        {/* Left content */}
        <div className=" flex flex-col justify-center text-center md:text-left  h-full m-auto">
          <div className="italic font-semibold ">
            I'm Van Khoa - an aspiring
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2 flex-wrap">
            <div className="text-3xl md:text-6xl font-bold text-[var(--third-color)]">
              Mobile
            </div>
            <div className="text-3xl md:text-6xl font-bold">Developer</div>
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
              //onClick={handleDownloadCV}
              className="px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg transition"
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
              className=" shadow-lg  w-[250px] h-[250px] rounded-full md:w-[360px] md:h-[480px] md:rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="w-full px-6 space-y-16 md:px-32 py-12 bg-[url('https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148452447.jpg')] bg-cover bg-center">
        <h2 className="text-center md:text-left text-2xl font-bold text-white">
          Getting started
        </h2>
        <h4 className="mt-4 text-white text-center md:text-left text-base md:text-lg leading-relaxed">
          "As a Frontend Developer with 2 year experience, I specialize in
          crafting smooth, high-performance, and user-friendly web interfaces
          using React and modern technologies."
        </h4>
      </div>
    </div>
  );
};

export default Home;
