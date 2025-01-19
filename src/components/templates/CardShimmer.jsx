import React from "react";
import "./Shimmer.css";

const CardShimmer = () => {
  return (
    <div className="min-w-64 h-96 bg-gray-300 dark:bg-neutral-700 rounded-lg flex flex-col animate-pulse">
      
      <div className="w-full h-2/3 bg-gray-400 dark:bg-gray-600 rounded-t-lg"></div>

      <div className="flex flex-col p-4 space-y-4">
        <div className="w-3/4 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default CardShimmer;
