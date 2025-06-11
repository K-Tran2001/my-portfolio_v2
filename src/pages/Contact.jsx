import React from "react";
import { fadeIn } from "../components/framerMotion/variants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section class=" py-16 px-6 sm:px-12 lg:px-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Get in touch</h2>
        <p>
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col justify-center items-center h-full bg-gradient-to-br to-orange-400 from-purple-600 text-white  transition-colors duration-500 text-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <div class="">
            <h3 class="text-2xl font-bold mb-6 text-center w-full">
              Find Me ↲
            </h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <span className="text-center">
                  Email:{" "}
                  <a
                    href="mailto:tranvankhoa.ag.01@gmail.com"
                    class="hover:underline"
                  >
                    tranvankhoa.ag.01@gmail.com
                  </a>
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span className="text-center  w-full">
                  Tel:{" "}
                  <a href="tel:0367855407" class="hover:underline">
                    0367855407
                  </a>
                </span>
              </div>
            </div>
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl animate-ping"></div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <form class="space-y-6">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Message"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              class="bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition-all"
            >
              Send
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
