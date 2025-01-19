import React, { useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FaFireAlt } from "react-icons/fa";
import { IoCall, IoInformationCircle } from "react-icons/io5";
import { MdExitToApp, MdGroups } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const SideNav = () => {

  return (
    <>
      {/* Categories */}
      <div className="text-base text-zinc-500 mb-5 pt-5">
        <h2 className="text-xl whitespace-nowrap font-sans font-bold text-black/80 dark:text-white/80 mb-3">
          New Feeds
        </h2>
        <nav className="h-full">
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <FaFireAlt className="text-xl" /> Trending
          </Link>
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <BsStars className="text-xl" /> Popular
          </Link>
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <BiSolidMoviePlay className="text-xl" /> Movies
          </Link>
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <PiTelevisionSimpleFill className="text-xl" /> TV Shows
          </Link>
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <MdGroups className="text-xl" /> People
          </Link>
        </nav>
      </div>

      {/* About us */}
      <div className="text-base text-zinc-500 max-h-1/2 mb-5">
        <h2 className="text-xl whitespace-nowrap font-sans font-bold text-black/80 dark:text-white/80 mb-3">
          Website Information
        </h2>
        <nav className="h-full">
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <IoInformationCircle className="text-xl" /> About
          </Link>
          <Link className="w-full whitespace-nowrap rounded-lg p-5 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2">
            <IoCall className="text-xl" /> Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
