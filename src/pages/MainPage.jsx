import React, { useState } from "react";
import { useTranslate } from "../hooks/useTranslate";
import Select from "../components/selectLang";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";
import Blog from "./Blog";
import Contact from "./Contact";
import Pointer from "../components/Pointer";

const MainPage = () => {
  const { t, changeLanguage, lang } = useTranslate();
  function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  function myMenuFunction2() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
  }
  const navData = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];
  const [tab, setTab] = useState("Home");

  return (
    <div className="">
      {/* <!-- --------------- HEADER --------------- --> */}
      <Pointer />
      <nav
        id="header"
        className="w-full h-[80px] bg-[var(--body-color)] flex itams-center px-16 justify-between sticky top-0 z-10"
      >
        <div className="relative flex gap-2 items-center">
          <p className="text-3xl font-bold text-[var(--text-color-third)]">
            Portfolio
          </p>
          <span className=" text-4xl">.</span>
        </div>
        <div className="flex-1 hidden md:block" id="myNavMenu">
          <div className="h-full flex justify-center gap-4 items-center ">
            {navData.map((item) => (
              <a
                className={`${
                  tab === item && "bg-black text-white"
                } p-1 px-3 hover:bg-black hover:text-white rounded-full font-medium cursor-pointer`}
                onClick={() => setTab(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <Select callback={(e) => changeLanguage(e)} />

        <div className="block md:hidden flex items-center">
          {/* <i className="font-xl" onClick={myMenuFunction}></i> */}
          |||
        </div>
      </nav>
      {/* <!-- --------------- MAIN --------------- --> */}
      <div className="">
        {tab === "Home" && <Home />}
        {tab === "About" && <About />}
        {tab === "Skills" && <Skills />}
        {tab === "Projects" && <Projects />}
        {tab === "Blog" && <Blog />}
        {tab === "Contact" && <Contact />}
      </div>
      {/* <!-- --------------- FOOTER --------------- --> */}
      <footer className="px-16 py-8 flex flex-col justify-center items-center gap-8 bg-[#F8F8F8]">
        <div className="">
          <p className="text-xl font-medium">Khoa Tran</p>
        </div>
        <div className="">
          <ul className="flex justify-center items-center">
            {navData.map((item) => (
              <li className="px-4 cursor-pointer" onClick={() => setTab(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="icon">
            <a
              className="icon"
              href="https://www.facebook.com/khoa.tran.155322"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={24} />
            </a>
          </div>
          <div className="icon">
            <a
              className="icon"
              href="https://github.com/K-Tran2001"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={24} />
            </a>
          </div>
          <div className="icon">
            <a
              className="icon"
              href="https://github.com/K-Tran2001"
              target="_blank"
              rel="noreferrer"
            >
              <FaDribbbleSquare size={24} />
            </a>
          </div>
          <a
            className="icon"
            href="https://github.com/K-Tran2001"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <div className="bottom-footer">
          <p>
            {"Copy right"} &copy; <a href="#home">Khoa Tran</a> -{" "}
            {"All rights reserved"}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
