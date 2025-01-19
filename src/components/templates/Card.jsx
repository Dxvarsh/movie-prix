import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="group min-w-60 bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Poster */}
      <div className="relative">
        <img
          className="w-full h-72 object-fit"
          src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`}
          alt={item.title || item.name}
        />
        {/* Media Type */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
          {item.media_type ? item.media_type.toUpperCase() : "N/A"}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white truncate">
          {item.title || item.name || "Unknown Title"}
        </h3>

        {/* Release Date */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {item.release_date || item.first_air_date || "Release Date Unknown"}
        </p>

        {/* Overview */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 truncate">
          {item.overview ? item.overview.slice(0, 100) + "..." : "No Description"}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex justify-end items-center">
          <Link
            // to={`/details/${item.id}`}
            className="bg-red-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;