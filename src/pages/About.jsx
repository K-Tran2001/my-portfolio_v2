import React, { useEffect, useState } from "react";
import bangkeo from "../assets/bang_keo.png";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import AutoSlider from "../components/AutoSlider/AutoSlider";
const About = () => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative  min-h-[calc(100vh-80px)]  ">
      <div className="flex justify-center items-center w-full min-h-48  px-8 py-8 md:px-32 md:py-8 bg-[url('https://t4.ftcdn.net/jpg/02/00/68/69/360_F_200686969_GJ7zbz2qaNIE4dyHSbZkQXvNPzRuwlr3.jpg')] bg-cover bg-center">
        <h4 className="text-center  text-white text-[3em]">
          EVERY PIXEL IS A STEP CLOSER TO THE DREAM
        </h4>
      </div>
      <div className="px-8 py-4 md:px-32 md:py-8 mt-8 ">
        <div className=" flex grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex-1 col-span-1 md:col-span-2 py-8">
            <div>
              <div className="flex justify-start items-center gap-4 ">
                <img
                  src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530415/q4taatqkde8xdbphtrga.png"
                  alt=""
                  srcset=""
                  className="w-12 h-12"
                />
                <div>
                  <h2 className="text-[var(--text-color-third)] font-bold">
                    @ Khoa Tran Van
                  </h2>
                  <h2 className="italic text-gray-500 font-medium">
                    FullStack Dev
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-12 mx-8 p-4 animate-rote bg-white">
              <div className="font-bold">-ABOUT ME-</div>
              <h3 className="md:pr-16 pt-4 ">
                I am a passionate and enthusiastic individual in the field of
                information technology. With diverse experience and knowledge in
                programming, data analysis, and system design, I am constantly
                seeking opportunities to create innovative solutions and deliver
                tangible value to my work and projects.
              </h3>
            </div>
          </div>
          <div className="p-8 shadow-lg relative bg-white">
            <img
              src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg"
              alt=""
              srcset=""
              style={{ objectFit: "cover" }}
              className=" w-auto md:w-[300px] "
            />
            <motion.div
              variants={fadeIn("down", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className=" w-20 h-20 absolute -top-5 -left-10  "
            >
              <img
                src={bangkeo}
                alt=""
                srcset=""
                style={{ objectFit: "cover" }}
                className="-rotate-45"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className=" w-20 h-20 absolute -right-10 -bottom-10 "
            >
              <img
                src={bangkeo}
                alt=""
                srcset=""
                style={{ objectFit: "cover" }}
                className=""
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-16 md:px-8">
          <h3 className="font-bold">-EDUCATION-</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-16 mt-4 ">
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="bg-gradient-to-br from-red-500 to-blue-500 text-white p-8 rounded-2xl shadow-lg ">
                <div className="font-bold pb-8">
                  An Giang University - Vietnam National University, Ho Chi Minh
                  City
                </div>
                <div className="text-end">2019-2023</div>
                <div>
                  <div>
                    - Well-trained in building and managing modern websites,
                    organizing and storing data.
                  </div>
                  <div>
                    - Mastering data structures and algorithms to apply them in
                    solving real-world problems.
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <div className="bg-white p-8 rounded-2xl">
                <div>
                  <h3 className="font-bold">Progress</h3>
                  <div>
                    - Ranked among the top of the class with excellent academic
                    performance (GPA: 3.68), achieving perfect scores in
                    programming and OOP courses.
                  </div>
                  - Consistently received merit-based scholarships from the
                  university and the Doan Toi Scholarship for several
                  consecutive years.
                </div>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-16 mt-4">
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="order-2 md:order-1"
            >
              <div className="bg-white p-8 rounded-2xl">
                <div>
                  <h3 className="font-bold">Progress</h3>
                  <div>
                    The website helps promote products and attract more
                    customers, increasing awareness of the company's products
                    and services. It offers all the features and functionalities
                    of a complete e-commerce site.
                  </div>
                  Technologies Used:
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="bg-gradient-to-tl from-red-500 to-blue-500 text-white  p-8 rounded-2xl shadow-lg ">
                <div className="font-bold pb-8">TPONE COMPANY LIMITED</div>
                <div className="text-end">02/2023 - 04/2023</div>
                <div>
                  <div>
                    Topic: Building a Pharmaceutical Sales Website for Clinics
                    The website was completed ahead of schedule and met all the
                    functionalities required for a fully functional e-commerce
                    platform.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-16 md:px-8">
          <h3 className="font-bold">-WORK-</h3>
          <div className="mt-8">
            <div className="p-4 px-8 bg-gradient-to-r to-orange-400 from-purple-500  text-white flex justify-between items-center rounded-l-2xl rounded-tr-2xl">
              <h3 className="font-bold text-2xl">Phoenix Company</h3>
              <h3 className="cursor-pointer" onClick={() => setExpand(!expand)}>
                {!expand ? <FaAngleDown size={24} /> : <FaAngleUp size={24} />}
              </h3>
            </div>
            {expand && (
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className=""
              >
                <div className=" flex gap-8">
                  <h3 className="w-[200px] pl-8 md:block hidden text-[var(--first-color)] text-sm py-4 ">
                    07/2023 - now
                  </h3>
                  <div className="bg-white p-4  flex flex-1 flex gap-2 justify-between rounded-b-2xl shadow-lg text-sm">
                    <div>
                      <h3 className="font-bold">Chuyên các dự án:</h3>
                      <div className="grid grid-cols-2">
                        <h3>- Web Booking</h3>
                        <h3>- Landing page</h3>
                        <h3>- E-commerce</h3>
                        <h3>- Web quản lý - giám sát</h3>
                        <h3>- App đặt xe</h3>
                        <h3>- Thiết kế UX/UI</h3>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">Đảm nhận vai trò:</h3>
                      <h3 className="italic text-[var(--text-color-third)]">
                        FullStack Dev - Mobile Dev
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <AutoSlider />
    </div>
  );
};

export default About;
