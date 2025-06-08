import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./framerMotion/variants";

const SingleProject_2 = ({ name, type, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col `}
    >
      <div
        class={`flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-gray-100  rounded-3xl shadow-md max-w-6xl mx-auto ${
          align == "left"
            ? "-rotate-[5deg] transition-transform duration-300"
            : "rotate-[5deg] transition-transform duration-300"
        }`}
      >
        <div
          class={`flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0`}
        >
          <img
            src={image}
            alt="Project Preview"
            class="w-full max-h-96 rounded-t-3xl md:rounded-l-3xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div class={`w-full md:w-1/2 md:pl-12 text-left p-8 space-y-4`}>
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
            {type}
          </div>
          <h3 class="text-xl font-semibold text-blue-600 mb-2">{name}</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            explicabo aut, quae aliquam obcaecati vitae in, nemo saepe
            consequuntur omnis hic enim, quod ab harum nostrum repudiandae est
            non eligendi?
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              class="text-center border border-blue-400 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition duration-200"
            >
              View Detail
            </a>
            <a
              href={link}
              target="blank"
              class="text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition duration-200"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject_2;
