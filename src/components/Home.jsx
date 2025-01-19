import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import Slider from "./templates/Slider";
import Card from "./templates/Card";
import CardShimmer from "./templates/CardShimmer"; // Import Shimmer Component
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import ViewMoreCard from "./templates/ViewMoreCard";

const Home = ({ navExit, setNavExit }) => {
  document.title = "MoviePrix | Home";
  const navigate = useNavigate();
  const [trend, setTrend] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);  // Track loading state for movies
  const [loadingSeries, setLoadingSeries] = useState(true);  // Track loading state for series

  const trendingAll = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      setTrend(data.results.filter((item) => item.media_type !== "person"));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const trendingMoviesfnc = async () => {
    try {
      const { data } = await axios.get(`trending/movie/day`);
      setTrendingMovies(data.results);
      setLoadingMovies(false);  // Set loading to false when data is loaded
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const trendingSeriesfnc = async () => {
    try {
      const { data } = await axios.get(`trending/tv/day`);
      setTrendingSeries(data.results);
      setLoadingSeries(false);  // Set loading to false when data is loaded
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    trendingAll();
    trendingMoviesfnc();
    trendingSeriesfnc();
  }, []);

  return (
    <>
      <div
        className={`${navExit ? "w-0 px-0" : "md:w-[30%] px-4 w-[70%]"} duration-700 border-r dark:border-zinc-700 border-zinc-400 h-[90%] overflow-x-hidden absolute hover:overflow-y-auto overflow-y-hidden bg-white dark:bg-neutral-800 z-20`}
      >
        <SideNav />
      </div>
      <div className={`w-full duration-700 h-full px-4 pt-5`} onClick={() => setNavExit(true)}>
        <Slider slides={trend} />

        {/* Trending Movies */}
        <div className="my-4">
          <h1 className="text-2xl font-sans font-bold text-black/95 dark:text-white/95 mb-4">
            Trending Movies
          </h1>
          <div className="flex items-center pb-4 space-x-4 space-y-4 overflow-x-auto scroll-smooth">
            {loadingMovies
              ? [...Array(5)].map((_, index) => <CardShimmer key={index} />)  // Show shimmer for movies
              : trendingMovies.slice(1, 6).map((movieData) => <Card key={movieData.id} item={movieData} />)}

            {/* View More Card */}
            <ViewMoreCard />
          </div>
        </div>

        {/* Trending Series */}
        <div className="my-4">
          <h1 className="text-2xl font-sans font-bold text-black/95 dark:text-white/95 mb-4">
            Trending Series
          </h1>
          <div className="flex items-center pb-4 space-x-4 space-y-4 overflow-x-auto scroll-smooth">
            {loadingSeries
              ? [...Array(5)].map((_, index) => <CardShimmer key={index} />)  // Show shimmer for series
              : trendingSeries.slice(1, 6).map((seriesData) => <Card key={seriesData.id} item={seriesData} />)}

            {/* View More Card */}
            <ViewMoreCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
