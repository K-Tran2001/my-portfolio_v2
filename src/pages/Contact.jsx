import React, { useEffect } from "react";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
const Contact = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <section className=" py-16 px-6 sm:px-12 lg:px-24 dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white/[0.9]">
          Get in touch
        </h2>
        <p className="dark:text-white/[0.6]">
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
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
              Find Me ↲
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
                  Tel:{" "}
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
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition-all dark:border-dark-mode"
            >
              Send
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
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
