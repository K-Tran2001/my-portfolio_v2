import React, { useEffect, useState } from "react";
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

import { MainContext } from "../context/MainContext";
import Navbar from "../components/Navbar";
import { Particle } from "../components";

const MainPage = () => {
  const context = React.useContext(MainContext);
  const { tab, setTab, navData } = context;

  function DelayedComponent({ delay = 1000, children }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
  }

  return (
    <div className="relative">
      {/* <!-- --------------- HEADER --------------- --> */}

      <Pointer />
      {/* <Backdrop /> */}
      {/* <Particle /> */}
      <Navbar />

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
                className="px-2 md:px-4 cursor-pointer text-sm md:text-lg"
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
