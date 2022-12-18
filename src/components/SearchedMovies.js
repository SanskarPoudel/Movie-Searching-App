import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import { BiRightArrowAlt } from "react-icons/bi";

export default function SearchedMovies() {
  const { movies, handleReadMore } = useContext(MovieContext);

  return (
    <div>
      {movies && (
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {movies.map((movie, index) => {
            return (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to="0">
                  <img
                    className=" h-60 w-full object-cover rounded-t-lg "
                    src={movie.Poster}
                    alt="movie poster"
                  />
                </Link>
                <div className="p-5">
                  <Link to="0">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {movie.Title}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Release Year : {movie.Year}
                  </p>
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(event) => handleReadMore(index)}
                  >
                    Read more
                    <BiRightArrowAlt color={"white"} size={30} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
