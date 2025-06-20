import React, { useEffect, useState } from "react";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
import { useTranslate } from "../hooks/useTranslate";
const Contact = () => {
  const { t, changeLanguage, lang } = useTranslate();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onSubmit = () => {
    console.log(data);

    if (
      data?.name?.length == 0 ||
      data?.email?.length == 0 ||
      data?.message?.length == 0
    ) {
      alert("Nhập thiếu thông tin!!!");
    }
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <section className=" py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-emerald-200/60 black to-orange-500/60 dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white/[0.9]">
          {t("get_in_touch")}
        </h2>
        <p className="dark:text-white/[0.6] max-w-96 text-center m-auto">
          {t("feel_free")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col justify-center items-center h-full bg-gradient-to-br to-orange-400 from-purple-600 text-white  transition-colors duration-500 text-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <div className="">
            <h3 className="text-2xl font-bold mb-6 text-center w-full">
              {t("find_me")} ↲
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-center">
                  Email:{" "}
                  <a
                    href="mailto:tranvankhoa.ag.01@gmail.com"
                    className="hover:underline"
                  >
                    tranvankhoa.ag.01@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-center  w-full">
                  {t("tel")}:{" "}
                  <a href="tel:0367855407" className="hover:underline">
                    0367855407
                  </a>
                </span>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl animate-ping"></div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="space-y-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <input
                type="text"
                placeholder={t("name")}
                value={data?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
            </div>

            <textarea
              rows="6"
              placeholder={t("message")}
              value={data?.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              onClick={onSubmit}
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2  transition-all dark:border-dark-mode"
            >
              {t("send")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
