import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdClose, MdExitToApp } from "react-icons/md";
import ThemeBtn from "../ThemeBtn";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const TopNav = ({ navExit, setNavExit }) => {
  const [movieSearchQuery, setMovieSearchQuery] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [setsearchResult, setSetsearchResult] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${movieSearchQuery}`)
      console.log(data.results);
      setSetsearchResult(data.results)
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  useEffect(() => {
    getSearches();
  }, [movieSearchQuery])


  const movieExit = () => {
    setSearchFlag(!searchFlag);
    setMovieSearchQuery("");
  };

  const search_handle = () => {
    setSearchFlag(!searchFlag);
    setNavExit(true);
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 w-full flex justify-between bg-white dark:bg-neutral-800 items-center py-4 px-4 border-b dark:border-zinc-700 border-zinc-400 z-50 duration-700`}
    >
      <div
        className={`duration-700 ${searchFlag ? "w-[10%]" : "w-[65%]"
          } md:w-[22%] overflow-x-hidden`}
      >
        {/* Logo part */}
        <div className="flex gap-4">
          <CiMenuBurger
            onClick={() => setNavExit(!navExit)}
            className={`dark:text-white/80 text-black/90 inline-block text-xl mt-2 font-bold hover:font-black`}
          />
          <div className={`logo items-center flex`}>
            <img
              src="https://em-content.zobj.net/source/apple/391/popcorn_1f37f.png"
              alt="Popcorn"
              className={`w-9 mr-2 ${searchFlag ? "-ml-4" : ""} duration-700`}
            />
            <h1 className="text-2xl font-sans font-black text-black/95 dark:text-white/95">
              <span className="text-red-600">M</span>ovie
              <span className="text-red-600 ml-1.5">P</span>rix{" "}
            </h1>
          </div>
        </div>
      </div>

      {/* Search and theme btn  middel navbr*/}
      <div
        className={`${searchFlag ? "w-[87%]" : "w-[30%]"
          } md:w-[78%] md:px-10 flex items-start md:justify-center justify-end gap-4 md:gap-16 lg:gap-24 duration-700`}
      >
        {/* Search part */}
        <div
          className={`border-gray-300 ${searchFlag ? "w-[90%]" : "w-10"
            }  md:w-1/2 relative overflow-hidden duration-700`}
        >
          <FaSearch
            className={`h-9 w-9 md:w-12 text-black/80 dark:text-white text-2xl md:text-3xl bg-gray-200 dark:bg-gray-700 p-2 absolute md:top-[1px] left-[1px] ${searchFlag ? "rounded-l-full hidden" : "rounded-full inline-block"
              } md:pointer-events-none`}
            onClick={() => search_handle()}
          />

          {
            searchFlag && <MdExitToApp
              className={`h-9 w-9 md:w-12 text-red-600 text-2xl md:text-3xl bg-slate-200 dark:bg-neutral-700 p-2 absolute top-[1px] left-[1px] rounded-l-full ${searchFlag ? "inline-block" : "hidden"}`}
              onClick={() => movieExit()}
            />
          }

          <input
            value={movieSearchQuery}
            onChange={(e) => setMovieSearchQuery(e.target.value)}
            type="text"
            className={`px-10 md:px-16 w-full ${searchFlag ? "border" : ""
              } bg-transparent md:border border-gray-300 rounded-full py-1.5 focus:outline-none focus:border-red-600 text-base text-black/80 dark:text-white/80`}
            placeholder="Search for movies..."
          />

          {
            movieSearchQuery.length > 0 &&
            <MdClose
              className={`text-black/80 dark:text-white text-xl absolute top-2.5 right-4 bg-transparent`}
              onClick={() => setMovieSearchQuery("")}
            />
          }
        </div>

        {/* Light theme */}
        <ThemeBtn />

        {/* Search Query Result */}
        {
          movieSearchQuery.length > 0 &&
          <div
            className={`bg-zinc-50 dark:bg-zinc-800 text-black/80 dark:text-white/80 max-h-[58vh] w-[80%] md:w-[50%] rounded-md shadow-lg absolute top-20 left-1/2 transform -translate-x-1/2 border dark:border-zinc-700 border-zinc-400 md:hover:overflow-y-auto md:overflow-hidden overflow-x-hidden overflow-y-auto duration-300
            ${movieSearchQuery.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {/* whitespace-nowrap */}
            {
              setsearchResult.map((search, i) => (
                <Link key={i} className="w-full hover:rounded p-5 duration-300 hover:bg-red-600 flex gap-4 border-b dark:border-zinc-600 border-zinc-400 text-red-600 hover:text-white">
                  <div className="rounded-lg drop-shadow-lg overflow-hidden w-[20%] h-[20%] bg-transparent">
                    <img className="w-full object-cover" src={search.poster_path || search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.poster_path || search.backdrop_path || search.profile_path}` : "https://em-content.zobj.net/source/apple/391/popcorn_1f37f.png"} alt="" />
                  </div>
                  <div className="flex flex-col w-[80%]">
                    <h2 className="text-xl font-bold">{search.title || search.original_title || search.name || search.original_name}</h2>
                    <div className="flex flex-col space-y-1">
                      <div className="font-semibold text-base text-black/80 dark:text-white/80 mr-5">{search.media_type}</div>
                      <div className="font-semibold text-sm text-black/80 dark:text-white/80">{search.first_air_date || search.release_date || search.known_for_department}</div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        }


      </div>
    </div>
  );
};

export default TopNav;
