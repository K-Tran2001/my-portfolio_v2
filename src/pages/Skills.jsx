import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiChakraui,
  SiDotnet,
  SiAntdesign,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GiMagicHat } from "react-icons/gi"; // dùng cho Magnus UI
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop, SiFigma, SiSubversion } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";

import creativityImg from "../assets/images/creativity.jpg";
import collaborationImg from "../assets/images/collaboration.jpg";
import communicationImg from "../assets/images/communication.jpg";
import time_managementImg from "../assets/images/time_management.jpg";
import { fadeIn } from "../components/framerMotion/variants";

const Skills = () => {
  const listTool = [
    {
      id: 1,
      name: "VSCode ",
      icon: <BiLogoVisualStudio color="#007ACC" />,
    },
    {
      id: 2,
      name: "PhotoShop",
      icon: <SiAdobephotoshop color="#31A8FF" />,
    },
    {
      id: 3,
      name: "Figma",
      icon: <SiFigma color="#F24E1E" />,
    },
    {
      id: 4,
      name: "Github",
      icon: <FaGithub color="#181717" />,
    },
    {
      id: 5,
      name: "SVN",
      icon: <SiSubversion color="#809CC9" />,
    },
  ];

  const listLibrary_Tech = [
    {
      id: 1,
      name: "React JS",
      icon: <FaReact color="#61DBFB" />,
    },
    {
      id: 2,
      name: "React Native",
      icon: <TbBrandReactNative color="#61DBFB" />,
    },
    {
      id: 3,
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      id: 4,
      name: "Node.js",
      icon: <FaNodeJs color="#3C873A" />,
    },
    {
      id: 5,
      name: ".NET",
      icon: <SiDotnet color="#512BD4" />,
    },
    {
      id: 6,
      name: "SQL",
      icon: <FaDatabase />,
    },
    {
      id: 7,
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" />,
    },
    {
      id: 8,
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#38BDF8" />,
    },
    {
      id: 9,
      name: "Chakra UI",
      icon: <SiChakraui color="#319795" />,
    },
    {
      id: 10,
      name: "Magnus UI",
      icon: <GiMagicHat color="#AA00FF" />, // dùng biểu tượng "ma thuật" vì Magnus không có icon riêng
    },
    {
      id: 11,
      name: "Ant Design",
      icon: <SiAntdesign color="#0170FE" />,
    },
  ];
  const softSkills = [
    {
      title: "Creativity",
      description: "Bringing fresh, user-first ideas",
      image: creativityImg,
    },
    {
      title: "Collaboration",
      description: "Team projects, feedback loops",
      image: collaborationImg,
    },
    {
      title: "Communication",
      description: "Clear in writing and design explanation",
      image: communicationImg,
    },
    {
      title: "Time Management",
      description: "Meeting deadlines and organizing sprints",
      image: time_managementImg,
    },
  ];
  const hardSkills = [
    {
      title: "UI/UX DESIGN",
      description: "Wireframing, prototyping, usability testing.",
    },
    {
      title: "DESIGN TOOLS",
      description: "Figma, Photoshop.",
    },
    {
      title: "PROTOTYPING",
      description: "Framer, Excalidraw, interactive flows.",
    },
    {
      title: "RESPONSIVE DESIGN",
      description: "Designing for desktop, mobile, tablet.",
    },
    {
      title: "VISUAL DESIGN",
      description: "Color theory, typography, layout.",
    },
    {
      title: "WEB BASICS",
      description: "Familiar with HTML, CSS and JAVASCRIPT.",
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative  min-h-[calc(100vh-80px)]  bg-gray-100 ">
      <div className="h-[calc(100vh-350px)] flex items-center justify-center z-30">
        <div className="py-8 flex flex-col justify-center items-center">
          <div class=" bg-[url('https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg')] bg-cover bg-center text-transparent bg-clip-text ">
            <div className="flex items-center">
              <div class="text-black   -rotate-90 text-orange-500 text-[3em] md:text-[7em]  font-bold flex items-center justify-center leading-none">
                MY
              </div>

              <div className=" leading-none text-[5em] md:text-[12em] font-bold ">
                {" "}
                SKILLS
              </div>
            </div>
          </div>
          <h3>"Behind every pixel, there's a purpose."</h3>
        </div>
      </div>
      <div className=" p-8 px-8 md:px-32   mt-8 ">
        <h2 className="font-bold text-center text-3xl">Tools and Platforms</h2>
        <h2 className="text-center text-sm text-gray-500 mb-10">
          Here are the tools and platforms I regularly use to bring ideas to
          life - form wireframes to polished UI designs
        </h2>
        <div className="flex gap-2 flex-wrap justify-center ">
          {listTool.map((tool) => (
            <div
              className="bg-white p-4 px-8 flex gap-4 items-center  rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-600 hover:text-white item__tech"
              key={tool.id}
            >
              <div className="item__tech__icon">{tool.icon}</div>
              <h1>{tool.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-8 px-8 md:px-32   mt-8">
        <h2 className="font-bold text-center text-3xl">Libraries and Tech</h2>
        <h2 className="text-center text-sm text-gray-500 mb-10">
          Here are the tools and platforms I regularly use to bring ideas to
          life - form wireframes to polished UI designs
        </h2>
        <div className="flex gap-2 flex-wrap justify-center ">
          {listLibrary_Tech.map((tool) => (
            <div
              className="bg-white p-4 px-8 flex gap-4 items-center  rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-600 hover:text-white item__tech"
              key={tool.id}
            >
              <div className="item__tech__icon">{tool.icon}</div>
              <h1 className="">{tool.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className=" p-8 px-8 md:px-32   mt-8">
          <h2 className="font-bold text-center text-3xl">
            What I bring to the table?
          </h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            My personal traits
          </p>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition duration-300"
                >
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 pb-4">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className=" p-8 px-8 md:px-32  mt-8">
          <h2 className="font-bold text-center text-3xl">Hard skills</h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            Technical abilities
          </p>
          <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hardSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-cyan-500 pl-4 py-2"
                >
                  <h3 className="font-semibold uppercase text-gray-800 text-sm mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
