import React, { useEffect } from "react";
import { FaBagShopping, FaChevronRight } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { SiOpenbadges } from "react-icons/si";
import SingleProject from "../components/SingleProject";
import SingleProject_2 from "../components/SingleProject_2";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
import SingleProject_v3 from "../components/SingleProject_v3";
import SliderProject_Card from "../components/SliderProject_Card/SliderProject_Card";
import SingleProject_v4 from "../components/SingleProject_v4";

import ProjectView from "../components/ProjectView";
import { MainContext } from "../context/MainContext";
import VariantModal from "../components/VariantModal";

const Projects = () => {
  const context = React.useContext(MainContext);
  const { languagePage } = context;
  const listAchievementEn = [
    {
      title: "Completed",
      number: 10,
      description: "Finished Projects",
      icon: <FaBagShopping size={32} />,
    },
    {
      title: "Clients",
      number: 25,
      description: "Happy Clients",
      icon: <FiUsers size={32} />,
    },
    {
      title: "Experience",
      number: 2,
      description: "Years in the field",
      icon: <SiOpenbadges size={32} />,
    },
  ];
  const listAchievementVi = [
    {
      title: "Hoàn thành",
      number: 10,
      description: "Dự án đã thực hiện",
      icon: <FaBagShopping size={32} />,
    },
    {
      title: "Khách hàng",
      number: 25,
      description: "Khách hàng hài lòng",
      icon: <FiUsers size={32} />,
    },
    {
      title: "Kinh nghiệm",
      number: 2,
      description: "Năm hoạt động trong ngành",
      icon: <SiOpenbadges size={32} />,
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-br from-emerald-200/60 black to-orange-500/60  dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className="py-8 pt-4 px-4 px-8 lg:px-48 ">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="space-y-4 lg:space-y-0 lg:flex    justify-between items-center ">
            {(languagePage === "en"
              ? listAchievementEn
              : listAchievementVi
            ).map((item) => (
              <div
                className=" p-16 flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg bg-white hover:rotate-[2deg] hover:bg-gradient-to-b to-orange-300 from-purple-600 hover:text-white  transition hover:scale-110 lg:hover:rotate-[5deg] duration-300 dark:border-dark-mode"
                key={Math.random()}
              >
                {item.icon}

                <h3 className="font-medium text-xl">{item.title}</h3>
                <h1 className="text-center  text-sm">
                  <Counter target={item.number} duration={1000} />
                  {item.description}
                </h1>
              </div>
            ))}
          </div>
        </motion.div>
        {/* <div className="flex flex-col gap-20  mx-auto mt-12">
          {projects.map((project, index) => {
            return (
              <SingleProject_2
                key={index}
                name={project.name}
                link={project.link}
                type={project.type}
                year={project.year}
                align={project.align}
                image={project.image}
                description={project.description}
                short_description={project.short_description}
                long_description={project.long_description}
              />
            );
          })}
          
        </div> */}
      </div>

      {/* <div className="">
        {projects.map((project, index) => {
          return (
            <SingleProject_v4
              name={project.name}
              link={project.link}
              type={project.type}
              year={project.year}
              align={project.align}
              image={project.image}
              description={project.description}
              short_description={project.short_description}
              long_description={project.long_description}
              onNext={() => {
                setActiveIndex(activeIndex + 1);
              }}
              onPre={() => {
                setActiveIndex(activeIndex - 1);
              }}
            />
          );
        })}
      </div> */}

      <ProjectView />
    </div>
  );
};

export default Projects;
