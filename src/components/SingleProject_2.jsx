import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./framerMotion/variants";

const SingleProject_2 = ({
  name,
  type,
  year,
  align,
  image,
  link,
  description,
  short_description,
  long_description,
}) => {
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
        className={`flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-gray-100  rounded-3xl shadow-md max-w-6xl mx-auto card__project`}
      >
        <div
          className={`flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0 card__project__left rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl`}
        >
          <img
            src={image}
            alt="Project Preview"
            className="w-full max-h-96 "
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={`w-full md:w-1/2 md:pl-12 text-left p-8 space-y-4`}>
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
            {type}
          </div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{name}</h3>
          <p className="text-gray-600 mb-6 text-sm">{description}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-center border border-blue-400 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition duration-200"
            >
              View Detail
            </a>
            <a
              href={link}
              target="blank"
              className="text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition duration-200"
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
