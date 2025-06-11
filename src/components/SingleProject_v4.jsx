import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./framerMotion/variants";

const SingleProject_v4 = ({
  name,
  type,
  year,
  align,
  image,
  link,
  description,
  short_description,
  long_description,
  onNext,
  onPre,
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="min-h-[400px] flex items-center justify-center bg-transparent py-8 px-8 md:px-48 md:pl-60">
        <div className="relative  w-full bg-white rounded-[25px]  flex flex-col lg:flex-row pl-0 md:pl-6 py-8 gap-8 overflow-visible shadow-lg">
          {/* Image */}
          <div className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-[20px] relative overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 transform -translate-y-16 lg:translate-y-0 lg:-translate-x-20  mx-auto lg:mx-0 ">
            <img
              src={image}
              alt="Card Image"
              className="w-full h-full object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Content */}
          <div className="flex-1 pl-0 lg:pl-6 text-center lg:text-left ">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
              {type}
            </span>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
            <p className="text-gray-600 leading-relaxed mb-6  pr-4 md:pr-16 align-justify">
              {description}
            </p>
            <div className="flex gap-4 justify-start m-auto">
              <a className="inline-block text-orange-500 border border-orange-500 hover:border-none hover:bg-gradient-to-br from-orange-400 to-red-500 hover:text-white py-3 px-8 rounded-l-full shadow-md font-medium hover:scale-105 transition">
                View Detail
              </a>
              <a
                href={link}
                target="blank"
                className="inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-8 rounded-r-full shadow-md font-medium hover:scale-105 transition"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject_v4;
