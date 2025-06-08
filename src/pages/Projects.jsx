import React, { useEffect } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { SiOpenbadges } from "react-icons/si";
import SingleProject from "../components/SingleProject";
import SingleProject_2 from "../components/SingleProject_2";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
const Projects = () => {
  const listAchievement = [
    {
      title: "Completed",
      description: "5+ Finished Projects",
      icon: <FaBagShopping size={32} />,
    },
    {
      title: "Clients",
      description: "25+ Happy Clients",
      icon: <FiUsers size={32} />,
    },
    {
      title: "Experience",
      description: "1.5+ Years in the field",
      icon: <SiOpenbadges size={32} />,
    },
  ];

  const listProject = [
    {
      title: "Squid Game Loaders",
      description:
        "Creative CSS loaders inspired by Squid Game visuals. Used to enhance website loading experiences.",
      tech: ["HTML", "CSS", "Animations"],
      imageUrl: "https://via.placeholder.com/300x200?text=Squid+Game+Loaders",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather app using OpenWeatherMap API. Shows current weather and 5-day forecast.",
      tech: ["React", "Tailwind", "API"],
      imageUrl: "https://via.placeholder.com/300x200?text=Weather+App",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and contact form.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://via.placeholder.com/300x200?text=Portfolio+Site",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard to manage products, orders, and users. Includes charts and filtering.",
      tech: ["React", "Chart.js", "Firebase"],
      imageUrl: "https://via.placeholder.com/300x200?text=E-Commerce+Dashboard",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app with authentication and message storage using Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
      imageUrl: "https://via.placeholder.com/300x200?text=Chat+App",
    },
    {
      title: "Blog CMS",
      description:
        "Content management system for creating and publishing blog posts with markdown support.",
      tech: ["Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/300x200?text=Blog+CMS",
    },
  ];

  const projects = [
    {
      name: "Mina House",
      type: "Web App",
      year: "Mar2022",
      align: "right",
      image:
        "https://admin.minahouse.vn/uploads/PES/Image/002_Bi mat-638583990087830971.jpg",
      link: "https://minahouse.vn/",
    },
    {
      name: "Winlab",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://winlab.vn/wp-content/uploads/2023/08/perfume-shower-gel-800x800.jpg",
      link: "https://winlab.vn/",
    },
    {
      name: "BVDL CME",
      type: "Web Admin + Client + App",
      year: "Sept2022",
      align: "left",
      image:
        "https://admin.daotao.bvdl.org.vn/uploads/seminar/S-280525-0190/images/imageBanner_638841077687643547.png",
      link: "https://daotao.bvdl.org.vn/",
    },
    {
      name: "SongHuong Adv",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346182/logo_okbfgs.png",
      link: "http://songhuong.phoenixcompany.vn",
    },

    {
      name: "Pos123",
      type: "Web Admin + App",
      year: "May2024",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346048/pos123_hg8aon.jpg",
      link: "https://pos123.vn/",
    },
    {
      name: "AloGo",
      type: "App",
      year: "May2024",
      align: "left",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346326/full_logo_s94y9m.png",
      link: "http://alogo-dev.phoenixcompany.vn/",
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="py-8 mt-4 px-4 px-8 md:px-48 ">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="space-y-4 md:flex    justify-between items-center ">
            {listAchievement.map((item) => (
              <div
                className="p-16 flex flex-col gap-4 justify-center items-center rounded-lg shadow-lg hover:bg-[var(--second-color)] hover:text-white"
                key={Math.random()}
              >
                {item.icon}
                <h3 className="font-medium text-xl">{item.title}</h3>
                <h1 className="text-center text-gray-500 text-sm">
                  {item.description}
                </h1>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-col gap-20  mx-auto mt-12">
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
              />
            );
          })}
        </div>
        <h3 className="p-8 text-center ">View more (Github)</h3>
      </div>
    </div>
  );
};

export default Projects;
