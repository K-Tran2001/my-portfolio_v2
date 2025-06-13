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
import { PiList } from "react-icons/pi";
import Backdrop from "../components/Backdrop";
import Particle from "../components/Particle";
import Drawer from "../components/Drawer";
import { MainContext } from "../context/MainContext";

import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";

const MainPage = () => {
  const { t, changeLanguage, lang } = useTranslate();

  const context = React.useContext(MainContext);
  const { drawer, setDrawer } = context;

  const navData = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];
  const [tab, setTab] = useState("Home");

  return (
    <div className="relative">
      {/* <!-- --------------- HEADER --------------- --> */}

      {/* <Pointer /> */}
      <Particle />
      <Drawer>
        <div className=" h-[100vh-80px]   flex flex-col  items-center gap-4 py-8 dark:text-white/[0.9]">
          {navData.map((item) => (
            <a
              key={Math.random()}
              className={`${
                tab === item &&
                "bg-black text-white dark:bg-white/[0.9] dark:text-black/[0.8]"
              } p-1 px-3 hover:bg-black dark:hover:bg-white/[0.9] dark:hover:text-black/[0.8] hover:text-white rounded-full font-medium cursor-pointer`}
              onClick={() => {
                setDrawer({ ...drawer, isOpen: false });
                setTab(item);
              }}
            >
              {item}
            </a>
          ))}
          <div className="lg:hidden block   m-auto">
            <ThemeToggleButton />
          </div>
          <Select callback={(e) => changeLanguage(e)} />
        </div>
      </Drawer>
      {/* <Backdrop /> */}
      <nav
        id="header"
        className="w-full h-[80px] dark:bg-gray-900 bg-[var(--body-color)] flex itams-center px-16 justify-between sticky top-0 z-10"
      >
        <div className="relative flex gap-2 items-center">
          <p className="text-3xl font-bold dark:text-[var(--third-color)] text-[var(--text-color-third)]">
            KhoaTran
          </p>
          <span className=" text-4xl dark:text-white/[0.9]">.</span>
        </div>
        <div className="flex-1 hidden lg:block" id="myNavMenu">
          <div className="h-full flex justify-center gap-4 items-center dark:text-white/[0.9]">
            {navData.map((item) => (
              <a
                key={Math.random()}
                className={`${
                  tab === item &&
                  "bg-black text-white dark:bg-white/[0.9] dark:text-black/[0.8]"
                } p-1 px-3 hover:bg-black dark:hover:bg-white/[0.9] dark:hover:text-black/[0.8] hover:text-white rounded-full font-medium cursor-pointer`}
                onClick={() => setTab(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:block   m-auto">
          <ThemeToggleButton />
        </div>
        <div className="hidden lg:block ">
          <Select callback={(e) => changeLanguage(e)} />
        </div>
        <div
          className="block lg:hidden flex items-center dark:text-white/[0.9]"
          onClick={() =>
            setDrawer({
              ...drawer,
              isOpen: !drawer.isOpen,
              position: "rightDrawer",
            })
          }
        >
          {/* <i className="font-xl" onClick={myMenuFunction}></i> */}
          {!drawer.isOpen ? <PiList size={32} /> : <IoCloseOutline size={32} />}
        </div>
      </nav>
      {/* ----NAV MOBILE---- */}

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
      <footer className="px-16 py-8 flex flex-col justify-center items-center gap-8 bg-[var(--body-color)] dark:bg-gray-900 dark:text-white/[0.9] fotter__box">
        <div className="">
          <p className="text-xl font-medium">Khoa Tran</p>
        </div>
        <div className="">
          <ul className="flex justify-center items-center ">
            {navData.map((item) => (
              <li
                key={Math.random()}
                className="px-4 cursor-pointer text-sm md:text-lg"
                onClick={() => setTab(item)}
              >
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
        {/* <div className="bottom-footer">
          <p className="text-sm md:text-lg">
            {"Copy right"} &copy; <a href="#home">Khoa Tran</a> -{" "}
            {"All rights reserved"}
          </p>
        </div> */}
      </footer>
    </div>
  );
};

export default MainPage;
