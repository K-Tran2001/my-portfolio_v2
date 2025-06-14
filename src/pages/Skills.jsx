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

import creativityImg from "../assets/images/creativity.jpg";
import collaborationImg from "../assets/images/collaboration.jpg";
import communicationImg from "../assets/images/communication.jpg";
import time_managementImg from "../assets/images/time_management.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../components/framerMotion/variants";
import { useTranslate } from "../hooks/useTranslate";
import { MainContext } from "../context/MainContext";

const Skills = () => {
  const { t } = useTranslate();
  const context = React.useContext(MainContext);
  const { languagePage } = context;
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
  const softSkillsEn = [
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
  const hardSkillsEn = [
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
  const softSkillsVi = [
    {
      title: "Sáng tạo",
      description: "Mang đến những ý tưởng mới, ưu tiên người dùng",
      image: creativityImg,
    },
    {
      title: "Hợp tác",
      description: "Làm việc nhóm, phản hồi và cải tiến liên tục",
      image: collaborationImg,
    },
    {
      title: "Giao tiếp",
      description: "Diễn đạt rõ ràng qua văn bản và khi giải thích thiết kế",
      image: communicationImg,
    },
    {
      title: "Quản lý thời gian",
      description: "Đáp ứng thời hạn và tổ chức các sprint hiệu quả",
      image: time_managementImg,
    },
  ];

  const hardSkillsVi = [
    {
      title: "THIẾT KẾ UI/UX",
      description: "Lên khung, tạo mẫu thử, kiểm thử tính khả dụng.",
    },
    {
      title: "CÔNG CỤ THIẾT KẾ",
      description: "Figma, Photoshop.",
    },
    {
      title: "TẠO MẪU TƯƠNG TÁC",
      description: "Framer, Excalidraw, luồng tương tác.",
    },
    {
      title: "THIẾT KẾ ĐA NỀN TẢNG",
      description: "Thiết kế cho máy tính, di động, máy tính bảng.",
    },
    {
      title: "THIẾT KẾ THỊ GIÁC",
      description: "Lý thuyết màu sắc, kiểu chữ, bố cục.",
    },
    {
      title: "KIẾN THỨC WEB CƠ BẢN",
      description: "Hiểu biết về HTML, CSS và JAVASCRIPT.",
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative  min-h-[calc(100vh-80px)]  bg-gradient-to-br from-emerald-200/60 black to-orange-500/60 dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className="h-[calc(100vh-350px)] flex items-center justify-center z-30">
        <div className="py-8 flex flex-col justify-center items-center">
          <div className=" bg-[url('https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg')] bg-cover bg-center text-transparent bg-clip-text ">
            <div className="flex items-center">
              <div className="text-black   -rotate-90 text-orange-500 text-[3em] md:text-[7em]  font-bold flex items-center justify-center leading-none">
                MY
              </div>

              <div className=" leading-none text-[5em] md:text-[12em] font-bold ">
                {" "}
                SKILLS
              </div>
            </div>
          </div>
          <h3 className="dark:text-white/[0.9]">"{t("behind_every_pixel")}"</h3>
        </div>
      </div>
      <div className=" p-8 px-8 md:px-32   mt-8 ">
        <h2 className="font-bold text-center text-3xl dark:text-white/[0.9] mb-4">
          {t("tools_and_platforms")}
        </h2>
        <h2 className="text-center text-sm text-gray-900 dark:text-white/[0.9] mb-10">
          {t("here_are_the_tools")}
        </h2>
        <div className="flex gap-2 flex-wrap justify-center ">
          {listTool.map((tool) => (
            <div
              className="bg-white p-4 px-8 flex gap-4 items-center  rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-600 hover:text-white item__tech dark:hover:border-dark-mode dark:hover:bg-white dark:hover:text-gray-800"
              key={tool.id}
            >
              <div className="item__tech__icon">{tool.icon}</div>
              <h1>{tool.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-8 px-8 md:px-32   mt-8">
        <h2 className="font-bold text-center text-3xl dark:text-white/[0.9] mb-4">
          {t("libraries_and_techologies")}
        </h2>
        <h2 className="text-center text-sm text-gray-900 dark:text-white/[0.9] mb-10">
          {t("empowered_by_a_modern")}
        </h2>
        <div className="flex gap-2 flex-wrap justify-center ">
          {listLibrary_Tech.map((tool) => (
            <div
              className="bg-white p-4 px-8 flex gap-4 items-center  rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-600 hover:text-white item__tech dark:hover:border-dark-mode dark:hover:bg-white dark:hover:text-gray-800"
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
          <h2 className="font-bold text-center text-3xl dark:text-white/[0.9] mb-4">
            {t("what_i_bring")}
          </h2>
          <p className="text-center text-sm text-gray-900 dark:text-white/[0.9] mb-10">
            {t("my_personal_traits")}
          </p>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(languagePage === "en" ? softSkillsEn : softSkillsVi).map(
                (skill, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition duration-300 dark:hover:border-dark-mode dark:hover:bg-white dark:hover:text-gray-800"
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
                      <p className="text-gray-600 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                )
              )}
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
          <h2 className="font-bold text-center text-3xl dark:text-white/[0.9] mb-4">
            {t("hard_skills")}
          </h2>
          <p className="text-center text-sm text-gray-900 dark:text-white/[0.9] mb-10">
            {t("techical")}
          </p>
          <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(languagePage === "en" ? hardSkillsEn : hardSkillsVi).map(
                (skill, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-4 border-cyan-500 pl-4 py-2 dark:hover:border-dark-mode dark:hover:bg-white dark:hover:text-gray-800"
                  >
                    <h3 className="font-semibold uppercase text-gray-800 text-sm mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
