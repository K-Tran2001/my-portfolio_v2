import React, { useEffect, useState } from "react";
import bangkeo from "../assets/bang_keo.png";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import { useTranslate } from "../hooks/useTranslate";

const About = () => {
  const { t, changeLanguage, lang } = useTranslate();
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative  min-h-[calc(100vh-80px)] bg-gradient-to-br from-emerald-200/60 black to-orange-500/60  dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className="flex justify-center items-center w-full min-h-48  px-8 py-8 md:px-32 md:py-8 bg-[url('https://t4.ftcdn.net/jpg/02/00/68/69/360_F_200686969_GJ7zbz2qaNIE4dyHSbZkQXvNPzRuwlr3.jpg')] bg-cover bg-center">
        <h4 className="text-center  text-white text-[3em] dark:text-glow-blue ">
          {t("every_pixel_is")}
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
                  srcSet=""
                  className="w-12 h-12"
                />
                <div>
                  <h2 className="text-[var(--text-color-third)] font-bold">
                    @ Khoa Tran
                  </h2>
                  <h2 className="italic text-gray-500 font-medium">
                    FullStack Dev
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-12 mx-8 p-4 animate-rote bg-white/20  dark:bg-transparent dark:text-white/[0.9]">
              <div className="font-bold">-{t("about_me")}-</div>
              <h3 className="md:pr-16 pt-4 ">{t("my_introduction_detail")}</h3>
            </div>
          </div>
          <div className="p-8 shadow-lg relative bg-white dark:hover:border-dark-mode">
            <img
              src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1735530471/qlobe4np4ja40ttfixg7.jpg"
              alt=""
              srcSet=""
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
                srcSet=""
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
                srcSet=""
                style={{ objectFit: "cover" }}
                className=""
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-16 md:px-8">
          <h3 className="font-bold dark:text-white/[0.9]">
            -{t("education")}-
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mt-4 ">
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="bg-gradient-to-br from-red-500 to-blue-500 text-white p-8 rounded-2xl shadow-lg dark:hover:border-dark-mode min-h-[300px]">
                <div className="font-bold pb-8">{t("agu")}</div>
                <div className="text-end">2019-2023</div>
                <div>
                  <div>- {t("agu_study_1")}</div>
                  <div>- {t("agu_study_2")}</div>
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
              <div className="bg-white p-8 rounded-2xl dark:hover:border-dark-mode min-h-[300px] ">
                <div>
                  <h3 className="font-bold mb-4">{t("progress")}</h3>
                  <div>- {t("edu_progress_1")}</div>
                  <div>- {t("edu_progress_2")}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white p-8 rounded-2xl dark:hover:border-dark-mode min-h-[300px]">
                <div>
                  <h3 className="font-bold mb-4">{t("progress")}</h3>
                  <div>{t("intern_work_1")}</div>
                  <div>{t("tech_usage")}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-gradient-to-tl from-red-500 to-blue-500 text-white  p-8 rounded-2xl shadow-lg dark:hover:border-dark-mode min-h-[300px]">
                <div className="font-bold pb-8">{t("tp_one")}</div>
                <div className="text-end">02/2023 - 04/2023</div>
                <div>
                  <div>{t("tp_one_work_1")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-16 md:px-8">
          <h3 className="font-bold dark:text-white/[0.9]">-{t("work")}-</h3>
          <div className="mt-8">
            <div className="p-4 px-8 bg-gradient-to-r to-orange-400 from-purple-500  text-white flex justify-between items-center rounded-t-2xl lg:rounded-l-2xl   dark:hover:border-dark-mode">
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
                <div className=" flex gap-8 ">
                  <h3 className="w-[150px] pl-8 lg:block hidden text-[var(--first-color)] text-sm py-4 ">
                    July 2023 - now
                  </h3>
                  <div className="bg-white p-4  flex flex-1 flex gap-2 justify-between rounded-b-2xl shadow-lg text-sm dark:hover:border-dark-mode">
                    <div>
                      <h3 className="font-bold mb-4">
                        {t("specializing_in")}:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <h3>- Web booking</h3>
                        <h3>- Landing page</h3>
                        <h3>- E-commerce</h3>
                        <h3>- {t("web_management_monitoring")}</h3>
                        <h3>- {t("car_booking_app")}</h3>
                        <h3>- {t("ui_ux_design")}</h3>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">{t("role")}:</h3>
                      <h3 className="italic text-[var(--text-color-third)]">
                        FullStack Dev - Mobile Dev
                      </h3>
                      <h3 className="pl-8 block lg:hidden text-gray-400  text-sm  text-right">
                        July 2023 - now
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* <AutoSlider /> */}
    </div>
  );
};

export default About;
