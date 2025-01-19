import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ViewMoreCard = ({ onClick }) => {
  return (
    <div
        className="flex min-w-60 h-96 hover:bg-gradient-to-tl from-red-600 to-white/50 dark:from-red-800 dark:to-neutral-900 border border-red-600 rounded-lg flex-col justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 hover:shadow-2xl group"
        onClick={onClick}
        >
        <button className="p-5 bg-red-600 rounded-full transition-transform duration-300 ease-in-out scale-100 group-hover:scale-150 group-hover:bg-transparent">
            <FaArrowAltCircleRight className="text-3xl text-white duration-300" />
        </button>

        <h2 className=" mt-10 text-xl font-bold text-gray-800 dark:text-white">
            View More
        </h2>
    </div>
  );
};

export default ViewMoreCard;
