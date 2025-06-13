import React, { useEffect } from "react";
import cvFile from "../assets/TranVanKhoa - Frontend Developer.pdf";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile; // Đường dẫn file PDF
    link.download = "TranVanKhoa - Frontend Developer.pdf"; // Tên file khi tải xuống
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative  min-h-[calc(100vh-80px)]  ">
      <div className="pt-12  px-16 md:px-32 h-[calc(100vh-80px)]">
        <div className="absolute translate-y-72 md:translate-y-16">
          <div className="italic font-semibold">i'm Van Khoa an aspiring</div>
          <div className="flex items-center gap-4 ">
            <div className="text-[2em] md:text-[5em] font-bold text-[var(--third-color)]">
              Mobile
            </div>
            <div className="text-[2em] md:text-[5em] font-bold">Developer</div>
          </div>
          <div className="flex gap-4 bg-white  pr-8 rounded-tr-3xl rounded-br-3xl ">
            <div className="text-[2em] md:text-[5em] font-bold text-[var(--text-color-third)]">
              FullStack
            </div>
            <div className="text-[2em] md:text-[5em] font-bold">Developer</div>
          </div>
        </div>
        <div className=" flex-1  flex justify-end items-center">
          <img
            src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg"
            alt=""
            srcSet=""
            style={{ objectFit: "cover" }}
            className="rounded-2xl shadow-lg w-auto md:w-[300px] "
          />
        </div>
        <div className="mt-4 cursor-pointer" onClick={handleDownloadCV}>
          <h className="p-4 text-white bg-black rounded-lg">Dowload my CV</h>
        </div>
      </div>

      <div className="w-full h-64  px-8 py-8 md:px-32 md:py-8 bg-[url('https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148452447.jpg')] bg-cover bg-center">
        <h2 className="text-center md:text-left text-2xl font-medium ">
          Getting started
        </h2>
        <h4 className="px-8 py-4 md:px-32 md:py-16 text-white">
          "As a Frontend Developer with over a year of experience, I specialize
          in crafting smooth, high-performance, and user-friendly web interfaces
          using React and modern technologies."
        </h4>
      </div>
    </div>
  );
};

export default Home;
