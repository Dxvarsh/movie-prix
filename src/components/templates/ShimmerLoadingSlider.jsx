import React from "react";
import "./Shimmer.css"; // We'll use CSS for shimmer animations.

const ShimmerLoadingSlider = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-md animate-pulse">
      {/* ShimmerLoadingSlider Slide */}
      <div className="flex h-full w-full space-x-4 overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-gray-300 dark:bg-neutral-700 relative"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            {/* Content Skeleton */}
            <div className="p-5 px-7 md:px-0 relative top-40 md:top-1/2 left-5 md:left-14 w-[90%] h-80 flex flex-col space-y-4 overflow-hidden">
              <div className="h-6 w-3/4 bg-gray-400 rounded dark:bg-gray-600"></div>
              <div className="h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-600"></div>

              {/* Metadata Skeleton */}
              <div className="mt-4 flex gap-4 items-center">
                <div className="w-16 h-6 bg-gray-400 rounded dark:bg-gray-600"></div>
                <span className="ml-3 text-gray-400 text-xl">|</span>
                <div className="w-20 h-6 bg-gray-400 rounded dark:bg-gray-600"></div>
              </div>

              <div className="mt-3 h-10 w-32 bg-red-400/60 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerLoadingSlider;
