import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import release_date_png from "../../assets/announcement.png";
import { FaCompactDisc } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShimmerLoadingSlider from "./ShimmerLoadingSlider";

const Slider = ({ slides }) => {
  if (!slides || slides.length === 0) return <ShimmerLoadingSlider /> ;

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  console.log(slides.length === currentIndex)
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding every 7 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-md">
      {/* Slides */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${slide.poster_path || slide.backdrop_path})`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            {/* Content */}
            <div className="p-5 px-7 md:px-0 relative top-40 md:top-1/2 left-5 md:left-14 w-[90%] h-80 flex items-start flex-col overflow-x-auto">
              <h2 className="text-white text-2xl md:text-4xl z-10 font-black whitespace-nowrap">
                {slide.title ||
                  slide.original_title ||
                  slide.name ||
                  slide.original_name}
              </h2>
              <p className="mt-2 text-white text-sm md:text-base">
                {slide.overview.slice(0, 150)}
                ...
                <Link className="ml-3 font-semibold underline underline-offset-5">
                  Read more
                </Link>
              </p>

              <div className="mt-4 flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <img src={release_date_png} className="w-6 h-6" />
                  <p className="text-white font-semibold">
                    {slide.first_air_date || slide.release_date || "No Information"}
                  </p>
                </div>

                <span className="ml-3 text-gray-400 text-xl">|</span>

                <div className="flex items-center gap-2">
                  <FaCompactDisc className="text-red-600 h-5 w-5" />
                  <p className="text-white font-semibold">
                    {slide.media_type.toUpperCase()}
                  </p>
                </div>
              </div>

              <button className="bg-red-600 rounded-full px-4 py-2 font-medium text-sm text-white mt-3 hover:bg-red-600/60">
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-1.5 md:left-5 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-800"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-1.5 md:right-5 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-800"
      >
        <FaChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`bg-gray-300 relative overflow-hidden h-1.5 md:h-3 duration-500 rounded-full ${index === currentIndex
                ? "w-4 md:w-10"
                : "w-1.5 md:w-3"
              }`}
            onClick={() => setCurrentIndex(index)}
          >
            {/* Progress Bar for Active Slide */}
            {index === currentIndex && (
              <div
                className="absolute top-0 left-0 h-full bg-red-600"
                style={{
                  animation: `progress-animation 5s linear`,
                  width: "100%",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes progress-animation {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
